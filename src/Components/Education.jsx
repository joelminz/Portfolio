import React from 'react';
import '../Styles/Education.css'; // Styles remain here

function Education() {
  return (
    <>
      <h1 style={{ fontSize: '80px', textAlign: 'center', color: 'white' }}>EDUCATION</h1>

      <div className="education-container">
        {/* 10th */}
        <div className="items items1" data-aos="fade-up" data-aos-delay="0">
          <h2 style={{ textAlign: 'center' }}>10th</h2>
          <br />
          <ul style={{ color: 'beige' }}>
            <li>School: MGM S.S. School</li>
            <li>CBSE Board</li>
            <li>71.8% aggregate</li>
          </ul>
        </div>

        {/* 12th */}
        <div className="items items2" data-aos="fade-up" data-aos-delay="100">
          <h2 style={{ textAlign: 'center' }}>12th</h2>
          <br />
          <ul style={{ color: 'beige' }}>
            <li>School: MGM S.S. School</li>
            <li>CBSE Board</li>
            <li>72.4% aggregate</li>
          </ul>
        </div>

        {/* UG */}
        <div className="items items3" data-aos="fade-up" data-aos-delay="200">
          <h2 style={{ textAlign: 'center' }}>UG</h2>
          <br />
          <ul style={{ color: 'beige' }}>
            <li>College: PES College of Engineering</li>
            <li>University: VTU Belagavi</li>
            <li>6.32 CGPA</li>
          </ul>
        </div>

        {/* Internship */}
        <div className="items items4" data-aos="fade-up" data-aos-delay="300">
          <h2 style={{ textAlign: 'center' }}>Internship</h2>
          <br />
          <ul style={{ color: 'beige' }}>
            <li>JSpiders</li>
            <li>MERN Stack</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Education;
