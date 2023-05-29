const express = require("express");
const path = require("path");
const { upload } = require("../multer");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

router.post("/create-user", upload.single("file"), (req, res) => {
  const { name, email, password } = req.body;
    const userEmail=await User.findOne({email});
  if (userEmail) {
    return nextTick(new ErrorHandler("user already exists", 400));
  }

  const filename=req.file.filename;
  const fileUrl = path.join(filename);

//   const avatar=f

  const user={
    name:name,
    email:email,
    password:password,
    avatar:fileUrl,
  };
  console.log(user);
});
