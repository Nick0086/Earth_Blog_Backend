const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploadCloudinary = async (fileBuffer) => {
    try {
        if (!fileBuffer) {
            console.log("File buffer not provided");
            return false;
        }

        const response = await cloudinary.uploader.upload_stream({
            resource_type: 'auto'
        }, (error, result) => {
            if (error) {
                console.log("Error in uploading file to Cloudinary", error);
                return false;
            }
            return result;
        }).end(fileBuffer);

        return response;
    } catch (error) {
        console.log("Error in uploading file to Cloudinary", error);
        return false;
    }
}


exports.deleteFromCloudinary = async (public_id) => {
    try {
        const result = await cloudinary.uploader.destroy(public_id);
        return result;
    } catch (error) {
        throw error;
    }

}