"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Award, Dumbbell } from "lucide-react"
import Image from "next/image"

interface GallerySectionProps {
  language: "en" | "bn"
}

export function GallerySection({ language }: GallerySectionProps) {
  const content = {
    en: {
      title: "Gallery",
      subtitle: "Moments of Excellence",
      categories: [
        { id: "certificates", label: "Certificates", icon: Award },
        { id: "training", label: "Training", icon: Dumbbell },
        { id: "events", label: "Events", icon: Camera },
      ],
    },
    bn: {
      title: "গ্যালারি",
      subtitle: "শ্রেষ্ঠত্বের মুহূর্তসমূহ",
      categories: [
        { id: "certificates", label: "সার্টিফিকেট", icon: Award },
        { id: "training", label: "প্রশিক্ষণ", icon: Dumbbell },
        { id: "events", label: "ইভেন্ট", icon: Camera },
      ],
    },
  }

  const galleryItems = [
    {
      id: 1,
      category: "certificates",
      image: "/images/certificate.png",
      title: language === "en" ? "Asia Book of Records Certificate" : "এশিয়া বুক অফ রেকর্ডস সার্টিফিকেট",
      description: language === "en" ? "Official Grand Master certificate" : "অফিসিয়াল গ্র্যান্ড মাস্টার সার্টিফিকেট",
    },
    {
      id: 2,
      category: "training",
      image: "/images/rabin-profile.png",
      title: language === "en" ? "Training Session" : "প্রশিক্ষণ সেশন",
      description: language === "en" ? "Dedicated fitness training" : "নিবেদিত ফিটনেস প্রশিক্ষণ",
    },
    {
      id: 3,
      category: "training",
      image: "/young-athlete-doing-push-ups-outdoors.jpg",
      title: language === "en" ? "Push-up Practice" : "পুশ-আপ অনুশীলন",
      description: language === "en" ? "Daily push-up routine" : "দৈনিক পুশ-আপ রুটিন",
    },
    {
      id: 4,
      category: "events",
      image: "/arm-wrestling-competition-bangladesh.jpg",
      title: language === "en" ? "Arm Wrestling Competition" : "আর্ম রেসলিং প্রতিযোগিতা",
      description: language === "en" ? "Local tournament victory" : "স্থানীয় টুর্নামেন্ট বিজয়",
    },
    {
      id: 5,
      category: "events",
      image: "/fitness-award-ceremony-bangladesh.jpg",
      title: language === "en" ? "Award Ceremony" : "পুরস্কার বিতরণী",
      description: language === "en" ? "Recognition event" : "স্বীকৃতি অনুষ্ঠান",
    },
    {
      id: 6,
      category: "training",
      image: "/gym-workout-session-bangladesh-athlete.jpg",
      title: language === "en" ? "Gym Session" : "জিম সেশন",
      description: language === "en" ? "Strength training" : "শক্তি প্রশিক্ষণ",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-playfair)] mb-4 text-balance">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content[language].subtitle}</p>
        </div>

        {/* Category Badges */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {content[language].categories.map((category) => (
            <Badge key={category.id} variant="outline" className="text-sm px-4 py-2">
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-balance">{item.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
