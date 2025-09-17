"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Target, Calendar, MapPin, User } from "lucide-react"
import Image from "next/image"

interface AchievementsSectionProps {
  language: "en" | "bn"
}

export function AchievementsSection({ language }: AchievementsSectionProps) {
  const content = {
    en: {
      title: "Achievements & Records",
      subtitle: "Celebrating Excellence in Athletics",
      mainRecord: {
        title: "Asia Book of Records - Grand Master",
        description: "69 push-ups in 30 seconds",
        date: "July 18, 2024",
        age: "17 years 6 months",
        location: "Dhaka, Bangladesh",
        applicationId: "90390",
      },
      otherAchievements: [
        {
          icon: Medal,
          title: "Arm Wrestling Champion",
          description: "Multiple tournament victories in local and regional competitions",
        },
        {
          icon: Target,
          title: "Fitness Excellence",
          description: "Various athletics and fitness certificates",
        },
        {
          icon: Trophy,
          title: "Youth Inspiration",
          description: "Motivating young athletes across Bangladesh",
        },
      ],
    },
    bn: {
      title: "অর্জন ও রেকর্ড",
      subtitle: "ক্রীড়ায় শ্রেষ্ঠত্বের উদযাপন",
      mainRecord: {
        title: "এশিয়া বুক অফ রেকর্ডস - গ্র্যান্ড মাস্টার",
        description: "৩০ সেকেন্ডে ৬৯টি পুশ-আপ",
        date: "১৮ জুলাই, ২০২৪",
        age: "১৭ বছর ৬ মাস",
        location: "ঢাকা, বাংলাদেশ",
        applicationId: "৯০৩৯০",
      },
      otherAchievements: [
        {
          icon: Medal,
          title: "আর্ম রেসলিং চ্যাম্পিয়ন",
          description: "স্থানীয় ও আঞ্চলিক প্রতিযোগিতায় একাধিক বিজয়",
        },
        {
          icon: Target,
          title: "ফিটনেস শ্রেষ্ঠত্ব",
          description: "বিভিন্ন অ্যাথলেটিক্স ও ফিটনেস সার্টিফিকেট",
        },
        {
          icon: Trophy,
          title: "যুব অনুপ্রেরণা",
          description: "সারা বাংলাদেশের তরুণ ক্রীড়াবিদদের অনুপ্রাণিত করা",
        },
      ],
    },
  }

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl  font-[var(--font-playfair)] mb-4 text-balance">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Certificate Image */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-6 shadow-xl">
              <Image
                src="/images/certificate.jpg"
                alt="Asia Book of Records Certificate"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Main Record Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Trophy className="w-4 h-4 mr-2" />
                {language === "en" ? "Official Record" : "অফিসিয়াল রেকর্ড"}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-[var(--font-playfair)] mb-4">
                {content[language].mainRecord.title}
              </h3>
              <p className="text-xl text-primary font-semibold mb-6">{content[language].mainRecord.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Date" : "তারিখ"}</div>
                  <div className="font-semibold">{content[language].mainRecord.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Age" : "বয়স"}</div>
                  <div className="font-semibold">{content[language].mainRecord.age}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Location" : "স্থান"}</div>
                  <div className="font-semibold">{content[language].mainRecord.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "App ID" : "অ্যাপ আইডি"}</div>
                  <div className="font-semibold">{content[language].mainRecord.applicationId}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {content[language].otherAchievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
