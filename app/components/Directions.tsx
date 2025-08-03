"use client"

import { useState } from "react"
import { X, Star, Zap, Flame, Users, Dumbbell, Sparkles } from "lucide-react"

const Directions = () => {
  const [selectedDirection, setSelectedDirection] = useState<number | null>(null)

  const directions = [
    {
      id: 1,
      title: "Pole Sport",
      subtitle: "Спортивный пилон",
      icon: Star,
      image: "/images/directions/pole-sport.jpg",
      shortDescription: "Силовые элементы и акробатика на пилоне",
      fullDescription:
        "Pole Sport — это спортивное направление, которое сочетает в себе силовые элементы, акробатику и хореографию на вертикальном пилоне. Подходит для детей, взрослых и мам. Развивает силу всех групп мышц, координацию, гибкость и выносливость. Подходит для всех уровней подготовки — от новичков до профессионалов.",
      benefits: [
        "Развитие силы и выносливости",
        "Улучшение координации и баланса",
        "Повышение гибкости",
        "Укрепление мышц всего тела",
        "Подготовка к соревнованиям",
      ],
      levels: ["Начинающий", "Средний", "Продвинутый", "Профессиональный"],
    },
    {
      id: 3,
      title: "Pole Dance",
      subtitle: "Танцевальные связки на пилоне",
      icon: Flame,
      image: "/images/directions/pole-dance.jpg",
      shortDescription: "Танцевальные связки и хореография на пилоне",
      fullDescription:
        "Pole Dance — это танцевальное направление, где акцент делается на хореографии, пластике и артистизме. Включает изучение танцевальных связок на пилоне, сочетая элементы pole sport с танцевальными движениями, создавая красивые и эмоциональные композиции.",
      benefits: [
        "Развитие артистизма",
        "Улучшение пластики",
        "Работа с музыкальностью",
        "Повышение уверенности",
        "Творческое самовыражение",
      ],
      levels: ["Начинающий", "Средний", "Продвинутый"],
    },
    {
      id: 4,
      title: "Stretching",
      subtitle: "Растяжка и гибкость",
      icon: Zap,
      image: "/images/directions/stretching.jpg",
      shortDescription: "Развитие гибкости и подвижности суставов",
      fullDescription:
        "Stretching — направление, посвященное развитию гибкости, подвижности суставов и эластичности мышц. Включает статические и динамические упражнения на растяжку, которые помогают улучшить результаты в pole sport и общее самочувствие.",
      benefits: [
        "Увеличение гибкости",
        "Улучшение подвижности суставов",
        "Снятие мышечного напряжения",
        "Профилактика травм",
        "Улучшение кровообращения",
      ],
      levels: ["Для всех уровней"],
    },
    {
      id: 5,
      title: "Скульптура тела",
      subtitle: "Формирование красивого тела",
      icon: Dumbbell,
      image: "/placeholder.svg?height=300&width=400",
      shortDescription: "Комплексная тренировка для создания красивого рельефа тела",
      fullDescription:
        "Скульптура тела — это комплексная программа тренировок, направленная на формирование красивого рельефа и подтянутой фигуры. Включает силовые упражнения, функциональные движения и кардио-нагрузки для создания идеальных пропорций тела.",
      benefits: [
        "Укрепление всех групп мышц",
        "Улучшение выносливости",
        "Сжигание калорий",
        "Формирование красивого рельефа",
        "Повышение общего тонуса",
      ],
      levels: ["Начинающий", "Средний", "Продвинутый"],
    },
    {
      id: 6,
      title: "Воздушная гимнастика",
      subtitle: "Воздушная акробатика",
      icon: Users,
      image: "/images/directions/aerial-sport.jpg",
      shortDescription: "Гимнастика на воздушном кольце и полотнах",
      fullDescription:
        "Воздушная гимнастика — это захватывающее направление, включающее работу на воздушном кольце и воздушных полотнах. Подходит как для детей, так и для взрослых. Сочетает силовые элементы, гибкость и артистизм, создавая невероятно красивые композиции в воздухе. Направление развивает не только физические качества, но и преодолевает страхи, повышает уверенность в себе.",
      benefits: [
        "Развитие силы верхней части тела",
        "Улучшение координации в пространстве",
        "Преодоление страха высоты",
        "Развитие артистизма",
        "Укрепление мышц кора",
      ],
      levels: ["Начинающий", "Средний", "Продвинутый"],
    },
    {
      id: 7,
      title: "Exotic Dance",
      subtitle: "Женственность и пластика",
      icon: Sparkles,
      image: "/images/directions/exotic-dance.jpg",
      shortDescription: "Танцевальное направление с акцентом на женственность",
      fullDescription:
        "Exotic Dance — это танцевальное направление, которое сочетает элементы pole dance с акцентом на женственность, пластику и чувственность. Включает работу на каблуках, партерную хореографию и элементы на пилоне. Помогает раскрыть внутреннюю женственность, повысить уверенность в себе и развить пластику движений.",
      benefits: [
        "Развитие женственности и грации",
        "Повышение уверенности в себе",
        "Улучшение пластики движений",
        "Работа с музыкальностью",
        "Эмоциональное раскрепощение",
      ],
      levels: ["Начинающий", "Средний", "Продвинутый"],
    },
    {
      id: 9,
      title: "Акробатика",
      subtitle: "Для детей и взрослых",
      icon: Zap,
      image: "/images/directions/acrobatics.jpg",
      shortDescription: "Акробатические элементы и трюки на полу",
      fullDescription:
        "Акробатика — универсальное направление для детей и взрослых, включающее изучение акробатических элементов, кувырков, стоек и различных трюков на полу. Развивает координацию, силу, гибкость и пространственное мышление. Отличная база для других направлений воздушной гимнастики и пилонного спорта.",
      benefits: [
        "Развитие координации и баланса",
        "Укрепление всех групп мышц",
        "Улучшение гибкости",
        "Преодоление страхов",
        "Подготовка к сложным элементам",
      ],
      levels: ["Детский", "Взрослый", "Семейный"],
    },
  ]

  const openModal = (directionId: number) => {
    setSelectedDirection(directionId)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedDirection(null)
    document.body.style.overflow = "unset"
  }

  const selectedDirectionData = selectedDirection ? directions.find((dir) => dir.id === selectedDirection) : null

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 120
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="directions" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="text-yellow-400">направления</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление, которое подходит именно вам. От классического pole sport до детских программ — у нас
            есть всё для вашего развития и самовыражения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {directions.map((direction) => (
            <div
              key={direction.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => openModal(direction.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={direction.image || "/placeholder.svg"}
                  alt={`${direction.title} в Smart Pole Studio`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <direction.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{direction.title}</h3>
                  <p className="text-yellow-400 text-sm font-medium">{direction.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{direction.shortDescription}</p>

                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 font-semibold text-sm">Подробнее →</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">Не знаете, какое направление выбрать?</h3>
            <p className="text-gray-600 mb-6">
              Наши тренеры помогут определить подходящее направление на бесплатной консультации. Учтем ваш уровень
              подготовки, цели и предпочтения.
            </p>
            <a
              href="https://t.me/smartpolestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </div>

      {/* Модальное окно с подробной информацией */}
      {selectedDirection && selectedDirectionData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={selectedDirectionData.image || "/placeholder.svg"}
                  alt={`${selectedDirectionData.title} в Smart Pole Studio`}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <selectedDirectionData.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedDirectionData.title}</h3>
                      <p className="text-yellow-400 text-lg">{selectedDirectionData.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Описание направления</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedDirectionData.fullDescription}</p>

                    <h4 className="text-xl font-bold mb-4 text-gray-900">Уровни подготовки</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDirectionData.levels.map((level, index) => (
                        <span
                          key={index}
                          className="bg-yellow-400/20 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Преимущества</h4>
                    <ul className="space-y-3">
                      {selectedDirectionData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="w-3 h-3 text-black" />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Directions
