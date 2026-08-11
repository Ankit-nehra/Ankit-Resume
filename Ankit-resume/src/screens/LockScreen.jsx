import { useEffect, useRef, useState } from "react";
import styles from "./LockScreen.module.css";
import profileImage from "../assets/photo.jpg";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiSocketdotio,
  SiCplusplus,
  SiPostman,
  SiVercel,
  SiCloudinary,
  SiSupabase,
} from "react-icons/si";

/*
  Skills are manually positioned so that:
  - Important technologies are more visible
  - Icons don't randomly overlap
  - Center profile/time area stays readable
  - Background looks more like a premium animated portfolio
*/

const skills = [
  // Core Full Stack
  {    name: "React",    icon: FaReact,    color: "#61DAFB",    x: 12,    y: 18,  },
  {    name: "JavaScript",    icon: FaJs,    color: "#F7DF1E",    x: 72,    y: 12,  },
  {    name: "Node.js",    icon: FaNodeJs,    color: "#68A063",    x: 84,    y: 34,  },
  {    name: "Express",    icon: SiExpress,    color: "#FFFFFF",    x: 10,    y: 43,  },
  {    name: "MongoDB",    icon: SiMongodb,    color: "#47A248",    x: 78,    y: 70,  },

  // Databases / Backend
  {    name: "PostgreSQL",    icon: SiPostgresql,    color: "#4169E1",    x: 18,    y: 76,  },
  {    name: "Redis",    icon: SiRedis,    color: "#DC382D",    x: 91,    y: 24,  },

  // Frontend
  {    name: "HTML5",    icon: FaHtml5,    color: "#E34F26",    x: 37,    y: 9,  },
  {    name: "CSS3",    icon: FaCss3Alt,    color: "#1572B6",    x: 56,    y: 15,  },
  {    name: "Tailwind",    icon: SiTailwindcss,    color: "#38BDF8",    x: 88,    y: 53,  },

  // Real-time / Communication
  {    name: "Socket.IO",    icon: SiSocketdotio,    color: "#FFFFFF",    x: 24,    y: 31,  },

  // Cloud / DevOps
  {    name: "Docker",    icon: FaDocker,    color: "#2496ED",    x: 6,    y: 27,  },
  {    name: "Vercel",    icon: SiVercel,    color: "#FFFFFF",    x: 48,    y: 80,  },
  {    name: "Cloudinary",    icon: SiCloudinary,    color: "#3448C5",    x: 62,    y: 32,  },
  {    name: "Supabase",    icon: SiSupabase,    color: "#3ECF8E",    x: 34,    y: 67,  },

  // Development Tools
  {    name: "Git",    icon: FaGitAlt,    color: "#F05032",    x: 61,    y: 89,  },
  {    name: "GitHub",    icon: FaGithub,    color: "#FFFFFF",    x: 43,    y: 93,  },
  {    name: "Postman",    icon: SiPostman,    color: "#FF6C37",    x: 69,    y: 47,  },

  // Programming Languages
  {    name: "Python",    icon: FaPython,    color: "#3776AB",    x: 7,    y: 62,  },
  {    name: "Java",    icon: FaJava,    color: "#F89820",    x: 91,    y: 82,  },
  {    name: "C++",    icon: SiCplusplus,    color: "#00599C",    x: 30,    y: 88,  },
];

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [statusTime, setStatusTime] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  const startY = useRef(0);

  /*
    =========================
    LIVE CLOCK
    =========================
  */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      setTime(`${h}:${m}:${s}`);
      setStatusTime(`${h}:${m}`);

      setDate(
        now.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /*
    =========================
    SWIPE TO UNLOCK
    =========================
  */

  const handleStart = (y) => {
    startY.current = y;
  };

  const handleEnd = (y) => {
    if (startY.current - y > 100 && !unlocking) {
      setUnlocking(true);

      setTimeout(() => {
        onUnlock();
      }, 500);
    }
  };

  return (
    <div
      className={`${styles.screen} ${
        unlocking ? styles.unlock : ""
      }`}
      onTouchStart={(e) =>
        handleStart(e.touches[0].clientY)
      }
      onTouchEnd={(e) =>
        handleEnd(e.changedTouches[0].clientY)
      }
      onMouseDown={(e) =>
        handleStart(e.clientY)
      }
      onMouseUp={(e) =>
        handleEnd(e.clientY)
      }
    >
      {/* =========================
          ANIMATED SKILL BACKGROUND
          ========================= */}

      <div className={styles.skillBackground}>
        {/* Ambient Glows */}
        <div className={styles.greenGlow}></div>
        <div className={styles.goldGlow}></div>

        {/* Glass Orbits */}
        <div
          className={`${styles.orbit} ${styles.orbitOne}`}
        ></div>

        <div
          className={`${styles.orbit} ${styles.orbitTwo}`}
        ></div>

        {/* Technology Icons */}
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className={styles.skill}
              style={{
                "--x": `${skill.x}%`,
                "--y": `${skill.y}%`,
                "--delay": `${index * -0.7}s`,
                "--duration": `${12 + (index % 6)}s`,
                "--color": skill.color,
              }}
            >
              <Icon />

              <span>{skill.name}</span>
            </div>
          );
        })}

        {/* Dark Vignette */}
        <div className={styles.overlay}></div>
      </div>

      {/* =========================
          TOP STATUS BAR
          ========================= */}

      <div className={styles.statusBar}>
        <span>{statusTime}</span>

        <span>🔋 87%</span>
      </div>

      {/* =========================
          CENTER CONTENT
          ========================= */}

      <div className={styles.center}>
        {/* Profile */}
        <img
          src={profileImage}
          alt="Ankit Nehra"
          className={styles.profile}
        />

        {/* Time */}
        <div className={styles.timeBox}>
          <p className={styles.date}>{date}</p>

          <h1 className={styles.time}>{time}</h1>
        </div>

        {/* Profile Card */}
        <div className={styles.card}>
          <h2>Ankit Nehra</h2>

          <p>
            Full Stack Developer
            <br />
            Building Scalable Web Apps
          </p>

          <div className={styles.techLine}>
            React • Node • MongoDB • Docker
          </div>
        </div>
      </div>

      {/* =========================
          SWIPE HINT
          ========================= */}

      <div className={styles.swipe}>
        <span>Swipe up</span>

        <div className={styles.arrow}>⌃</div>
      </div>
    </div>
  );
}
