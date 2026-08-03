// // src/screens/Projects.jsx

// import {
//   FaGithub,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaServer,
//   FaVideo,
//   FaDocker,
//   FaBolt,
//   FaShieldAlt,
//   FaNetworkWired,
// } from "react-icons/fa";


// export default function Projects() {


//   const technologies = [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Socket.IO",
//     "WebRTC",
//     "Redis",
//     "Upstash",
//     "Docker",
//     "Zustand",
//     "JWT",
//     "Tailwind CSS",
//   ];


//   const highlights = [
//     {
//       icon:<FaServer/>,
//       title:"Microservices Architecture",
//       text:
//       "Designed backend using independent services including API Gateway, Authentication Service, User Service, Chat Service and Realtime Service."
//     },

//     {
//       icon:<FaBolt/>,
//       title:"Real-Time Communication",
//       text:
//       "Implemented instant messaging with Socket.IO including online presence, typing indicators, notifications and message status tracking."
//     },

//     {
//       icon:<FaVideo/>,
//       title:"WebRTC Calling",
//       text:
//       "Built peer-to-peer audio and video calling system using WebRTC with Socket.IO signaling."
//     },

//     {
//       icon:<FaDatabase/>,
//       title:"Distributed Data Handling",
//       text:
//       "Integrated MongoDB with Redis and Upstash for scalable realtime synchronization and performance optimization."
//     },

//     {
//       icon:<FaShieldAlt/>,
//       title:"Secure Authentication",
//       text:
//       "Implemented JWT authentication, bcrypt password hashing, protected routes and authorization middleware."
//     },

//     {
//       icon:<FaDocker/>,
//       title:"Containerized Deployment",
//       text:
//       "Prepared Docker based infrastructure for running multiple backend services together."
//     },

//   ];



//   return (

//     <div
//     className="
//     min-h-screen
//     bg-gradient-to-br
//     from-slate-950
//     via-gray-900
//     to-indigo-950
//     px-4
//     py-10
//     "
//     >



//       {/* Hero Section */}

//       <div
//       className="
//       max-w-6xl
//       mx-auto
//       text-center
//       mb-14
//       "
//       >

//         <div
//         className="
//         inline-flex
//         items-center
//         gap-2
//         px-4
//         py-2
//         rounded-full
//         bg-cyan-500/10
//         border
//         border-cyan-400/30
//         text-cyan-300
//         text-sm
//         mb-6
//         "
//         >

//           <FaBolt/>
//           Featured Full Stack Project

//         </div>


//         <h1
//         className="
//         text-3xl
//         sm:text-5xl
//         font-bold
//         bg-gradient-to-r
//         from-cyan-400
//         via-blue-400
//         to-purple-500
//         bg-clip-text
//         text-transparent
//         "
//         >

//         Scalable Real-Time Chat Application

//         </h1>



//         <p
//         className="
//         text-gray-300
//         max-w-3xl
//         mx-auto
//         mt-5
//         leading-relaxed
//         "
//         >

//         A production-oriented communication platform built using MERN Stack,
//         Microservices Architecture, Socket.IO, WebRTC, Redis and Docker.
//         The system supports real-time messaging, presence tracking,
//         notifications and peer-to-peer communication.

//         </p>



//         <button
//         className="
//         mt-8
//         px-6
//         py-3
//         rounded-xl
//         bg-white/10
//         border
//         border-white/20
//         text-white
//         flex
//         items-center
//         gap-3
//         mx-auto
//         hover:bg-white/20
//         transition
//         "
//         >

//         <FaGithub/>

//         View Project Repository

//         </button>


//       </div>





//       {/* Technology Stack */}


//       <div
//       className="
//       max-w-6xl
//       mx-auto
//       mb-14
//       "
//       >

//       <h2
//       className="
//       text-2xl
//       text-white
//       font-semibold
//       mb-6
//       "
//       >
//         Technology Stack
//       </h2>



//       <div
//       className="
//       flex
//       flex-wrap
//       gap-3
//       "
//       >

//       {
//         technologies.map((tech,index)=>(

//           <span
//           key={index}
//           className="
//           px-4
//           py-2
//           rounded-xl
//           bg-white/5
//           border
//           border-white/10
//           text-gray-200
//           text-sm
//           hover:border-cyan-400/50
//           hover:text-cyan-300
//           transition
//           "
//           >

//           {tech}

//           </span>

//         ))
//       }

//       </div>

//       </div>






//       {/* Architecture Highlights */}


//       <div
//       className="
//       max-w-6xl
//       mx-auto
//       "
//       >

//       <h2
//       className="
//       text-2xl
//       font-semibold
//       text-white
//       mb-6
//       "
//       >

//       Engineering Highlights

//       </h2>



//       <div
//       className="
//       grid
//       grid-cols-1
//       md:grid-cols-2
//       gap-6
//       "
//       >


//       {
//         highlights.map((item,index)=>(

//           <div
//           key={index}
//           className="
//           group
//           bg-white/5
//           backdrop-blur-xl
//           border
//           border-white/10
//           rounded-2xl
//           p-6
//           hover:-translate-y-2
//           hover:border-cyan-400/40
//           hover:shadow-cyan-500/20
//           hover:shadow-xl
//           transition-all
//           "
//           >


//           <div
//           className="
//           w-12
//           h-12
//           rounded-xl
//           bg-cyan-500/10
//           border
//           border-cyan-400/30
//           flex
//           items-center
//           justify-center
//           text-cyan-400
//           text-xl
//           mb-4
//           "
//           >

//           {item.icon}

//           </div>



//           <h3
//           className="
//           text-lg
//           text-white
//           font-semibold
//           mb-3
//           "
//           >

//           {item.title}

//           </h3>



//           <p
//           className="
//           text-gray-300
//           text-sm
//           leading-relaxed
//           "
//           >

//           {item.text}

//           </p>


//           </div>

//         ))
//       }


//       </div>

//       </div>






//       {/* Architecture Footer */}


//       <div
//       className="
//       max-w-6xl
//       mx-auto
//       mt-14
//       "
//       >

//       <div
//       className="
//       rounded-3xl
//       bg-gradient-to-r
//       from-cyan-500/10
//       to-purple-500/10
//       border
//       border-cyan-400/20
//       p-8
//       text-center
//       "
//       >

//       <FaNetworkWired
//       className="
//       mx-auto
//       text-cyan-400
//       text-4xl
//       mb-4
//       "
//       />


//       <h3
//       className="
//       text-xl
//       font-semibold
//       text-white
//       "
//       >

//       Production Ready System Design

//       </h3>


//       <p
//       className="
//       text-gray-400
//       mt-3
//       "
//       >

//       Demonstrates expertise in scalable backend systems,
//       realtime engineering, distributed architecture and modern
//       full-stack development practices.

//       </p>


//       </div>

//       </div>



//     </div>

//   );
// }
// src/screens/Achievements.jsx

// src/screens/Achievements.jsx

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
} from "react-icons/fa";


export default function Achievements({ lightMode }) {


const projects = [

{
title:"Scalable Real-Time Chat Application",

subtitle:
"Microservices-Based Communication Platform",

description:
"Designed and developed a production-oriented real-time communication platform using modern full-stack technologies.",


github:"https://github.com/Ankit-nehra",
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


github:"https://github.com/Ankit-nehra",
demo:"https://erp-frontend-jxl2-green.vercel.app/",


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