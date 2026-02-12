"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Phone, Camera, Wrench, AlertCircle, Search, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { gallery } from "@/data/company";
import { company } from "@/data/company";

const categoryIcons: Record<string, React.ElementType> = {
  Kanalreinigung: Wrench,
  Inspektion: Camera,
  Rohrreinigung: Search,
  Notdienst: AlertCircle,
  Sanierung: Construction,
};

const categoryColors: Record<string, string> = {
  Kanalreinigung: "from-blue-500 to-blue-600",
  Inspektion: "from-purple-500 to-purple-600",
  Rohrreinigung: "from-primary to-accent",
  Notdienst: "from-red-500 to-red-600",
  Sanierung: "from-orange-500 to-orange-600",
};

const categories = ["Alle", ...new Set(gallery.map((item) => item.category))];

export default function ArbeitenPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery = selectedCategory === "Alle"
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#E8F4FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Unsere <span className="text-gradient">Arbeiten</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Einblicke in unsere professionellen Einsätze.
              Überzeugen Sie sich von unserer Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item, index) => {
                const Icon = categoryIcons[item.category] || Wrench;
                const gradientClass = categoryColors[item.category] || "from-primary to-accent";

                return (
                  <button
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer hover-lift aspect-square"
                  >
                    {/* Placeholder with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                      <div className="text-center text-white p-4">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-sm line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100">
                        <Search className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-2 left-2 bg-white/90 text-gray-700">
                      {item.category}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevItem}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextItem}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-12 text-center">
            {filteredGallery[currentIndex] && (
              <>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${categoryColors[filteredGallery[currentIndex].category]} flex items-center justify-center mb-6`}>
                  {(() => {
                    const Icon = categoryIcons[filteredGallery[currentIndex].category] || Wrench;
                    return (
                      <div className="text-center text-white p-8">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                          <Icon className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {filteredGallery[currentIndex].title}
                        </h3>
                        <p className="opacity-80">
                          {filteredGallery[currentIndex].description}
                        </p>
                      </div>
                    );
                  })()}
                </div>
                <div className="text-white">
                  <p className="text-sm text-gray-400 mb-2">
                    {currentIndex + 1} / {filteredGallery.length}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interesse an unseren Leistungen?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Kontaktieren Sie uns für eine kostenlose Beratung!
            </p>
            <Link href={`tel:${company.contact.phone}`}>
              <Button size="lg" className="gradient-primary text-white h-14 px-8">
                <Phone className="w-5 h-5 mr-2" />
                {company.contact.phoneDisplay}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
