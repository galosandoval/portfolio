import Link from "next/link"

const experience = [
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "React Native",
      "SCSS",
      "Wordpress",
      "Javascript",
      "Typescript",
      "PHP"
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "React Native",
      "SCSS",
      "Wordpress",
      "Javascript",
      "Typescript",
      "PHP"
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "React Native",
      "SCSS",
      "Wordpress",
      "Javascript",
      "Typescript",
      "PHP"
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "React Native",
      "SCSS",
      "Wordpress",
      "Javascript",
      "Typescript",
      "PHP"
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [
      "React",
      "React Native",
      "SCSS",
      "Wordpress",
      "Javascript",
      "Typescript",
      "PHP"
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  }
]

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <h1 className="text-4xl font-bold sm:text-5xl">Galo Sandoval</h1>
            <h2 className="text-lg font-medium sm:text-xl">
              Software Engineer
            </h2>
            <p className="">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
            <nav className="nav hidden lg:block"></nav>
          </div>
          <ul></ul>
        </header>
        <main className="flex flex-col gap-20 pt-24 lg:w-1/2 lg:py-24">
          <section className="mb-16 md:mb-24 lg:mb-36">
            <p className="">
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I've had the privilege
              of building software for an advertising agency, a start-up, a
              student-led design studio, and a huge corporation.
            </p>
            <p className="">
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time I've also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
            <p className="">
              When I'm not at the computer, I'm usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds K o r o k s e e d s .
            </p>
          </section>
          <section className="">
            <ol className="group/list">
              {experience.map((job, index) => (
                <li
                  key={index}
                  className="grid sm:grid-cols-8 sm:gap-8 md:gap-2"
                >
                  <header className="text-xs font-semibold uppercase tracking-wide sm:col-span-2">
                    {job.from}-{job.to}
                  </header>
                  <div className="sm:col-span-6">
                    <h2>{job.company}</h2>
                    <p className="">{job.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </main>
      </div>
    </div>
  )
}
