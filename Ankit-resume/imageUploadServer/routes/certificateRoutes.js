import express from "express";
import streamifier from "streamifier";

import multer from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";
import Certificate from "../models/Certificate.js";


const router = express.Router();



// ===============================
// Upload Certificate
// POST /api/certificates
// ===============================

router.post(
  "/",
  multer.single("image"),
  async (req, res) => {

    try {

      console.log("========== UPLOAD START ==========");

      console.log("FILE:", req.file);

      console.log("BODY:", req.body);


      if (!req.file) {

        return res.status(400).json({

          success:false,

          message:"Image not found"

        });

      }


      const uploadStream = cloudinary.uploader.upload_stream(

        {
          folder:"portfolio-certificates",
        },


        async(error,result)=>{


          console.log("CLOUDINARY ERROR:", error);

          console.log("CLOUDINARY RESULT:", result);



          if(error){

            return res.status(500).json({

              success:false,

              message:error.message

            });

          }



          try{


            const certificate = await Certificate.create({

              title:req.body.title,

              issuer:req.body.issuer,

              issuedDate:req.body.issuedDate,

              credentialId:req.body.credentialId,


              skills:req.body.skills
              ?
              req.body.skills.split(",").map(i=>i.trim())
              :
              [],


              description:req.body.description,

              certificateUrl:req.body.certificateUrl,


              imageUrl:result.secure_url,


              imagePublicId:result.public_id,


            });



            return res.status(201).json({

              success:true,

              certificate

            });


          }

          catch(err){

            console.log("MONGO ERROR:",err);


            return res.status(500).json({

              success:false,

              message:err.message

            });

          }


        }

      );



      streamifier
      .createReadStream(req.file.buffer)
      .pipe(uploadStream);



    }

    catch(err){

      console.log("SERVER ERROR:",err);


      res.status(500).json({

        success:false,

        message:err.message

      });


    }

  }

);





// ===============================
// Get All Certificates
// GET /api/certificates
// ===============================

router.get(
  "/",
  async(req,res)=>{


    try{


      const certificates = await Certificate
      .find()
      .sort({
        createdAt:-1,
      });



      res.status(200).json({

        success:true,

        count:certificates.length,

        certificates,

      });



    }

    catch(err){


      res.status(500).json({

        success:false,

        message:err.message,

      });


    }


  }

);






// ===============================
// Delete Certificate
// DELETE /api/certificates/:id
// ===============================

router.delete(
  "/:id",
  async(req,res)=>{


    try{


      const certificate = await Certificate
      .findById(req.params.id);



      if(!certificate){


        return res.status(404).json({

          success:false,

          message:"Certificate not found.",

        });


      }





      // Delete image from Cloudinary

      await cloudinary.uploader.destroy(
        certificate.imagePublicId
      );





      // Delete MongoDB document

      await Certificate.findByIdAndDelete(
        req.params.id
      );





      res.status(200).json({

        success:true,

        message:"Certificate deleted successfully.",

      });



    }

    catch(err){


      res.status(500).json({

        success:false,

        message:err.message,

      });


    }


  }

);





export default router;