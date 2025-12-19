'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useId, useState } from 'react';
import { PiMoonFill } from 'react-icons/pi';
import { MdSunny } from 'react-icons/md';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const uniqueId = useId();

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
      if (stored === 'dark' || stored === 'light') {
        setIsDark(stored === 'dark');
        setTheme(stored);
      } else if (resolvedTheme) {
        setIsDark(resolvedTheme === 'dark');
      }
    } catch {}
  }, [setTheme, resolvedTheme]);

  useEffect(() => {
    if (!isMounted) return;
    try {
      window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark, isMounted]);

  const handleToggle = () => {
    const next = !isDark;
    setIsDark(next);
    setTheme(next ? 'dark' : 'light');
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Sun Icon */}
      <div className="w-5 h-5 flex items-center justify-center">
        <MdSunny className={`${!isDark ? 'text-white' : 'text-[#656a76]'} text-xl`} />
      </div>

      {/* Toggle Switch */}
      <button
        onClick={handleToggle}
        className="relative inline-flex h-5 w-8 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-200 focus:outline-none"
        role="switch"
        aria-checked={isDark}
      >
        <span
          className={`inline-block size-3 transform rounded-full bg-orange-500 transition-transform duration-200 ${
            isDark ? 'translate-x-4' : 'translate-x-1'
          }`}
        />
      </button>

      {/* Moon Icon */}
      <div className="w-5 h-5 flex items-center justify-center">
        <PiMoonFill className={`${isDark ? 'text-white' : 'text-[#656a76]'} text-lg`} />
      </div>
    </div>
  );
}
