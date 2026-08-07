import {
  FaRocket,
  FaServer,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaCloud,
  FaVideo,
  FaGraduationCap,
  FaLayerGroup,
  FaChartLine,
  FaGithub,
  FaExternalLinkAlt,
  FaFileAlt,
  FaBookOpen,
  FaLink,
} from "react-icons/fa";


export default function Achievements({ lightMode }) {


const projects = [

{
title:"Scalable Real-Time Chat Application",

subtitle:
"Microservices-Based Communication Platform",

description:
"Designed and developed a production-oriented real-time communication platform using modern full-stack technologies.",


github:"https://github.com/Ankit-nehra/realtime-chat-app",
demo:"https://microservice-based-realtime-chat-ap.vercel.app/",


highlights:[

"Implemented microservices architecture with API Gateway, Authentication, User, Chat and Realtime services.",

"Built instant messaging system using Socket.IO with WebSocket communication.",

"Integrated WebRTC for peer-to-peer audio and video calling.",

"Implemented Redis/Upstash synchronization for scalable real-time state management.",

"Developed secure authentication using JWT and bcrypt.",

"Containerized backend infrastructure using Docker and Docker Compose."

],


technologies:[

"React.js",
"Node.js",
"Express.js",
"MongoDB",
"Socket.IO",
"WebRTC",
"Redis",
"Docker"

],

icon:<FaRocket/>

},



{

title:"EduCore ERP",

subtitle:
"Complete School Management & ERP Platform",


description:
"Developed a full-stack educational management system digitizing school operations through role-based dashboards.",


github:"https://github.com/Ankit-nehra/erp-frontend",
demo:"https://erp-frontend-eight-iota.vercel.app/",


highlights:[

"Built dedicated portals for Student, Teacher, Admin and Principal roles.",

"Implemented secure role-based authorization using JWT authentication.",

"Developed modules for attendance, examination, marks, syllabus and timetable management.",

"Designed REST APIs using Node.js and Express.js.",

"Integrated MongoDB and PostgreSQL for separate data management.",

"Implemented dynamic school CMS for notices, gallery and achievements."

],


technologies:[

"React.js",
"Node.js",
"Express.js",
"MongoDB",
"PostgreSQL",
"Supabase",
"Cloudinary",
"JWT"

],


icon:<FaGraduationCap/>

}

];




const research = {

dissertation:{
label:"MASTER'S DISSERTATION",

title:
"Microservice-Based Real-Time Chat Application Using MERN Stack and Socket.IO",

description:
"Designed and evaluated a scalable real-time communication platform using microservices architecture, MERN stack, Redis, Socket.IO and API Gateway. The system was analyzed using performance metrics including latency, throughput and concurrent user handling.",

technologies:[
"React.js",
"Node.js",
"Express.js",
"MongoDB",
"Redis",
"Socket.IO",
"WebRTC",
"Docker"
],

pdf:"YOUR_CLOUDINARY_URL"

},


publication:{

label:"RESEARCH PUBLICATION",

title:
"Design and Implementation of a Scalable Microservice-Based E-Commerce Web Application Using the MERN Stack with Performance Analysis",

description:
"Research paper presenting the design and performance evaluation of a scalable microservice-based e-commerce system. The study explores service decomposition, API Gateway architecture, Docker deployment and scalability analysis under concurrent workloads.",

doi:
"https://doi.org/10.5281/zenodo.20078376"

}

};
  

const technicalAchievements=[

{
icon:<FaLayerGroup/>,
title:"Scalable Architecture",
text:"Designed modular application architectures following industry practices including microservices and role-based systems."
},


{
icon:<FaServer/>,
title:"Backend Engineering",
text:"Developed secure REST APIs, authentication systems, database models and service communication layers."
},


{
icon:<FaDatabase/>,
title:"Database Design",
text:"Worked with MongoDB and PostgreSQL database structures including relationships, schemas and optimized data handling."
},


{
icon:<FaVideo/>,
title:"Real-Time Systems",
text:"Implemented WebSocket communication and WebRTC based peer-to-peer communication features."
},


{
icon:<FaShieldAlt/>,
title:"Security Implementation",
text:"Implemented JWT authentication, password encryption, protected routes and authorization middleware."
},


{
icon:<FaCloud/>,
title:"Cloud Integration",
text:"Integrated cloud services including Redis/Upstash, Cloudinary and modern deployment workflows."
}


];






return (

<div

className={`min-h-screen px-5 py-10 transition-all duration-500

${
lightMode

?
"bg-gradient-to-br from-white via-gray-100 to-gray-200"

:

"bg-gradient-to-br from-gray-950 via-gray-900 to-black"

}

`}

>



{/* Heading */}

<div className="text-center mb-12">


<h1

className="
text-4xl sm:text-5xl
font-extrabold
bg-gradient-to-r
from-teal-400
via-cyan-400
to-blue-500
bg-clip-text
text-transparent
"

>

Achievements & Projects

</h1>


<p

className={`mt-4

${
lightMode
?
"text-gray-600"
:
"text-gray-400"

}

`}

>

Projects demonstrating full-stack development,
scalable architecture and modern engineering practices.

</p>


</div>







<div className="max-w-5xl mx-auto">



<h2

className="
text-2xl
font-bold
text-teal-400
mb-6
flex
items-center
gap-2
"

>

<FaCode/>

Featured Projects

</h2>





<div className="space-y-8">



{
projects.map((project,index)=>(



<div

key={index}

className={`

rounded-3xl
p-6 sm:p-8
border
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-2
hover:shadow-2xl


${
lightMode

?

"bg-white/80 border-gray-200 shadow-lg"

:

"bg-white/5 border-white/10"

}

`}

>




<div className="flex items-start justify-between gap-5 flex-wrap">



<div className="flex gap-4">


<div

className="
text-teal-400
text-3xl
bg-teal-400/10
p-3
rounded-xl
h-fit
"

>

{project.icon}

</div>




<div>


<h3

className={`

text-xl sm:text-2xl
font-bold

${
lightMode
?
"text-gray-800"
:
"text-white"

}

`}

>

{project.title}

</h3>



<p className="text-teal-400">

{project.subtitle}

</p>



</div>


</div>






{/* Buttons */}


<div className="flex gap-3">



<a

href={project.github || "#"}
target="_blank"
className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-gray-800
text-white
text-sm
hover:bg-black
transition
"

>

<FaGithub/>

Github

</a>




<a

href={project.demo || "#"}
target="_blank"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-teal-500
text-white
text-sm
hover:bg-teal-600
transition
"

>

<FaExternalLinkAlt/>

Live Demo

</a>



</div>



</div>







<p

className={`

mt-5
leading-relaxed

${
lightMode
?
"text-gray-700"
:
"text-gray-300"

}

`}

>

{project.description}

</p>







<ul className={`mt-5 space-y-2 text-sm sm:text-base

${
lightMode
?
"text-gray-700"
:
"text-gray-300"

}

`}>



{
project.highlights.map((item,i)=>(


<li

key={i}

className="flex gap-2"

>

<span className="text-teal-400">

✓

</span>


{item}


</li>


))

}



</ul>








<div className="flex flex-wrap gap-2 mt-6">


{

project.technologies.map((tech,i)=>(


<span

key={i}

className="
px-3
py-1
rounded-full
text-xs
bg-teal-500/10
border
border-teal-400/30
text-teal-500
"

>

{tech}

</span>


))


}


</div>




</div>



))

}



</div>




</div>
{/* Research & Publications */}

<div className="mt-16">

<h2 className="
text-2xl
font-bold
text-teal-400
mb-6
flex
items-center
gap-2
">
<FaGraduationCap/>
Research & Publications
</h2>


<div className="
grid
md:grid-cols-2
gap-8
">


{/* Dissertation Card */}

<div
className={`
rounded-3xl
p-6 sm:p-8
border
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-2
hover:shadow-2xl

${
lightMode
?
"bg-white/80 border-gray-200 shadow-lg"
:
"bg-white/5 border-white/10"
}

`}
>


<div className="
flex
items-center
gap-3
mb-4
">

<FaFileAlt 
className="
text-3xl
text-teal-400
"
/>


<span className="
px-4
py-1
rounded-full
text-xs
font-semibold
bg-teal-500/10
border
border-teal-400/30
text-teal-400
">

{research.dissertation.label}

</span>

</div>



<h3 className={`
text-xl
sm:text-2xl
font-bold

${
lightMode
?
"text-gray-800"
:
"text-white"
}

`}>

{research.dissertation.title}

</h3>



<p className={`
mt-4
leading-relaxed

${
lightMode
?
"text-gray-700"
:
"text-gray-300"
}

`}>

{research.dissertation.description}

</p>



<div className="
flex
flex-wrap
gap-3
mt-5
">

{
research.dissertation.technologies.map((tech)=>(
<span
key={tech}
className="
px-3
py-1
rounded-full
text-xs
bg-teal-500/10
border
border-teal-400/30
text-teal-400
"
>

{tech}

</span>
))
}

</div>



<a
href={research.dissertation.pdf}
target="_blank"
className="
inline-flex
mt-7
items-center
gap-2
px-5
py-3
rounded-xl
bg-teal-500
text-white
hover:bg-teal-600
transition
"
>

<FaBookOpen/>

Read Dissertation

</a>


</div>





{/* Publication Card */}


<div
className={`
rounded-3xl
p-6 sm:p-8
border
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-2
hover:shadow-2xl

${
lightMode
?
"bg-white/80 border-gray-200 shadow-lg"
:
"bg-white/5 border-white/10"
}

`}
>


<div className="
flex
items-center
gap-3
mb-4
">

<FaLink
className="
text-3xl
text-blue-400
"
/>


<span className="
px-4
py-1
rounded-full
text-xs
font-semibold
bg-blue-500/10
border
border-blue-400/30
text-blue-400
">

{research.publication.label}

</span>

</div>



<h3 className={`
text-xl
sm:text-2xl
font-bold

${
lightMode
?
"text-gray-800"
:
"text-white"
}

`}>

{research.publication.title}

</h3>



<p className={`
mt-4
leading-relaxed

${
lightMode
?
"text-gray-700"
:
"text-gray-300"
}

`}>

{research.publication.description}

</p>



<a
href={research.publication.doi}
target="_blank"
className="
inline-flex
mt-7
items-center
gap-2
px-5
py-3
rounded-xl
border
border-blue-400
text-blue-400
hover:bg-blue-500/10
transition
"
>

<FaExternalLinkAlt/>

View DOI Publication

</a>


</div>



</div>

</div>




{/* Technical Highlights */}



<div className="max-w-5xl mx-auto mt-14">



<h2

className="
text-2xl
font-bold
text-teal-400
mb-6
flex
items-center
gap-2
"

>

<FaChartLine/>

Technical Highlights

</h2>





<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">



{

technicalAchievements.map((item,index)=>(


<div

key={index}

className={`

rounded-2xl
p-5
border
backdrop-blur-xl
transition
hover:-translate-y-1


${
lightMode

?

"bg-white border-gray-200 shadow-lg"

:

"bg-white/5 border-white/10"

}

`}

>


<div className="text-teal-400 text-2xl mb-3">

{item.icon}

</div>



<h3

className={`

text-lg
font-semibold

${
lightMode
?
"text-gray-800"
:
"text-white"

}

`}

>

{item.title}

</h3>



<p

className={`mt-2 text-sm leading-relaxed

${
lightMode
?
"text-gray-600"
:
"text-gray-400"

}

`}

>

{item.text}

</p>



</div>


))


}



</div>


</div>





</div>

);

}
