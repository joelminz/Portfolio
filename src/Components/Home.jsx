import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section">
        <h3 className="welcome-text" data-aos="fade-down">Welcome To My Portfolio!</h3>

        <div className="photo">
          <div className="item1"></div>
          <div className="item2"></div>
          <div className="item3"></div>
        </div>

        <div className="text">
          <div className="i1">
            <p>
              J<span className="O">O</span>EL
            </p>
          </div>
          <div className="surname">
            <p>MINZ</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="container-fluid icons" data-aos="zoom-in">
          <a href="https://github.com/joelminz" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/joel-minz-86914625a/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:joelminz111@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/joelminz" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/joel.minz.31/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section id="about" className="aboutme" data-aos="fade-right">
        <h2>
          ABOUT <span className="highlight">ME</span>
        </h2>
        <div className="about-content">
          <p>
            Hey there! I'm <strong>Joel Minz</strong>, a creative and driven full-stack developer based in Bhilai,
            Chhattisgarh. I specialize in the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js —
            and love building smooth, responsive web applications that solve real problems.
          </p>
          <p>
            Born in June 2003, I’ve always had a deep appreciation for both technology and the arts. I completed my
            schooling at <strong>MGM School, Bhilai</strong>, where I laid the foundation for both my academic and
            extracurricular passions.
          </p>
          <p>
            My journey into development began at <strong>JSpiders, Bangalore</strong>, where I honed my technical skills
            and learned to think like a true software engineer. I enjoy working on full-stack projects that blend
            elegant frontends with robust backend architecture.
          </p>
          <p>
            Outside of code, I’m a big fan of sports and music. I’ve competed in inter-school{' '}
            <strong>basketball</strong> tournaments and continue to play <strong>football</strong> during college. When
            I’m not on the field or at the keyboard, you’ll find me <strong>strumming my guitar</strong>, singing my
            favorite songs, or experimenting with cover tracks.
          </p>
          <p>
            I’m always excited to learn new tools, explore new ideas, and contribute to innovative projects. My mission
            is to grow as a developer while bringing creativity, collaboration, and commitment to every team I join.
          </p>
        </div>
      </section>

      {/* CONTACT ME SECTION */}
      <section id="contact" className="contact" data-aos="fade-left">
        <h2>
          CONTACT <span className="highlight">ME</span>
        </h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Enter your NAME" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Enter your EMAIL" />
          </div>
          <div className="form-group">
            <label htmlFor="gender">GENDER: </label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
          <button className="btn bg-light" type="submit">
            Submit
          </button>
        </fieldset>
      </section>
    </>
  );
}

export default Home;
