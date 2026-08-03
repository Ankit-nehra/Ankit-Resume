import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";


export default function Experience({ lightMode }) {


const experiences = [

{
title:"Full Stack Developer Intern",
company:"Coding Blocks",
duration:"June 2025 - August 2025",

icon:<FaBriefcase/>,

points:[
"Developed full-stack web applications using React.js, Node.js and Express.js.",
"Built responsive user interfaces with modern frontend practices.",
"Created REST APIs and implemented backend business logic.",
"Worked with databases, CRUD operations and authentication workflows.",
"Debugged issues, optimized application performance and improved code quality.",
"Followed industry development practices including Git version control and API testing."
]

},


];


const projects=[

{
title:"Scalable Real-Time Chat Application",
icon:<FaRocket/>,

description:
"Designed a production-oriented communication platform using microservices architecture, Socket.IO, WebRTC, Redis and Docker."
},


{
title:"EduCore ERP",
icon:<FaGraduationCap/>,

description:
"Built a complete school management ERP system with role-based dashboards for Student, Teacher, Admin and Principal using React, Node.js, MongoDB and PostgreSQL."
}

];



const approach=[

"Research-driven development approach",
"Focus on scalable and maintainable solutions",
"Strong problem-solving mindset",
"Continuous learning of modern technologies",
"Ability to adapt and explore new tools"

];



return (

<div

className={`
min-h-screen px-5 py-10 transition-all duration-500

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

Experience

</h1>


<p

className={`
mt-4

${
lightMode
?
"text-gray-600"
:
"text-gray-400"
}

`}

>

Professional journey, internship experience and practical development work

</p>


</div>





{/* Professional Experience */}


<div className="max-w-5xl mx-auto">


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

<FaBriefcase/>

Professional Experience

</h2>




{
experiences.map((exp,index)=>(


<div

key={index}

className={`
rounded-3xl
p-6
border
backdrop-blur-xl
shadow-xl
transition-all
hover:-translate-y-2

${
lightMode

?

"bg-white/80 border-gray-200"

:

"bg-white/5 border-white/10"

}

`}

>


<div className="flex gap-4 items-center">


<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-r
from-teal-400
to-cyan-500
flex
items-center
justify-center
text-white
text-2xl
"

>

{exp.icon}

</div>



<div>

<h3

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

{exp.title}

</h3>


<p className="text-teal-400">

{exp.company} | {exp.duration}

</p>


</div>


</div>





<ul className="mt-6 space-y-3">


{
exp.points.map((point,i)=>(


<li

key={i}

className={`
flex gap-3

${
lightMode
?
"text-gray-700"
:
"text-gray-300"
}

`}

>


<span className="text-teal-400 mt-1">

<FaCheckCircle/>

</span>


{point}


</li>


))
}


</ul>



</div>


))

}



</div>







{/* Project Experience */}


<div className="max-w-5xl mx-auto mt-14">


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

<FaLaptopCode/>

Project Experience

</h2>



<div className="grid md:grid-cols-2 gap-6">


{
projects.map((project,index)=>(


<div

key={index}

className={`
rounded-3xl
p-6
border
transition-all
hover:-translate-y-2

${
lightMode

?
"bg-white border-gray-200"

:

"bg-white/5 border-white/10"

}

`}

>


<div className="text-teal-400 text-3xl mb-4">

{project.icon}

</div>



<h3

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

{project.title}

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

{project.description}

</p>


</div>


))

}


</div>


</div>







{/* Development Mindset */}



<div

className={`
max-w-5xl
mx-auto
mt-14
p-8
rounded-3xl
border
text-center

${
lightMode
?
"bg-white border-gray-200"
:
"bg-white/5 border-white/10"
}

`}

>


<h2 className="text-2xl font-bold text-teal-400">

Development Approach

</h2>



<div className="mt-6 flex flex-wrap justify-center gap-3">


{
approach.map((item,index)=>(


<span

key={index}

className="
px-4
py-2
rounded-full
bg-teal-500/10
border
border-teal-400/30
text-teal-400
text-sm
"

>

{item}

</span>


))

}


</div>


</div>



</div>

);

}