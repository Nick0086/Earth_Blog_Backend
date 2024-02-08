const postModel = require("../model/postModel");
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

        const postData = await postModel.create(req.body)
        res.status(Status.OK).json({
            status: "Success",
            message: "Post has been added successfully",
            data: postData,
        });


    } catch (error) {
        handleServerError(Status.NOT_FOUND,res,error);
    }
}