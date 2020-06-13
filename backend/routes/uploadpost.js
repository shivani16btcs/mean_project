const express = require('express');
const multer = require("multer");
const Post = require("../models/uploadpost");
const router = express.Router();
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "./images");
  },
  filename: (req, file, cb) => {
    const name = file.fieldname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
   // cb(null, name + "_" + Date.now() + "_" + ext);
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
}
});


var upload = multer({ storage: Storage }).single('image'); 

router.post( "/upload", upload, async(req, res, next)=>{
try{
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      image : url + "/images/" + req.file.filename,
    });
     await post.save();
      res.status(201).json({
        message: "Post added successfully",
      });
    }
      catch(err){
        next(err);
      }
  });


module.exports = router;