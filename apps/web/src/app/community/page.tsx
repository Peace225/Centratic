"use client"

import { useState } from "react"
import { Users, MessageSquare, Plus, Search, ShieldCheck, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CommunityGroup {
  id: string
  name: string
  members: number
  category: string
  description: string
  isJoined: boolean
}

const initialGroups: CommunityGroup[] = [
  {
    id: "1",
    name: "Tech & IA - Événements & Conférences",
    members: 1420,
    category: "Technologie",
    description: "Échanges sur les meetups tech, hackathons et innovations Anti-Fraude en Afrique.",
    isJoined: true,
  },
  {
    id: "2",
    name: "Concerts & Festivals VIP",
    members: 3890,
    category: "Musique",
    description: "Les meilleurs plans pour les concerts, accès backstage et alertes billetterie.",
    isJoined: false,
  },
  {
    id: "3",
    name: "Organisateurs & Sécurité CentraTic",
    members: 850,
    category: "Sécurité",
    description: "Groupe vérifié pour les organisateurs souhaitant intégrer le scan et la vérification IA.",
    isJoined: true,
  },
]

export default function CommunityPage() {
  const [groups, setGroups] = useState<CommunityGroup[]>(initialGroups)
  const [search, setSearch] = useState("")

  const toggleJoin = (id: string) => {
    setGroups(groups.map(g => g.id === id ? { ...g, isJoined: !g.isJoined } : g))
  }

  const filteredGroups = groups.filter(g =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 flex items-center gap-2">
            <Users className="h-7 w-7 text-red-600" />
            Ma Communauté
          </h1>
          <p className="text-zinc-600 text-sm mt-1">
            Rejoignez des groupes, suivez vos organisateurs favoris et partagez vos expériences.
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center gap-2 self-start md:self-auto">
          <Plus className="h-4 w-4" /> Créer un groupe
        </Button>
      </div>

      {/* Barre de recherche locale */}
      <div className="my-6 relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Rechercher une communauté, un thème..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-zinc-300 rounded-full focus:outline-none focus:border-red-600"
        />
      </div>

      {/* Liste des groupes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGroups.map((group) => (
          <div key={group.id} className="border border-zinc-200 p-5 flex flex-col justify-between bg-white hover:border-zinc-300 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs bg-zinc-50 border-zinc-300">
                  {group.category}
                </Badge>
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
                  <Users className="h-3 w-3" /> {group.members} membres
                </span>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 line-clamp-1">{group.name}</h3>
              <p className="text-zinc-600 text-sm mt-2 line-clamp-2">{group.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <Button variant="ghost" size="sm" className="text-zinc-600 hover:text-black">
                <MessageSquare className="h-4 w-4 mr-1" /> Forum
              </Button>
              <Button
                size="sm"
                onClick={() => toggleJoin(group.id)}
                className={group.isJoined
                  ? "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border border-zinc-300 rounded-full"
                  : "bg-red-600 hover:bg-red-700 text-white rounded-full"
                }
              >
                {group.isJoined ? (
                  <>
                    <UserCheck className="h-4 w-4 mr-1 text-green-600" /> Membre
                  </>
                ) : (
                  "Rejoindre"
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}