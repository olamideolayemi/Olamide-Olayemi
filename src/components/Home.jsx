// import bg from "../assets/R (1).jpeg"

import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { projects } from "./projects/Project";
import { experience } from "./experience/Experience";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative px-6 pt-0 h-auto lg:px-8 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e3850]">
        <div className="mx-auto max-w-2xl py-36">
          <div className="text-left">
            <p className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-black dark:text-gray_text sm:text-1xl">
              Hi, I&apos;m Olamide Olayemi 👋
            </p>
            <p className="mt-3 text-pretty text-2xl font-semibold text-black dark:text-gray_text sm:text-1xl">
              Front-end Web Developer
            </p>
            <p className="mt-6 text-pretty max-w-sm text-md font-medium text-black dark:text-gray_text sm:text-1xl">
              I build pixel-perfect, engaging, and accessible digital experiences.
            </p>
            <div className="mt-6 flex space-x-4 text-gray">
              <a href="https://github.com/olamideolayemi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/olamideolayemi-rotimi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com/_olamideolayemi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/_olamideolayemi" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter size={24} />
              </a>
              <a href="https://t.me/krane_ola" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>

          <div className="text-left mt-20">
            <h1 className="font-bold dark:text-white sticky top-20 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e3850]">ABOUT</h1>
            <p className="mt-8 text-pretty text-md font-medium text-black dark:text-gray_text sm:text-1xl">
              A frontend developer / results-driven graduate of Surveying and Geo-Informatics with a passion for technology and a strong foundation in web development.
              Equipped with a diverse skill set combining expertise in surveying with advanced front-end development skills.
            </p>
            <p className="mt-8 text-pretty text-md font-medium text-black dark:text-gray_text sm:text-1xl">
              Seeking a challenging role as a Front-end Developer where I can leverage my technical abilities and enthusiasm for creating innovative digital solutions to contribute effectively to a dynamic tech team.
            </p>
            <p className="mt-8 text-pretty text-md font-medium text-black dark:text-gray_text sm:text-1xl">
              If you&apos;re in search for someone to drive innovation and provide significant solutions, consider me. I&apos;m eager to work on web development and surveying projects.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mx-auto max-w-2xl py-20">
            <h1 className="font-bold dark:text-white mb-10 sticky top-20 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e3850]">EXPERIENCE</h1>
            <div className="space-y-5">
              {experience.map((experience, index) => (
                <div key={index} className="md:flex py-6 rounded-lg text-white">
                  <div className="mb-2">
                    < small className="text-nowrap text-black dark:text-gray_text text-xs">
                      {experience.year}
                    </small>
                  </div>
                  <div className="md:pl-10 ">
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" dark:hover:text-blue text-black dark:text-white inline-block"
                    >
                      <h3 className="text-1xl  font-bold">{experience.title} ↗</h3>
                    </a>
                    <p className="text-sm text-black dark:text-gray_text mt-1">{experience.role}</p>
                    <p className="mt-2 text-black dark:text-gray_text text-sm">{experience.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue px-3 py-1 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="/olamide-olayemi-resume.pdf"
                download="Olamide_Olayemi_Resume.pdf"
                className=" dark:hover:text-blue text-black dark:text-gray_text hover:underline inline-block"
              >
                <h3 className="text-1xl  font-bold">View Full Résumé
                  ↗</h3>
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mx-auto max-w-2xl py-20">
            <h1 className="font-bold dark:text-white mb-10 sticky top-20 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e3850]">PROJECTS</h1>
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index} className="md:flex py-6 rounded-lg text-white">
                  <div >
                    <img
                      src={project.imagePath} alt={project.title}
                      className="rounded-md mb-4 max-w-[150px] hover:ring-2"
                    />
                  </div>
                  <div className="md:pl-10">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" dark:hover:text-blue text-black dark:text-white inline-block"
                    >
                      <h3 className="text-1xl  font-bold">{project.title} ↗</h3>
                    </a>
                    <p className="mt-2 text-black dark:text-gray_text text-sm">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue px-3 py-1 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link
                to="/projects"
                rel="noopener noreferrer"
                className=" dark:hover:text-blue text-black dark:text-gray_text hover:underline inline-block"
              >
                <h3 className="text-1xl  font-bold">View Full Project Archive ➡</h3>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home