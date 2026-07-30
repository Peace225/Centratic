"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Music,
  Palette,
  GraduationCap,
  Wine,
  MapPin,
  Dumbbell,
  Tent,
  Atom,
  Church,
  Utensils,
  Briefcase,
  MoreHorizontal,
  Heart,
  CheckCircle2,
} from "lucide-react"

const CATEGORIES = [
  { id: "Toutes", label: "Toutes", icon: LayoutGrid },
  { id: "Concert", label: "Concert", icon: Music },
  { id: "Culture", label: "Culture", icon: Palette },
  { id: "Formation", label: "Formation", icon: GraduationCap },
  { id: "Soirée", label: "Soirée", icon: Wine },
  { id: "Tourisme", label: "Tourisme", icon: MapPin },
  { id: "Sport", label: "Sport", icon: Dumbbell },
  { id: "Festival", label: "Festival", icon: Tent },
  { id: "Science", label: "Science", icon: Atom },
  { id: "Religieux", label: "Religieux", icon: Church },
  { id: "Gastronomie", label: "Gastronomie", icon: Utensils },
  { id: "Business", label: "Business", icon: Briefcase },
  { id: "Autre", label: "Autre", icon: MoreHorizontal },
]

// Base de données avec l'URL de l'image du drapeau de la RCA
const MOCK_EVENTS = [
  // Concert
  {
    id: 1,
    title: "TRK EN CONCERT AU PALAIS",
    category: "Concert",
    date: "sam. 15 août 2026 | 13h00 GMT",
    price: "À partir de 5 000 F CFA",
    location: "Bangui, République Centrafricaine",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600",
    promoter: "Bangui Event Prod",
  },
  {
    id: 2,
    title: "KEROZEN LIVE SHOW EXCLUSIF",
    category: "Concert",
    date: "ven. 21 août 2026 | 20h00 GMT",
    price: "10 000 F CFA",
    location: "Complexe sportif, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
    promoter: "Oubangui Stars Agency",
  },

  // Culture
  {
    id: 3,
    title: "EXPOSITION ART & CULTURE",
    category: "Culture",
    date: "dim. 20 août 2026 | 10h00 GMT",
    price: "Gratuit",
    location: "Institut Français, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
    promoter: "Institut Français de Bangui",
  },
  {
    id: 4,
    title: "NUIT DES MASQUES TRADITIONNELS",
    category: "Culture",
    date: "sam. 29 août 2026 | 18h00 GMT",
    price: "3 000 F CFA",
    location: "Musée Boganda, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
    promoter: "Collectif Patrimoine RCA",
  },

  // Formation
  {
    id: 5,
    title: "MASTERCLASS DÉVELOPPEMENT WEB",
    category: "Formation",
    date: "sam. 28 août 2026 | 09h00 GMT",
    price: "15 000 F CFA",
    location: "Hub Numérique, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    promoter: "Tech Academy Bangui",
  },
  {
    id: 6,
    title: "ATELIER MARKETING DIGITAL AVANCÉ",
    category: "Formation",
    date: "mer. 2 sept. 2026 | 14h00 GMT",
    price: "10 000 F CFA",
    location: "Espace Coworking, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    promoter: "Digital Growth Lab",
  },

  // Soirée
  {
    id: 7,
    title: "SOIRÉE VIP ROOF_TOP",
    category: "Soirée",
    date: "ven. 4 sept. 2026 | 21h00 GMT",
    price: "10 000 F CFA",
    location: "Sky Lounge, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    promoter: "Sky Entertainment",
  },
  {
    id: 8,
    title: "AFROBEAT CLUB NIGHT",
    category: "Soirée",
    date: "sam. 12 sept. 2026 | 22h00 GMT",
    price: "7 500 F CFA",
    location: "Le Millennium, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
    promoter: "Clubbing Africa",
  },

  // Tourisme
  {
    id: 9,
    title: "ÉCHAPPÉE TOURISTIQUE AUX CHUTES DE BOALI",
    category: "Tourisme",
    date: "sam. 12 sept. 2026 | 08h00 GMT",
    price: "25 000 F CFA",
    location: "Boali, RCA",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600",
    promoter: "RCA Ecotourisme",
  },
  {
    id: 10,
    title: "RANDONNÉE DÉCOUVERTE DE LA LOBAYE",
    category: "Tourisme",
    date: "dim. 20 sept. 2026 | 07h00 GMT",
    price: "20 000 F CFA",
    location: "Mbaïki, RCA",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600",
    promoter: "Aventure & Nature RCA",
  },

  // Sport
  {
    id: 11,
    title: "TOURNOI DE BASKETBALL INTER-QUARTIER",
    category: "Sport",
    date: "dim. 13 sept. 2026 | 15h00 GMT",
    price: "1 000 F CFA",
    location: "Terrain 20ille, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
    promoter: "Ligue Jeunesse Sport",
  },
  {
    id: 12,
    title: "MARATHON DE LA SOLIDARITÉ DE BANGUI",
    category: "Sport",
    date: "sam. 26 sept. 2026 | 06h30 GMT",
    price: "2 000 F CFA",
    location: "Avenue des Martyrs, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600",
    promoter: "Comité Athlétique RCA",
  },

  // Festival
  {
    id: 13,
    title: "FESTIVAL DES ARTS DE RUE",
    category: "Festival",
    date: "ven. 18 sept. 2026 | 14h00 GMT",
    price: "Gratuit",
    location: "Place de la République, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600",
    promoter: "Mairie de Bangui",
  },
  {
    id: 14,
    title: "FESTIVAL CULINAIRE ET MUSICAL",
    category: "Festival",
    date: "sam. 3 oct. 2026 | 11h00 GMT",
    price: "5 000 F CFA",
    location: "Jardin Public, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
    promoter: "Flavors & Beats Agency",
  },

  // Science
  {
    id: 15,
    title: "CONFÉRENCE INNOVATION & SCIENCES",
    category: "Science",
    date: "sam. 26 sept. 2026 | 10h00 GMT",
    price: "5 000 F CFA",
    location: "Université de Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    promoter: "Université de Bangui",
  },
  {
    id: 16,
    title: "HACKATHON INTELLIGENCE ARTIFICIELLE",
    category: "Science",
    date: "ven. 9 oct. 2026 | 09h00 GMT",
    price: "Gratuit",
    location: "Campus Numérique, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    promoter: "Bangui AI Community",
  },

  // Religieux
  {
    id: 17,
    title: "GRANDE NUIT DE LOUANGE GOSPEL",
    category: "Religieux",
    date: "dim. 4 oct. 2026 | 09h00 GMT",
    price: "2 000 F CFA",
    location: "Cathédrale de Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=600",
    promoter: "Comité Gospel Bangui",
  },
  {
    id: 18,
    title: "RASSEMBLEMENT INTERRELIGIEUX POUR LA PAIX",
    category: "Religieux",
    date: "sam. 17 oct. 2026 | 10h00 GMT",
    price: "Gratuit",
    location: "Palais des Sports, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    promoter: "Plateforme Interreligieuse",
  },

  // Gastronomie
  {
    id: 19,
    title: "SALON DE LA GASTRONOMIE LOCALE",
    category: "Gastronomie",
    date: "sam. 10 oct. 2026 | 11h00 GMT",
    price: "3 000 F CFA",
    location: "Hôtel Ledger, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
    promoter: "Association des Chefs de Bangui",
  },
  {
    id: 20,
    title: "CONCOURS DU MEILLEUR CHEF DE BANGUI",
    category: "Gastronomie",
    date: "dim. 25 oct. 2026 | 12h00 GMT",
    price: "5 000 F CFA",
    location: "Restaurant Le Carrefour, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
    promoter: "Gourmet Event RCA",
  },

  // Business
  {
    id: 21,
    title: "BUSINESS FORUM AFRIQUE CENTRALE",
    category: "Business",
    date: "jeu. 15 oct. 2026 | 08h30 GMT",
    price: "50 000 F CFA",
    location: "Chambre de Commerce, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    promoter: "Chambre de Commerce RCA",
  },
  {
    id: 22,
    title: "SALON DE L'ENTREPRENEURIAT JEUNE",
    category: "Business",
    date: "ven. 30 oct. 2026 | 09h00 GMT",
    price: "5 000 F CFA",
    location: "Centre Culturel, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
    promoter: "Réseau Jeunes Entrepreneurs",
  },

  // Autre
  {
    id: 23,
    title: "SPECTACLE D'HUMOUR & STAND-UP",
    category: "Autre",
    date: "sam. 24 oct. 2026 | 20h00 GMT",
    price: "7 500 F CFA",
    location: "Palais de la Culture, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=600",
    promoter: "Bangui Rires Club",
  },
  {
    id: 24,
    title: "GRANDE TOMBOLA DE L'INDÉPENDANCE",
    category: "Autre",
    date: "dim. 1 déc. 2026 | 15h00 GMT",
    price: "1 000 F CFA",
    location: "Stade 20 Décembre, Bangui",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=600",
    promoter: "Comité National des Fêtes",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Toutes")
  const [subscriptions, setSubscriptions] = useState<{ [key: number]: boolean }>({})

  const toggleSubscribe = (id: number) => {
    setSubscriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredEvents =
    activeTab === "Toutes"
      ? MOCK_EVENTS
      : MOCK_EVENTS.filter((event) => event.category === activeTab)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
      {/* Barre de navigation centrale type Pilule */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm">
          <Link
            href="/"
            className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Événements
          </Link>
          <Link
            href="/cotisations"
            className="relative rounded-full px-6 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Cotisations
            <span className="absolute -top-2 right-1 rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
              Nouveau
            </span>
          </Link>
          <Link
            href="/votes"
            className="rounded-full px-6 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Votes en ligne
          </Link>
        </div>
      </div>

      {/* Barre de filtres horizontale avec défilement */}
      <div className="no-scrollbar flex items-center gap-3 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon
          const isActive = activeTab === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex min-w-[90px] flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition ${
                isActive
                  ? "border-red-200 bg-red-50 font-bold text-red-600 shadow-sm"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      <p className="text-center text-sm font-medium text-zinc-500">
        {filteredEvents.length} événement{filteredEvents.length > 1 ? "s" : ""} trouvé{filteredEvents.length > 1 ? "s" : ""}
      </p>

      {/* Grille d'événements filtrée */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEvents.map((event) => {
            const isSubscribed = subscriptions[event.id] || false
            return (
              <div
                key={event.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 bg-zinc-900 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-emerald-500 p-1 text-white shadow">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                    {event.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 space-y-4">
                  <div>
                    <div className="flex items-start justify-between">
                      <h3 className="line-clamp-1 font-bold text-zinc-900">
                        {event.title}
                      </h3>
                      <button className="text-zinc-400 hover:text-red-600">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">{event.date}</p>
                    <p className="mt-1 text-xs font-semibold text-emerald-600">
                      {event.price}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{event.location}</p>
                  </div>

                  <Link
                    href={`/events/${event.id}`}
                    className="block w-full rounded-lg bg-red-600 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Acheter tickets
                  </Link>
                </div>

                {/* Footer avec image du drapeau de la RCA garantie */}
                <div className="border-t border-zinc-100 bg-white px-4 py-3 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
                    <img
                      src={event.flag}
                      alt="Drapeau RCA"
                      className="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-zinc-200"
                    />
                    <span>{event.country}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow-sm">
                        {getInitials(event.promoter)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-zinc-400 leading-none">Publié par</p>
                        <p className="mt-0.5 truncate text-xs font-bold text-zinc-900" title={event.promoter}>
                          {event.promoter}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSubscribe(event.id)}
                      className={`flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition shadow-sm ${
                        isSubscribed
                          ? "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-300"
                          : "bg-zinc-900 text-white hover:bg-zinc-800"
                      }`}
                    >
                      {isSubscribed ? "Abonné" : "S'abonner"}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="py-20 text-center text-zinc-500">
          <p className="text-base font-medium">Aucun événement trouvé dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  )
}