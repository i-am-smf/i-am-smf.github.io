"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  MessageCircle,
  Instagram,
  DiscIcon as Discord,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectItem {
  title: string
  description: string
  details: string
  sourceUrl: string
}

interface EducationItem {
  institution: string
  degree: string
  duration: string
}

interface AchievementItem {
  title: string
  event: string
  date: string
}

interface CertificateItem {
  title: string
  organization: string
  date?: string
  details?: string
  link?: string
  image?: string
}

const ProjectCard: React.FC<ProjectItem> = ({ title, description, details, sourceUrl }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-16">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <p className="text-sm text-muted-foreground">{details}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full bg-background text-foreground hover:bg-secondary">
              View Source
            </Button>
          </Link>
        </motion.div>
      </CardContent>
    </Card>
  )
}

const EducationCard: React.FC<{ items: EducationItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Education Details</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/education">
          <Button className="w-full">Go to Education Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const AchievementCard: React.FC<{ items: AchievementItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Achievements</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.event}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/achievements">
          <Button className="w-full">Go to Achievements Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const CertificateCard: React.FC<{ items: CertificateItem[] }> = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 px-6 pb-6">
        <h3 className="text-xl font-semibold mb-4">View Certificates</h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.organization}</p>
            </div>
          ))}
        </motion.div>
        <Link href="/certificates">
          <Button className="w-full">Go to Certificates Page</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  const projectsData: ProjectItem[] = [
    {
      title: "AFK Monitoring System",
      description:
        "Developed a system to monitor idle time on a computer and shut it down if idle time exceeds the allowed limit.",
      details:
        "Implemented using Python with the pyautogui library for detecting user activity. Features include customizable idle time thresholds, warning notifications, and automatic shutdown procedures.",
      sourceUrl: "https://github.com/i-am-smf/afk-monitering-sytem",
    },
    {
      title: "Secure Chat API",
      description:
        "Developed a Secure Chat API with end-to-end encryption and Blockchain-based authentication to ensure secure communication.",
      details:
        "The project involved translating design specifications into a fully functional system, integrating Fernet encryption for secure message transmission and smart contracts for automated user verification. Technologies: Python (Tkinter, Threading, Socket), Blockchain Authentication, Smart Contracts, Fernet Encryption. The implementation focused on code quality, efficiency, and maintainability, following best practices in software development. System Requirements: 4GB RAM, Windows (8/10/11), Linux, Ubuntu.",
      sourceUrl: "https://github.com/i-am-smf/Secure-Chat-using-Blockchain",
    },
    {
      title: "Infinity Developer Discord Bot",
      description: "Developed a fully automated bot to manage guild channels, duties, and settings on Discord.",
      details:
        "Utilized discord.py library with advanced features like role management, custom commands, and integration with external APIs for enhanced functionality. Implements efficient caching and database management for scalability.",
      sourceUrl: "https://github.com/infinity-developers/Infinity-Developer-Discord-Bot",
    },
  ]

  const educationData: EducationItem[] = [
    {
      institution: "M.I.E.T. Engineering College",
      degree: "B.E. Computer Science",
      duration: "Jun 2020 – Apr 2024",
    },
    {
      institution: "Sairam Matric Hr. Sec. School",
      degree: "12th Grade",
      duration: "Jun 2019 – Mar 2020",
    },
  ]

  const achievementsData: AchievementItem[] = [
    {
      title: "1st Place - Miniathon Event",
      event: "Arcane 2K23 National Level Technical Symposium",
      date: "September 13, 2023",
    },
    {
      title: "1st Prize - Code Battle Event",
      event: "Technoholix'23, National Level Technical Symposium",
      date: "February 17, 2023",
    },
    {
      title: "2nd Place - Zoom in Zoom out Event",
      event: "Analytiixfest2k23 State Level Technical Symposium",
      date: "February 2, 2023",
    },
    {
      title: "3rd Place - TechVein Event",
      event: "TechQuest'23, National Level Technical Symposium",
      date: "September 15, 2023",
    },
  ]

  const certificatesData: CertificateItem[] = [
    {
      title: ".NET using C# language",
      organization: "Ameya Cloud",
      date: "May 24, 2022 – Jun 1, 2022",
      details: "Learned to create applications using .NET with Microsoft Visual Studio.",
      link: "https://ameyacloud.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980871.jpg-YL0g3FWZTgDJSYXYOiXvjZSS20wjCu.jpeg",
    },
    {
      title: "RDBMS using MySQL",
      organization: "GFS India",
      date: "Sep 19, 2022 – Sep 26, 2022",
      details: "Gained hands-on experience with SQL queries.",
      link: "https://gfsindia.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980885.jpg-zcQSO1Q3nHVkI7BWhLuYjXurBff2KI.jpeg",
    },
    {
      title: "DevOps on AWS",
      organization: "M.I.E.T. Engineering College",
      date: "Mar 20, 2023 – Mar 29, 2023",
      details: "Practiced various Git commands and DevOps tools on AWS.",
      link: "https://miet.edu",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980877.jpg-1OUDvkvP01abfrC8Af9vKKSLDFFM9b.jpeg",
    },
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = "917373675313" // Remove any special characters from the phone number
    const message = "Hi, I'd like to connect with you!" // Optional default message

    // Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    // Create the WhatsApp URL
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto relative z-10 text-center px-4 md:px-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">SHAIK MOHAMED FAHAD .T</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">Python Developer</h2>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/i-am-smf" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shaik-mohamed-fahad-826971178" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={() => (window.location.href = "mailto:fahadguy8@gmail.com")}
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm a Python Developer with 6 months of experience in software application development. I excel at
                solving problems and creating innovative solutions, such as developing APIs, automated bots, and secure
                communications systems. I'm quick to learn new technologies and thrive in fast-paced environments.
                Passionate about coding, I constantly seek to improve my skills and embrace new challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-8 px-6 pb-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span>+91 73736 75313</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <Button
                          variant="link"
                          className="p-0 h-auto font-normal"
                          onClick={() => (window.location.href = "mailto:fahadguy8@gmail.com")}
                        >
                          fahadguy8@gmail.com
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>Chennai, Tamil Nadu</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-8 px-6 pb-6">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>Git</Badge>
                      <Badge>GitHub</Badge>
                      <Badge>SQL</Badge>
                      <Badge>AWS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Shaik_Mohamed_Fahad_Resume_ATS.pdf"
                    link.download = "Shaik_Mohamed_Fahad_Resume_ATS.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  ATS Resume
                </Button>
                <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Shaik_Mohamed_Fahad_Resume.pdf"
                    link.download = "Shaik_Mohamed_Fahad_Resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Creative Resume
                </Button>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230317_123617.jpg-PUBHZyiKZyhhJvIQ1qbsKYIqbGHpkz.jpeg"
                  alt="Profile photo in a tea plantation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 rounded-xl" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Certificates</h2>
              <CertificateCard items={certificatesData} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education & Achievements Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Education</h2>
              <EducationCard items={educationData} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Achievements</h2>
              <AchievementCard items={achievementsData} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Shaik Mohamed Fahad. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed and maintained by <span className="font-semibold">i_am_smf_.py</span>{" "}
              <span className="text-muted-foreground">using</span>{" "}
              <Link
                href="https://v0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                v0.dev
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp and Instagram Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-4">
        <Button
          onClick={() => window.open("https://discord.gg/MGr2ZemqyE", "_blank")}
          className="rounded-full p-4 bg-[#5865F2] hover:opacity-90 transition-opacity duration-200 shadow-lg"
          aria-label="Join Discord Server"
        >
          <Discord className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={() => window.open("https://www.instagram.com/i_am_smf_/", "_blank")}
          className="rounded-full p-4 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:opacity-90 transition-opacity duration-200 shadow-lg"
          aria-label="Follow on Instagram"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="rounded-full p-4 bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
}

