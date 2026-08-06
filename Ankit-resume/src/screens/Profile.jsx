import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";


export default function Profile({ lightMode }) {


  const timelineRef = useRef(null);
  const [height, setHeight] = useState(0);



  useEffect(() => {

    const handleScroll = () => {

      if (!timelineRef.current) return;


      const rect =
        timelineRef.current.getBoundingClientRect();


      const visible =
        Math.min(
          Math.max(window.innerHeight - rect.top, 0),
          rect.height
        );


      setHeight(visible);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);




  const profileData = {


    name:
      "Ankit Nehra",


    role:
      "Full Stack Developer | MERN Stack Developer",


    location:
      "Panipat, Haryana",


    phone:
      "7027625733",


    email:
      "ankitnehra.cse@gmail.com",


    linkedin:
      "https://www.linkedin.com/in/ankit-nehra-953004285",



    professionalSummary:

`Full Stack Developer specializing in building scalable, responsive and user-focused web applications using modern JavaScript technologies.

I have completed my Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA), with hands-on experience gained through a Full Stack Developer Internship at Coding Blocks.

My expertise includes frontend development with React.js, backend engineering with Node.js and Express.js, database management using MongoDB and PostgreSQL, and building secure REST APIs with authentication and scalable architectures.

I enjoy converting real-world problems into efficient digital solutions by designing clean user interfaces, developing reliable backend systems and creating applications that improve productivity and user experience.

I continuously learn new technologies, research better approaches and focus on writing maintainable, practical and industry-oriented solutions.`,



    education:[


      {

        degree:
        "Master of Computer Applications (MCA)",

        college:
        "Geeta University, Panipat, Haryana",

        year:
        "2024 - 2026",

        score:
        "Overall CGPA: 8.78"

      },


      {

        degree:
        "Bachelor of Computer Applications (BCA)",

        college:
        "Arya P.G College, Panipat, Haryana",

        year:
        "2021 - 2024",

        score:
        "Overall CGPA: 7.39"

      }


    ]

  };





  const highlights = [


    {

      icon:<FaLaptopCode/>,

      title:
      "Full Stack Development",

      text:
      "Building complete web applications using React.js, Node.js, Express.js and modern database technologies."

    },


    {

      icon:<FaBriefcase/>,

      title:
      "Developer Internship",

      text:
      "Completed 3 months Full Stack Developer Internship at Coding Blocks with practical development experience."

    },


    {

      icon:<FaServer/>,

      title:
      "Backend Engineering",

      text:
      "Developing REST APIs, authentication systems, database models and scalable backend architectures."

    },


    {

      icon:<FaRocket/>,

      title:
      "Problem Solving",

      text:
      "Creating software solutions that replace manual workflows with efficient digital systems."

    },


  ];





  const projects = [


    {

      title:
      "Scalable Real-Time Chat Application",


      description:
      "A production-oriented communication platform built with modern full-stack architecture supporting real-time messaging, authentication and video communication.",


      github:"https://github.com/Ankit-nehra",
      demo:"https://microservice-based-realtime-chat-ap.vercel.app/",


      technologies:[

        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "WebRTC",
        "Redis",
        "Docker"

      ]

    },



    {

      title:
      "EduCore ERP",


      description:
      "A complete school management ERP platform designed to digitize academic operations using role-based dashboards and automated workflows.",


      github:"https://github.com/Ankit-nehra",
      demo:"https://erp-frontend-jxl2-green.vercel.app/",


      technologies:[

        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Cloudinary",
        "JWT"

      ]

    }


  ];



  return (

    <div

      className={`min-h-screen transition-all duration-500 px-4 py-8

      ${
        lightMode

        ?

        "bg-gradient-to-br from-white via-gray-100 to-gray-200"

        :

        "bg-gradient-to-br from-gray-950 via-gray-900 to-black"

      }

      `}

    >


     <div className="max-w-6xl mx-auto md:px-6">



      {/* HERO SECTION */}


      <div className="text-center mb-10">


        <h1

          className="
          text-4xl sm:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-teal-400
          via-cyan-400
          to-blue-500
          bg-clip-text
          text-transparent
          "

        >

          {profileData.name}

        </h1>



        <p

          className={`mt-3 text-lg sm:text-2xl font-semibold

          ${
            lightMode
            ?
            "text-gray-700"
            :
            "text-gray-300"
          }

          `}

        >

          {profileData.role}

        </p>



        <p className="mt-3 text-teal-400">

          Building scalable web applications and real-world digital solutions

        </p>


      </div>





      {/* CONTACT SECTION */}

      <div

        className={`grid sm:grid-cols-2 gap-5 mb-12

        ${
          lightMode
          ?
          "text-gray-700"
          :
          "text-gray-300"
        }

        `}

      >


        <div className="flex gap-3 items-center">

          <FaMapMarkerAlt className="text-teal-400"/>

          {profileData.location}

        </div>



        <div className="flex gap-3 items-center">

          <FaPhone className="text-teal-400"/>

          {profileData.phone}

        </div>



        <div className="flex gap-3 items-center">

          <FaEnvelope className="text-teal-400"/>

          {profileData.email}

        </div>



        <div className="flex gap-3 items-center">


          <FaLinkedin className="text-teal-400"/>


          <a

            href={`https://${profileData.linkedin}`}

            target="_blank"

            rel="noreferrer"

            className="text-teal-400 underline"

          >

            LinkedIn Profile

          </a>


        </div>


      </div>
            {/* QUICK HIGHLIGHTS */}


      <div

        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-5
        mb-12
        "

      >


        {
          highlights.map((item,index)=>(


            <div

              key={index}

              className={`rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl

              ${
                lightMode

                ?

                "bg-gray-50 border-gray-200"

                :

                "bg-white/10 border-white/10"

              }

              `}

            >


              <div className="text-teal-400 text-3xl mb-3">

                {item.icon}

              </div>



              <h3

                className={`font-bold text-lg

                ${
                  lightMode
                  ?
                  "text-gray-900"
                  :
                  "text-white"
                }

                `}

              >

                {item.title}

              </h3>



              <p

                className={`text-sm mt-2 leading-relaxed

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






      {/* PROFESSIONAL SUMMARY */}



      <section className="mb-12">


        <h2

          className="
          text-2xl
          font-bold
          text-teal-400
          mb-4
          border-b-2
          border-teal-500
          w-fit
          pb-1
          "

        >

          Professional Summary

        </h2>



        <p

          className={`leading-relaxed text-sm sm:text-base whitespace-pre-line

          ${
            lightMode
            ?
            "text-gray-700"
            :
            "text-gray-200"
          }

          `}

        >

          {profileData.professionalSummary}

        </p>


      </section>







      {/* EXPERIENCE */}



      <section className="mb-12">


        <h2

          className="
          text-2xl
          font-bold
          text-teal-400
          mb-5
          border-b-2
          border-teal-500
          w-fit
          pb-1
          "

        >

          Experience

        </h2>




        <div

          className={`rounded-2xl p-6 border

          ${
            lightMode

            ?

            "bg-gray-50 border-gray-200"

            :

            "bg-white/10 border-white/10"

          }

          `}

        >



          <div className="flex items-center gap-3">


            <FaBriefcase className="text-teal-400 text-2xl"/>


            <div>


              <h3

                className={`font-bold text-xl

                ${
                  lightMode
                  ?
                  "text-gray-900"
                  :
                  "text-white"
                }

                `}

              >

                Full Stack Developer Intern

              </h3>



              <p className="text-teal-400">

                Coding Blocks | June 2025 - August 2025

              </p>


            </div>


          </div>





          <p

            className={`mt-4 leading-relaxed text-sm

            ${
              lightMode
              ?
              "text-gray-700"
              :
              "text-gray-300"
            }

            `}

          >

            Worked on full-stack web development practices including frontend development,
            backend API development, database management, authentication systems and
            building modern web application features using industry-standard technologies.

          </p>



        </div>


      </section>









      {/* FEATURED PROJECTS */}




      <section className="mb-12">


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




        <div className="space-y-6">



        {
          projects.map((project,index)=>(


            <div

              key={index}

              className={`rounded-3xl p-6 border transition-all hover:-translate-y-1 hover:shadow-xl

              ${
                lightMode

                ?

                "bg-white border-gray-200"

                :

                "bg-white/10 border-white/10"

              }

              `}

            >




              <div className="flex flex-wrap justify-between gap-4 items-start">


                <div>


                  <h3

                    className={`text-xl font-bold

                    ${
                      lightMode
                      ?
                      "text-gray-900"
                      :
                      "text-white"
                    }

                    `}

                  >

                    {project.title}

                  </h3>


                  <p className="text-teal-400 mt-1">

                    Full Stack Development Project

                  </p>


                </div>





                {/* PROJECT BUTTONS */}


                <div className="flex gap-3">


                  <a

                    href={project.github || "#"}

                    target="_blank"

                    rel="noreferrer"

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

                    rel="noreferrer"

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

                className={`mt-4 text-sm leading-relaxed

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





              <div className="flex flex-wrap gap-2 mt-5">


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
                      text-teal-400
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


      </section>










      {/* EDUCATION */}



      <section>


        <h2

          className="
          text-2xl
          font-bold
          text-teal-400
          mb-6
          border-b-2
          border-teal-500
          w-fit
          pb-1
          "

        >

          Education

        </h2>




        <div

          ref={timelineRef}

          className="relative"

        >



          <div

            className={`absolute left-[5px] top-0 h-full w-[2px]

            ${
              lightMode
              ?
              "bg-gray-300"
              :
              "bg-gray-700"
            }

            `}

          />




          <div

            className="
            absolute
            left-[5px]
            top-0
            w-[2px]
            bg-teal-400
            transition-all
            duration-500
            "

            style={{
              height:`${height}px`
            }}

          />






          <div className="space-y-8">


            {
              profileData.education.map((edu,index)=>(


                <div

                  key={index}

                  className="flex gap-5"

                >


                  <div className="min-w-[70px]">


                    <div

                      className="
                      bg-teal-500/20
                      border
                      border-teal-400/40
                      rounded-xl
                      px-2
                      py-1
                      text-xs
                      text-teal-400
                      "

                    >

                      {edu.year}

                    </div>


                  </div>





                  <div

                    className={`flex-1 rounded-2xl p-5 border

                    ${
                      lightMode

                      ?

                      "bg-gray-50 border-gray-200"

                      :

                      "bg-white/10 border-white/10"

                    }

                    `}

                  >



                    <div className="flex gap-3 items-center">


                      <FaGraduationCap className="text-teal-400"/>


                      <h3

                        className={`font-bold

                        ${
                          lightMode
                          ?
                          "text-gray-900"
                          :
                          "text-white"
                        }

                        `}

                      >

                        {edu.degree}

                      </h3>


                    </div>





                    <p

                      className={`mt-2 text-sm

                      ${
                        lightMode
                        ?
                        "text-gray-600"
                        :
                        "text-gray-400"
                      }

                      `}

                    >

                      {edu.college}

                    </p>




                    <p className="mt-2 text-teal-400 text-sm">

                      {edu.score}

                    </p>




                  </div>


                </div>


              ))

            }


          </div>



        </div>



      </section>





      </div>


    </div>

  );


}
