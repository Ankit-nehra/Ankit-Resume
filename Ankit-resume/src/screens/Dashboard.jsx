
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaStar,
  FaGraduationCap,
  FaMoon,
  FaSun,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";




export default function Dashboard({ lightMode, setLightMode }) {

  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);



  const sections = [
    {
      path: "/profile",
      title: "Profile",
      icon: <FaUser />
    },
    {
      path: "/experience",
      title: "Experience",
      icon: <FaBriefcase />
    },
    {
      path: "/skills",
      title: "Skills",
      icon: <FaTools />
    },
    {
      path: "/achievements",
      title: "Achievements",
      icon: <FaStar />
    },
    {
      path: "/certificates",
      title: "Certificates",
      icon: <FaGraduationCap />
    },
    
  ];



const resumeLink = "../assets/Ankit-Resume_Full-Stack-MERN-Developer_docx";
  
  // Add your document URL here



  




  return (

    <div
      className={`
      min-h-screen
      flex
      flex-col
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




      {/* Theme Toggle */}

      <button

        onClick={() => setLightMode(!lightMode)}

        className={`
        fixed
        top-5
        right-5
        z-[100]

        w-11
        h-11

        rounded-full

        flex
        items-center
        justify-center

        shadow-xl

        transition-all
        duration-300


        ${
          lightMode
          ?
          "bg-gray-900 text-yellow-400"
          :
          "bg-white text-gray-900"
        }

        `}
      >

        {
          lightMode
          ?
          <FaMoon size={18}/>
          :
          <FaSun size={18}/>
        }


      </button>





      {/* Page Content */}

      <div

       

        className="
        flex-1
        w-full

        px-3
        sm:px-4
        md:px-6

        py-6

        flex
        flex-col
        gap-8
        "

      >

        <Outlet />

      </div>







      {/* Floating Expandable Menu */}


      <div

        className="
        fixed
        right-5

        top-1/2
        -translate-y-1/2

        z-[90]

        flex
        flex-col
        items-center
        gap-3
        "

      >




        {/* Main Button */}


        <button

          onClick={() => setMenuOpen(!menuOpen)}

          className={`
          w-14
          h-14

          rounded-full

          flex
          items-center
          justify-center

          shadow-2xl

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-110


          ${
            lightMode
            ?
            "bg-white/80 text-gray-900 border border-gray-200"
            :
            "bg-black/40 text-white border border-white/10"
          }

          `}
        >

          {
            menuOpen
            ?
            <FaTimes size={20}/>
            :
            <FaBars size={20}/>
          }


        </button>







        {/* Menu Items */}

        <div

          className={`
          flex
          flex-col
          items-center
          gap-3

          overflow-hidden

          transition-all
          duration-500


          ${
            menuOpen
            ?
            "opacity-100 max-h-[600px] scale-100"
            :
            "opacity-0 max-h-0 scale-75 pointer-events-none"
          }

          `}
        >




          {
            sections.map((sec)=>{


              const isActive =
              location.pathname === sec.path;



              return (

                <button

                  key={sec.path}

                  onClick={() => navigate(sec.path)}

                  className={`
                  group

                  relative

                  w-14
                  h-14

                  rounded-2xl


                  flex
                  flex-col
                  items-center
                  justify-center


                  shadow-lg

                  transition-all
                  duration-300



                  ${
                    isActive
                    ?
                    "bg-teal-500 text-white scale-110"
                    :
                    lightMode
                    ?
                    "bg-white/80 text-gray-500 hover:text-teal-500"
                    :
                    "bg-black/30 text-gray-300 hover:text-teal-400"
                  }

                  `}
                >


                  <div className="text-lg">

                    {sec.icon}

                  </div>



                  <span
                    className="
                    text-[8px]
                    mt-1
                    font-medium
                    "
                  >

                    {sec.title}

                  </span>


                </button>

              );

            })

          }







          {/* Download Button */}


          <a

            href={resumeLink}
            download="Ankit-Resume_Full-Stack-MERN-Developer_docx";
            target="_blank"

            rel="noopener noreferrer"


            className={`
            w-14
            h-14

            rounded-2xl


            flex
            flex-col
            items-center
            justify-center


            shadow-lg


            text-blue-500


            transition-all
            duration-300



            ${
              lightMode
              ?
              "bg-white/80"
              :
              "bg-black/30"
            }

            `}
          >


            <FaDownload className="text-lg"/>


            <span
              className="
              text-[8px]
              mt-1
              font-medium
              "
            >

              Resume

            </span>


          </a>



        </div>



      </div>




    </div>

  );

}

