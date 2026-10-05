import { useRef, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react';

const certifications = [
  {
    name: 'Certified Threat Intelligence 101',
    issuer: 'arcX',
    image: '/certifications/cti-101.webp',
  },
  {
    name: 'Certified Network Pentester',
    issuer: 'The SecOps Group',
    image: '/certifications/network-pentester.webp',
  },
  {
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUMstudy',
    image: '/certifications/scrum-fundamentals.webp',
  },
];

const skills = [
  {
    title: 'Product',
    description:
      'Turning user needs and business goals into clear product direction.',
    icon: MessageCircle,
    items: [
      'Product Discovery',
      'Requirement Analysis',
      'User-Centered Thinking',
      'Agile / Scrum',
      'Product Strategy',
    ],
  },
  {
    title: 'Data',
    description:
      'Using data and analytics to understand problems and support decisions.',
    icon: BarChart3,
    items: [
      'Python',
      'SQL',
      'Data Analysis',
      'Data Visualization',
      'Machine Learning',
    ],
  },
  {
    title: 'Technology',
    description:
      'Working with modern tools to prototype, build, and ship digital products.',
    icon: Code2,
    items: [
      'React',
      'TypeScript',
      'Github',
      'Docker',
      'AI-Assisted Development',
    ],
  },
];

const experiences = [
  {
    role: 'Associate Product Manager Intern',
    organization: 'PT Tower Bersama Infrastructure Tbk.',
    timeline: 'Aug 2026 — Present',
    location: 'Jakarta, Indonesia',
    points: [
      'Spearheaded product architecture for TBIG Stream, an enterprise local-network video meeting system using LiveKit.',
      'Integrated an AI-powered RAG / LLM module for real-time transcript extraction and action-item summaries.',
      'Streamlined internal team communication while reducing external network bandwidth usage.',
    ],
  },
  {
    role: 'Project Based Virtual Intern - Data Scientist',
    organization: 'ID/X Partners × Rakamin Academy',
    timeline: 'Dec 2025',
    location: 'Remote, Indonesia',
    points: [
      'Tackled data-science challenges across scoring analytics and product-development domains.',
      'Engineered end-to-end machine-learning models using SQL and Python for production-oriented scoring workflows.',
    ],
  },
  {
    role: 'Project Based Virtual Intern - Big Data Analytics',
    organization: 'Kimia Farma × Rakamin Academy',
    timeline: 'Nov — Dec 2025',
    location: 'Remote, Indonesia',
    points: [
      'Processed corporate data pipelines and evaluated data-model performance.',
      'Built an executive-level annual sales dashboard covering key business KPIs and revenue metrics.',
    ],
  },
  {
    role: 'Project Based Virtual Intern - Business Intelligence Analyst',
    organization: 'Bank Muamalat × Rakamin Academy',
    timeline: 'Oct — Nov 2025',
    location: 'Remote, Indonesia',
    points: [
      'Queried and validated PostgreSQL and MySQL databases to identify business trends and anomalies.',
      'Translated complex datasets into actionable insights and interactive stakeholder dashboards.',
    ],
  },
  {
    role: 'DGX HPC Practicum Assistant',
    organization: 'Universitas Gunadarma',
    timeline: 'March 2025 - Nov 2025',
    location: 'Depok, Indonesia',
    points: [
      'Assisted students during hands-on high-performance computing and practical laboratory sessions.',
      'Supported technical troubleshooting and helped students understand computing workflows and laboratory exercises.',
    ],
  },
  {
    role: 'IT Staff - UI/UX',
    organization: 'BEM FIKTI Universitas Gunadarma',
    timeline: 'Dec 2024 — Aug 2025',
    location: 'Depok, Indonesia',
    points: [
      'Led user-requirement sessions and designed intuitive, responsive web interfaces in Figma.',
      'Collaborated with cross-functional teams to turn product requirements into user-tested wireframes.',
    ],
  },
];

const projects = [
  {
    number: '01',
    title: 'TBIG Stream',
    link: 'https://example.com/tbig-stream',
    image: '/projects/tbig-stream.webp',
    category: 'Enterprise Systems · AI',
    description:
      'A secure local-network video meeting platform with AI-assisted meeting documentation.',
    icon: Server,
    tags: ['LiveKit', 'RAG / LLM', 'Typescript', 'Local Network'],
    star: {
      situation:
        'Internal teams needed secure video communication without unnecessary public-internet bandwidth usage.',
      task:
        'Design a reliable meeting workflow with automated documentation.',
      action:
        'Architected a low-latency LiveKit platform and integrated RAG / LLM processing for transcripts and action items.',
      result:
        'Reduced external bandwidth dependency and automated post-meeting documentation.',
    },
  },
  {
    number: '02',
    title: 'SIEVRA',
    link: 'https://sievra.streamlit.app',
    image: '/projects/sievra.webp',
    category: 'Cybersecurity · NLP',
    description:
      'Smart Email Verification & Risk Analyzer for detecting phishing signals across email content and metadata.',
    icon: ShieldCheck,
    tags: ['XLM-RoBERTa', 'Multi-Language', 'Phishing Detection', 'Rule-Based Heuristics'],
    star: {
      situation:
        'Non-technical users face increasingly convincing social-engineering and phishing emails.',
      task:
        'Build an understandable risk-analysis experience combining semantic and structural signals.',
      action:
        'Combined XLM-RoBERTa NLP analysis with rule-based heuristics and designed a low-cognitive-load interface.',
      result:
        'Delivered real-time email risk scoring with an interface designed for practical end-user review.',
    },
  },
  {
    number: '03',
    title: 'Jurusanku',
    link: 'https://jurusanku.vercel.app',
    image: '/projects/jurusanku.webp',
    category: 'EdTech · B2C Web',
    description:
      'An interactive MBTI-based major-matching experience that provides personalized academic recommendations.',
    icon: MessageCircle,
    tags: ['Machine Learning', 'React', 'Vercel', 'Product Design'],
    star: {
      situation:
        'Prospective university students needed clearer guidance when exploring suitable majors.',
      task:
        'Create an engaging assessment flow that translates personality inputs into useful recommendations.',
      action:
        'Designed user journeys in Figma and implemented matching logic between MBTI traits and career paths.',
      result:
        'Delivered a responsive assessment experience with a clear, user-friendly recommendation flow.',
    },
  },
  {
    number: '04',
    title: 'Real-Time Sentiment Dashboard',
    link: 'https://streamlit.app',
    image: '/projects/sentiment-dashboard.webp',
    category: 'Data Analytics · BI',
    description:
      'A monitoring dashboard that turns public-perception data into clear sentiment and trend signals.',
    icon: BarChart3,
    tags: ['Data Analytics', 'Dashboard', 'Visualization', 'Streamlit'],
    star: {
      situation:
        'Stakeholders lacked immediate visibility into changing public sentiment and conversation trends.',
      task:
        'Translate complex sentiment data into a decision-friendly monitoring interface.',
      action:
        'Built dynamic visualizations covering positive, neutral, and negative sentiment metrics and trends.',
      result:
        'Reduced reliance on manual sentiment reporting and improved visibility for stakeholder decisions.',
    },
  },
];

const testimonials = [
  {
    name: 'Dr. Ana Kurniawati',
    role: 'Thesis Supervisor',
    organization: 'Universitas Gunadarma',
    image: '/testimonials/testimoni1.webp',
    quote:
      'Vicky demonstrates strong analytical thinking, attention to detail, and a genuine willingness to explore new technologies. He approaches complex problems systematically and consistently works toward practical solutions.',
  },
  {
    name: 'Orendo Rusfian Raharjo',
    role: 'Internship Mentor',
    organization: 'Tower Bersama Group',
    image: '/testimonials/testimoni2.webp',
    quote:
      'Vicky is proactive, curious, and quick to understand new technical concepts. He brings a product-oriented mindset while still being willing to dive into the technical details needed to make an idea work.',
  },
  {
    name: 'Mario Siregar',
    role: 'HPC Practicum PIC',
    organization: 'DGX Lab - Universitas Gunadarma',
    image: '/testimonials/testimoni3.webp',
    quote:
      'Vicky is responsible and dependable when working with others. He communicates clearly, pays attention to details, and is always willing to help solve technical problems during practical activities.',
  },
  {
    name: 'Rama Satriana',
    role: 'College Peer',
    organization: 'Universitas Gunadarma',
    image: '/testimonials/testimoni4.webp',
    quote:
      'Working with Vicky is always productive. He is collaborative, easy to communicate with, and consistently brings thoughtful ideas when working on projects and solving problems together.',
  },
];

const navItems = [
  ['About', 'about'],
  ['Education', 'education'],
  ['Credentials', 'credentials'],
  ['Capabilities', 'skills'],
  ['Experiences', 'experiences'],
  ['Projects', 'projects'],
  ['Testimonials', 'testimonials'],
  // ['Contact', 'contact'],
] as const;

function App() {

  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    projectsRef.current?.scrollBy({
      left: direction === 'right'
        ? projectsRef.current.clientWidth
        : -projectsRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof typeof form,
    value: string,
  ) => {
    setSubmitted(false);

    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

${form.message}`,
    );

    window.location.href =
      `mailto:vickyc.job@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      {/* ================= NAVBAR ================= */}

      <header className="site-header">
        <nav
          className="nav container"
          aria-label="Primary navigation"
        >
          <a
            className="brand"
            href="#hero"
            onClick={closeMenu}
            aria-label="Vicky Chandra home"
          >
            VC<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            onClick={() =>
              setMenuOpen((open) => !open)
            }
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

          <div
            id="primary-menu"
            className={`nav-links ${
              menuOpen ? 'is-open' : ''
            }`}
          >
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}

        <section
          id="hero"
          className="hero container"
        >
          <div className="hero-copy">
            <div className="hero-section-label">
              <span>01 · Hero</span>
              <i />
            </div>

            <h1>
              I&apos;m{' '}
              <span className="hero-name">
                Vicky Chandra
              </span>
            </h1>

            <h2 className="hero-role">
              Associate Product Manager{' '}
              {/* Associate Product Manager{' '} */}
              {/* <span>Product Manager</span> */}
            </h2>

            <p className="hero-description">
              I build digital products with product
              thinking and technical curiosity.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#projects"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                className="button button-secondary"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>

            <div className="hero-scroll">
              <span className="scroll-icon">
                ↓
              </span>

              <span>Scroll to explore</span>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src="/foto-vicky.webp"
                alt="Vicky Chandra"
                width="864"
                height="1184"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="education-section section-soft"
        >
          <div className="container education-inner">
            <div className="education-heading">
              <p className="section-label">
                02 · Education
              </p>

              <h2>
                Academic foundation for
                <span> continuous growth.</span>
              </h2>
            </div>

            <article className="education-card">
              <div className="education-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <h3>
                  Universitas Gunadarma
                </h3>

                <p>
                  Bachelor of Information Systems
                  (S.Kom)
                </p>

                <small>
                  GPA 3.94 / 4.00
                </small>
              </div>

              <span className="education-year">
                2022 - 2026
              </span>
            </article>
          </div>
        </section>

        {/* ================= CREDENTIALS ================= */}

        <section
          id="credentials"
          className="section container"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">
                03 · Credentials
              </p>

              <h2>
                Learning backed by
                <span>
                  {' '}
                  recognized credentials.
                </span>
              </h2>
            </div>
          </div>

          <div className="certifications-grid">
            {certifications.map(
              (certification) => (
                <article
                  className="certification-card"
                  key={certification.name}
                >
                  <div className="certification-logo">
                    <img
                      src={certification.image}
                      alt={certification.name}
                      width="180"
                      height="180"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3>
                      {certification.name}
                    </h3>

                    <p>
                      {certification.issuer}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section container"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">
                04 · About
              </p>

              <h2>
                Product-minded,
                <span>
                  {' '}
                  curious about technology.
                </span>
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <p>
                I&apos;m a technology-focused product
                builder with hands-on experience across
                web development, UI/UX, data analytics,
                business intelligence, and AI integration.
              </p>

              <p>
                My approach connects user needs with
                practical technical decisions from
                defining requirements and designing
                interfaces to analyzing data and shipping
                working solutions.
              </p>
            </div>

            <div className="value-list">
              <div>
                <strong>01</strong>

                <span>
                  <b>Precision</b>

                  <small>
                    Attention to detail from requirements
                    to delivery.
                  </small>
                </span>
              </div>

              <div>
                <strong>02</strong>

                <span>
                  <b>Communication</b>

                  <small>
                    Clear alignment across technical and
                    non-technical teams.
                  </small>
                </span>
              </div>

              <div>
                <strong>03</strong>

                <span>
                  <b>Continuous Learning</b>

                  <small>
                    Curious about better tools, systems,
                    and product decisions.
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CAPABILITIES ================= */}

        <section
          id="skills"
          className="section section-soft"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  05 · Capabilities
                </p>

                <h2>
                  What I use to
                  <span>
                    {' '}
                    move ideas forward.
                  </span>
                </h2>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map(
                ({
                  title,
                  description,
                  icon: Icon,
                  items,
                }) => (
                  <article
                    className="skill-card"
                    key={title}
                  >
                    <div className="skill-icon">
                      <Icon size={20} />
                    </div>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <div className="tag-list">
                      {items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experiences"
          className="section container"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">
                06 · Experiences
              </p>

              <h2>
                Where I&apos;ve
                <span>
                  {' '}
                  learned and delivered.
                </span>
              </h2>
            </div>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-item"
                key={`${experience.organization}-${experience.role}`}
              >
                <div className="experience-date">
                  {experience.timeline}
                </div>

                <div className="experience-content">
                  <div className="experience-title-row">
                    <div>
                      <h3>
                        {experience.role}
                      </h3>

                      <p className="experience-org">
                        {experience.organization}
                      </p>
                    </div>

                    <span>
                      {experience.location}
                    </span>
                  </div>

                  <ul>
                    {experience.points.map(
                      (point) => (
                        <li key={point}>
                          {point}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section section-soft"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  07 · Selected Projects
                </p>

                <h2>
                  Work built around
                  <span>
                    {' '}
                    real problems.
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="projects-carousel-wrap">
            <button
              type="button"
              className="project-carousel-button project-carousel-prev"
              onClick={() => scrollProjects('left')}
              aria-label="Previous projects"
            >
              ←
            </button>

            <div className="projects-list">
              {projects.map((project) => {
                const ProjectIcon =
                  project.icon;

                return (
                  <article
                    className="project-card"
                    key={project.title}
                  >
                    <div className="project-topline">
                      <span>
                        {project.number}
                      </span>

                      <span>
                        {project.category}
                      </span>
                    </div>

                    <div className="project-header">
                      <div className="project-icon">
                        <ProjectIcon size={22} />
                      </div>

                      <div>
                        <h3>
                          {project.title}
                        </h3>

                        <p>
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="project-media">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                    </div>
                    <div className="star-grid">
                      {Object.entries(
                        project.star,
                      ).map(
                        ([key, value]) => (
                          <div key={key}>
                            <span>
                              {key}
                            </span>

                            <p>
                              {value}
                            </p>
                          </div>
                        ),
                      )}
                    </div>

                    <div className="project-footer">
                      <div className="tag-list">
                        {project.tags.map(
                          (tag) => (
                            <span key={tag}>
                              {tag}
                            </span>
                          ),
                        )}
                      </div>

                      <a href={project.link} target="_blank" rel="noreferrer">
                        Explore project
                        <ArrowRight
                          size={14}
                        />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <button
              type="button"
              className="project-carousel-button project-carousel-next"
              onClick={() => scrollProjects('right')}
              aria-label="Next projects"
            >
              →
            </button>
          </div>
        </section>

        {/* ================= SOCIAL PROOF ================= */}

        <section
          id="testimonials"
          className="section container"
        >
          <div className="section-heading testimonial-heading">
            <div>
              <p className="section-label">
                08 · Social Proof
              </p>

              <h2>
                Trusted by people I&apos;ve
                <span>
                  {' '}
                  learned and worked with.
                </span>
              </h2>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article
                className="testimonial-card"
                key={testimonial.name}
              >
                <div className="testimonial-mark">
                  “
                </div>

                <p className="testimonial-quote">
                  {testimonial.quote}
                </p>

                <div className="testimonial-person">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="56"
                    height="56"
                    loading="lazy"
                  />

                  <div>
                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.role}
                    </span>

                    <small>
                      {testimonial.organization}
                    </small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section section-contact section-soft"
        >
          <div className="container">
            <div className="contact-grid">
              <div>
                <div className="section-heading contact-heading">
                  <div>
                    <p className="section-label">
                      09 · Contact
                    </p>

                    <h2>
                      Let&apos;s talk about
                      <span>
                        {' '}
                        what we can build.
                      </span>
                    </h2>
                    {/* <h2>
                      <span>
                        {' '}
                        what we can build.
                      </span>
                    </h2> */}
                  </div>
                </div>

                <p className="contact-copy">
                  I&apos;m open to conversations around
                  product development, web applications,
                  data-driven products, and technical
                  collaboration.
                </p>

                <div className="contact-links">
                  <a href="mailto:vickyc.job@gmail.com">
                    <Mail size={17} />

                    <span>
                      <small>Email</small>
                      vickyc.job@gmail.com
                    </span>

                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vicky-chandra/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={17} />

                    <span>
                      <small>LinkedIn</small>
                      Connect professionally
                    </span>

                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="https://github.com/siberandra/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitBranch size={17} />

                    <span>
                      <small>GitHub</small>
                      View selected code
                    </span>

                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="https://vicky-chandra.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BookOpen size={17} />

                    <span>
                      <small>Medium</small>
                      Read my product &amp; technology writing
                    </span>

                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <label>
                    Name

                    <input
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          'name',
                          event.target.value,
                        )
                      }
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Email

                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField(
                          'email',
                          event.target.value,
                        )
                      }
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  Subject

                  <input
                    value={form.subject}
                    onChange={(event) =>
                      updateField(
                        'subject',
                        event.target.value,
                      )
                    }
                    placeholder="What would you like to discuss?"
                    required
                  />
                </label>

                <label>
                  Message

                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        'message',
                        event.target.value,
                      )
                    }
                    placeholder="Tell me a little about your idea..."
                    rows={6}
                    required
                  />
                </label>

                <button
                  className="button button-primary form-submit"
                  type="submit"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>

                {submitted && (
                  <p className="form-status">
                    <CheckCircle2 size={15} />
                    Your email client should open
                    with the message prepared.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a
              className="brand"
              href="#hero"
            >
              VC<span>.</span>
            </a>

            <p>
              Associate Product Manager · Product ·
              Data · Technology
            </p>
          </div>

          <span>
            © 2026 Vicky Chandra
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;