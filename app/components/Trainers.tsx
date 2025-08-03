"use client"

import { useState } from "react"
import { Award, Star, ChevronLeft, ChevronRight, Eye, X } from "lucide-react"

const Trainers = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null)

  const trainers = [
    {
      name: "Екатерина Шевелева",
      title: "Основатель школы Smart Pole",
      experience: "10+ лет",
      achievements: ["Трехкратная чемпионка РФ", "Вице-президент Федерации FAAS"],
      specialization: "Pole Sport, Воздушное кольцо",
      description:
        "Основатель школы пилонного спорта и воздушной гимнастики Smart Pole, сооснователь бренда SN Competitions.",
      image: "/images/trainer-ekaterina.jpg",
      fullDescription:
        "Екатерина — основатель школы пилонного спорта и воздушной гимнастики Smart Pole, сооснователь Бренда SN Competitions, куда входят ежегодные фестивали SN Fest и спортивный лагерь SN Camp. Вице-президент Федерации пилотного спорта и воздушной гимнастики МФСОО FAAS, судья Всероссийской категории федерации МФСОО FAAS, аккредитованный действующий судья 1-й всероссийской категории федерации RAPA, международный судья Федерации IPSF.",
      awards: [
        {
          year: "2014-2022",
          achievements: [
            "Квалифицированный тренер 2 ступени по спорту на пилоне с 2014 года",
            "Повышение квалификации на базе Пермского государственного гуманитарно-педагогического университета по специальности «Основы спортивной подготовки в воздушной акробатике» 2022",
            "Главный Тренер-постановщик соревновательных программ команды Smart Pole",
            "Трехкратная чемпионка РФ по спорту на пилоне и воздушному кольцу",
          ],
        },
      ],
    },
    {
      name: "Мамонтова Яна",
      title: "Тренер по воздушным снарядам",
      experience: "7+ лет",
      achievements: ["Высшее образование", "Курс повышения квалификации ГУЦЭИ"],
      specialization: "Воздушные снаряды (дети)",
      description: "Специалист по работе с детьми, подготовила множество участников и призеров крупных соревнований.",
      image: "/images/trainer-maria.jpg",
      fullDescription:
        "Яна имеет высшее образование и прошла курс «Повышения квалификации по цирковому жанру Воздушная гимнастика и Педагогика» при ГУЦЭИ. Специализируется на работе с детьми, проводила 2-х месячный курс «Танцы в воздухе для новичков» с постановкой номера.",
      awards: [
        {
          year: "2017-2019",
          achievements: [
            "Подготовка участников и призеров к Кубку по ВСЭ, НЕБОФЕСТ, Софавест, Catwalk",
            "Победитель IX Кубка России по СНГ по ВСЭ 2017 года в категории «Полотна. Любители. Мастера»",
            "Серебряный призер Второго Фестиваля воздушной гимнастики 2017 года в категории «Воздушные полотна»",
            "Победитель Х Кубка России и СНГ по ВСЭ 2018 в категории «Полотна. Профессионалы.» Открытая группа 35-40 лет",
            "Серебряный призер Третьего фестиваля воздушной гимнастики 2018 года в категории «Воздушные полотна. Профессионалы» 30+",
            "Победитель Открытого Кубка России и СНГ по ВСЭ 2019 года в категории «Воздушные полотна»",
          ],
        },
      ],
    },
    {
      name: "Карпова Дарья",
      title: "Сертифицированный тренер по воздушной гимнастике",
      experience: "6 лет",
      achievements: ["КМС по версии RAPA", "МС по версии FAAS"],
      specialization: "Воздушные снаряды (кольцо, стропы, полотна)",
      description: "Сертифицированный тренер Федерации FAAS, призер и победитель множества соревнований.",
      image: "/images/trainer-ekaterina-sidorova.jpg",
      fullDescription:
        "Дарья — сертифицированный тренер по воздушной гимнастике Федерации МФСОО FAAS. Имеет опыт работы с многочисленными воздушными снарядами (кольцо, стропы, полотна). Призер и победитель множества фестивалей и всероссийских соревнований.",
      awards: [
        {
          year: "Спортивные достижения",
          achievements: [
            "КМС на воздушных полотнах по версии RAPA",
            "МС на воздушных полотнах по версии FAAS",
            "Призер и победитель множества фестивалей и всероссийских соревнований",
          ],
        },
      ],
    },
    {
      name: "Галанцева Алена",
      title: "Тренер по воздушной гимнастике",
      experience: "9 лет",
      achievements: ["Сертифицированный тренер", "Действующая спортсменка"],
      specialization: "Воздушная гимнастика, АРТ постановки",
      description:
        "Тренер по воздушной гимнастике с 2015 года, работает со взрослыми и детьми, специализируется на АРТ постановках.",
      image: "/images/trainer-sofia.jpg",
      fullDescription:
        "Алена — тренер по воздушной гимнастике с 2015 года, работает со взрослыми и детьми. Действующая спортсменка, сертифицированный тренер. Специализируется на АРТ постановках, создавая уникальные номера для выступлений.",
      awards: null,
    },
    {
      name: "Лаврентьева Дарья",
      title: "Тренер по пилонному спорту",
      experience: "5+ лет",
      achievements: ["КМС по пилонному спорту", "Судья 1 категории"],
      specialization: "Пилонный спорт (дети и взрослые)",
      description: "Сертифицированный тренер Федерации FAAS, призер и победитель множества соревнований.",
      image: "/images/trainer-victoria.jpg",
      fullDescription:
        "Дарья — сертифицированный тренер по пилонному спорту Федерации МФСОО FAAS. Имеет опыт работы с детскими и взрослыми группами. Призер и победитель множества фестивалей и всероссийских соревнований.",
      awards: [
        {
          year: "Достижения",
          achievements: [
            "КМС по пилонному спорту федерации RAPA",
            "Судья 1 категории федерации FAAS и RAPA",
            "Призер и победитель множества фестивалей и всероссийских соревнований",
          ],
        },
      ],
    },
    {
      name: "Курзанова Татьяна",
      title: "Тренер по пилону и воздушной гимнастике",
      experience: "4 года",
      achievements: ["Студентка циркового училища", "Победитель международных соревнований"],
      specialization: "Пилон, воздушная гимнастика, акробатика",
      description: "Сертифицированный тренер с 16-летним спортивным опытом, студентка циркового училища.",
      image: "/images/trainer-polina.jpg",
      fullDescription:
        "«Спорт занимает важное место в моей жизни. Он способствует развитию дисциплины, что положительно сказывается на других аспектах жизни». Сертифицированный тренер по пилону и воздушной гимнастике с опытом работы 4 года. Обучается в Цирковом училище циркового и эстрадного искусства, изучает психологию. За 16 лет в спорте профессионально занималась спортивной акробатикой, изучает эквилибр и классическую хореографию.",
      awards: [
        {
          year: "Достижения",
          achievements: [
            "Победитель Всероссийских и международных соревнований по воздушной гимнастике и пилону",
            "Неоднократно выезжала с командой на соревнования, где дети показывали призовые результаты",
            "16 лет в спорте: спортивная акробатика, воздушная гимнастика, эквилибр, классическая хореография",
          ],
        },
      ],
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
    {
      name: "Гуляев Кирилл",
      title: "Мастер спорта по спортивной гимнастике",
      experience: "15+ лет",
      achievements: ["Мастер спорта", "Участник международных соревнований"],
      specialization: "Акробатика, воздушная гимнастика",
      description: "Воздушный гимнаст с цирковым опытом, более 15 лет тренерской работы со взрослыми и детьми.",
      image: "/placeholder.svg?height=400&width=300",
      fullDescription:
        "Кирилл — мастер спорта по спортивной гимнастике, участник и призёр международных соревнований. Воздушный гимнаст, работал цирковой номер. Более 15 лет тренерской работы. Работает как со взрослыми, так и с детьми. Тренер по акробатике команды Smart Pole.",
      awards: [
        {
          year: "Достижения",
          achievements: [
            "Мастер спорта по спортивной гимнастике",
            "Участник и призёр международных соревнований",
            "Более 15 лет тренерской работы",
            "Тренер по акробатике команды Smart Pole",
          ],
        },
      ],
    },
    {
      name: "Евсеева Вероника",
      title: "Мастер спорта по чир спорту",
      experience: "10+ лет",
      achievements: ["Мастер спорта", "Победитель чемпионата Евразии 2016"],
      specialization: "Акробатика, чир спорт",
      description: "Опыт работы с детскими и взрослыми группами, тренер по акробатике команды Smart Pole.",
      image: "/images/trainer-anna.jpg",
      fullDescription:
        "Вероника — мастер спорта по чир спорту с опытом работы с детскими и взрослыми группами. Тренер по акробатике команды Smart Pole.",
      awards: [
        {
          year: "2013-2018",
          achievements: [
            "Победитель чемпионата Евразии 2016 года",
            "Призёр (2 место) чемпионата Европы 2013 года",
            "Участник европейских соревнований с 2013 по 2018",
            "Победитель чемпионата Москвы и России с 2013 по 2018 год",
          ],
        },
      ],
    },
    {
      name: "Поряднов Алексей",
      title: "Презентер мастер-классов, судья соревнований",
      experience: "10+ лет",
      achievements: ["Презентер в России и Европе", "Судья соревнований"],
      specialization: "Акробатика на пилоне",
      description:
        "10 лет брейк-данса, 5 лет работы фитнес-тренером, тренирует команду Smart Pole по акробатике на пилоне.",
      image: "/placeholder.svg?height=400&width=300",
      fullDescription:
        "Презентер мастер-классов в России и Европе, судья соревнований. До прихода в pole dance у Алексея был внушительный спортивный опыт: 10 лет брейк-данса, 5 лет работы фитнес-тренером в World Class, увлечение акробатикой. В данный момент тренирует команду выступающих спортсменов Smart Pole по акробатике на пилоне.",
      awards: [
        {
          year: "2016-2018",
          achievements: [
            "Судья Pole Star Samara 2018",
            "Судья Zodiac Exotic Championship 2018, Москва",
            "Судья Exotic Generation 2018, Москва",
            "Судья Pole Art Krasnodar 2017, Краснодар",
            "Судья Temptation 2017, Киев, Украина",
            "Судья KASEF Pole Sport 2017, Астана, Казахстан",
            "Судья Magic Pole 2017, Хабаровск",
            "Судья Zodiac Exotic Championship 2017, Москва",
            "Судья Pole Fight 2016, Москва",
          ],
        },
      ],
    },
    {
      name: "Боровая Мария",
      title: "Сертифицированный тренер Pole Dance",
      experience: "8 лет",
      achievements: ["Сертифицированный тренер", "Участница соревнований"],
      specialization: "Pole Dance, базовые и продвинутые элементы",
      description: "В Pole Dance с 2016 года, специализируется на обучении базовым элементам и созданию связок.",
      image: "/placeholder.svg?height=400&width=300",
      fullDescription:
        "Сертифицированный тренер Pole Dance. Пройдены курсы как для базового, так и для продвинутого уровня. Особенность преподавания: внимательное обучение базовым элементам, обучение соединять элементы в связки. В Pole Dance с 2016 года. До этого танцевальными видами спорта не занималась, поэтому обучение проходила практически с нуля. Благодаря этому знает, как научить Pole Dance людей с различным спортивным прошлым.",
      awards: [
        {
          year: "Достижения",
          achievements: [
            "Участвовала в соревнованиях, занимала призовые места",
            "Специализация на эмоциональной игре со зрителями",
            "Обучение правильному ракурсу при подаче элементов",
            "Работа с камерой и сценическая подача",
          ],
        },
      ],
    },
    {
      name: "Данилова Татьяна",
      title: "Тренер по Pole Sport и растяжке",
      experience: "6 лет",
      achievements: ["Чемпионка Pole Sports Russia 2022", "Сертифицированный тренер"],
      specialization: "Pole Sport, Sensual Pole, растяжка",
      description:
        "Опыт преподавания с 2018 года, чемпионка Pole Sports Russia 2022 в категории спортивный пилон любители.",
      image: "/images/trainer-alexandra.jpg",
      fullDescription:
        "Опыт преподавания с 2018 года. Сертифицированный тренер Pole Dance и растяжки. Пилоном начала заниматься во взрослом возрасте, не имея за плечами никакого спортивного прошлого, поэтому не понаслышке знает, как это сложно — начинать с нуля. Поэтому Таня очень любит работать с новичками и постепенно погружать их в мир спорта. В своих тренировках использует систематичный подход, где трюки разбираются от простого к сложному, а во главе тренировки стоит безопасность учеников.",
      awards: [
        {
          year: "2022",
          achievements: [
            "Чемпионка Pole Sports Russia — Спортивный пилон Любители",
            "Систематичный подход в обучении от простого к сложному",
            "Специализация на работе с новичками",
          ],
        },
      ],
    },
    {
      name: "Харитонова Василиса",
      title: "Тренер по пилону и растяжке",
      experience: "3 года",
      achievements: ["1 место Pole Positions Art 2024", "Курс от My Pole Space"],
      specialization: "Артистический пилон, растяжка",
      description:
        "Пришла в спорт в 21 год «с дивана», освоила шпагаты, бильман и стойки на руках во взрослом возрасте.",
      image: "/images/trainer-vasilisa.jpg",
      fullDescription:
        "В 2022 году прошла базовый тренерский курс от My Pole Space. Заняла первое место в Pole Positions Art в категории Артистический пилон, Amateur в 2024. Прошла курс для тренеров растяжки от Кристины Думанской и продвинутый курс для преподавателей в 2024. Пришла в спорт в 21 год без спортивного или танцевального прошлого «с дивана». Села на шпагаты и научилась делать бильман и стойки на руках, сальто на пилоне во взрослом возрасте.",
      awards: [
        {
          year: "2022-2024",
          achievements: [
            "1 место в Pole Positions Art в категории Артистический пилон, Amateur в 2024",
            "Прошла 4 тренерских насмотренности от My Pole Space",
            "Курс для тренеров растяжки от Кристины Думанской",
            "Попробовала 25 спортивных и танцевальных направлений",
          ],
        },
      ],
    },
    {
      name: "Алена Романова",
      title: "Сертифицированный тренер по пилонному спорту",
      experience: "5+ лет",
      achievements: ["Сертифицированный тренер", "Призер чемпионатов pole exotic"],
      specialization: "Пилонный спорт, Pole Exotic",
      description:
        "Сертифицированный тренер по пилонному спорту, призер и победитель множества чемпионатов pole exotic.",
      image: "/placeholder.svg?height=400&width=300",
      fullDescription:
        "Алена — сертифицированный тренер по пилонному спорту, призер и победитель множества чемпионатов pole exotic. Специализируется на направлении Pole Exotic, помогая ученикам раскрыть артистизм и пластику.",
      awards: [
        {
          year: "Достижения",
          achievements: [
            "Призер и победитель множества чемпионатов pole exotic",
            "Сертифицированный тренер по пилонному спорту",
            "Специализация на Pole Exotic направлении",
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
                <div className="text-2xl font-bold text-yellow-400 mb-1">15</div>
                <div className="text-gray-500 text-sm">Профессиональных тренеров</div>
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
