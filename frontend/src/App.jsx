import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const [formStatus, setFormStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleContactSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setFormStatus("");

try {
  const response = await fetch(
    "https://formspree.io/f/mnpjlwnn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message.");
  }

  setFormStatus("Message sent successfully!");
  setFormData({ name: "", email: "", message: "" });
} catch (error) {
  console.error("Contact form error:", error);
  setFormStatus("Could not send your message. Please try again.");
} finally {
  setIsSubmitting(false);
}

};

  const projects = [
{
  number: "01",
  title: "Developer Toolkit AI",
  category: "AI / FULL STACK",
  description:
    "An AI-powered toolkit designed to simplify everyday developer workflows.",
  tags: ["React", "TypeScript", "FastAPI", "LLM"],
  github: "https://github.com/meghana-1603/Developer-Toolkit-AI",
},

    {
      number: "02",
      title: "AI Recipe Generator",
      category: "ARTIFICIAL INTELLIGENCE",
      description:
        "A recipe generation application built with Python and language models.",
      tags: ["Python", "Streamlit", "NLP"],
    },
    
{
  number: "03",
  title: "Mana Katha",
  category: "AI / CULTURAL HERITAGE",
  description:
    "A community-driven platform for preserving Indian village stories, memories, and traditional knowledge through multilingual text and voice contributions.",
  tags: ["Python", "Streamlit", "NLP", "Multilingual AI"],
},
  ];
    const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => {
          if (activeFilter === "AI") {
            return (
              project.category.includes("AI") ||
              project.title.includes("AI")
            );
          }

          if (activeFilter === "FULL STACK") {
            return project.category.includes("FULL STACK");
          }

          if (activeFilter === "DATA") {
            return project.category === "DATA";
          }

          return true;
        });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          MD<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M MEGHANA DASARI</p>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>intelligence.</span>
            </h1>

            <p className="hero-description">
              I'm a Data Science and AI student who enjoys building useful
              software, exploring intelligent systems, and turning ideas
              into products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="secondary-button">
                Get in touch
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/meghana-1603/" target="_blank" rel="noreferrer">
                <span aria-hidden="true">⌘</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/meghana-dasari/" target="_blank" rel="noreferrer">
                <span aria-hidden="true">in</span> LinkedIn
              </a>
              <a href="mailto:dasarimeghana162006@gmail.com">
                <span aria-hidden="true">✉</span> Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-card">
              <span className="card-label">CURRENTLY EXPLORING</span>
              <div className="visual-symbol">{"</>"}</div>
              <h2>Code. Create. Iterate.</h2>
              <p>Learning continuously. Building thoughtfully.</p>

              <div className="visual-footer">
                <span>SOFTWARE</span>
                <span>AI / DATA</span>
                <span>WEB</span>
              </div>
            </div>

            <div className="floating-badge badge-top">✳ AI + CODE</div>

            <div className="floating-badge badge-bottom">
              <span className="status-dot" />
              Always learning
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>

          <h2 className="section-heading">
            Curious by nature.
            <br />
            <span>Driven by creation.</span>
          </h2>

          <p className="section-description">
            I'm pursuing a B.Tech in Data Science and Artificial Intelligence.
            I enjoy working across software development, data, and AI, with
            a focus on understanding how things work—not just making them work.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>03+</strong>
              <span>Project explorations</span>
            </div>
            <div className="stat-card">
              <strong>AI + SWE</strong>
              <span>Areas of interest</span>
            </div>
            <div className="stat-card">
              <strong>∞</strong>
              <span>Things left to learn</span>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>

          <div className="section-title-row">
            <h2 className="section-heading">
              Ideas into <span>reality.</span>
            </h2>
            <span className="project-count">03 PROJECTS</span>
          </div>

<div className="project-filters" role="group" aria-label="Filter projects">
  {["ALL", "AI", "FULL STACK", "DATA"].map((filter) => (
    <button
      key={filter}
      type="button"
      className={`filter-button ${activeFilter === filter ? "active" : ""}`}
      onClick={() => setActiveFilter(filter)}
      aria-pressed={activeFilter === filter}
    >
      {filter}
    </button>
  ))}
</div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.number} / PROJECT</span>
                  <a
                 href={project.github}
                target="_blank"
  rel="noreferrer"
  aria-label={`View ${project.title} on GitHub`}
>
  ↗
</a>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="eyebrow">03 / MY TOOLKIT</p>

          <h2 className="section-heading">
            Tools I use to <span>build.</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-group">
              <span>01</span>
              <h3>Languages</h3>
              <p>Python · Java · SQL · C · JavaScript</p>
            </div>

            <div className="skill-group">
              <span>02</span>
              <h3>Web development</h3>
              <p>React · TypeScript · Tailwind CSS · REST APIs</p>
            </div>

            <div className="skill-group">
              <span>03</span>
              <h3>AI &amp; Data</h3>
              <p>Machine Learning · NLP · LLM Applications · Pandas</p>
            </div>

            <div className="skill-group">
              <span>04</span>
              <h3>Backend &amp; Tools</h3>
              <p>FastAPI · SQLite · MySQL · MongoDB · Git</p>
            </div>
          </div>
        </section>

<section className="section contact-section" id="contact">
  <p className="eyebrow">04 / GET IN TOUCH</p>

  <h2 className="section-heading">
    Have an idea?
    <br />
    <span>Let's build something.</span>
  </h2>

  <p className="section-description">
    Interested in software, AI, data, or collaborating on a project?
    I'd love to hear from you.
  </p>


<form className="contact-form" onSubmit={handleContactSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    aria-label="Your name"
    value={formData.name}
    onChange={(event) =>
      setFormData({ ...formData, name: event.target.value })
    }
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    aria-label="Your email"
    value={formData.email}
    onChange={(event) =>
      setFormData({ ...formData, email: event.target.value })
    }
    required
  />

  <textarea
    name="message"
    placeholder="Tell me about your idea..."
    aria-label="Your message"
    rows={5}
    value={formData.message}
    onChange={(event) =>
      setFormData({ ...formData, message: event.target.value })
    }
    required
  />

  <button
    type="submit"
    className="primary-button"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Sending..." : "Send message"}
    <span aria-hidden="true">↗</span>
  </button>

  {formStatus && <p role="status">{formStatus}</p>}
</form>

</section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          MD<span>.</span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <span>© {new Date().getFullYear()} Meghana Dasari</span>
      </footer>
    </div>
  );
}

export default App;