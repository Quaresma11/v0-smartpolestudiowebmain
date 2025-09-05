"use client"

const SEOOptimized = () => {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://smartpolestudio.ru/#business",
            name: "Smart Pole Studio",
            alternateName: "Смарт Поул Студио",
            description:
              "Профессиональная студия пилонного спорта и воздушной акробатики в Москве. Занятия pole sport, воздушные полотна, кольцо, растяжка, экзотик, скульптура тела.",
            url: "https://smartpolestudio.ru",
            telephone: "+7-993-366-23-68",
            email: "info@smartpole.ru",
            priceRange: "750-18100 RUB",
            paymentAccepted: "Cash, Credit Card, Bank Transfer",
            currenciesAccepted: "RUB",
            openingHours: ["Mo-Su 10:00-22:00"],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "ул. Ткацкая, 5с7",
                addressLocality: "Москва",
                addressRegion: "Москва",
                postalCode: "105005",
                addressCountry: "RU",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "ул. Ивантеевская, 13к1",
                addressLocality: "Москва",
                addressRegion: "Москва",
                postalCode: "127566",
                addressCountry: "RU",
              },
            ],
            geo: [
              {
                "@type": "GeoCoordinates",
                latitude: 55.7887,
                longitude: 37.7198,
              },
              {
                "@type": "GeoCoordinates",
                latitude: 55.8176,
                longitude: 37.7156,
              },
            ],
            image: [
              "https://smartpolestudio.ru/images/hero-pole-dancer.jpg",
              "https://smartpolestudio.ru/images/gallery/pole-element.jpg",
              "https://smartpolestudio.ru/images/gallery/aerial-silks-performance.jpg",
            ],
            logo: "https://smartpolestudio.ru/images/logo.png",
            sameAs: [
              "https://t.me/smartpolestudio",
              "https://vk.com/smartpolestudio",
              "https://instagram.com/smartpolestudio",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "150",
              bestRating: "5",
              worstRating: "1",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Услуги Smart Pole Studio",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Пробное занятие pole sport",
                    description: "Первое знакомство со студией и направлением",
                  },
                  price: "750",
                  priceCurrency: "RUB",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Разовое занятие",
                    description: "Отдельное занятие без привязки к абонементу",
                  },
                  price: "1400",
                  priceCurrency: "RUB",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Абонемент 8 занятий",
                    description: "Популярный абонемент на месяц",
                  },
                  price: "7400",
                  priceCurrency: "RUB",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Аренда зала №1",
                    description: "Аренда зала с 8 пилонами, 80 кв.м",
                  },
                  price: "1400-2700",
                  priceCurrency: "RUB",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Сколько стоит пробное занятие?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Пробное занятие стоит 750 рублей. При покупке абонемента пробное занятие предоставляется в подарок.",
                },
              },
              {
                "@type": "Question",
                name: "Какие направления есть в студии?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "В Smart Pole Studio представлены: Pole Sport, Pole Dance, воздушные полотна, воздушное кольцо, растяжка, экзотик, скульптура тела, детские направления.",
                },
              },
              {
                "@type": "Question",
                name: "Можно ли заморозить абонемент?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Да, абонемент можно заморозить. Бесплатная заморозка предоставляется только при наличии больничного листа. Платная заморозка: 7 дней - 1200₽, неопределенный срок - 4000₽.",
                },
              },
              {
                "@type": "Question",
                name: "За сколько можно отменить занятие?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Отменить запись можно минимум за 6 часов до начала занятия. При более поздней отмене занятие списывается с абонемента.",
                },
              },
              {
                "@type": "Question",
                name: "Какой режим работы студии?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Smart Pole Studio работает ежедневно с 10:00 до 22:00, включая выходные и праздничные дни.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

export default SEOOptimized
