
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdCard,
  FaUpload,
} from "react-icons/fa";

export default function Certificates({ lightMode }) {
  const navigate = useNavigate();

  const API =
    "https://ankit-resume.onrender.com/api/certificates";

  const [selectedDescription, setSelectedDescription] =
    useState(null);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [certificates, setCertificates] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // ==========================================
  // Track which certificate images are loaded
  // ==========================================

  const [loadedImages, setLoadedImages] =
    useState({});

  // ==========================================
  // Fetch Certificates
  // ==========================================

  const getCertificates = async () => {
    try {
      const res = await axios.get(API);

      setCertificates(
        res.data.certificates || []
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Fetch on Mount
  // ==========================================

  useEffect(() => {
    getCertificates();
  }, []);

  // ==========================================
  // Individual Image Loaded
  // ==========================================

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div
      className={`
        min-h-screen
        py-8
        transition-all
        duration-500

        ${
          lightMode
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }
      `}
    >

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          mb-12
          flex
          items-center
          justify-center
        "
      >

        <h1
          className="
            text-center
            text-4xl
            sm:text-5xl
            font-bold
            text-teal-400
            flex
            items-center
            gap-3
          "
        >
          <FaGraduationCap />

          Certificates
        </h1>

      </div>


      {/* =====================================================
          CERTIFICATE GRID
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {/* =====================================================
            INITIAL API LOADING
        ===================================================== */}

        {loading ? (

          Array.from({ length: 6 }).map(
            (_, index) => (

              <div
                key={index}
                className={`
                  rounded-3xl
                  overflow-hidden
                  animate-pulse

                  ${
                    lightMode
                      ? "bg-white border border-gray-200"
                      : "bg-gray-800 border border-white/10"
                  }
                `}
              >

                {/* Image skeleton */}

                <div
                  className="
                    h-60
                    bg-gray-300
                    dark:bg-gray-700
                  "
                />

                {/* Content skeleton */}

                <div className="p-6 space-y-4">

                  <div
                    className="
                      h-6
                      w-3/4
                      rounded
                      bg-gray-300
                      dark:bg-gray-700
                    "
                  />

                  <div
                    className="
                      h-4
                      w-1/2
                      rounded
                      bg-gray-300
                      dark:bg-gray-700
                    "
                  />

                  <div
                    className="
                      h-4
                      w-2/3
                      rounded
                      bg-gray-300
                      dark:bg-gray-700
                    "
                  />

                  <div className="flex gap-2">

                    <div
                      className="
                        h-6
                        w-16
                        rounded-full
                        bg-gray-300
                        dark:bg-gray-700
                      "
                    />

                    <div
                      className="
                        h-6
                        w-20
                        rounded-full
                        bg-gray-300
                        dark:bg-gray-700
                      "
                    />

                  </div>

                  <div
                    className="
                      h-20
                      rounded
                      bg-gray-300
                      dark:bg-gray-700
                    "
                  />

                  <div
                    className="
                      h-10
                      rounded-xl
                      bg-gray-300
                      dark:bg-gray-700
                    "
                  />

                </div>

              </div>

            )
          )

        ) : certificates.length === 0 ? (

          /* =====================================================
              NO CERTIFICATES
          ===================================================== */

          <div
            className={`
              col-span-full
              rounded-3xl
              p-12
              text-center
              border

              ${
                lightMode
                  ? "bg-gray-50 border-gray-200 text-gray-500"
                  : "bg-gray-800/50 border-white/10 text-gray-400"
              }
            `}
          >
            No Certificates Available
          </div>

        ) : (

          /* =====================================================
              CERTIFICATE CARDS
          ===================================================== */

          certificates.map((cert) => (

            <div
              key={cert._id}
              className={`
                rounded-3xl
                overflow-hidden
                shadow-2xl
                transition-all
                duration-500
                hover:scale-[1.03]

                ${
                  lightMode
                    ? "bg-white border border-gray-200"
                    : "bg-gray-800/40 border border-white/10"
                }
              `}
            >

              {/* =================================================
                  IMAGE AREA
              ================================================= */}

              <div
                className="
                  h-60
                  overflow-hidden
                  relative
                  bg-gray-800
                "
              >

                {/* -----------------------------------------------
                    INDIVIDUAL IMAGE LOADER

                    This loader belongs ONLY to this image.
                ------------------------------------------------ */}

                {!loadedImages[cert._id] && (

                  <div
                    className={`
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      animate-pulse

                      ${
                        lightMode
                          ? "bg-gray-200"
                          : "bg-gray-700"
                      }
                    `}
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border-4
                        border-teal-400/30
                        border-t-teal-400
                        animate-spin
                      "
                    />

                  </div>

                )}


                {/* -----------------------------------------------
                    ACTUAL CLOUDINARY IMAGE
                ------------------------------------------------ */}

                <img
                  src={cert.imageUrl}
                  alt={cert.title}

                  onLoad={() =>
                    handleImageLoad(cert._id)
                  }

                  onClick={() => {

                    if (loadedImages[cert._id]) {
                      setSelectedImage(
                        cert.imageUrl
                      );
                    }

                  }}

                  className={`
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-500
                    hover:scale-110

                    ${
                      loadedImages[cert._id]
                        ? "opacity-100 cursor-pointer"
                        : "opacity-0 pointer-events-none"
                    }
                  `}
                />

              </div>


              {/* =================================================
                  CERTIFICATE CONTENT
              ================================================= */}

              <div className="p-6">

                {/* Title */}

                <h2
                  className={`
                    text-xl
                    font-bold

                    ${
                      lightMode
                        ? "text-gray-900"
                        : "text-white"
                    }
                  `}
                >
                  {cert.title}
                </h2>


                {/* Issuer */}

                <p
                  className="
                    mt-2
                    text-teal-400
                    font-semibold
                  "
                >
                  {cert.issuer}
                </p>


                {/* Issued Date */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    opacity-70
                    mt-3
                  "
                >
                  <FaCalendarAlt />

                  {cert.issuedDate}
                </div>


                {/* Credential ID */}

                {cert.credentialId && (

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      opacity-70
                      mt-2
                    "
                  >
                    <FaIdCard />

                    {cert.credentialId}
                  </div>

                )}


                {/* =================================================
                    SKILLS
                ================================================= */}

                {cert.skills?.length > 0 && (

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    "
                  >

                    {cert.skills.map(
                      (skill, index) => (

                        <span
                          key={index}
                          className="
                            px-3
                            py-1
                            text-xs
                            rounded-full
                            bg-teal-500/20
                            text-teal-400
                          "
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                )}


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                {cert.description && (

                  <div className="mt-5">

                    <p
                      className="
                        text-sm
                        opacity-80
                        line-clamp-3
                        leading-relaxed
                      "
                    >
                      {cert.description}
                    </p>


                    {cert.description.length > 150 && (

                      <button
                        onClick={() =>
                          setSelectedDescription(cert)
                        }
                        className="
                          mt-3
                          text-teal-400
                          text-sm
                          font-semibold
                          hover:text-teal-300
                          transition
                        "
                      >
                        Read More →
                      </button>

                    )}

                  </div>

                )}


                {/* =================================================
                    VERIFY CERTIFICATE
                ================================================= */}

                {cert.certificateUrl && (

                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      mt-6
                      w-full
                      py-3
                      rounded-xl
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                      font-medium
                    "
                  >
                    Verify Certificate

                    <FaExternalLinkAlt />

                  </a>

                )}

              </div>

            </div>

          ))

        )}

      </div>


      {/* =====================================================
          UPLOAD CERTIFICATE FOOTER
      ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          mt-16
          mb-8
          flex
          justify-end
        "
      >

        <button
          onClick={() =>
            navigate("/uploadcertificates")
          }
          title="Upload Certificate"

          className="
            w-12
            h-12
            rounded-full
            bg-teal-500
            hover:bg-teal-600
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <FaUpload size={20} />
        </button>

      </div>


      {/* =====================================================
          DESCRIPTION MODAL
      ===================================================== */}

      {selectedDescription && (

        <div
          onClick={() =>
            setSelectedDescription(null)
          }

          className="
            fixed
            inset-0
            z-50
            bg-black/80
            flex
            items-center
            justify-center
            p-5
          "
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }

            className={`
              max-w-2xl
              w-full
              rounded-3xl
              p-8
              shadow-2xl
              border

              ${
                lightMode
                  ? "bg-white border-gray-200 text-gray-800"
                  : "bg-gray-900 border-white/10 text-white"
              }
            `}
          >

            <span
              className="
                px-4
                py-1
                rounded-full
                text-xs
                bg-teal-500/10
                border
                border-teal-400/30
                text-teal-400
              "
            >
              Certificate Details
            </span>


            <h2
              className="
                text-2xl
                font-bold
                mt-5
              "
            >
              {selectedDescription.title}
            </h2>


            <p
              className="
                mt-5
                leading-relaxed
                opacity-80
              "
            >
              {selectedDescription.description}
            </p>


            <button
              onClick={() =>
                setSelectedDescription(null)
              }

              className="
                mt-6
                px-5
                py-2
                rounded-xl
                bg-teal-500
                text-white
                hover:bg-teal-600
                transition
              "
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      {selectedImage && (

        <div
          onClick={() =>
            setSelectedImage(null)
          }

          className="
            fixed
            inset-0
            z-50
            bg-black/80
            flex
            items-center
            justify-center
            p-4
          "
        >

          <img
            src={selectedImage}

            onClick={(e) =>
              e.stopPropagation()
            }

            className="
              max-w-full
              max-h-full
              rounded-xl
              shadow-2xl
              object-contain
            "
            alt="Certificate"
          />


          <button
            onClick={() =>
              setSelectedImage(null)
            }

            className="
              absolute
              top-5
              right-5
              text-white
              text-3xl
              font-bold
            "
          >
            ×
          </button>

        </div>

      )}

    </div>
  );
}

