"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement de l'envoi du formulaire ici
    alert("Votre message a été transmis à l'équipe CentraTic !")
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* Infos de contact */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Assistance & Partenariat
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Contactez l'équipe Centra<span className="text-red-600">Tic</span>
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            Une question sur un événement ? Vous êtes organisateur et souhaitez déployer notre technologie Anti-Fraude IA ? Écrivez-nous.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center bg-zinc-100 text-red-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">Adresse e-mail</h3>
                <p className="text-sm text-zinc-600">support@centratic.com</p>
                <p className="text-sm text-zinc-600">partenaires@centratic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center bg-zinc-100 text-red-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">Téléphone & WhatsApp</h3>
                <p className="text-sm text-zinc-600">+225 01 02 03 04 05</p>
                <span className="text-xs font-medium text-green-600">Support disponible du Lun au Sam (08h - 19h)</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center bg-zinc-100 text-red-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">Bureaux</h3>
                <p className="text-sm text-zinc-600">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="border border-zinc-200 bg-white p-8">
          <h2 className="text-xl font-bold text-zinc-900">Envoyer un message</h2>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Nom ou Organisation
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom complet"
                className="mt-1 w-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Adresse e-mail
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="vous@exemple.com"
                className="mt-1 w-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Sujet
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ex : Intégration de l'Anti-Fraude IA"
                className="mt-1 w-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Détaillez votre demande..."
                className="mt-1 w-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-none bg-red-600 py-3 font-bold text-white hover:bg-red-700"
            >
              Envoyer le message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}