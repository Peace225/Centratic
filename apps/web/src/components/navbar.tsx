"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Ticket, 
  Menu, 
  X, 
  Search, 
  Sparkles, 
  Users, 
  Bell, 
  Heart, 
  User,
  ShieldCheck
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 gap-4">
        
        {/* LOGO - À gauche */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
          <div className="h-9 w-9 rounded-lg bg-red-600 text-white grid place-items-center">
            <Ticket className="h-5 w-5" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Centra<span className="text-red-600">Tic</span>
          </span>
        </Link>

        {/* BARRE DE RECHERCHE AI - Au centre */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative flex items-center w-full rounded-full border border-zinc-300 bg-white shadow-sm hover:border-zinc-400 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition overflow-hidden p-1">
            <button 
              type="button" 
              className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white ml-1 shrink-0"
              title="Recherche IA / Filtres"
            >
              <Sparkles className="h-4 w-4" />
            </button>

            <input
              type="text"
              placeholder="Rechercher un événement, un artiste avec l'IA..."
              className="w-full px-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none bg-transparent"
            />

            <button 
              type="button" 
              className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white mr-1 shrink-0 hover:bg-red-700 transition"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ACTIONS & ICONES - À droite */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          
          {/* Bouton Principal : Anti-Fraude IA */}
          <Link href="/anti-fraude">
            <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold px-5 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Anti-Fraude IA
            </Button>
          </Link>

          {/* Ma Communauté */}
          <Link 
            href="/community" 
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-700 transition"
            title="Ma communauté"
          >
            <Users className="h-5 w-5" />
          </Link>

          {/* Notifications */}
          <Link 
            href="/notifications" 
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-700 transition relative"
            title="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600" />
          </Link>

          {/* Événements favoris */}
          <Link 
            href="/favorites" 
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-700 transition"
            title="Événements favoris"
          >
            <Heart className="h-5 w-5" />
          </Link>

          {/* Dropdown de Connexion / Menu Utilisateur */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 border border-zinc-300 rounded-lg p-1.5 px-3 hover:shadow-md transition bg-white"
            >
              <Menu className="h-4 w-4 text-zinc-600" />
              <div className="h-6 w-6 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-700">
                <User className="h-4 w-4" />
              </div>
            </button>

            {/* Contenu du Dropdown (Angles droits/non arrondis) */}
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 w-52 rounded-none border border-zinc-200 bg-white shadow-lg z-50 py-2"
                >
                  {/* Section Authentification */}
                  <div className="flex flex-col">
                    <Link
                      href="/login"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Inscription
                    </Link>
                  </div>

                  <hr className="my-2 border-zinc-200" />

                  {/* Section Pages d'information */}
                  <div className="flex flex-col">
                    <Link
                      href="/pricing"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Tarifs
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Qui sommes-nous ?
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bouton Menu Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button 
            className="p-2 text-zinc-700" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="lg:hidden border-t bg-white px-4 py-4"
          >
            <div className="mb-4 flex items-center w-full rounded-full border border-zinc-300 p-1">
              <button className="h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4" />
              </button>
              <input
                type="text"
                placeholder="Recherche IA..."
                className="w-full px-3 text-sm focus:outline-none"
              />
              <button className="h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                <Search className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              <Link href="/anti-fraude" onClick={() => setOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-700 rounded-full mb-2 flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Anti-Fraude IA
                </Button>
              </Link>
              
              <Link href="/community" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 font-medium text-zinc-700">
                <Users className="h-5 w-5" /> Ma communauté
              </Link>
              <Link href="/notifications" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 font-medium text-zinc-700">
                <Bell className="h-5 w-5" /> Notifications
              </Link>
              <Link href="/favorites" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 font-medium text-zinc-700">
                <Heart className="h-5 w-5" /> Événements favoris
              </Link>

              <hr className="border-zinc-200 my-2" />

              <Link href="/login" onClick={() => setOpen(false)} className="py-1.5 font-medium text-zinc-800">
                Connexion
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="py-1.5 font-medium text-zinc-800">
                Inscription
              </Link>

              <hr className="border-zinc-200 my-2" />

              <Link href="/pricing" onClick={() => setOpen(false)} className="py-1.5 text-zinc-600">
                Tarifs
              </Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="py-1.5 text-zinc-600">
                FAQ
              </Link>
              <Link href="/about" onClick={() => setOpen(false)} className="py-1.5 text-zinc-600">
                Qui sommes-nous ?
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="py-1.5 text-zinc-600">
                Nous contacter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}