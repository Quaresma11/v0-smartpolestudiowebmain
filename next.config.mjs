/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем standalone output для Docker
  output: 'standalone',
  
  // Оптимизация изображений
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true,
  },
  
  // Сжатие
  compress: true,
  
  // Экспериментальные функции
  experimental: {
    // Оптимизация пакетов
    optimizePackageImports: ['lucide-react'],
  },
  
  // Настройки для продакшена
  poweredByHeader: false,
  
  // Редиректы и переписывания
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // ESLint и TypeScript настройки
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
