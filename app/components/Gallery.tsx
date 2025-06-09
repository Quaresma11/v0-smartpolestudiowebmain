"use client"

import { useState } from "react"
import { X, ZoomIn, Users, Star, Flame } from "lucide-react"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const images = [
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
  ]

  const filters = [
    { id: "all", label: "Все фото", icon: Star },
    { id: "elements", label: "Элементы", icon: Flame },
    { id: "group", label: "Групповые", icon: Users },
    { id: "team", label: "Команда", icon: Star },
  ]

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

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
                onClick={() => setFilter(filterItem.id)}
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => openModal(image.id)}
              >
                <div
                  className={`overflow-hidden ${image.src === "/images/gallery/acrobatics-duo.jpg" ? "aspect-[3/4]" : "aspect-auto"}`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ZoomIn className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

            <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="bg-gray-900/90 backdrop-blur-sm rounded-b-xl p-6 mt-2">
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
