
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdCard,
  FaUpload,
} from "react-icons/fa";



export default function Certificates({ lightMode }) {


  const navigate = useNavigate();


  const API = "https://ankit-resume.onrender.com/api/certificates";



  const [certificates, setCertificates] = useState([]);

  const [loading, setLoading] = useState(true);






  // ==========================
  // Fetch Certificates
  // ==========================


  const getCertificates = async()=>{


    try{


      const res = await axios.get(API);



      setCertificates(
        res.data.certificates
      );



    }


    catch(err){


      console.log(err);


    }


    finally{


      setLoading(false);


    }


  };






  useEffect(()=>{


    getCertificates();


  },[]);
  
  return (


    <div


      className={`


      min-h-screen


      py-8


      transition-all


      duration-500




      ${

        lightMode

        ?

        "bg-white text-gray-900"

        :

        "bg-gray-900 text-white"

      }



      `}



    >




{/* Upload Button */}
{/* Heading Row */}

{/* Upload Button + Heading */}

<div
  className="
  max-w-7xl
  mx-auto
  px-4
  mb-12
  flex
  items-center
  justify-center
  relative
  "
>


  {/* Upload Icon */}

  <button

    onClick={() => navigate("/uploadcertificates")}

    title="Upload Certificate"

    className={`
    
    absolute
    left-4
    sm:left-6

    w-12
    h-12

    rounded-full

    flex
    items-center
    justify-center

    shadow-xl

    hover:scale-110

    transition-all
    duration-300

    bg-teal-500
    hover:bg-teal-600
    text-white

    `}

  >

    <FaUpload size={20}/>

  </button>




  {/* Heading */}

  <h1

    className="

    text-center

    text-4xl

    sm:text-5xl

    font-bold

    text-teal-400

    flex

    items-center

    gap-3

    "

  >

    <FaGraduationCap/>

    Certificates


  </h1>


</div>







      <div


        className="


        max-w-7xl


        mx-auto


        px-4


        grid


        sm:grid-cols-2


        lg:grid-cols-3


        gap-8


        "


      >







      {


        loading ?





        (



          Array
          .from({length:6})
          .map((_,index)=>(


            <div


              key={index}



              className={`



              h-[430px]


              rounded-3xl


              animate-pulse




              ${


                lightMode


                ?


                "bg-gray-200"


                :


                "bg-gray-800"


              }




              `}



            />


          ))



        )








        :







        certificates.length === 0 ?





        (



          <div



            className={`



            col-span-full


            rounded-3xl


            p-12


            text-center


            border




            ${


              lightMode


              ?


              "bg-gray-50 border-gray-200 text-gray-500"


              :


              "bg-gray-800/50 border-white/10 text-gray-400"


            }





            `}



          >



            No Certificates Available



          </div>



        )








        :







        certificates.map((cert)=>(



          <div



            key={cert._id}



            className={`



            rounded-3xl


            overflow-hidden


            shadow-2xl


            transition-all


            duration-500


            hover:scale-[1.03]



            ${



              lightMode


              ?



              "bg-white border border-gray-200"



              :



              "bg-gray-800/40 border border-white/10"



            }





            `}





          >










            {/* Image */}



            <div



              className="


              h-60


              overflow-hidden


              "



            >



              <img



                src={cert.imageUrl}



                alt={cert.title}



                className="


                w-full


                h-full


                object-cover


                transition-all


                duration-500


                hover:scale-110


                "



              />



            </div>









            {/* Content */}



            <div className="p-6">







              <h2



                className={`



                text-xl


                font-bold





                ${


                  lightMode


                  ?


                  "text-gray-900"


                  :


                  "text-white"


                }



                `}



              >



                {cert.title}



              </h2>









              <p



                className="


                mt-2


                text-teal-400


                font-semibold


                "



              >



                {cert.issuer}



              </p>








              <div



                className="


                flex


                items-center


                gap-2


                text-sm


                opacity-70


                mt-3


                "



              >



                <FaCalendarAlt/>


                {cert.issuedDate}



              </div>










              {

                cert.credentialId &&



                (



                  <div



                    className="


                    flex


                    items-center


                    gap-2


                    text-sm


                    opacity-70


                    mt-2


                    "



                  >



                    <FaIdCard/>


                    {cert.credentialId}



                  </div>



                )



              }










              {/* Skills */}



              {


                cert.skills?.length > 0 &&



                (



                  <div



                    className="


                    flex


                    flex-wrap


                    gap-2


                    mt-5


                    "



                  >





                    {


                      cert.skills.map((skill,index)=>(



                        <span



                          key={index}



                          className="


                          px-3


                          py-1


                          text-xs


                          rounded-full


                          bg-teal-500/20


                          text-teal-400


                          "



                        >



                          {skill}



                        </span>



                      ))



                    }





                  </div>



                )



              }







              {/* Description */}



              {


                cert.description &&



                (



                  <p



                    className="


                    mt-5


                    text-sm


                    opacity-80


                    line-clamp-4


                    "



                  >



                    {cert.description}



                  </p>



                )



              }










              {/* View Certificate */}





              {


                cert.certificateUrl &&



                (



                  <a



                    href={cert.certificateUrl}



                    target="_blank"



                    rel="noopener noreferrer"




                    className="



                    mt-6


                    w-full


                    py-3


                    rounded-xl


                    bg-blue-500


                    hover:bg-blue-600


                    text-white


                    flex


                    items-center


                    justify-center


                    gap-3


                    transition-all


                    duration-300


                    font-medium



                    "



                  >




                    View Certificate



                    <FaExternalLinkAlt/>




                  </a>



                )



              }









            </div>






          </div>



        ))





      }






      </div>





    </div>



  );

}
