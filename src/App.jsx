import { useState } from 'react';
import './App.css';
import { AvatarPic } from './assets';
import ProjectGrid from './ProjectGrid';
import NavBar from './Navbar';
import Hero from './Hero';

function App() {

  return (
    <div>
    <NavBar />
      {/* <!-- Navigation--> */}
      {/* <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Alex Linden</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#projects">Projects</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* <!-- Masthead--> */}
      <header className="masthead bg-primary text-white text-center" id='top'>
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <img className="masthead-avatar mb-5" src={AvatarPic} alt="..." />
          {/* <!-- Masthead Heading--> */}
          <h1 className="masthead-heading text-uppercase mb-0">Alex Linden</h1>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          <p className="masthead-subheading font-weight-light mb-0">Software Engineer - JavaScript - Python</p>
        </div>
      </header>
      {/* <!-- Portfolio Section--> */}
      <section id="projects" >
      <ProjectGrid />
      </section>
      {/* <!-- About Section--> */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* <!-- About Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- About Section Content--> */}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">Hello! I am a software engineer based in San Francisco, CA. I currently work as a
                contract software engineer for Amethyst Octopus. Some of our recent projects can be seen below.
                Prior to that I was a software engineer teaching assistant for CodePath.org. At CodePath I had
                the
                privilege to help guide, teach and mentor 60 incredibly talented scholars through a web
                development
                program teaching them the PERN stack, Postgresql, Express.js, React, Node.js.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">I graduated from
                Rithm School where I had experience working in Javascript, Python, React,
                Node, Express, Flask, Django, and Typescript. Prior to starting my journey
                towards becoming a software engineer, I was a general manager in the hospitality industry.
                I loved my career but was curious about technology.
                I started teaching myself Javascript and found a real passion for it.
                In early 2022 I decided to start the journey towards becoming a full
                time software engineer. Since graduating from a full stack coding
                bootcamp I am continuing to grow my skills while looking for a full time position.
              </p>
            </div>
          </div>
          {/* <!-- About Section Button--> */}
          <div className="text-center mt-4">
            <a target="_blank" className="btn btn-xl btn-outline-light"
              href="https://drive.google.com/file/d/1uN6sea5yfy-JsQ-bOYzV63iodUAMw5aj/view?usp=sharing" rel="noreferrer">
              <i className="fas fa-download me-2"></i>
              Resume
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section className="page-section" id="contact">
        <div className="container">
          {/* <!-- Contact Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>

          </div>
          <h2 className="text-center text-uppercase text-secondary mb-0">alextl2004@gmail.com</h2>
          {/* <!-- Contact Section Form--> */}
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                San Francisco, CA
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              {/* <!-- <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                className="fab fa-fw fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a> --> */}
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/alex-linden/"><i
                className="fab fa-fw fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Alex-Linden"><i
                className="fab fa-fw fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; Alex Linden 2022</small></div>
      </div>
      {/* <!-- Portfolio Modals--> */}

      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>

    </div>
  );
}

export default App;
