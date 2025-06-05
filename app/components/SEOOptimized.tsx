import type React from "react"

interface SEOOptimizedProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  id?: string
}

const SEOOptimized: React.FC<SEOOptimizedProps> = ({ children, className = "", as: Component = "h2", id }) => {
  return (
    <Component className={className} id={id} itemProp={Component === "h1" ? "headline" : undefined}>
      {children}
    </Component>
  )
}

export default SEOOptimized
