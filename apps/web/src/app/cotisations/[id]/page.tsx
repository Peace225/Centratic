"use client"

import { useState, use, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Heart, Share2, ShieldCheck, Search, Users, X } from "lucide-react"

// Liste complète et enrichie des participants
const INITIAL_PARTICIPANTS = [
  { id: 1, name: "Jean-Marc Kouassi", amount: "50 000 F CFA", date: "Il y a 2 heures", verified: true },
  { id: 2, name: "Marie-Claire Diallo", amount: "25 000 F CFA", date: "Il y a 5 heures", verified: true },
  { id: 3, name: "Dr. Amani Koffi", amount: "100 000 F CFA", date: "Hier", verified: true },
  { id: 4, name: "Sarah N'Guessan", amount: "15 000 F CFA", date: "Il y a 2 jours", verified: true },
  { id: 5, name: "Éric Bationo", amount: "50 000 F CFA", date: "Il y a 3 jours", verified: true },
  { id: 6, name: "Aminata Traoré", amount: "30 000 F CFA", date: "Il y a 3 jours", verified: true },
  { id: 7, name: "Kouadio Konan", amount: "10 000 F CFA", date: "Il y a 4 jours", verified: true },
  { id: 8, name: "Prisca Ouffoué", amount: "20 000 F CFA", date: "Il y a 4 jours", verified: true },
  { id: 9, name: "Serge Pacôme", amount: "40 000 F CFA", date: "Il y a 5 jours", verified: true },
  { id: 10, name: "N'Guessan Yao", amount: "15 000 F CFA", date: "Il y a 5 jours", verified: true },
  { id: 11, name: "Christelle Brou", amount: "25 000 F CFA", date: "Il y a 6 jours", verified: true },
  { id: 12, name: "Hermann Koffi", amount: "50 000 F CFA", date: "Il y a une semaine", verified: true },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function CotisationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id

  // États pour la modale, les participants, la recherche et les likes
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [participants, setParticipants] = useState(INITIAL_PARTICIPANTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [donorName, setDonorName] = useState("")
  const [donorAmount, setDonorAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [likesCount, setLikesCount] = useState(13)
  const [hasLiked, setHasLiked] = useState(false)

  // Filtrer les participants en fonction de la recherche
  const filteredParticipants = useMemo(() => {
    return participants.filter((donor) =>
      donor.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [participants, searchQuery])

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1)
      setHasLiked(true)
    } else {
      setLikesCount(prev => prev - 1)
      setHasLiked(false)
    }
  }

  const handleContribute = (e: React.FormEvent) => {
    e.preventDefault()
    if (!donorName || !donorAmount) return

    setIsSubmitting(true)

    setTimeout(() => {
      const newParticipant = {
        id: Date.now(),
        name: donorName,
        amount: `${Number(donorAmount).toLocaleString()} F CFA`,
        date: "À l'instant",
        verified: true,
      }

      setParticipants([newParticipant, ...participants])
      setIsSubmitting(false)
      setIsModalOpen(false)
      setDonorName("")
      setDonorAmount("")
    }, 600)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      {/* Bouton de retour */}
      <Link
        href="/cotisations"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux cotisations
      </Link>

      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden p-6 space-y-6">
        {/* En-tête de la page */}
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white shadow">
            Solidarité
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 transition text-sm font-medium border rounded-full px-3.5 py-1.5 cursor-pointer ${
                hasLiked
                  ? "border-red-600 text-red-600 bg-red-50"
                  : "border-zinc-200 text-zinc-500 hover:text-red-600"
              }`}
            >
              <Heart className={`h-4 w-4 ${hasLiked ? "fill-red-600" : ""}`} />
              <span>{likesCount}</span>
            </button>
            <button className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition text-sm font-medium border border-zinc-200 rounded-full px-3.5 py-1.5 cursor-pointer">
              <Share2 className="h-4 w-4" />
              <span>Partager</span>
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-zinc-900">
          SOUTENONS LA FAMILLE KOUAME POUR LES OBSÈQUES (Cagnotte #{id})
        </h1>

        <div className="relative h-72 rounded-xl overflow-hidden bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=1200"
            alt="Illustration cagnotte"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blocs de statistiques (Jours restants, Contributeurs, J'aime) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Jours restants */}
          <div className="bg-white p-4 rounded-xl border border-zinc-200 text-center space-y-1 shadow-xs">
            <div className="flex justify-center text-red-500 mb-1">
              <Clock className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-zinc-900">133</p>
            <p className="text-xs text-zinc-500 font-medium">Jours restants</p>
          </div>

          {/* Contributeurs */}
          <div className="bg-white p-4 rounded-xl border border-zinc-200 text-center space-y-1 shadow-xs">
            <div className="flex justify-center text-red-500 mb-1">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-zinc-900">{participants.length + 503}</p>
            <p className="text-xs text-zinc-500 font-medium">Contributeurs</p>
          </div>

          {/* J'aime */}
          <div className="bg-white p-4 rounded-xl border border-zinc-200 text-center space-y-1 shadow-xs">
            <div className="flex justify-center text-red-500 mb-1">
              <Heart className="h-5 w-5 fill-red-500/20" />
            </div>
            <p className="text-xl font-bold text-zinc-900">{likesCount}</p>
            <p className="text-xs text-zinc-500 font-medium">J'aime</p>
          </div>
        </div>

        {/* Grille principale : Description & Widget de don */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-100">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">À propos de cette cagnotte</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Collecte de solidarité suite au deuil familial survenu à Bangui. Votre participation permettra d'accompagner dignement la famille dans cette épreuve difficile. Chaque compte rendu et chaque contribution font l'objet d'un suivi transparent.
              </p>
            </div>

            {/* Section Traçabilité Publique des Contributions */}
            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-zinc-900">Traçabilité des contributions</h3>
                </div>
                <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                  {participants.length + 503} participants au total
                </span>
              </div>

              <p className="text-xs text-zinc-500">
                Liste publique et transparente de toutes les contributions validées pour cette cagnotte.
              </p>

              {/* Barre de recherche des participants */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Rechercher un participant par son nom..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 pl-10 pr-4 py-2.5 text-xs text-zinc-900 focus:bg-white focus:border-red-600 focus:outline-none transition"
                />
              </div>

              {/* Liste complète des donateurs (avec défilement) */}
              <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-xl overflow-hidden bg-white max-h-[420px] overflow-y-auto">
                {filteredParticipants.length > 0 ? (
                  filteredParticipants.map((donor) => (
                    <div key={donor.id} className="flex items-center justify-between p-3.5 hover:bg-zinc-50 transition">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 shadow-xs">
                          {getInitials(donor.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-bold text-zinc-900">{donor.name}</p>
                            {donor.verified && (
                              <span title="Contribution vérifiée" className="inline-flex items-center">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zinc-400">{donor.date}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        +{donor.amount}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-xs text-zinc-400">
                    Aucun participant trouvé pour "{searchQuery}".
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Colonne latérale : Statistiques & Bouton d'action */}
          <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200 space-y-4 h-fit">
            <div>
              <p className="text-xs text-zinc-500">Montant récolté</p>
              <p className="text-xl font-bold text-emerald-600">4 848 828 F CFA</p>
            </div>

            <div className="space-y-1.5">
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                <div className="h-full rounded-full bg-emerald-500 w-[48%]" />
              </div>
              <p className="text-xs text-zinc-400 text-right">48% de l'objectif</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-xl bg-red-600 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700 shadow-sm cursor-pointer"
            >
              Contribuer maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Modale de contribution */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-zinc-900">Faire une contribution</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleContribute} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Votre Nom complet</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Kouadio Jean"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:border-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Montant (F CFA)</label>
                <input
                  type="number"
                  required
                  placeholder="Ex: 10000"
                  value={donorAmount}
                  onChange={(e) => setDonorAmount(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:border-red-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-red-600 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700 shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Traitement en cours..." : "Valider la participation"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}