"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Ticket,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  Calendar,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type UserRole = "USER" | "PROMOTER" | "NGO"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER" as UserRole,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement de l'inscription avec le rôle sélectionné (formData.role)
    console.log("Données d'inscription :", formData)
  }

  return (
    <div className="mx-auto flex min-h-[85vh] max-w-lg flex-col justify-center px-4 py-12">
      <div className="border border-zinc-200 bg-white p-8">
        <div className="flex flex-col items-center text-center">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-red-600 text-white">
            <Ticket className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-zinc-900">
            Rejoindre Centra<span className="text-red-600">Tic</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Sélectionnez votre profil pour accéder à votre espace personnalisé.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Sélecteur de rôle utilisateur */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Type de compte
            </label>
            <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {/* Option 1 : Participant */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "USER" })}
                className={`relative flex flex-col items-center justify-center border p-3 text-center transition-all ${
                  formData.role === "USER"
                    ? "border-red-600 bg-red-50/50 text-red-600 ring-1 ring-red-600"
                    : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {formData.role === "USER" && (
                  <CheckCircle2 className="absolute right-1.5 top-1.5 h-3.5 w-3.5 text-red-600" />
                )}
                <User className="h-5 w-5 mb-1" />
                <span className="text-xs font-bold">Participant</span>
                <span className="mt-0.5 text-[10px] leading-tight text-zinc-500">
                  Billets, Votes & Dons
                </span>
              </button>

              {/* Option 2 : Promoteur culturel */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "PROMOTER" })}
                className={`relative flex flex-col items-center justify-center border p-3 text-center transition-all ${
                  formData.role === "PROMOTER"
                    ? "border-red-600 bg-red-50/50 text-red-600 ring-1 ring-red-600"
                    : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {formData.role === "PROMOTER" && (
                  <CheckCircle2 className="absolute right-1.5 top-1.5 h-3.5 w-3.5 text-red-600" />
                )}
                <Calendar className="h-5 w-5 mb-1" />
                <span className="text-xs font-bold">Promoteur</span>
                <span className="mt-0.5 text-[10px] leading-tight text-zinc-500">
                  Événements & Trafic
                </span>
              </button>

              {/* Option 3 : ONG & Association */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "NGO" })}
                className={`relative flex flex-col items-center justify-center border p-3 text-center transition-all ${
                  formData.role === "NGO"
                    ? "border-red-600 bg-red-50/50 text-red-600 ring-1 ring-red-600"
                    : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {formData.role === "NGO" && (
                  <CheckCircle2 className="absolute right-1.5 top-1.5 h-3.5 w-3.5 text-red-600" />
                )}
                <HeartHandshake className="h-5 w-5 mb-1" />
                <span className="text-xs font-bold">ONG / Asso</span>
                <span className="mt-0.5 text-[10px] leading-tight text-zinc-500">
                  Cagnottes & Collectes
                </span>
              </button>
            </div>
          </div>

          {/* Nom complet */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              {formData.role === "USER"
                ? "Nom complet"
                : formData.role === "PROMOTER"
                ? "Nom de l'organisateur / Structure"
                : "Nom de l'ONG / Association"}
            </label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={
                  formData.role === "USER"
                    ? "Jean Dupont"
                    : formData.role === "PROMOTER"
                    ? "Bangui Événements"
                    : "Association Solidarité"
                }
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Adresse e-mail */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Adresse e-mail
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="vous@exemple.com"
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Numéro de téléphone (Mobile Money)
            </label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+236 70 00 00 00"
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Mot de passe
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-none bg-red-600 py-2.5 font-bold text-white hover:bg-red-700"
          >
            {formData.role === "USER"
              ? "S'inscrire gratuitement"
              : formData.role === "PROMOTER"
              ? "Créer mon compte Organisateur"
              : "Créer mon compte ONG"}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="font-bold text-red-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}