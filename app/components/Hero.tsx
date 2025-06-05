"use client"

import { Star, Award, Users } from "lucide-react"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 120 // Высота хедера
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-yellow-400">Smart</span>
                <br />
                <span className="text-white">Pole</span>
                <br />
                <span className="text-gray-300 text-3xl lg:text-4xl">Studio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Профессиональная студия pole sport в центре Москвы. Развивайте силу, грацию и уверенность в себе вместе
                с нами!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Записаться на пробное занятие
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all">
                Посмотреть видео
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Учеников</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">3</div>
                <div className="text-sm text-gray-400">Года опыта</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">4.9</div>
                <div className="text-sm text-gray-400">Рейтинг</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl p-8 backdrop-blur-sm border border-yellow-400/20">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-black" />
                  </div>
                  <p className="text-gray-400">Фото студии</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
