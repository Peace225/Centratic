"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Trophy,
  Crown,
  Award,
  Sparkles,
  Star,
  Zap,
  X,
  Mail,
} from "lucide-react"

const CATEGORIES_VOTE = [
  { id: "Toutes", label: "Toutes", icon: LayoutGrid },
  { id: "Award", label: "Awards", icon: Trophy },
  { id: "Miss", label: "Miss & Beauté", icon: Crown },
  { id: "Concours", label: "Concours", icon: Award },
  { id: "Talent", label: "Talents", icon: Sparkles },
  { id: "Autre", label: "Autres votes", icon: Star },
]

const VOTES_DATA = [
  {
    id: 1,
    title: "PRIMUD 2026 - Meilleur Artiste",
    category: "Award",
    status: "En cours",
    description: "Votez pour votre artiste de l'année. Vote payant disponible via Mobile Money.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    rank: "N°1",
    points: "37 / 1000 pts",
    progress: 37,
    country: "République centrafricaine",
    flagCode: "cf", // Code ISO pour Flagpedia
    promoter: "Bangui Event Prod",
    promoterInitials: "BE",
  },
  {
    id: 2,
    title: "Miss Centrafrique 2026 - Région de Bangui",
    category: "Miss",
    status: "En cours",
    description: "Soutenez votre candidate favorite pour la grande finale nationale.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    rank: "N°2",
    points: "450 / 1000 pts",
    progress: 45,
    country: "République centrafricaine",
    flagCode: "cf",
    promoter: "Oubangui Stars A...",
    promoterInitials: "OS",
  },
  {
    id: 3,
    title: "Concours National des Mairies Digitales",
    category: "Concours",
    status: "En cours",
    description: "Élisez la commune la plus innovante en matière de services numériques.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f1ab2?auto=format&fit=crop&q=80&w=800",
    rank: "N°3",
    points: "820 / 1000 pts",
    progress: 82,
    country: "République centrafricaine",
    flagCode: "cf",
    promoter: "Institut Français d...",
    promoterInitials: "IF",
  },
  {
    id: 4,
    title: "Afro-Talent Show - Saison 4",
    category: "Talent",
    status: "En cours",
    description: "Le tremplin musical et artistique pour révéler les nouveaux talents.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    rank: "N°4",
    points: "190 / 1000 pts",
    progress: 19,
    country: "République centrafricaine",
    flagCode: "cf",
    promoter: "Bangui Event Prod",
    promoterInitials: "BE",
  },
  {
    id: 5,
    title: "Meilleur Entrepreneur Social 2026",
    category: "Autre",
    status: "En cours",
    description: "Encouragez l'initiative entrepreneuriale à fort impact communautaire.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    rank: "N°5",
    points: "610 / 1000 pts",
    progress: 61,
    country: "République centrafricaine",
    flagCode: "cf",
    promoter: "Oubangui Stars A...",
    promoterInitials: "OS",
  },
  {
    id: 6,
    title: "Grand Prix de la Mode Bangui",
    category: "Miss",
    status: "En cours",
    description: "Votez pour le meilleur jeune créateur de mode de l'année.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    rank: "N°6",
    points: "320 / 1000 pts",
    progress: 32,
    country: "République centrafricaine",
    flagCode: "cf",
    promoter: "Institut Français d...",
    promoterInitials: "IF",
  },
]

const CREDIT_PACKS = [
  { votes: "1 VOTES", price: "200 FCFA" },
  { votes: "3 VOTES", price: "500 FCFA" },
  { votes: "10 VOTES", price: "1 000 FCFA" },
  { votes: "20 VOTES", price: "2 000 FCFA" },
  { votes: "50 VOTES", price: "5 000 FCFA" },
  { votes: "100 VOTES", price: "10 000 FCFA" },
]

export default function VotesPage() {
  const [activeTab, setActiveTab] = useState("Toutes")
  const [selectedCampaign, setSelectedCampaign] = useState<typeof VOTES_DATA[0] | null>(null)
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const filteredVotes = useMemo(() => {
    if (activeTab === "Toutes") return VOTES_DATA
    return VOTES_DATA.filter((item) => item.category === activeTab)
  }, [activeTab])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    alert(`Merci pour votre abonnement ! Les notifications seront envoyées à ${newsletterEmail}`)
    setNewsletterEmail("")
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
      {/* Navigation centrale */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
          <Link href="/events" className="rounded-full px-6 py-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition">
            Événements
          </Link>
          <Link href="/cotisations" className="rounded-full px-6 py-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition">
            Cotisations
          </Link>
          <Link href="/votes" className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-sm">
            Votes
          </Link>
        </div>
      </div>

      {/* Barre de filtres horizontale */}
      <div className="no-scrollbar flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-2">
        {CATEGORIES_VOTE.map((cat) => {
          const Icon = cat.icon
          const isActive = activeTab === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex min-w-[100px] flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition cursor-pointer ${
                isActive
                  ? "border-red-200 bg-red-50 font-bold text-red-600 shadow-xs"
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
        Votes en ligne sécurisés et vérifiés par IA
      </p>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Grille de votes */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVotes.length > 0 ? (
            filteredVotes.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xs hover:shadow-md transition group"
              >
                {/* Image & Badge de rang */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-zinc-900 mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-zinc-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.rank}
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {item.status}
                  </div>
                </div>

                <span className="text-red-600 text-[11px] font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-bold text-zinc-900 text-sm line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 line-clamp-2 mb-4">
                  {item.description}
                </p>

                {/* Progression & Points */}
                <div className="mt-auto space-y-2 pt-3 border-t border-zinc-100">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-400 uppercase text-[10px]">Étape</span>
                    <span className="text-zinc-700">{item.points}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>

                  <button
                    onClick={() => setSelectedCampaign(item)}
                    className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-2.5 text-xs font-bold text-zinc-900 hover:bg-amber-500 transition cursor-pointer shadow-xs"
                  >
                    <Zap className="h-4 w-4 fill-zinc-900" />
                    <span>Voter</span>
                  </button>
                </div>

                {/* Footer de la carte (Drapeau image sécurisé, Promoteur & S'abonner) */}
                <div className="mt-3 pt-3 border-t border-zinc-100 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                    <img
                      src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                      alt={item.country}
                      className="h-3.5 w-5 object-cover rounded-xs shadow-xs"
                    />
                    <span>{item.country}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                        {item.promoterInitials}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-zinc-400 leading-none">Publié par</span>
                        <span className="text-xs font-bold text-zinc-800 truncate">{item.promoter}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        alert(`Vous êtes maintenant abonné aux publications de ${item.promoter}`)
                      }}
                      className="rounded-xl bg-zinc-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-zinc-800 transition cursor-pointer shadow-xs shrink-0"
                    >
                      S'abonner
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-zinc-400 bg-white rounded-2xl border border-zinc-200">
              Aucun vote disponible pour cette catégorie.
            </div>
          )}
        </div>

        {/* Colonne latérale : Packs de crédits */}
        <div className="lg:col-span-1 bg-blue-600 rounded-2xl p-5 text-white shadow-md space-y-4 sticky top-6">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Zap className="h-5 w-5 fill-white text-white" />
            <span>Packs de crédits</span>
          </div>

          <div className="space-y-2.5">
            {CREDIT_PACKS.map((pack, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-blue-700/60 hover:bg-blue-700 transition px-4 py-3 rounded-xl border border-blue-500/40 text-xs font-bold cursor-pointer"
              >
                <span>{pack.votes}</span>
                <span className="bg-blue-800/80 px-2.5 py-1 rounded-lg">{pack.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modale de vote interactive */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-zinc-900">Voter pour : {selectedCampaign.title}</h3>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-zinc-600">
                Sélectionnez un pack de votes pour soutenir ce candidat.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {CREDIT_PACKS.slice(0, 4).map((pack, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      alert(`Vote validé pour ${selectedCampaign.title} avec le pack ${pack.votes}!`)
                      setSelectedCampaign(null)
                    }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-200 hover:border-amber-400 hover:bg-amber-50/50 transition cursor-pointer"
                  >
                    <span className="text-xs font-bold text-zinc-900">{pack.votes}</span>
                    <span className="text-[11px] text-zinc-500">{pack.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}