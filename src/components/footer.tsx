"use client"

import { Badge } from "@/components/ui/badge"
import { Trophy, Heart } from "lucide-react"

interface FooterProps {
  language: "en" | "bn"
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      title: "Md. Rabin Sheikh",
      subtitle: "Asia Book of Records Grand Master",
      description:
        "Inspiring young athletes across Bangladesh through dedication, hard work, and excellence in fitness.",
      copyright: "© 2024 Md. Rabin Sheikh. All rights reserved.",
      madeWith: "Made with",
      forAthletes: "for athletes everywhere",
    },
    bn: {
      title: "মোঃ রবিন শেখ",
      subtitle: "এশিয়া বুক অফ রেকর্ডস গ্র্যান্ড মাস্টার",
      description: "নিষ্ঠা, কঠোর পরিশ্রম এবং ফিটনেসে শ্রেষ্ঠত্বের মাধ্যমে সারা বাংলাদেশের তরুণ ক্রীড়াবিদদের অনুপ্রাণিত করা।",
      copyright: "© ২০২৪ মোঃ রবিন শেখ। সকল অধিকার সংরক্ষিত।",
      madeWith: "তৈরি করা হয়েছে",
      forAthletes: "সর্বত্র ক্রীড়াবিদদের জন্য",
    },
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold font-[var(--font-playfair)] mb-2">{content[language].title}</h3>
            <Badge variant="secondary" className="mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              {content[language].subtitle}
            </Badge>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">{content[language].description}</p>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground mb-2">{content[language].copyright}</p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              {content[language].madeWith}
              <Heart className="w-3 h-3 text-red-500" />
              {content[language].forAthletes}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
