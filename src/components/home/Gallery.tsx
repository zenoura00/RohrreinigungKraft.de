"use client";

import Link from "next/link";
import { ArrowRight, Camera, Wrench, AlertCircle, Search, Hammer, Construction } from "lucide-react";
import { gallery } from "@/data/company";
import { Button } from "@/components/ui/button";

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

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Referenzen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Unsere Arbeiten
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Einblicke in unsere professionellen Einsätze
            </p>
          </div>
          <Link href="/arbeiten">
            <Button variant="outline" className="group">
              Alle ansehen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((item, index) => {
            const Icon = categoryIcons[item.category] || Wrench;
            const gradientClass = categoryColors[item.category] || "from-primary to-accent";

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer hover-lift ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Placeholder image with gradient */}
                <div className={`aspect-square md:aspect-auto ${index === 0 ? "md:h-full" : "h-48 md:h-56"} bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className={`font-bold mb-1 ${index === 0 ? "text-xl md:text-2xl" : "text-sm md:text-base"}`}>
                      {item.title}
                    </h3>
                    <p className={`opacity-80 ${index === 0 ? "text-sm md:text-base" : "text-xs"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                    <Search className="w-5 h-5 text-gray-900" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
