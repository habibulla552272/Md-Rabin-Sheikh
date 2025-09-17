"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Target, Heart, Dumbbell, Users } from "lucide-react"

interface AboutSectionProps {
    language: "en" | "bn"
}

export function AboutSection({ language }: AboutSectionProps) {
    const content = {
        en: {
            title: "About Rabin Sheikh",
            subtitle: "The Journey of a Young Champion",
            bio: "Born on January 4, 2007, Md. Rabin Sheikh is a rising athlete from Bangladesh. He is passionate about push-ups, arm wrestling, and fitness. Alongside athletics, he is studying business in college and dreams of building both a career in sports and his own fitness brand in the future.",
            details: [
                { icon: MapPin, label: "Hometown", value: "Baniari, Boalmari, Faridpur, Bangladesh" },
                { icon: GraduationCap, label: "Education", value: "Business Studies, Kadirdi College" },
                { icon: Dumbbell, label: "Specialties", value: "Push-ups, Arm Wrestling, Fitness" },
                { icon: Users, label: "Height & Weight", value: "5'5\" / 54 kg" },
            ],
            goals: {
                title: "Future Goals",
                items: [
                    "Represent Bangladesh in international arm wrestling and push-up competitions",
                    "Study abroad (Italy / Malaysia) to build career in sports and business",
                    'Grow YouTube channel "Fit Rabin" to inspire youth with fitness content',
                    "Build a successful fitness brand and motivate young athletes",
                ],
            },
        },
        bn: {
            title: "রবিন শেখ সম্পর্কে",
            subtitle: "একজন তরুণ চ্যাম্পিয়নের যাত্রা",
            bio: "৪ জানুয়ারি, ২০০৭ সালে জন্মগ্রহণকারী মোঃ রবিন শেখ বাংলাদেশের একজন উদীয়মান ক্রীড়াবিদ। তিনি পুশ-আপ, আর্ম রেসলিং এবং ফিটনেসে অত্যন্ত আগ্রহী। ক্রীড়ার পাশাপাশি তিনি কলেজে ব্যবসায় শিক্ষা নিয়ে পড়াশোনা করছেন এবং ভবিষ্যতে খেলাধুলায় ক্যারিয়ার গড়ার পাশাপাশি নিজস্ব ফিটনেস ব্র্যান্ড গড়ার স্বপ্ন দেখেন।",
            details: [
                { icon: MapPin, label: "নিজ এলাকা", value: "বানিয়ারী, বোয়ালমারী, ফরিদপুর, বাংলাদেশ" },
                { icon: GraduationCap, label: "শিক্ষা", value: "ব্যবসায় শিক্ষা, কাদিরদী কলেজ" },
                { icon: Dumbbell, label: "বিশেষত্ব", value: "পুশ-আপ, আর্ম রেসলিং, ফিটনেস" },
                { icon: Users, label: "উচ্চতা ও ওজন", value: "৫'৫\" / ৫৪ কেজি" },
            ],
            goals: {
                title: "ভবিষ্যৎ লক্ষ্য",
                items: [
                    "আন্তর্জাতিক আর্ম রেসলিং ও পুশ-আপ প্রতিযোগিতায় বাংলাদেশের প্রতিনিধিত্ব করা",
                    "খেলাধুলা ও ব্যবসায় ক্যারিয়ার গড়তে বিদেশে (ইতালি/মালয়েশিয়া) পড়াশোনা করা",
                    'ইউটিউব চ্যানেল "ফিট রবিন" এর মাধ্যমে তরুণদের ফিটনেস কন্টেন্ট দিয়ে অনুপ্রাণিত করা',
                    "একটি সফল ফিটনেস ব্র্যান্ড গড়া এবং তরুণ ক্রীড়াবিদদের অনুপ্রাণিত করা",
                ],
            },
        },
    }

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-playfair)] mb-4 text-balance">
                        {content[language].title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content[language].subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Bio and Details */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4">
                                <Heart className="w-4 h-4 mr-2" />
                                {language === "en" ? "Personal Story" : "ব্যক্তিগত গল্প"}
                            </Badge>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{content[language].bio}</p>
                        </div>

                        <div className="grid gap-4">
                            {content[language].details.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <detail.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{detail.label}</div>
                                        <div className="font-semibold">{detail.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Goals */}
                    <div>
                        <Card>
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-6 h-6 text-primary" />
                                    <h3 className="text-2xl font-bold font-[var(--font-playfair)]">{content[language].goals.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {content[language].goals.items.map((goal, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-muted-foreground text-pretty">{goal}</p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
