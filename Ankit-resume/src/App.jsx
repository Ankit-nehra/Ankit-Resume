// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

import LockScreen from "./screens/LockScreen";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";
import Achievements from "./screens/Achievements";
import Certificates from "./screens/Certificates";
import UploadCertificates from "./screens/UploadCertificates";

import UploadGuard from "./screens/UploadGuard";
// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  // Lock Screen
  const [unlocked, setUnlocked] = useState(false);

  // Theme State
  const [lightMode, setLightMode] = useState(false);

  return (
    <Router>
      {!unlocked ? (
        <LockScreen onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <ScrollToTop />

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                />
              }
            >
              <Route index element={<Navigate to="/profile" />} />

              <Route
                path="profile"
                element={<Profile lightMode={lightMode} />}
              />

              <Route
                path="experience"
                element={<Experience lightMode={lightMode} />}
              />

              <Route
                path="skills"
                element={<Skills lightMode={lightMode} />}
              />

              <Route
                path="achievements"
                element={<Achievements lightMode={lightMode} />}
              />

              <Route
                path="certificates"
                element={<Certificates lightMode={lightMode} />}
              />
              <Route
  path="uploadcertificates"
  element={
    <UploadGuard lightMode={lightMode}>
      <UploadCertificates 
        lightMode={lightMode}
      />
    </UploadGuard>
  }
/>
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
