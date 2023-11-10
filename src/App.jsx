import { useState } from 'react';
import './App.css';
import profilePic from './assets/img/profilePic.jpeg'

function App() {

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top">Alex Linden</a>
          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                href="#portfolio">Projects</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                href="#about">About</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <img class="masthead-avatar mb-5" src={profilePic} alt="..." />
          {/* <!-- Masthead Heading--> */}
          <h1 class="masthead-heading text-uppercase mb-0">Alex Linden</h1>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          <p class="masthead-subheading font-weight-light mb-0">Software Engineer - JavaScript - Python</p>
        </div>
      </header>
      {/* <!-- Portfolio Section--> */}
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div class="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/ReactNative.png" alt="React Native login Screen" />
              </div>
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/jobly_home_page.png" alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 3--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/Warbler_landing_page.png" alt="..." />
              </div>
            </div>
            {/* <!-- Portfolio Item 4--> */}
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/tags_admin_page.png" alt="..." />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- About Section--> */}
      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          {/* <!-- About Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- About Section Content--> */}
          <div class="row">
            <div class="col-lg-4 ms-auto">
              <p class="lead">Hello! I am a software engineer based in San Francisco, CA. I currently work as a
                contract software engineer for Amethyst Octopus. Some of our recent projects can be seen below.
                Prior to that I was a software engineer teaching assistant for CodePath.org. At CodePath I had
                the
                privilege to help guide, teach and mentor 60 incredibly talented scholars through a web
                development
                program teaching them the PERN stack, Postgresql, Express.js, React, Node.js.
              </p>
            </div>
            <div class="col-lg-4 me-auto">
              <p class="lead">I graduated from
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
          <div class="text-center mt-4">
            <a target="_blank" class="btn btn-xl btn-outline-light"
              href="https://drive.google.com/file/d/1uN6sea5yfy-JsQ-bOYzV63iodUAMw5aj/view?usp=sharing">
              <i class="fas fa-download me-2"></i>
              Resume
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section class="page-section" id="contact">
        <div class="container">
          {/* <!-- Contact Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>

          </div>
          <h2 class="text-center text-uppercase text-secondary mb-0">alextl2004@gmail.com</h2>
          {/* <!-- Contact Section Form--> */}
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            {/* <!-- Footer Location--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                San Francisco, CA
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              {/* <!-- <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                class="fab fa-fw fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a> --> */}
              <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/alex-linden/"><i
                class="fab fa-fw fa-linkedin-in"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/Alex-Linden"><i
                class="fab fa-fw fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; Alex Linden 2022</small></div>
      </div>
      {/* <!-- Portfolio Modals--> */}
      {/* <!-- Portfolio Modal 1--> */}
      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Rithm SIS Mobile
                      App</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <iframe width="315" height="560" src="https://youtube.com/embed/jQzYFQ0SgSU"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
                      allowfullscreen></iframe>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-4">
                      <ul>
                        <li>Designed serializer in Django application to return clean data for API call</li>
                        <li>React-Native App</li>
                        <li>Implemented Stack navigation nested inside of tab navigation</li>
                        <li>Uses authentication </li>
                      </ul>
                    </p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
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
      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Jobly</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/jobly_company_list.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-4">
                      <a target="_blank" href="https://wry-dolls.surge.sh/">Jobly Live Demo</a>
                      <h5>Username: demo </h5>
                      <h5>Password: password</h5>
                      <a target="_blank" href="https://github.com/Alex-Linden/react-jobly">Github frontend</a>
                      <a target="_blank" href="https://github.com/Alex-Linden/express-jobly">Github
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
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
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
      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Warbler</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/Warbler_home_page.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-4">
                      <a target="_blank" href="https://r26-alex-warbler.herokuapp.com/">Warbler Live
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
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
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
      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
              aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Rithm SIS Tags</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/tags_search_example.png"
                      alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-4">
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
                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/tags_on_page.png"
                      alt="..." />
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
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
