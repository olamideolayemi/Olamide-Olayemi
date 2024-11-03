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
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-2 ">
        <small className="text-black dark:text-gray_text " > © {new Date().getFullYear()} | Krane</small>
        <div className="flex items-center space-x-4 dark:text-white">
          <button onClick={() => setTheme('light')}  aria-label="Light mode">
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
    </footer>
  )
}

export default Footer