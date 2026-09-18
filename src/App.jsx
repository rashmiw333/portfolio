import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2
} from "lucide-react";

const projects = [
  {
    title: "Anvaya CRM",
    image: "/anvaya_crm.png",
    description:
      "A full-stack lead management CRM for tracking leads through sales stages, assigning sales agents, adding comments, and viewing pipeline reports.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    demo: "https://anvaya-front-end.vercel.app/",
    code: "https://github.com/rashmiw333/Anvaya-FrontEnd"
  },
  {
    title: "Electromart",
    image: "/electromart-application.png",
    description:
      "An electronics shopping application with product search, category and rating filters, sorting, product details, wishlist, cart management and backend integration.",
    tech: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    demo: "https://e-commerce-front-end-tawny.vercel.app/",
    code: "https://github.com/rashmiw333/E-Commerce-FrontEnd"
  }
];

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "React Router",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Chart.js"
];

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <header className="nav">

        <a href="#home" className="logo">
          RW
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>


      <main>

        {/* ================= HOME ================= */}

        <section id="home" className="hero section">

          <p className="eyebrow">
            FULL-STACK DEVELOPER
          </p>

          <h1>Rashmi Wankhade</h1>

          <div className="accent-line"></div>

          <p className="hero-text">
            Full-stack developer creating practical web applications with React,
            Node.js and MongoDB.
          </p>

          <p className="hero-text secondary">
            I enjoy turning ideas into responsive interfaces, REST APIs and
            complete full-stack applications.
          </p>

          <div className="buttons">

            <a
              href="#contact"
              className="button primary"
            >
              Contact Me
            </a>

            <a
              href="/Rashmi_Wankhade_Resume_New.pdf"
              className="button secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading">

            <h2>
              Projects
            </h2>

            <p>
              Selected full-stack projects and practical web applications
            </p>

            <div className="accent-line small"></div>

          </div>


          <div className="project-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* Project Image */}
                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>


                {/* Project Details */}
                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  {/* Technology Tags */}
                  <div className="tags">

                    {project.tech.map((item) => (

                      <span key={item}>
                        {item}
                      </span>

                    ))}

                  </div>


                  {/* Links */}
                  <div className="project-links">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={17} />
                      Demo
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={17} />
                      Code
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">

            <h2>
              Tech Stack
            </h2>

            <p>
              Technologies and tools I work with
            </p>

            <div className="accent-line small"></div>

          </div>


          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill"
                key={skill}
              >

                <Code2 size={22} />

                <span>
                  {skill}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-heading">

            <h2>
              Connect
            </h2>

            <p>
              Let's connect and build something useful
            </p>

            <div className="accent-line small"></div>

          </div>


          <div className="contact-grid">

            {/* Email */}

            <a
              className="contact-card"
              href="mailto:rashmiwankhade99@gmail.com"
            >

              <Mail />

              <div>

                <h3>
                  Email
                </h3>

                <p>
                  rashmiwankhade99@gmail.com
                </p>

              </div>

            </a>


            {/* GitHub */}

            <a
              className="contact-card"
              href="https://github.com/rashmiw333"
              target="_blank"
              rel="noreferrer"
            >

              <Github />

              <div>

                <h3>
                  GitHub
                </h3>

                <p>
                  github.com/rashmiw333
                </p>

              </div>

            </a>


            {/* LinkedIn */}

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/rashmi-wankhede-069b793a1/"
              target="_blank"
              rel="noreferrer"
            >

              <Linkedin />

              <div>

                <h3>
                  LinkedIn
                </h3>

                <p>
                  linkedin.com/in/rashmi-wankhede
                </p>

              </div>

            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © {new Date().getFullYear()} Rashmi Wankhade
        </p>

        <p>
          Built with React
        </p>

      </footer>


      {/* Back to Top */}

      <a
        href="#home"
        className="top-button"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>

    </div>
  );
}

export default App;