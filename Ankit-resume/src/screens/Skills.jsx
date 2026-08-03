// src/screens/Skills.jsx

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaCode,
  FaServer,
  FaBrain,
  FaCss3Alt,
  FaLaptopCode,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiVercel,
  SiExpress,
  SiHtml5,
} from "react-icons/si";


export default function Skills({ lightMode }) {


  const skillCategories = [

    {
      title:"Frontend Development",
      icon:<FaReact/>,
      color:"from-cyan-400 to-blue-500",

      skills:[
        ["React.js",<FaReact/>],
        ["JavaScript ES6+",<SiJavascript/>],
        ["HTML5",<SiHtml5/>],
        ["CSS3",<FaCss3Alt/>],
        ["Tailwind CSS",<SiTailwindcss/>],
        ["Responsive Design",<FaCode/>],
      ]
    },


    {
      title:"Backend Development",
      icon:<FaNodeJs/>,
      color:"from-green-400 to-emerald-600",

      skills:[
        ["Node.js",<FaNodeJs/>],
        ["Express.js",<SiExpress/>],
        ["REST APIs",<FaServer/>],
        ["Authentication",<FaBrain/>],
        ["MVC Architecture",<FaCode/>],
        ["Socket.IO",<SiSocketdotio/>],
      ]
    },


    {
      title:"Database & Storage",
      icon:<FaDatabase/>,
      color:"from-purple-400 to-pink-500",

      skills:[
        ["MongoDB",<SiMongodb/>],
        ["PostgreSQL",<SiPostgresql/>],
        ["Supabase",<SiSupabase/>],
        ["SQL",<FaDatabase/>],
        ["Database Design",<FaCode/>],
        ["CRUD Operations",<FaServer/>],
      ]
    },


    {
      title:"Cloud & DevOps",
      icon:<FaDocker/>,
      color:"from-blue-400 to-indigo-600",

      skills:[
        ["Docker",<FaDocker/>],
        ["Redis",<SiRedis/>],
        ["Git",<FaGithub/>],
        ["GitHub",<FaGithub/>],
        ["Vercel",<SiVercel/>],
        ["Cloudinary",<FaServer/>],
      ]
    },

{
  title:"Computer Science Fundamentals",
  icon:<FaLaptopCode/>,
  color:"from-indigo-400 to-purple-600",

  skills:[
    ["Data Structures & Algorithms",<FaCode/>],
    ["Object Oriented Programming",<FaBrain/>],
    ["Database Management Systems",<FaDatabase/>],
    ["Operating Systems",<FaLaptopCode/>],
    ["Computer Networks",<FaNetworkWired/>],
    ["System Design Basics",<FaServer/>],
  ]
},


{
  title:"Professional Skills",
  icon:<FaLightbulb/>,
  color:"from-yellow-400 to-orange-500",

  skills:[
    ["Problem Solving",<FaBrain/>],
    ["Communication Skills",<FaCode/>],
    ["Team Collaboration",<FaGithub/>],
    ["Adaptability",<FaLightbulb/>],
    ["Quick Learning",<FaCode/>],
    ["Project Management",<FaServer/>],
  ]
},

  ];



return (

<div
className={`min-h-screen px-5 py-10 transition-all duration-500 ${
lightMode
?"bg-gradient-to-br from-white via-gray-100 to-gray-200"
:"bg-gradient-to-br from-gray-950 via-gray-900 to-black"
}`}
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
Technical Skills
</h1>


<p
className={`mt-4 text-sm sm:text-base ${
lightMode
?"text-gray-600"
:"text-gray-400"
}`}
>
Technologies, tools and expertise I use to build scalable applications
</p>


</div>





{/* Skill Grid */}


<div
className="
max-w-6xl
mx-auto
grid
grid-cols-1
md:grid-cols-2
gap-8
"
>


{
skillCategories.map((category,index)=>(


<div
key={index}

className={`
rounded-3xl
p-6
border
backdrop-blur-xl
transition-all
duration-500

hover:-translate-y-2

hover:shadow-2xl

${
lightMode

?

"bg-white/70 border-gray-200 shadow-lg"

:

"bg-white/5 border-white/10 shadow-black"

}
`}
>


{/* Category Header */}

<div
className="
flex
items-center
gap-4
mb-6
"
>


<div

className={`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
text-3xl
text-white
bg-gradient-to-r
${category.color}
shadow-lg
`}
>

{category.icon}

</div>



<h2
className={`
text-xl
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
{category.title}

</h2>


</div>





{/* Skills */}

<div
className="
grid
grid-cols-2
gap-3
"
>


{
category.skills.map((skill,i)=>(


<div

key={i}

className={`
flex
items-center
gap-2
px-3
py-3
rounded-xl

transition-all
duration-300

hover:scale-105

${
lightMode

?

"bg-gray-100 text-gray-700 hover:bg-teal-50"

:

"bg-white/10 text-gray-200 hover:bg-white/20"

}

`}
>


<span
className="text-teal-400 text-lg"
>
{skill[1]}
</span>


<span
className="text-xs sm:text-sm font-medium"
>
{skill[0]}
</span>


</div>


))
}


</div>



</div>


))
}


</div>





{/* Bottom Highlight */}


<div
className={`
max-w-5xl
mx-auto
mt-12
p-6
rounded-3xl
text-center
border

${
lightMode
?
"bg-white border-gray-200"
:
"bg-white/5 border-white/10"
}

`}
>


<h3
className="
text-2xl
font-bold
text-teal-400
"
>
Full Stack Developer | MERN Stack Engineer
</h3>


<p
className={`
mt-3

${
lightMode
?
"text-gray-600"
:
"text-gray-400"
}

`}
>
Building scalable, responsive and production-ready web applications
using modern frontend technologies, backend architecture,
databases and cloud platforms.
</p>


</div>




</div>


);


}