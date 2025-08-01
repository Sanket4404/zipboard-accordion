// src/App.jsx
import FaqAccordion from './components/FaqAccordion';
import useTheme from './hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [isDark, toggleTheme] = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Theme switcher */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-purple-500 dark:focus-visible:ring-purple-400"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>

      {/* Main FAQ section */}
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400">
          Frequently asked questions
        </h1>
        <FaqAccordion />
      </main>
    </div>
  );
}