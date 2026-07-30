"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Calendar, MapPin, Trash2, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventFavorite {
  id: string
  title: string
  date: string
  location: string
  price: string
  category: string
  imageUrl: string
  isSecuredByAI: boolean
}

const initialFavorites: EventFavorite[] = [
  {
    id: "101",
    title: "Summit Tech & IA Centrafrique 2026",
    date: "15 Oct 2026 • 09:00",
    location: "Sofitel Oubangui Hôtel , Bangui",
    price: "15 000 FCFA",
    category: "Conférence",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    isSecuredByAI: true,
  },
  {
    id: "102",
    title: "Festival Électro & Afrobeats",
    date: "28 Nov 2026 • 18:00",
    location: "Palais de la Culture, Bangui",
    price: "10 000 FCFA",
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    isSecuredByAI: true,
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<EventFavorite[]>(initialFavorites)

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(e => e.id !== id))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      {/* En-tête */}
      <div className="border-b border-zinc-200 pb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 flex items-center gap-2">
          <Heart className="h-7 w-7 text-red-600 fill-red-600" />
          Événements Favoris
        </h1>
        <p className="text-zinc-600 text-sm mt-1">
          Retrouvez tous les événements que vous avez sauvegardés et réservez vos places en toute sécurité.
        </p>
      </div>

      {/* Grille de favoris */}
      {favorites.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-zinc-300 mt-8">
          <Heart className="h-10 w-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-600 font-medium">Vous n'avez aucun événement en favori pour l'instant.</p>
          <Link href="/">
            <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white rounded-full">
              Explorer les événements
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {favorites.map((event) => (
            <div key={event.id} className="border border-zinc-200 bg-white overflow-hidden flex flex-col justify-between group">
              <div>
                {/* Conteneur Image & Badges */}
                <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-1">
                    <Badge className="bg-white/90 text-zinc-900 backdrop-blur-sm text-xs font-semibold hover:bg-white">
                      {event.category}
                    </Badge>
                  </div>
                  {event.isSecuredByAI && (
                    <div className="absolute bottom-3 left-3 bg-zinc-900/80 text-white backdrop-blur-sm text-xs px-2.5 py-1 flex items-center gap-1 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                      Anti-Fraude IA
                    </div>
                  )}
                  <button
                    onClick={() => removeFavorite(event.id)}
                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 text-zinc-600 hover:text-red-600 hover:bg-white flex items-center justify-center transition shadow-sm"
                    title="Retirer des favoris"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Infos */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-zinc-900 line-clamp-1">{event.title}</h3>
                  <div className="mt-3 space-y-1.5 text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-zinc-100 mt-4">
                <div>
                  <span className="text-xs text-zinc-400 block">À partir de</span>
                  <span className="font-extrabold text-zinc-900 text-base">{event.price}</span>
                </div>
                <Link href={`/events/${event.id}`}>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 flex items-center gap-1">
                    Réserver <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}