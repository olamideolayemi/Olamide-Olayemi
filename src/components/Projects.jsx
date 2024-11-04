import { useNavigate } from "react-router-dom";
import { archives } from "./projects/Archive";
import { useEffect } from "react";

const Projects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <div className="px-6 min-h-screen  dark:bg-dark-blue">
        <div className="pt-40 mx-auto max-w-5xl py-20">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md mb-4 bg-gray-dark hover:bg-blue  px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-dark-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span aria-hidden="true">&larr;</span> Go back
          </button>
          <h1 className="font-bold dark:text-white mb-10 text-3xl">ALL PROJECTS</h1>
          <div className="space-y-5">
            {archives.map((archive, index) => (
              <div key={index} className="hover:bg-[#8fe5ff0c] md:flex items-center py-6 px-4 rounded-lg text-white bg-opacity-5 bg-gray-800">
                {/* Year */}
                <div className="md:w-1/12 mb-4 md:mb-0">
                  <small className="text-xs text-black dark:text-gray_text">
                    {archive.year}
                  </small>
                </div>

                {/* Project Details */}
                <div className="md:w-4/12 mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-black dark:text-white">{archive.title}</h3>
                </div>

                {/* Tags */}
                <div className="md:w-4/12 flex flex-wrap gap-2">
                  {archive.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue bg-opacity-75 px-3 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="md:w-3/12 mt-4 md:mt-0">
                  <a href={archive.url} target="_blank" rel="noopener noreferrer" className="text-sm text-black dark:text-gray hover:underline flex items-center">
                    {archive.url} <span className="ml-1">{archive.url && '↗'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
