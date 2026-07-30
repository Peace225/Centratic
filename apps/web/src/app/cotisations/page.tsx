"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  HeartHandshake,
  Lightbulb,
  BookOpen,
  Stethoscope,
  Users,
  AlertTriangle,
  Heart,
  CheckCircle2,
  Clock,
} from "lucide-react"

const CATEGORIES_COTISATION = [
  { id: "Toutes", label: "Toutes", icon: LayoutGrid },
  { id: "Solidarité", label: "Solidarité", icon: HeartHandshake },
  { id: "Projet", label: "Projet", icon: Lightbulb },
  { id: "Éducation", label: "Éducation", icon: BookOpen },
  { id: "Santé", label: "Santé", icon: Stethoscope },
  { id: "Communauté", label: "Communauté", icon: Users },
  { id: "Urgence", label: "Urgence", icon: AlertTriangle },
]

const MOCK_COTISATIONS = [
  {
    id: 1,
    title: "SOUTENONS LA FAMILLE KOUAME POUR LES OBSÈQUES",
    category: "Solidarité",
    description: "Collecte de solidarité suite au deuil familial survenu à Bangui.",
    collected: "4 848 828 F CFA",
    progress: 48,
    daysLeft: 12,
    likes: 167,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "Fédération des acteurs",
  },
  {
    id: 2,
    title: "CONSTRUCTION DU CENTRE DE SANTÉ COMMUNAUTAIRE",
    category: "Santé",
    description: "Financement des équipements médicaux d'urgence pour le dispensaire de Bangui.",
    collected: "2 150 000 F CFA",
    progress: 72,
    daysLeft: 25,
    likes: 84,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "ONG Santé & Solidarité",
  },
  {
    id: 3,
    title: "DON DE KITS SCOLAIRES POUR 500 ENFANTS",
    category: "Éducation",
    description: "Achat de fournitures scolaires pour la rentrée des classes à Bangui.",
    collected: "1 250 000 F CFA",
    progress: 60,
    daysLeft: 15,
    likes: 92,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "Association Jeunesse Active",
  },
  {
    id: 4,
    title: "FINANCEMENT HACKATHON INNOVATION JEUNESSE",
    category: "Projet",
    description: "Soutien logistique pour l'organisation du grand tournoi technologique au Hub Numérique.",
    collected: "850 000 F CFA",
    progress: 35,
    daysLeft: 8,
    likes: 45,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "Tech Hub Bangui",
  },
  {
    id: 5,
    title: "AIDE D'URGENCE - INTEMPÉRIES QUARTIER NORD",
    category: "Urgence",
    description: "Assistance immédiate aux familles sinistrées suite aux intempéries.",
    collected: "3 400 000 F CFA",
    progress: 85,
    daysLeft: 3,
    likes: 210,
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "Secours Populaire RCA",
  },
  {
    id: 6,
    title: "RÉHABILITATION DU TERRAIN DE FOOTBALL",
    category: "Communauté",
    description: "Aménagement de l'aire de jeu pour la cohésion de la jeunesse locale.",
    collected: "950 000 F CFA",
    progress: 40,
    daysLeft: 20,
    likes: 63,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600",
    country: "République Centrafricaine",
    flag: "https://flagcdn.com/w40/cf.png",
    promoter: "Comité de Quartier Bangui",
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

export default function CotisationsPage() {
  const [activeTab, setActiveTab] = useState("Toutes")
  const [subscriptions, setSubscriptions] = useState<{ [key: number]: boolean }>({})

  const toggleSubscribe = (id: number) => {
    setSubscriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filtrage dynamique en fonction de la catégorie sélectionnée
  const filteredCotisations =
    activeTab === "Toutes"
      ? MOCK_COTISATIONS
      : MOCK_COTISATIONS.filter((item) => item.category === activeTab)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
      {/* Barre de navigation centrale type Pilule */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm">
          <Link
            href="/"
            className="rounded-full px-6 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Événements
          </Link>
          <Link
            href="/cotisations"
            className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Cotisations
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
        {CATEGORIES_COTISATION.map((cat) => {
          const Icon = cat.icon
          const isActive = activeTab === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex min-w-[100px] flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition ${
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

      {/* Compteur dynamique de cagnottes */}
      <p className="text-center text-sm font-medium text-zinc-500">
        {filteredCotisations.length} cagnotte{filteredCotisations.length > 1 ? "s" : ""} trouvée{filteredCotisations.length > 1 ? "s" : ""}
      </p>

      {/* Grille de cagnottes filtrée sur 4 colonnes pour des cartes compactes */}
      {filteredCotisations.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCotisations.map((item) => {
            const isSubscribed = subscriptions[item.id] || false
            return (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* En-tête avec image (hauteur réduite à h-36) */}
                <div className="relative h-36 bg-zinc-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                  <span className="absolute left-2.5 top-2.5 inline-flex items-center rounded-full bg-emerald-500 p-1 text-white shadow">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                    {item.category}
                  </span>
                </div>

                {/* Corps de la carte */}
                <div className="flex flex-1 flex-col justify-between p-3.5 space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-1.5">
                      <h3 className="line-clamp-1 text-xs font-bold text-zinc-900" title={item.title}>
                        {item.title}
                      </h3>
                      <button className="flex items-center gap-1 text-zinc-400 hover:text-red-600 flex-shrink-0">
                        <Heart className="h-3.5 w-3.5" />
                        <span className="text-[10px]">{item.likes}</span>
                      </button>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-500 line-clamp-2">{item.description}</p>
                    
                    {/* Statistiques & Barre de progression */}
                    <div className="mt-2.5 space-y-1.5">
                      <div className="flex items-baseline justify-between text-xs font-semibold">
                        <span className="text-emerald-600 text-xs">{item.collected}</span>
                        <span className="text-zinc-400 text-[10px]">{item.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-zinc-400 pt-0.5">
                        <Clock className="h-3 w-3" />
                        <span>{item.daysLeft} jours restants</span>
                      </div>
                    </div>
                  </div>

                  {/* Bouton Participer converti en Link vers la page de détail */}
                  <Link
                    href={`/cotisations/${item.id}`}
                    className="w-full rounded-lg bg-red-600 py-2 text-center text-xs font-bold text-white transition hover:bg-red-700 shadow-sm block"
                  >
                    Participer
                  </Link>
                </div>

                {/* Footer avec drapeau, promoteur et abonnement */}
                <div className="border-t border-zinc-100 bg-white px-3.5 py-2.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 font-medium">
                    <img
                      src={item.flag}
                      alt={item.country}
                      className="h-3 w-4 rounded-xs object-cover shadow-xs border border-zinc-200"
                    />
                    <span className="truncate">{item.country}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-sm">
                        {getInitials(item.promoter)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] text-zinc-400 leading-none">Publié par</p>
                        <p className="mt-0.5 truncate text-[10px] font-bold text-zinc-900" title={item.promoter}>
                          {item.promoter}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSubscribe(item.id)}
                      className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold transition shadow-sm ${
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
          <p className="text-base font-medium">Aucune cagnotte trouvée dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  )
}