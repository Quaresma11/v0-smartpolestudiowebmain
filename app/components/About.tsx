import { Target, Heart, Trophy, Zap } from "lucide-react"
import Image from "next/image"

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Индивидуальный подход",
      description: "Программы тренировок адаптированы под ваш уровень подготовки",
    },
    {
      icon: Heart,
      title: "Безопасность",
      description: "Профессиональное оборудование и квалифицированные тренеры",
    },
    {
      icon: Trophy,
      title: "Результат",
      description:
        "Видимые результаты уже через месяц регулярных занятий. Подготовка спортсменов к фестивалям и соревнованиям.",
    },
    {
      icon: Zap,
      title: "Энергия",
      description: "Заряд бодрости и позитива на весь день",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            О студии <span className="text-yellow-400">Smart Pole</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали пространство, где каждый может открыть в себе новые возможности, развить силу, гибкость и обрести
            уверенность в своем теле
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-yellow-400">Наша миссия</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Smart Pole — это не просто фитнес-студия, это место где искусство встречается со спортом. Мы помогаем
              нашим ученикам раскрыть свой потенциал через воздушную акробатику, развивая не только физические качества,
              но и артистизм, самовыражение и уверенность в себе.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наши тренеры — это профессионалы с многолетним опытом, которые создают безопасную и поддерживающую
              атмосферу для учеников любого уровня подготовки.
            </p>
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-6 rounded-xl border border-yellow-400/20">
              <p className="text-yellow-600 font-semibold text-lg">
                "Воздушная акробатика — это искусство владения своим телом и выражения своей души"
              </p>
              <p className="text-gray-500 mt-2">— Основательница Smart Pole, Екатерина Шевелева</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/10 to-transparent p-8 rounded-3xl border border-yellow-400/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-champions.jpeg"
                  alt="Команда чемпионов Smart Pole с медалями и кубками"
                  width={600}
                  height={450}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-yellow-400/40 transition-all group hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-yellow-400">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
