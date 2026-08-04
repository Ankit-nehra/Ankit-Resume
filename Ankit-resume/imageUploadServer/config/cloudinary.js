import { v2 as cloudinary } from "cloudinary";


console.log("CLOUDINARY CHECK");

console.log({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET ? "AVAILABLE" : "MISSING",
});


cloudinary.config({

  cloud_name: process.env.CLOUD_NAME,

  api_key: process.env.API_KEY,

  api_secret: process.env.API_SECRET,

});


export default cloudinary;