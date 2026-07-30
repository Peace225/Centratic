"use client"

import { useState } from "react"
import { Bell, ShieldCheck, Ticket, Calendar, CheckCheck, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationItem {
  id: string
  title: string
  description: string
  time: string
  type: "SECURITY" | "TICKET" | "EVENT"
  read: boolean
}

const initialNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Analyse Anti-Fraude IA : Billet validé",
    description: "Votre billet pour le 'Summit Tech & IA 2026' a été certifié authentique et sécurisé par CentraTic.",
    time: "Il y a 10 min",
    type: "SECURITY",
    read: false,
  },
  {
    id: "2",
    title: "Rappel : Événement ce soir !",
    description: "Le concert démarre à 20h00. Pensez à préparer votre QR Code sécurisé à l'entrée.",
    time: "Il y a 2 heures",
    type: "EVENT",
    read: false,
  },
  {
    id: "3",
    title: "Nouveau billet disponible",
    description: "Les préventes pour 'Bangui Music Experience' sont officiellement ouvertes.",
    time: "Hier",
    type: "TICKET",
    read: true,
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications)
  const [filter, setFilter] = useState<"ALL" | "UNREAD">("ALL")

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const filtered = filter === "UNREAD" ? notifications.filter(n => !n.read) : notifications

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "SECURITY":
        return <div className="h-9 w-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0"><ShieldCheck className="h-5 w-5" /></div>
      case "TICKET":
        return <div className="h-9 w-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0"><Ticket className="h-5 w-5" /></div>
      case "EVENT":
        return <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Calendar className="h-5 w-5" /></div>
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 flex items-center gap-2">
            <Bell className="h-7 w-7 text-red-600" />
            Notifications
          </h1>
          <p className="text-zinc-600 text-sm mt-1">
            Suivez vos alertes de billetterie et rapports de sécurité IA en temps réel.
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={markAllAsRead} 
          className="flex items-center gap-1 self-start sm:self-auto border-zinc-300"
        >
          <CheckCheck className="h-4 w-4" /> Tout marquer comme lu
        </Button>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 my-6">
        <button
          onClick={() => setFilter("ALL")}
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${filter === "ALL" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Toutes
        </button>
        <button
          onClick={() => setFilter("UNREAD")}
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${filter === "UNREAD" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Non lues
        </button>
      </div>

      {/* Liste */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-center text-zinc-500 py-12">Aucune notification à afficher.</p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`border p-4 flex items-start justify-between gap-4 transition ${item.read ? "bg-white border-zinc-200" : "bg-red-50/40 border-red-200"}`}
            >
              <div className="flex items-start gap-4">
                {getIcon(item.type)}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-zinc-900 text-sm md:text-base">{item.title}</h4>
                    {!item.read && <span className="h-2 w-2 rounded-full bg-red-600" />}
                  </div>
                  <p className="text-zinc-600 text-sm mt-1">{item.description}</p>
                  <span className="text-xs text-zinc-400 mt-2 block font-medium">{item.time}</span>
                </div>
              </div>

              <button
                onClick={() => deleteNotification(item.id)}
                className="text-zinc-400 hover:text-red-600 transition p-1"
                title="Supprimer"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}