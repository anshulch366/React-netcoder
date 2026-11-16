

const paths = [
  {
    id: "learn",
    title: "Want to Learn",
    description:
      "Build Practical Skills Through Industry-Focused Courses, Hands-On Projects, And Real-World Training.",
    items: [
      "Professional Courses",
      "Industrial Training",
      "Hands-On Projects",
      "Career-Focused Learning",
    ],
    cta: "Explore Learning",
    href: "/learning",
    variant: "primary",
  },
  {
    id: "build",
    title: "Want to Build",
    description:
      "Turn Ideas Into Digital Experiences With Design, Development, Branding, And Digital Solutions.",
    items: ["Web Development", "UI/UX Design", "Branding", "Digital Marketing"],
    cta: "Explore Services",
    href: "/services",
    variant: "secondary",
  },
];

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 8h14" />
      <path d="M8 12h11" />
      <path d="M5 16h14" />
    </svg>
  );
}

export default function Index() {
  return (
    <div className="container">
      <div className="container1">
        <header className="nav">
          
          <a href="/" className="logo" aria-label="Netcoder Technology home">
            <img src="/img/logo.png" alt="Netcoder Technology" />
          </a>

          <button
            type="button"
            className="menu"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </header>

        <main className="content">
          <span className="badge">Welcome To Netcoder Technology</span>

          <h1 className="title">What Brings You Here Today?</h1>

          <p className="subtitle">
            Choose Your Path And Discover What Netcoder Can Help You Learn Or
            Build.
          </p>

          <section className="cards" aria-label="Choose your path">
            {paths.map((path) => (
              <article className="card" key={path.id}>
                <h2 className="card-title">{path.title}</h2>
                <p className="card-text">{path.description}</p>

                <h3 className="card-label">What You'll Find:</h3>
                <ul className="list">
                  {path.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href={path.href} className={`button button-${path.variant}`}>
                  {path.cta}
                </a>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}