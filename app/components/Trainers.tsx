"use client"

import { useState } from "react"
import { Award, Star, ChevronLeft, ChevronRight, Eye, X } from "lucide-react"

const Trainers = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null)

  const trainers = [
    {
      name: "Екатерина Шевелева",
      title: "Главный тренер, основательница",
      experience: "8 лет",
      achievements: ["Чемпионка России по Pole Sport", "Сертифицированный тренер IPSF"],
      specialization: "Pole Sport всех уровней, хореография",
      description:
        "Екатерина начала заниматься pole sport в 2016 году и уже через два года стала чемпионкой России. Основала Smart Pole с миссией сделать этот вид спорта доступным каждому.",
      image: "/images/trainer-ekaterina.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Мария Иванова",
      title: "Старший тренер",
      experience: "5 лет",
      achievements: ["Призёр чемпионата Европы", "Мастер спорта"],
      specialization: "Pole Sport средний и продвинутый уровень",
      description:
        "Мария специализируется на технически сложных элементах и помогает ученикам достигать новых высот в pole sport.",
      image: "/images/trainer-maria.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Екатерина Сидорова",
      title: "Тренер по растяжке",
      experience: "6 лет",
      achievements: ["Инструктор по йоге", "Специалист по стретчингу"],
      specialization: "Растяжка, гибкость, восстановление",
      description: "Екатерина поможет развить гибкость и подготовить тело к выполнению сложных элементов pole sport.",
      image: "/images/trainer-ekaterina-sidorova.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Анна Петрова",
      title: "Тренер по Pole Kids",
      experience: "4 года",
      achievements: ["Сертифицированный детский тренер", "Специалист по детской психологии"],
      specialization: "Pole Kids, детская акробатика",
      description:
        "Анна работает с детьми от 6 лет, создавая безопасную и веселую атмосферу для изучения основ pole sport.",
      image: "/images/trainer-anna.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "София Волкова",
      title: "Тренер по воздушной акробатике",
      experience: "7 лет",
      achievements: ["Мастер воздушных полотен", "Артист цирка"],
      specialization: "Воздушные полотна, воздушное кольцо",
      description:
        "София привносит цирковое искусство в студию, обучая красивым и безопасным элементам на воздушных снарядах.",
      image: "/images/trainer-sofia.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Виктория Смирнова",
      title: "Тренер по Exotic Dance",
      experience: "5 лет",
      achievements: ["Чемпионка по Exotic Pole", "Хореограф"],
      specialization: "Exotic Dance, женская пластика",
      description:
        "Виктория помогает раскрыть женственность и чувственность через танец, работая над пластикой и артистизмом.",
      image: "/images/trainer-victoria.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Полина Козлова",
      title: "Тренер по функциональному фитнесу",
      experience: "3 года",
      achievements: ["Сертифицированный фитнес-тренер", "Специалист по реабилитации"],
      specialization: "Функциональный тренинг, подготовка к pole sport",
      description:
        "Полина готовит тело к сложным элементам pole sport через функциональные тренировки и силовую подготовку.",
      image: "/images/trainer-polina.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Александра Новикова",
      title: "Тренер по Pole Choreo",
      experience: "6 лет",
      achievements: ["Призёр международных соревнований", "Хореограф-постановщик"],
      specialization: "Pole Choreo, танцевальные связки",
      description:
        "Александра создает уникальные хореографические постановки, сочетая технику pole sport с артистизмом.",
      image: "/images/trainer-alexandra.jpg",
      fullDescription: null,
      awards: null,
    },
    {
      name: "Мария Самородова",
      title: "Тренер по воздушным снарядам",
      experience: "8 лет",
      achievements: ["Артистка цирка", "Фотограф воздушного спорта"],
      specialization: "Воздушные снаряды (дети и взрослые)",
      description:
        "Мария — действующий тренер многочисленных победителей всероссийских соревнований по воздушной гимнастике.",
      image: "/images/trainer-elena.jpg",
      fullDescription:
        "Мария — опытная артистка цирка и действующий тренер многочисленных победителей всероссийских соревнований по воздушной гимнастке на кольце, полотнах, стропах и оригинальных снарядах. Помимо тренерской деятельности, она также является фотографом воздушного спорта и красоты тела. Мария активно участвует в многочисленных показательных выступлениях на кольце, стропах, полотнах (соло и дуэт), а также в различных коммерческих и творческих мероприятиях и проектах.",
      awards: [
        {
          year: "2021",
          achievements: [
            "Призер фестиваля Art factory Ovo соло-кольцо",
            "Победитель фестиваля «Созвездие» в категории кольцо дуэты",
            "Судья catwalk, Москва",
          ],
        },
        {
          year: "2020-2021",
          achievements: ["Презентер poledance camp Пилония"],
        },
        {
          year: "2019",
          achievements: [
            "Приглашенный артист, гимнастка на кольце и полотнах ледового шоу «Снежная Королева» от цирка на льду «Shine of ice»",
          ],
        },
      ],
    },
  ]

  const slidesToShow = 3
  const maxSlide = Math.max(0, trainers.length - slidesToShow)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide))
  }

  const openTrainerModal = (index: number) => {
    setSelectedTrainer(index)
  }

  const closeTrainerModal = () => {
    setSelectedTrainer(null)
  }

  const TrainerCard = ({
    trainer,
    index,
    showDetailsButton = false,
  }: { trainer: any; index: number; showDetailsButton?: boolean }) => (
    <div className="bg-white rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group shadow-lg h-full">
      <div className="relative">
        <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={trainer.image || "/placeholder.svg"}
            alt={`${trainer.name} - ${trainer.title} Smart Pole Studio`}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          {trainer.experience} опыта
        </div>
        {showDetailsButton && trainer.fullDescription && (
          <button
            onClick={() => openTrainerModal(index)}
            className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center text-black transition-colors shadow-lg"
            aria-label="Подробнее о тренере"
          >
            <Eye className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">{trainer.name}</h3>
        <p className="text-gray-600 mb-4">{trainer.title}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-900">Специализация:</h4>
          <p className="text-gray-600 text-sm">{trainer.specialization}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-900">Достижения:</h4>
          <ul className="space-y-1">
            {trainer.achievements.slice(0, 2).map((achievement: string, achIndex: number) => (
              <li key={achIndex} className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-600">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-500 text-sm">{trainer.description}</p>

        {showDetailsButton && trainer.fullDescription && (
          <button
            onClick={() => openTrainerModal(index)}
            className="mt-4 text-yellow-400 hover:text-yellow-500 text-sm font-medium flex items-center space-x-1 transition-colors"
          >
            <span>Подробнее</span>
            <Eye className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )

  return (
    <section id="trainers" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="text-yellow-400">тренеры</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная команда с многолетним опытом и множеством достижений. Каждый тренер — эксперт в своей
            области
          </p>
        </div>

        {/* Слайдер тренеров - только для десктопа */}
        <div className="relative hidden lg:block">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {trainers.map((trainer, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <TrainerCard trainer={trainer} index={index} showDetailsButton={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации - только для десктопа */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors shadow-lg z-10"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors shadow-lg z-10"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Индикаторы слайдов - только для десктопа */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-yellow-400" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Мобильная версия - показываем все карточки в сетке */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} index={index} showDetailsButton={true} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-gray-900">Качество обучения</h3>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-gray-600 mb-6">
              Все наши тренеры имеют профильное образование и регулярно повышают квалификацию. Мы гарантируем
              безопасность занятий и быстрый прогресс наших учеников.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-gray-500 text-sm">Сертифицированные тренеры</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">1500+</div>
                <div className="text-gray-500 text-sm">Довольных учеников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">10</div>
                <div className="text-gray-500 text-sm">Лет успешной работы</div>
              </div>
            </div>
          </div>
        </div>

        {/* Модальное окно с подробной информацией о тренере */}
        {selectedTrainer !== null && trainers[selectedTrainer] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
                <h3 className="text-2xl font-bold text-yellow-400">{trainers[selectedTrainer].name}</h3>
                <button
                  onClick={closeTrainerModal}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3">
                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-xl">
                      <img
                        src={trainers[selectedTrainer].image || "/placeholder.svg"}
                        alt={`${trainers[selectedTrainer].name} - ${trainers[selectedTrainer].title}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4">{trainers[selectedTrainer].title}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-900">Опыт:</h4>
                      <p className="text-gray-600">{trainers[selectedTrainer].experience}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-900">Специализация:</h4>
                      <p className="text-gray-600">{trainers[selectedTrainer].specialization}</p>
                    </div>
                  </div>
                </div>

                {trainers[selectedTrainer].fullDescription && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">О тренере:</h4>
                    <p className="text-gray-600 leading-relaxed">{trainers[selectedTrainer].fullDescription}</p>
                  </div>
                )}

                {trainers[selectedTrainer].awards && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Награды и достижения:</h4>
                    <div className="space-y-4">
                      {trainers[selectedTrainer].awards.map((yearGroup: any, yearIndex: number) => (
                        <div key={yearIndex} className="border-l-4 border-yellow-400 pl-4">
                          <h5 className="font-semibold text-yellow-400 mb-2">{yearGroup.year}</h5>
                          <ul className="space-y-2">
                            {yearGroup.achievements.map((achievement: string, achIndex: number) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm">
                                <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Trainers
