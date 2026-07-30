import Link from "next/link"
import { ShieldCheck, Ticket, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Colonne Marque & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white font-bold shadow-md shadow-red-900/20">
                <Ticket className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">CentraTic</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              La plateforme de référence pour la billetterie sécurisée par IA, la gestion des cotisations et les votes officiels.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium shadow-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Sécurité et intégrité certifiées par IA</span>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/events" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-red-600 group-hover:scale-125 transition"></span>
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/cotisation" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-red-600 group-hover:scale-125 transition"></span>
                  Cotisations
                </Link>
              </li>
              <li>
                <Link href="/vote" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="h-1 w-1 rounded-full bg-red-600 group-hover:scale-125 transition"></span>
                  Votes & Scrutins
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Support & Légal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Support & Légal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/help" className="hover:text-white transition">Centre d'aide</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">Confidentialité</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} CentraTic. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span>Propulsé avec</span>
            <Heart className="h-3.5 w-3.5 text-red-600 fill-red-600" />
            <span>pour l'innovation numérique</span>
          </div>
        </div>
      </div>
    </footer>
  )
}