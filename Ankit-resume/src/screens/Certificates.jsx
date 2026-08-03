// src/screens/Certificates.jsx
import { FaGraduationCap } from "react-icons/fa";

export default function Certificates({ lightMode }) {

  const certificatesData = [
    "PowerBI Basics Certification – Skill Course",
    "Export Management – Arya P.G. College",
    "Microsoft Excel – Udemy",
    "HIPO Certificate – AAJ Supply Chain Management Pvt. Ltd.",
    "Master Course in Logistics and Supply Chain Management – Udemy",
  ];


  return (

    <div
      className={`min-h-screen flex flex-col items-center py-6 sm:py-8 transition-colors duration-500 ${
        lightMode
          ? "bg-white"
          : "bg-gray-900"
      }`}
    >


      {/* Heading */}

      <h1
        className="text-3xl sm:text-4xl font-bold text-teal-400 mt-6 sm:mt-8 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit"
      >
        Certificates
      </h1>



      {/* Container */}

      <div
        className={`w-full max-w-4xl px-4 sm:px-0 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl transition-colors duration-500 ${
          lightMode
            ? "bg-gray-50 border border-gray-200"
            : "bg-gray-800/40"
        }`}
      >


        <ul className="flex flex-col gap-4">


          {certificatesData.map((cert, idx) => (

            <li
              key={idx}
              className={`rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl
              transition-all duration-300 flex items-center gap-3 ${
                lightMode
                  ? "bg-white border border-gray-200 text-gray-700 hover:border-teal-400"
                  : "bg-gray-900/50 border border-gray-700/50 text-gray-200 hover:border-teal-400/40"
              }`}
            >


              <FaGraduationCap
                className="text-teal-400 text-lg flex-shrink-0"
              />


              <span
                className="text-sm sm:text-base"
              >
                {cert}
              </span>


            </li>

          ))}


        </ul>


      </div>


    </div>

  );
}