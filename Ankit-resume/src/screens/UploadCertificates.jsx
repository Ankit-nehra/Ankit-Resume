import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaGraduationCap,
  FaTrash,
  FaUpload,
  FaImage,
  FaExternalLinkAlt,
} from "react-icons/fa";


export default function UploadCertificates({ lightMode }) {


  const API = "https://ankit-resume.onrender.com/api/certificates";


  const [loading,setLoading] = useState(false);

  const [certificates,setCertificates] = useState([]);

  const [image,setImage] = useState(null);

  const [preview,setPreview] = useState("");



  const [form,setForm] = useState({

    title:"",
    issuer:"",
    issuedDate:"",
    credentialId:"",
    skills:"",
    description:"",
    certificateUrl:"",

  });



  // ==========================
  // Fetch Certificates
  // ==========================

  const getCertificates = async()=>{

    try{

      const res = await axios.get(API);

      setCertificates(
        res.data.certificates || []
      );

    }

    catch(err){

      console.log(err);

    }

  };



  useEffect(()=>{

    getCertificates();

  },[]);





  // ==========================
  // Input Change
  // ==========================


  const handleChange=(e)=>{


    setForm({

      ...form,

      [e.target.name]:e.target.value

    });


  };





  // ==========================
  // Image Select
  // ==========================


  const handleImage=(e)=>{


    const file=e.target.files[0];


    if(!file)
      return;



    setImage(file);


    setPreview(
      URL.createObjectURL(file)
    );


  };





  // ==========================
  // Upload Certificate
  // ==========================


  const handleSubmit=async(e)=>{


    e.preventDefault();



    if(!image){

      alert("Please select certificate image");

      return;

    }



    try{


      setLoading(true);



      const formData=new FormData();



      formData.append(
        "image",
        image
      );



      Object.keys(form).forEach((key)=>{


        formData.append(
          key,
          form[key]
        );


      });





      await axios.post(
        API,
        formData
      );




      alert(
        "Certificate Uploaded Successfully"
      );





      setForm({

        title:"",
        issuer:"",
        issuedDate:"",
        credentialId:"",
        skills:"",
        description:"",
        certificateUrl:"",

      });



      setImage(null);

      setPreview("");



      getCertificates();



    }


    catch(err){


      console.log(err);

      alert(
        "Upload Failed"
      );


    }



    finally{

      setLoading(false);

    }


  };





  // ==========================
  // Delete Certificate
  // ==========================


  const handleDelete=async(id)=>{


    const confirmDelete =
    window.confirm(
      "Delete this certificate?"
    );


    if(!confirmDelete)
      return;



    try{


      await axios.delete(
        `${API}/${id}`
      );



      getCertificates();


    }


    catch(err){

      console.log(err);

    }


  };
  return (

<div
className={`
w-full
transition-all
duration-500
`}
>


{/* Heading */}

<h1

className="
text-center
text-4xl
sm:text-5xl
font-bold
text-teal-400
mb-10
flex
items-center
justify-center
gap-3
"

>

<FaGraduationCap/>

Upload Certificates

</h1>





{/* Main Container */}


<div

className={`

max-w-6xl

mx-auto

rounded-3xl

p-6

sm:p-8

shadow-2xl

backdrop-blur-xl

transition-all


${
lightMode

?

"bg-gradient-to-br from-white to-gray-100 border border-gray-200"

:

"bg-gradient-to-br from-gray-800/70 to-gray-900/60 border border-white/10"

}

`}

>




<form

onSubmit={handleSubmit}

className="
grid
md:grid-cols-2
gap-6
"

>




{/* Title */}


<input

type="text"

name="title"

placeholder="Certificate Title"

value={form.title}

onChange={handleChange}

required


className={`

rounded-xl

p-3

border

outline-none

transition


${
lightMode

?

"bg-white border-gray-300 text-gray-900 placeholder-gray-400"

:

"bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"

}

`}

/>





{/* Issuer */}


<input

type="text"

name="issuer"

placeholder="Issuer"

value={form.issuer}

onChange={handleChange}

required


className={`

rounded-xl

p-3

border

outline-none


${
lightMode

?

"bg-white border-gray-300 text-gray-900 placeholder-gray-400"

:

"bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"

}

`}

/>





{/* Issued Date */}


<input

type="text"

name="issuedDate"

placeholder="Issued Date"

value={form.issuedDate}

onChange={handleChange}

required


className={`

rounded-xl

p-3

border


${
lightMode

?

"bg-white border-gray-300 text-gray-900"

:

"bg-gray-900/50 border-gray-700 text-white"

}

`}

/>





{/* Credential ID */}


<input

type="text"

name="credentialId"

placeholder="Credential ID"

value={form.credentialId}

onChange={handleChange}


className={`

rounded-xl

p-3

border


${
lightMode

?

"bg-white border-gray-300 text-gray-900"

:

"bg-gray-900/50 border-gray-700 text-white"

}

`}

/>





{/* Skills */}


<input

type="text"

name="skills"

placeholder="React, MongoDB, Node JS"

value={form.skills}

onChange={handleChange}


className={`

md:col-span-2

rounded-xl

p-3

border


${
lightMode

?

"bg-white border-gray-300 text-gray-900"

:

"bg-gray-900/50 border-gray-700 text-white"

}

`}

/>






{/* Description */}


<textarea


rows="4"


name="description"


placeholder="Certificate description"


value={form.description}


onChange={handleChange}



className={`

md:col-span-2

rounded-xl

p-3

border

resize-none


${
lightMode

?

"bg-white border-gray-300 text-gray-900"

:

"bg-gray-900/50 border-gray-700 text-white"

}

`}


/>







{/* Certificate URL */}


<input


type="url"


name="certificateUrl"


placeholder="Certificate Verification URL"


value={form.certificateUrl}


onChange={handleChange}



className={`

md:col-span-2

rounded-xl

p-3

border


${
lightMode

?

"bg-white border-gray-300 text-gray-900"

:

"bg-gray-900/50 border-gray-700 text-white"

}

`}


/>








{/* Image Upload */}


<div className="md:col-span-2">


<label


className={`

flex

flex-col

items-center

justify-center

h-60

border-2

border-dashed

rounded-3xl

cursor-pointer

transition


hover:border-teal-500


${
lightMode

?

"bg-white border-gray-300 text-gray-600"

:

"bg-gray-900/50 border-gray-700 text-gray-300"

}


`}


>




{

preview ?


<img

src={preview}

alt="preview"

className="
h-full
max-w-full
object-contain
rounded-2xl
"

/>



:

<>


<FaImage

className="
text-6xl
text-teal-400
mb-4
"

/>


<p className="text-sm">

Click to upload certificate image

</p>


</>


}




<input


hidden


type="file"


accept="image/*"


onChange={handleImage}


/>


</label>



</div>








{/* Submit Button */}


<button


type="submit"



disabled={loading}



className="


md:col-span-2


bg-teal-500


hover:bg-teal-600


disabled:opacity-50


text-white


rounded-xl


py-3


font-semibold


flex


items-center


justify-center


gap-3


transition


"



>



<FaUpload/>


{

loading

?

"Uploading..."

:

"Upload Certificate"

}



</button>





</form>

{/* Uploaded Certificates */}


<div className="mt-14">



<h2

className="
text-2xl
font-bold
text-teal-400
mb-6
flex
items-center
gap-3
"

>

<FaGraduationCap/>

Uploaded Certificates

</h2>






{

certificates.length === 0 ?


(


<div


className={`

rounded-3xl

p-10

text-center

border


${
lightMode

?

"bg-white border-gray-200 text-gray-500"

:

"bg-gray-900/50 border-white/10 text-gray-400"

}


`}


>


No certificates uploaded yet.


</div>


)

:


(


<div

className="

grid

md:grid-cols-2

xl:grid-cols-3

gap-8

"


>


{


certificates.map((cert)=>(


<div


key={cert._id}


className={`


rounded-3xl


overflow-hidden


shadow-2xl


transition-all


duration-300


hover:scale-[1.03]

group



${
lightMode


?


"bg-white border border-gray-200"


:


"bg-gray-900/60 border border-white/10"


}



`}



>




{/* Image */}


<div

className="
h-56
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


group-hover:scale-110


transition


duration-500


"


/>



</div>







{/* Details */}



<div className="p-6">



<h3


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


</h3>






<p

className="
text-teal-400
font-medium
mt-2
"

>

{cert.issuer}

</p>






<p


className={`

text-sm

mt-2


${
lightMode

?

"text-gray-500"

:

"text-gray-400"

}

`}


>


Issued • {cert.issuedDate}


</p>






{


cert.credentialId &&



(


<p


className={`

text-sm

mt-1


${
lightMode

?

"text-gray-500"

:

"text-gray-400"

}

`}


>


Credential ID • {cert.credentialId}


</p>


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

text-xs

px-3

py-1

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


className={`


mt-5

text-sm

line-clamp-4



${
lightMode

?

"text-gray-600"

:

"text-gray-300"

}


`}


>


{cert.description}


</p>


)



}








{/* Buttons */}



<div

className="
flex
gap-3
mt-6
"

>






{


cert.certificateUrl &&


(


<a


href={cert.certificateUrl}


target="_blank"


rel="noopener noreferrer"



className="

flex-1

bg-blue-500

hover:bg-blue-600

text-white

py-2

rounded-xl


flex

items-center

justify-center

gap-2


transition


"


>


View

<FaExternalLinkAlt/>


</a>


)


}







<button


onClick={()=>handleDelete(cert._id)}



className="


bg-red-500


hover:bg-red-600


text-white


px-5


rounded-xl


flex


items-center


gap-2


transition



"


>


<FaTrash/>

Delete


</button>




</div>





</div>





</div>


))


}


</div>


)



}



</div>





</div>

</div>
);
}
