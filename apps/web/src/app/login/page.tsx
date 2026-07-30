"use client"

import { useState } from "react"
import Link from "next/link"
import { Ticket, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement de la connexion ici
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-12">
      <div className="border border-zinc-200 bg-white p-8">
        <div className="flex flex-col items-center text-center">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-red-600 text-white">
            <Ticket className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-zinc-900">
            Connexion à Centra<span className="text-red-600">Tic</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Accédez à vos billets sécurisés et à vos événements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Adresse e-mail
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Mot de passe
              </label>
              <Link href="/forgot-password" className="text-xs font-medium text-red-600 hover:underline">
                Oublié ?
              </Link>
            </div>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-zinc-300 bg-zinc-50 py-2 pl-9 pr-4 text-sm focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <Button type="submit" className="w-full rounded-none bg-red-600 py-2.5 font-bold text-white hover:bg-red-700">
            Se connecter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-zinc-100 pt-4 text-xs font-medium text-zinc-500">
          <ShieldCheck className="h-4 w-4 text-green-600" />
          Authentification protégée par Anti-Fraude IA
        </div>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Pas encore de compte ?{" "}
          <Link href="/register" className="font-bold text-red-600 hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}