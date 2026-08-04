import { useState } from "react";
import axios from "axios";


export default function UploadGuard({children}){


    const [verified,setVerified]=useState(false);

    const [key,setKey]=useState("");

    const [error,setError]=useState("");




    const verify=async()=>{


        try{


            const res=await axios.post(
                "http://localhost:3001/api/verify-upload",
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

            <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gray-900
            text-white
            ">


                <div className="
                bg-gray-800
                p-8
                rounded-2xl
                shadow-xl
                w-96
                ">


                    <h2 className="
                    text-2xl
                    font-bold
                    mb-5
                    text-teal-400
                    ">

                    Upload Access

                    </h2>



                    <input

                    type="password"

                    placeholder="Enter Secret Key"

                    value={key}

                    onChange={(e)=>setKey(e.target.value)}

                    className="
                    w-full
                    p-3
                    rounded-xl
                    bg-gray-900
                    border
                    border-gray-700
                    mb-4
                    "

                    />



                    {
                        error &&
                        <p className="
                        text-red-400
                        mb-3
                        ">
                            {error}
                        </p>
                    }



                    <button

                    onClick={verify}

                    className="
                    w-full
                    bg-teal-500
                    py-3
                    rounded-xl
                    font-bold
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