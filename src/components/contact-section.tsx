"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Youtube, Facebook, Mail, MapPin, Globe } from "lucide-react"

interface ContactSectionProps {
  language: "en" | "bn"
}

export function ContactSection({ language }: ContactSectionProps) {
  const content = {
    en: {
      title: "Connect with Rabin",
      subtitle: "Follow the Journey & Get in Touch",
      description:
        "Stay updated with Rabin's athletic journey, training sessions, and upcoming competitions. Connect through social media or reach out for collaborations.",
      social: {
        title: "Follow on Social Media",
        platforms: [
          {
            name: "YouTube",
            handle: "@FitRabin",
            url: "https://youtube.com/@fitrabin",
            icon: Youtube,
            description: "Fitness challenges and training tips",
          },
          {
            name: "Facebook",
            handle: "Md. Rabin Sheikh",
            url: "https://facebook.com/rabin.sheikh",
            icon: Facebook,
            description: "Updates and achievements",
          },
        ],
      },
      contact: {
        title: "Contact Information",
        items: [
          {
            icon: MapPin,
            label: "Location",
            value: "Faridpur, Bangladesh",
          },
          {
            icon: Globe,
            label: "Languages",
            value: "Bengali, English",
          },
        ],
      },
      collaboration: {
        title: "Collaboration Opportunities",
        description:
          "Open to sponsorships, media interviews, fitness brand partnerships, and motivational speaking engagements.",
        cta: "Get in Touch",
      },
    },
    bn: {
      title: "রবিনের সাথে যোগাযোগ",
      subtitle: "যাত্রা অনুসরণ করুন ও যোগাযোগ রাখুন",
      description:
        "রবিনের ক্রীড়া যাত্রা, প্রশিক্ষণ সেশন এবং আসন্ন প্রতিযোগিতার আপডেট পান। সোশ্যাল মিডিয়ার মাধ্যমে যুক্ত হন বা সহযোগিতার জন্য যোগাযোগ করুন।",
      social: {
        title: "সোশ্যাল মিডিয়ায় ফলো করুন",
        platforms: [
          {
            name: "ইউটিউব",
            handle: "@FitRabin",
            url: "https://youtube.com/@fitrabin",
            icon: Youtube,
            description: "ফিটনেস চ্যালেঞ্জ ও প্রশিক্ষণ টিপস",
          },
          {
            name: "ফেসবুক",
            handle: "মোঃ রবিন শেখ",
            url: "https://facebook.com/rabin.sheikh",
            icon: Facebook,
            description: "আপডেট ও অর্জনসমূহ",
          },
        ],
      },
      contact: {
        title: "যোগাযোগের তথ্য",
        items: [
          {
            icon: MapPin,
            label: "অবস্থান",
            value: "ফরিদপুর, বাংলাদেশ",
          },
          {
            icon: Globe,
            label: "ভাষা",
            value: "বাংলা, ইংরেজি",
          },
        ],
      },
      collaboration: {
        title: "সহযোগিতার সুযোগ",
        description: "স্পনসরশিপ, মিডিয়া ইন্টারভিউ, ফিটনেস ব্র্যান্ড পার্টনারশিপ এবং অনুপ্রেরণামূলক বক্তৃতার জন্য উন্মুক্ত।",
        cta: "যোগাযোগ করুন",
      },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl  font-[var(--font-playfair)] mb-4 text-balance">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content[language].subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground text-pretty">{content[language].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  {content[language].social.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content[language].social.platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <platform.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{platform.name}</div>
                      <div className="text-sm text-muted-foreground">{platform.handle}</div>
                      <div className="text-xs text-muted-foreground">{platform.description}</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        {language === "en" ? "Follow" : "ফলো"}
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {content[language].contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content[language].contact.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Collaboration */}
          <Card className="text-center">
            <CardContent className="p-8">
              <Badge variant="secondary" className="mb-4">
                <Mail className="w-4 h-4 mr-2" />
                {content[language].collaboration.title}
              </Badge>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                {content[language].collaboration.description}
              </p>
              <Button size="lg" className="text-lg px-8">
                <Mail className="w-5 h-5 mr-2" />
                {content[language].collaboration.cta}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
