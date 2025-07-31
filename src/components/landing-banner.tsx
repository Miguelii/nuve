"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/utils/cn"

const images = [
  "/gt3rs_t_c.webp",
  "/720s_t_c.webp",
  "/gtr_t_c.webp",
  "/m4_t_c.webp",
]

export function LandingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images?.map((src, index) => (
        <div
          key={src}
          className={cn(
            'absolute top-0 left-0 w-full h-full transition-opacity duration-1000',
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            unoptimized
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="filter grayscale"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center">
        <h1 className="font-mono text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary text-center mb-4">
        Nuvē
        </h1>
        <p className="font-mono text-xl text-primary mb-8">Premium Cars</p>
        {/* 
        <Button onClick={handleShopClick} size="lg" variant="outline">
          SHOP
        </Button>
        */}
      </div>
    </div>
  )
}
