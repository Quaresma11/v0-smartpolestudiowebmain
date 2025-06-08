"use client"

import { Award, Star, Users } from "lucide-react"

const Trainers = () => {
  const trainers = [
    {
      name: "Екатерина Шевелева",
      title: "Главный тренер, основательница",
      experience: "8 лет",
      achievements: ["Чемпионка России по Pole Sport", "Сертифицированный тренер IPSF"],
      specialization: "Pole Sport всех уровней, хореография",
      description:
        "Екатерина начала заниматься pole sport в 2016 году и уже через два года стала чемпионкой России. Основала Smart Pole с миссией сделать этот вид спорта доступным каждому.",
    },
    {
      name: "Мария Иванова",
      title: "Старший тренер",
      experience: "5 лет",
      achievements: ["Призёр чемпионата Европы", "Мастер спорта"],
      specialization: "Pole Sport средний и продвинутый уровень",
      description:
        "Мария специализируется на технически сложных элементах и помогает ученикам достигать новых высот в pole sport.",
    },
    {
      name: "Екатерина Сидорова",
      title: "Тренер по растяжке",
      experience: "6 лет",
      achievements: ["Инструктор по йоге", "Специалист по стретчингу"],
      specialization: "Растяжка, гибкость, восстановление",
      description: "Екатерина поможет развить гибкость и подготовить тело к выполнению сложных элементов pole sport.",
    },
  ]

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

        <div className="grid lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group shadow-lg"
            >
              <div className="relative">
                {index === 0 || index === 1 ? (
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="/images/trainer-ekaterina.jpg"
                      alt={
                        index === 0
                          ? "Екатерина Шевелева - главный тренер Smart Pole Studio"
                          : "Мария Иванова - старший тренер Smart Pole Studio"
                      }
                      className="w-full h-full object-cover object-center"
                      style={{
                        clipPath: "circle(50% at 50% 50%)",
                        background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-black" />
                      </div>
                      <p className="text-gray-400">Фото тренера</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {trainer.experience} опыта
                </div>
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
                    {trainer.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-500 text-sm mb-6">{trainer.description}</p>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border border-yellow-400/40 text-yellow-600 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Записаться к тренеру
                </button>
              </div>
            </div>
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
                <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-gray-500 text-sm">Довольных учеников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">3</div>
                <div className="text-gray-500 text-sm">Года успешной работы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers
