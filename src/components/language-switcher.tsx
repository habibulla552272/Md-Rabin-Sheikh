"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  onLanguageChange: (language: "en" | "bn") => void
  currentLanguage: "en" | "bn"
}

export function LanguageSwitcher({ onLanguageChange, currentLanguage }: LanguageSwitcherProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "en" ? "bn" : "en")}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === "en" ? "বাংলা" : "English"}
    </Button>
  )
}
