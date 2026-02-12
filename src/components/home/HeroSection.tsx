"use client";

import Link from "next/link";
import { Phone, ArrowRight, Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import AnimatedServiceIcon from "./AnimatedServiceIcon";

const heroServices = [
  {
    name: "Rohrreinigung",
    description: "Schnelle Beseitigung aller Verstopfungen",
    href: "/service/rohrreinigung",
    icon: "pipe",
  },
  {
    name: "Kanalreinigung",
    description: "Professionelle Kanalreinigung mit HD-Technik",
    href: "/service/kanalreinigung",
    icon: "canal",
  },
  {
    name: "Notdienst 24/7",
    description: "Rund um die Uhr für Sie erreichbar",
    href: "/service/rohrreinigung-notdienst",
    icon: "emergency",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FBFF] via-white to-[#E8F4FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Water drops */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-drip" style={{ animationDelay: "0s" }} />
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-drip" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 right-1/3 w-5 h-5 bg-primary/20 rounded-full animate-drip" style={{ animationDelay: "1s" }} />
        <div className="absolute top-24 right-20 w-4 h-4 bg-primary/25 rounded-full animate-drip" style={{ animationDelay: "1.5s" }} />

        {/* Pipe pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10 dark:opacity-5" viewBox="0 0 1440 120" fill="none">
          <path d="M0 60h200v20H0V60zM200 40h20v60h-20V40zM220 40h200v20H220V40zM420 40h20v80H420V40zM440 100h200v20H440v-20z" fill="currentColor" className="text-primary" />
          <path d="M700 20h200v20H700V20zM900 20h20v60H900V20zM920 60h200v20H920V60zM1120 60h20v40h-20V60zM1140 80h300v20h-300V80z" fill="currentColor" className="text-primary" />
        </svg>

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              24/7 Notdienst verfügbar
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            Rohrverstopfung?{" "}
            <span className="text-gradient">Wir helfen sofort!</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Professionelle Rohrreinigung & Kanalreinigung in{" "}
            <strong className="text-primary">Nürnberg</strong> und{" "}
            <strong className="text-primary">100km Umkreis</strong>.
            Schnelle Anfahrt, faire Preise, moderne Technik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Link href={`tel:${company.contact.phone}`}>
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 btn-shimmer h-14 px-8 text-lg font-semibold shadow-xl shadow-primary/30 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary w-full sm:w-auto"
              >
                Kontaktformular
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Lokaler Fachbetrieb</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">30-60 Min Anfahrt</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Moderne Technik</span>
            </div>
          </div>

          {/* Animated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-500">
            {heroServices.map((service, index) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <AnimatedServiceIcon type={service.icon} index={index} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
