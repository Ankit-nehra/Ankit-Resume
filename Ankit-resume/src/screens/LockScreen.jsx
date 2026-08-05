import { useEffect, useRef, useState } from "react";
import styles from "./LockScreen.module.css";
import wallpaper from "../assets/om.jpg";
import profileImage from "../assets/photo.jpg";

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [statusTime, setStatusTime] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  const startY = useRef(0);

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

  const handleStart = (y) => {
    startY.current = y;
  };

  const handleEnd = (y) => {
    if (startY.current - y > 100) {
      setUnlocking(true);
      setTimeout(onUnlock, 500);
    }
  };

  return (
    <div
      className={`${styles.screen} ${unlocking ? styles.unlock : ""}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientY)}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseUp={(e) => handleEnd(e.clientY)}
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      {/* Top Status Bar */}
      <div className={styles.statusBar}>
        <span>{statusTime}</span>
        <span>🔋 87%</span>
      </div>

      {/* Main Content */}
      <div className={styles.center}>
        <img
          src={profileImage}
          alt="Profile"
          className={styles.profile}
        />

        <div className={styles.timeBox}>
          <p className={styles.date}>{date}</p>
          <h1 className={styles.time}>{time}</h1>
        </div>

        <div className={styles.card}>
          <h2>Amit Nehra</h2>
          <p>Senior Manager – Strategy & Operations</p>
        </div>
      </div>

      {/* Swipe Hint */}
      <div className={styles.swipe}>
        <span>Swipe up</span>
        <div className={styles.arrow}>⌃</div>
      </div>
    </div>
  );
}
