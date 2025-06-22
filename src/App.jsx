import './App.css';
import { useRef } from 'react';

function App() {
  const cardRef = useRef(null);

  // ฟังก์ชันสำหรับ mouse move effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 10; // ปรับองศา
    const rotateY = (x / (rect.width / 2)) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.boxShadow = `0 24px 80px #c800ff66, 0 8px 32px #1e3c72cc`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.boxShadow = `0 16px 64px #c800ff44, 0 6px 24px #1e3c72cc`;
  };

  return (
    <div className="profile-bg">
      <div
        className="profile-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img className="profile-avatar" src="01.jpg" alt="ME" />
        <h1 className="profile-name">Portfolio</h1>
        <div className="profile-status"></div>
        <div className="profile-info">
          <img className="profile-mini-avatar" src="01.jpg" alt="ME" />
          <h2 className="profile-name">Mr.Phawin Inthanon</h2>
          <span className="profile-username"></span>
          <span className="profile-verified"></span>
          <span className="profile-lastseen"></span>
        </div>
        <div className="profile-socials">
          <a href="https://www.instagram.com/wxindd._pn/"><img src="ig.jpg" alt="Instagram" /></a>
          <a href="https://www.facebook.com/Phawinwind?locale=th_TH"><img src="fb.png" alt="Facebook" /></a>
          <a href="https://discordapp.com/users/792096886273474611"><img src="Dis.png" alt="Discord" /></a>
          <a href="https://github.com/WIND2008-PN"><img src="Git.jpg" alt="Github" /></a>
          <a href="https://line.me/ti/p/CXn_I3_hNm"><img src="Line.png" alt="Line" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
