"use client"

import { useState, useEffect } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { MobileNav } from "./mobile-nav"

interface NavbarProps {
  language: "en" | "bn"
  onLanguageChange: (language: "en" | "bn") => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = {
    en: [
      { href: "#home", label: "Home" },
      { href: "#achievements", label: "Achievements" },
      { href: "#about", label: "About" },
      { href: "#gallery", label: "Gallery" },
      { href: "#contact", label: "Contact" },
    ],
    bn: [
      { href: "#home", label: "হোম" },
      { href: "#achievements", label: "অর্জন" },
      { href: "#about", label: "সম্পর্কে" },
      { href: "#gallery", label: "গ্যালারি" },
      { href: "#contact", label: "যোগাযোগ" },
    ],
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary">{language === "en" ? "Rabin Sheikh" : "রবিন শেখ"}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Navigation */}
          <MobileNav language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </nav>
  )
}
