"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"

interface MobileNavProps {
  language: "en" | "bn"
  onLanguageChange: (language: "en" | "bn") => void
}

export function MobileNav({ language, onLanguageChange }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{language === "en" ? "Navigation" : "নেভিগেশন"}</h2>
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>
          <nav className="flex flex-col space-y-2">
            {navItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
