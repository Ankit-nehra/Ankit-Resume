import mongoose from "mongoose";


const certificateSchema = new mongoose.Schema(

  {

    title: {

      type: String,

      required: true,

      trim: true,

    },


    issuer: {

      type: String,

      required: true,

      trim: true,

    },


    issuedDate: {

      type: String,

      required: true,

    },


    credentialId: {

      type: String,

      default: "",

    },


    skills: [

      {

        type: String,

      },

    ],


    description: {

      type: String,

      default: "",

    },


    certificateUrl: {

      type: String,

      default: "",

    },


    imageUrl: {

      type: String,

      required: true,

    },


    // Cloudinary image delete ke liye

    imagePublicId: {

      type: String,

      required: true,

    },


  },


  {

    timestamps: true,

  }


);



const Certificate = mongoose.model(
  "Certificate",
  certificateSchema
);



export default Certificate;