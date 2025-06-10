"use client"

import { useState } from "react"
import { Menu, X, Phone, MapPin } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 120 // Высота хедера
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative bg-gray-900 text-white sticky top-0 z-50 border-b border-yellow-400/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-800">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+7-993-366-23-68</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>2 филиала в Москве</span>
              </div>
            </div>
            <div className="text-yellow-400">Работаем с 9:00 до 22:00</div>
          </div>

          {/* Main header */}
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className="text-yellow-400">Smart</span>
              <span className="text-white"> Pole</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-yellow-400 transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("directions")} className="hover:text-yellow-400 transition-colors">
                Направления
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-yellow-400 transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("trainers")} className="hover:text-yellow-400 transition-colors">
                Тренеры
              </button>
              <button onClick={() => scrollToSection("gallery")} className="hover:text-yellow-400 transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection("schedule")} className="hover:text-yellow-400 transition-colors">
                Расписание
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition-colors">
                Контакты
              </button>
            </nav>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              Записаться
            </button>

            {/* Mobile menu button */}
            <button className="lg:hidden text-yellow-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("directions")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Направления
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("trainers")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Тренеры
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Расписание
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
              >
                Контакты
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold mt-4"
              >
                Записаться
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
