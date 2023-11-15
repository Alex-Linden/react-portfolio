import { useState } from 'react';
import './App.css';
import {
  AvatarPic,
  ReactNative,
  jobly_company_list,
  jobly_home_page,
  tags_admin_page,
  tags_on_page,
  tags_search_example,
  Warbler_home_page,
  Warbler_landing_page,
} from './assets';
import ProjectGrid from './ProjectGrid';

function App() {

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
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
                href="#portfolio">Projects</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead bg-primary text-white text-center">
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
          <ProjectGrid />
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div
                  className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                    className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={ReactNative} alt="React Native login Screen" />
              </div>
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div
                  className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                    className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={jobly_home_page} alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 3--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div
                  className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                    className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={Warbler_landing_page} alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 4--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div
                  className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i
                    className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={tags_admin_page} alt="..." />
              </div>
            </div>

          </div>
        </div>
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
      {/* <!-- Portfolio Modal 1--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Rithm SIS Mobile
                      App</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <iframe width="315" height="560" src="https://youtube.com/embed/jQzYFQ0SgSU"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
                      allowfullscreen></iframe>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      <ul>
                        <li>Designed serializer in Django application to return clean data for API call</li>
                        <li>React-Native App</li>
                        <li>Implemented Stack navigation nested inside of tab navigation</li>
                        <li>Uses authentication </li>
                      </ul>
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 2--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Jobly</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/jobly_company_list.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      <a target="_blank" href="https://wry-dolls.surge.sh/" rel="noreferrer">Jobly Live Demo</a>
                      <h5>Username: demo </h5>
                      <h5>Password: password</h5>
                      <a target="_blank" href="https://github.com/Alex-Linden/react-jobly" rel="noreferrer">Github frontend</a>
                      <a target="_blank" href="https://github.com/Alex-Linden/express-jobly" rel="noreferrer">Github
                        backend</a>
                      <ul>
                        <li>Built job application and search site using React for frontend,
                          Express and PostgreSQL as backend</li>
                        <li>Express backend devised with full Test Driven Development cycle,
                          maintaining 100% test coverage</li>
                        <li>Designed and implemented component hierarchy for React frontend</li>
                        <li>Utilized user token authentication combined with state and
                          context hooks alongside local storage to enhance user experience</li>
                        <li>Implemented live search using debounce with the Lodash library </li>
                      </ul>
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 3--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Warbler</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/Warbler_home_page.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      <a target="_blank" href="https://r26-alex-warbler.herokuapp.com/" rel="noreferrer">Warbler Live
                        Demo</a>
                      <h5>Username: demo </h5>
                      <h5>Password: password</h5>
                      <a href="https://github.com/Alex-Linden/Flask-warbler">Github</a>
                      <ul>
                        <li>Engineered Twitter clone platform utilizing Python, Flask, PostgreSQL,
                          and SQLAlchemy</li>
                        <li>Added user authentication/authorization to RESTful API routes
                          utilizing Bcrypt password hashing</li>
                        <li>Managed many-to-many database relationships
                          with Python ORM SQLAlchemy</li>
                      </ul>
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 4--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Rithm SIS Tags</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/tags_search_example.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      <ul>
                        <li>Built a Tags feature in Django on SIS,
                          allowing students and personnel to search for specific tags across 4 unique
                          applications,
                          tracking usage rate, while maintaining 100% test coverage</li>
                        <li>Developed 2 new data models and added relationships to 4 existing data models.
                          Incorporated tags into Watson search indexing, integrating add,
                          edit and delete functionality to SIS administration for staff</li>
                      </ul>
                    </p>
                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/tags_on_page.png"
                      alt="..." />
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 5--> */}

      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>

    </>
  );
}

export default App;
