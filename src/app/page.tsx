"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AchievementsSection } from "@/components/achievements-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  const handleLanguageChange = (newLanguage: "en" | "bn") => {
    setLanguage(newLanguage)
  }

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <HeroSection language={language} />
        <AchievementsSection language={language} />
        <AboutSection language={language} />
        <GallerySection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}
