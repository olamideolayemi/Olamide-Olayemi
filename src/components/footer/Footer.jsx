import { useEffect, useState } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Auto mode - follow system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        document.documentElement.classList.toggle('dark', mediaQuery.matches);
      };
      handleChange();
      mediaQuery.addEventListener('change', handleChange);
      localStorage.setItem('theme', 'auto');

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <footer className=" bg-white dark:bg-gray-dark">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3  ">
        <small className="text-black dark:text-gray_text max-w-sm" >Built from scratch with inspiration from external sources and coded in <span className="font-bold text-white "> Visual Studio Code </span> by yours truly. Built with <span className="font-bold text-white ">React.js</span> and <span className="font-bold text-white ">Tailwind CSS</span>, deployed with <span className="font-bold text-white ">Vercel</span>.</small>

        <div className="flex items-center space-x-4 dark:text-white">
          <button onClick={() => setTheme('light')} aria-label="Light mode">
            <FaSun />
          </button>
          <button onClick={() => setTheme('dark')} aria-label="Dark mode">
            <FaMoon />
          </button>
          <button onClick={() => setTheme('auto')} aria-label="Auto mode">
            <FaDesktop />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-3 text-black dark:text-gray_text">
        <small> © {new Date().getFullYear()} | Olamide Olayemi.</small>
      </div>
    </footer>
  )
}

export default Footer