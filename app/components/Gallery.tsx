"use client"

import { useState } from "react"
import { X, ZoomIn, Users, Star, Flame, Trophy, ChevronDown } from "lucide-react"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [showMore, setShowMore] = useState<boolean>(false)

  const images = [
    // Existing images
    {
      id: 1,
      src: "/images/gallery/pole-element.jpg",
      alt: "Профессиональный элемент pole sport в Smart Pole Studio",
      category: "elements",
      title: "Мастерство техники",
      description: "Сложные элементы требуют силы и грации",
    },
    {
      id: 2,
      src: "/images/gallery/acrobatics-duo.jpg",
      alt: "Акробатические элементы в паре в Smart Pole Studio",
      category: "elements",
      title: "Парная акробатика",
      description: "Синхронность и доверие в каждом движении",
    },
    {
      id: 3,
      src: "/images/gallery/team-group.jpg",
      alt: "Дружная команда учениц Smart Pole Studio",
      category: "team",
      title: "Наша команда",
      description: "Единство и поддержка в каждом занятии",
    },
    {
      id: 4,
      src: "/images/gallery/flexibility-group.jpg",
      alt: "Групповые занятия по растяжке и гибкости",
      category: "group",
      title: "Гибкость и растяжка",
      description: "Развиваем пластичность тела",
    },
    {
      id: 5,
      src: "/images/gallery/studio-team.jpg",
      alt: "Большая команда Smart Pole Studio",
      category: "team",
      title: "Студия Smart Pole",
      description: "Место, где рождаются чемпионы",
    },
    // Previous batch of new images
    {
      id: 6,
      src: "/images/gallery/child-winner-garden.jpg",
      alt: "Юный чемпион с дипломом и медалью",
      category: "achievements",
      title: "Первые победы",
      description: "Гордимся достижениями наших самых юных спортсменов",
    },
    {
      id: 7,
      src: "/images/gallery/stage-winners.jpg",
      alt: "Победители соревнований на сцене",
      category: "achievements",
      title: "Триумф на сцене",
      description: "Заслуженные награды за упорный труд",
    },
    {
      id: 8,
      src: "/images/gallery/team-coaches.jpg",
      alt: "Команда тренеров Smart Pole Studio",
      category: "team",
      title: "Команда профессионалов",
      description: "Наши тренеры - основа успеха студии",
    },
    {
      id: 9,
      src: "/images/gallery/duo-champions.jpg",
      alt: "Чемпионы в парном выступлении",
      category: "achievements",
      title: "Парные достижения",
      description: "Синхронность и мастерство в каждом движении",
    },
    {
      id: 10,
      src: "/images/gallery/big-team-photo.jpg",
      alt: "Большая команда Smart Pole Studio на соревнованиях",
      category: "team",
      title: "Вся команда вместе",
      description: "Единая семья спортсменов всех возрастов",
    },
    {
      id: 11,
      src: "/images/gallery/aerial-silks-performance.jpg",
      alt: "Выступление на воздушных полотнах",
      category: "elements",
      title: "Воздушная грация",
      description: "Профессиональное мастерство на воздушных снарядах",
    },
    {
      id: 12,
      src: "/images/gallery/dragons-cup-podium.jpg",
      alt: "Пьедестал почета Dragons Cup",
      category: "achievements",
      title: "Dragons Cup",
      description: "Престижные соревнования и заслуженные награды",
    },
    {
      id: 13,
      src: "/images/gallery/coach-with-champions.jpg",
      alt: "Тренер с юными чемпионами",
      category: "achievements",
      title: "Гордость тренера",
      description: "Успехи учеников - лучшая награда для наставника",
    },
    {
      id: 14,
      src: "/images/gallery/team-formation.jpg",
      alt: "Командное построение спортсменов",
      category: "team",
      title: "Командный дух",
      description: "Сплоченность и профессионализм нашей команды",
    },
    {
      id: 15,
      src: "/images/gallery/young-champion.jpg",
      alt: "Юный чемпион с множеством наград",
      category: "achievements",
      title: "Звезда будущего",
      description: "Множественные победы юного таланта",
    },
    // Latest batch of new images
    {
      id: 16,
      src: "/images/gallery/aerial-silks-red-competition.jpg",
      alt: "Выступление на красных полотнах на соревнованиях МФСОО",
      category: "elements",
      title: "Мастерство на полотнах",
      description: "Профессиональное выступление на федеральных соревнованиях",
    },
    {
      id: 17,
      src: "/images/gallery/mfsoo-podium-winners.jpg",
      alt: "Победители соревнований МФСОО на пьедестале",
      category: "achievements",
      title: "Федеральные победы",
      description: "Триумф на соревнованиях федерального уровня",
    },
    {
      id: 18,
      src: "/images/gallery/young-athletes-podium.jpg",
      alt: "Юные спортсмены на пьедестале МФСОО",
      category: "achievements",
      title: "Будущие чемпионы",
      description: "Молодое поколение покоряет высоты спорта",
    },
    {
      id: 19,
      src: "/images/gallery/pole-sport-green.jpg",
      alt: "Элемент pole sport в зеленом костюме",
      category: "elements",
      title: "Техника pole sport",
      description: "Сложный инверсионный элемент на пилоне",
    },
    {
      id: 20,
      src: "/images/gallery/aerial-silks-blue.jpg",
      alt: "Выступление на синих воздушных полотнах",
      category: "elements",
      title: "Синие полотна",
      description: "Элегантность и сила в воздушной гимнастике",
    },
    {
      id: 21,
      src: "/images/gallery/aerial-hoop-colorful.jpg",
      alt: "Выступление на воздушном кольце в ярком костюме",
      category: "elements",
      title: "Воздушное кольцо",
      description: "Грация и мастерство на воздушном кольце",
    },
    {
      id: 22,
      src: "/images/gallery/aerial-silks-red-gold.jpg",
      alt: "Выступление на красных полотнах в золотом костюме",
      category: "elements",
      title: "Золотая грация",
      description: "Изящество и техника в красно-золотом исполнении",
    },
    {
      id: 23,
      src: "/images/gallery/dragons-cup-winners.jpg",
      alt: "Победители Dragons Cup на пьедестале",
      category: "achievements",
      title: "Dragons Cup 2024",
      description: "Очередные победы на престижном турнире",
    },
    {
      id: 24,
      src: "/images/gallery/aerial-silks-white-splits.jpg",
      alt: "Шпагат на белых воздушных полотнах",
      category: "elements",
      title: "Белые полотна",
      description: "Идеальный шпагат в воздухе демонстрирует гибкость",
    },
    {
      id: 25,
      src: "/images/gallery/folk-costume-winners.jpg",
      alt: "Победители в народных костюмах с наградами",
      category: "achievements",
      title: "Культурные достижения",
      description: "Успехи в культурно-спортивных мероприятиях",
    },
  ]

  const filters = [
    { id: "all", label: "Все фото", icon: Star },
    { id: "elements", label: "Элементы", icon: Flame },
    { id: "achievements", label: "Достижения", icon: Trophy },
    { id: "team", label: "Команда", icon: Users },
    { id: "group", label: "Групповые", icon: Users },
  ]

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)
  const displayedImages = showMore ? filteredImages : filteredImages.slice(0, 12)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const selectedImageData = selectedImage ? images.find((img) => img.id === selectedImage) : null

  return (
    <section id="gallery" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-yellow-400">Галерея</span> достижений
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Посмотрите на успехи наших учениц, атмосферу студии и профессиональные элементы pole sport
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => {
                  setFilter(filterItem.id)
                  setShowMore(false) // Reset show more when changing filter
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  filter === filterItem.id
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-yellow-400/20"
                }`}
              >
                <filterItem.icon className="w-5 h-5" />
                <span>{filterItem.label}</span>
              </button>
            ))}
          </div>

          {/* Галерея изображений */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105 aspect-square"
                onClick={() => openModal(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-bold text-yellow-400 mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                  </div>

                  <div className="absolute top-2 right-2">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredImages.length > 12 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                <span>{showMore ? "Показать меньше" : `Показать еще ${filteredImages.length - 12} фото`}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showMore ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
              {/* Image container with proper scaling */}
              <div className="relative w-full h-full flex items-center justify-center mb-4">
                <img
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ maxHeight: "calc(100vh - 200px)" }}
                />
              </div>

              {/* Description at the bottom */}
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-300">{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
