import { useState } from "react";
import axios from "axios";


export default function UploadGuard({children, lightMode}){


    const [verified,setVerified]=useState(false);

    const [key,setKey]=useState("");

    const [error,setError]=useState("");



    const verify=async()=>{

        try{

            const res=await axios.post(
                "https://ankit-resume.onrender.com/api/verify-upload",
                {
                    key
                }
            );


            if(res.data.success){

                setVerified(true);

            }

        }

        catch(err){

            setError("Wrong Secret Key");

        }

    };




    if(!verified){

        return (

            <div
            className={`
            min-h-screen
            flex
            items-center
            justify-center
            transition-colors
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


                <div
                className={`
                p-8
                rounded-2xl
                shadow-xl
                w-96
                transition-colors
                duration-500


                ${
                  lightMode
                  ?
                  "bg-gray-100 border border-gray-200"
                  :
                  "bg-gray-800 border border-white/10"
                }

                `}
                >


                    <h2
                    className="
                    text-2xl
                    font-bold
                    mb-5
                    text-teal-400
                    "
                    >

                    Upload Access

                    </h2>




                    <input

                    type="password"

                    placeholder="Enter Secret Key"

                    value={key}

                    onChange={(e)=>setKey(e.target.value)}

                    className={`
                    w-full
                    p-3
                    rounded-xl
                    mb-4
                    outline-none
                    transition-all


                    ${
                      lightMode
                      ?
                      "bg-white border border-gray-300 text-gray-900"
                      :
                      "bg-gray-900 border border-gray-700 text-white"
                    }

                    `}

                    />




                    {
                        error &&
                        <p
                        className="
                        text-red-400
                        mb-3
                        "
                        >
                            {error}
                        </p>
                    }





                    <button

                    onClick={verify}

                    className="
                    w-full
                    bg-teal-500
                    hover:bg-teal-600
                    py-3
                    rounded-xl
                    font-bold
                    text-white
                    transition-all
                    "

                    >

                    Verify

                    </button>



                </div>


            </div>

        );

    }



    return children;


}
