"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Play, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  language: "en" | "bn"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      badge: "Asia Book of Records",
      title: "Meet Md. Rabin Sheikh",
      subtitle: "Asia's Record Holder for Push-Ups",
      description:
        "Young Bangladeshi athlete who achieved Grand Master title by performing 69 push-ups in 30 seconds at the age of 17 years and 6 months.",
      cta: "Watch Record Attempt",
      stats: [
        { number: "69", label: "Push-ups" },
        { number: "30", label: "Seconds" },
        { number: "17", label: "Years Old" },
      ],
    },
    bn: {
      badge: "এশিয়া বুক অফ রেকর্ডস",
      title: "মোঃ রবিন শেখের সাথে পরিচিত হন",
      subtitle: "এশিয়ার পুশ-আপ রেকর্ড ধারক",
      description:
        "১৭ বছর ৬ মাস বয়সে ৩০ সেকেন্ডে ৬৯টি পুশ-আপ সম্পন্ন করে গ্র্যান্ড মাস্টার উপাধি অর্জনকারী তরুণ বাংলাদেশি ক্রীড়াবিদ।",
      cta: "রেকর্ড প্রচেষ্টা দেখুন",
      stats: [
        { number: "৬৯", label: "পুশ-আপ" },
        { number: "৩০", label: "সেকেন্ড" },
        { number: "১৭", label: "বছর বয়স" },
      ],
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium animate-pulse">
                <Trophy className="w-4 h-4 mr-2" />
                {content[language].badge}
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] text-balance leading-tight">
                {content[language].title}
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary text-balance">
                {content[language].subtitle}
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
                {content[language].description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8">
              {content[language].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-[var(--font-playfair)]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/video">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {content[language].cta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative bg-card rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Md. Rabin Sheikh - Asia Book of Records Grand Master"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-3 shadow-lg animate-bounce">
                  <Star className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
