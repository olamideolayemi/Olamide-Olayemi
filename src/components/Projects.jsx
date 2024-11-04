import { useNavigate } from "react-router-dom";
import { archives } from "./projects/Archive";
import { useEffect } from "react";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-6 min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#162b3f] dark:to-[#0f172a]">
        <div className="pt-40 mx-auto max-w-5xl py-20">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md mb-4 bg-gray-dark hover:bg-blue px-3.5 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span aria-hidden="true">&larr;</span> Go back
          </button>
          <h1 className="font-bold dark:text-white mb-10 text-1xl md:text-3xl">ALL PROJECTS</h1>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-black dark:text-white border-b border-gray-300 dark:border-gray-700">
                <th className="py-4 px-2">Year</th>
                <th className="py-4 px-2">Project</th>
                <th className="hidden lg:table-cell py-4 px-2">Built With</th>
                <th className="hidden md:table-cell py-4 px-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {archives.map((archive, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white border-b border-gray-300 dark:border-gray-700"
                >
                  {/* Year */}
                  <td className="py-4 px-2">
                    <small className="text-xs">{archive.year}</small>
                  </td>

                  {/* Project Title */}
                  <td className="py-4 px-2">
                    <a href={archive.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="md:hidden text-sm md:text-md font-semibold">{archive.title}</h3>
                    </a>
                    <h3 className="hidden md:block text-sm md:text-md font-semibold">{archive.title}</h3>
                  </td>

                  {/* Tags */}
                  <td className="hidden lg:table-cell py-4 px-2">
                    <div className="flex flex-wrap gap-2">
                      {archive.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue bg-opacity-75 px-3 py-1 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Link */}
                  <td className="hidden md:table-cell py-4 px-2">
                    <a
                      href={archive.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      {archive.url} <span className="ml-1">{archive.url && "↗"}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Projects;
