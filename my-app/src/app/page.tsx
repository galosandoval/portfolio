import { Link2Icon } from "@radix-ui/react-icons"
import { GradiantOnMouseMove } from "~/components/gradient-on-mouse-move"
import { ModeToggle } from "~/components/mode-toggle"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export default function HomePage() {
  return (
    <>
      <GradiantOnMouseMove />

      <div className="relative z-30 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main className="flex flex-col gap-20 pt-24 lg:w-1/2 lg:py-24">
            <AboutMe />

            <Experience />
          </main>
        </div>
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Galo Sandoval</h1>
        <h2 className="text-lg font-medium sm:text-xl">Software Engineer</h2>
        <p className="max-w-sm font-light leading-normal">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <nav className="nav hidden lg:block"></nav>
      </div>

      <ul>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </header>
  )
}

function AboutMe() {
  return (
    <section className="mb-16 flex flex-col gap-4 md:mb-24 lg:mb-36">
      <p className="">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I've had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporation.
      </p>
      <p className="">
        My main focus these days is building products and leading projects for
        our clients at Upstatement. In my free time I've also released an online
        video course that covers everything you need to know to build a web app
        with the Spotify API.
      </p>
      <p className="">
        When I'm not at the computer, I'm usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for Korok
        seeds K o r o k s e e d s .
      </p>
    </section>
  )
}

const experience: {
  from: string
  to: string
  prevTitles: string[]
  company: string
  description: string
  technologies: string[]
  links: { title: string; url: string }[]
}[] = [
  {
    from: "2019",
    to: "Present",
    prevTitles: ["Senior Software Engineer", "Software Engineer"],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [],
    links: []
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: [],
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
    links: []
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: [],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ]
  },
  {
    from: "2019",
    to: "Present",
    prevTitles: [],
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
    prevTitles: [],
    company: "Lead Engineer · Upstatement",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: [],
    links: []
  }
]

function Experience() {
  return (
    <section className="">
      <ol className="group/list flex flex-col gap-5">
        {experience.map((job, index) => (
          <li
            key={index}
            className="hover:bg-background/60 group grid rounded-lg p-6 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50 sm:grid-cols-8 sm:gap-8 md:gap-2"
          >
            <header className="mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
              {job.from}-{job.to}
            </header>
            <div className="flex flex-col gap-2 sm:col-span-6">
              <div className="leading-snug">
                <h2 className="group-hover:text-primary font-medium transition-all duration-300">
                  {job.company}
                </h2>
                {job.prevTitles.length > 0 &&
                  job.prevTitles.map((title) => (
                    <h3
                      className="text-muted-foreground"
                      aria-hidden={true}
                      key={title}
                    >
                      {title}
                    </h3>
                  ))}
              </div>
              <p className="">{job.description}</p>

              {job.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.links.map((link) => (
                    <Button
                      key={link.url}
                      size="sm"
                      variant="link"
                      className="text-sm"
                    >
                      <Link2Icon className="mr-1" />
                      <a href={link.url}>{link.title}</a>
                    </Button>
                  ))}
                </div>
              )}

              {job.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
