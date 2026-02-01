import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="text-2xl" />
      ) : (
        <FaMoon className="text-2xl" />
      )}
    </button>
  )
}

export default ThemeToggle
