
import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-grater-red">
              GraterChoice
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`${isScrolled ? 'text-grater-black' : 'text-white'} hover:text-grater-red`}>
              Features
            </a>
            <a href="#benefits" className={`${isScrolled ? 'text-grater-black' : 'text-white'} hover:text-grater-red`}>
              Benefits
            </a>
            <Button 
              className="bg-grater-red text-white hover:bg-red-600 rounded-full"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-grater-black' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-grater-black hover:text-grater-red">
              Features
            </a>
            <a href="#benefits" className="block px-3 py-2 text-grater-black hover:text-grater-red">
              Benefits
            </a>
            <Button 
              className="w-full mt-4 bg-grater-red text-white hover:bg-red-600 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
