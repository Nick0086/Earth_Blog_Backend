const postModel = require("../model/postModel");
const { uploadCloudinary } = require("../utils/cloudinart");
const { handleServerError } = require("../utils/handleServerError");

const Status = {
    OK: 200,
    CONFLICT: 409,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404
};


exports.createPost = async(req,res) => {
    try {
        
        console.log("body",req.body);
        console.log("flle", req.file);
        if (!req.file) {
            return res.status(Status.BAD_REQUEST).json({
                status: "Error",
                message: "No file uploaded",
            });
        }
        // Upload the file buffer to Cloudinary
        let image = await uploadCloudinary(req.file.buffer); // Assuming uploadCloudinary accepts file buffer
        req.body.Featureimage = image.url;

        const postData = await postModel.create(req.body)
        res.status(Status.OK).json({
            status: "Success",
            message: "Post has been added successfully",
            image:image,
            data: postData,
        });

    } catch (error) {
        handleServerError(Status.NOT_FOUND,res,error);
    }
}