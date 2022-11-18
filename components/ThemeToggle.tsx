import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { BiSun } from 'react-icons/bi';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  // remember to fix navbar as a clickable popup
  return (
    <>
      {mounted && (
        <button
          className="inline-flex items-center gap-2 rounded bg-slate-200 py-2 px-4 font-bold text-slate-700 transition-colors duration-300 hover:outline hover:outline-2 hover:outline-slate-700 dark:bg-slate-700 dark:text-slate-200"
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          <BiSun size="1.2em" />
          <span>{resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
