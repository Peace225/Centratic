"use client"

import {
  ShieldCheck,
  Ticket,
  Cpu,
  Users,
  Award,
  Target,
  HeartHandshake,
  Vote,
  PiggyBank,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      {/* Section Héros */}
      <div className="border-b border-zinc-200 pb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600">
          Notre vision & notre mission
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-zinc-900 sm:text-5xl">
          Sécuriser la billetterie, les votes et les dons grâce à l&apos;IA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          Née du constat des fraudes et du manque de transparence dans la gestion des événements et des financements participatifs,{" "}
          <strong className="text-zinc-900">CentraTic</strong> développe l’infrastructure de confiance nouvelle génération pour la <strong className="text-zinc-900">billetterie</strong>, les <strong className="text-zinc-900">cagnottes de dons</strong> et les <strong className="text-zinc-900">votes en ligne</strong> à Bangui (République Centrafricaine) et en Afrique.
        </p>
      </div>

      {/* Nos Piliers de Confiance */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="border border-zinc-200 bg-white p-6">
          <div className="grid h-10 w-10 place-items-center bg-red-50 text-red-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-zinc-900">
            Zéro Fraude & Audit en Temps Réel
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Billets uniques chiffrés, votes authentifiés et traçabilité stricte des collectes de fonds par notre moteur d&apos;intelligence artificielle.
          </p>
        </div>

        <div className="border border-zinc-200 bg-white p-6">
          <div className="grid h-10 w-10 place-items-center bg-red-50 text-red-600">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-zinc-900">
            Technologie & Performance
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Des outils de pointe, rapides et résilients, conçus par des ingénieurs experts pour supporter les pics d&apos;affluence, de votes ou d&apos;achats simultanés.
          </p>
        </div>

        <div className="border border-zinc-200 bg-white p-6">
          <div className="grid h-10 w-10 place-items-center bg-red-50 text-red-600">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-zinc-900">
            Proximité & Mobile Money
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Des moyens de paiement locaux intégrés (Mobile Money) pour acheter vos tickets, faire un don ou payer un vote payant en toute sérénité.
          </p>
        </div>
      </div>

      {/* Nos Solutions - Billetterie, Cagnotte, Vote */}
      <div className="mt-16 border-t border-zinc-200 pt-12">
        <h2 className="text-center text-2xl font-bold text-zinc-900">
          Un Écosystème Événementiel & Participatif Complet
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col border border-zinc-200 bg-zinc-50/50 p-6">
            <div className="flex items-center gap-3">
              <Ticket className="h-5 w-5 text-red-600" />
              <h3 className="font-bold text-zinc-900">Billetterie Événementielle</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Émission de billets QR code sécurisés pour spectacles, concerts, conférences et salons professionnels avec contrôle d&apos;accès ultra-rapide.
            </p>
          </div>

          <div className="flex flex-col border border-zinc-200 bg-zinc-50/50 p-6">
            <div className="flex items-center gap-3">
              <Vote className="h-5 w-5 text-red-600" />
              <h3 className="font-bold text-zinc-900">Votes en Ligne</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Système de votes gratuits ou payants pour concours, remises de prix et élections, avec détection anti-bot et résultats transparents.
            </p>
          </div>

          <div className="flex flex-col border border-zinc-200 bg-zinc-50/50 p-6">
            <div className="flex items-center gap-3">
              <PiggyBank className="h-5 w-5 text-red-600" />
              <h3 className="font-bold text-zinc-900">Cagnottes & Dons</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Collecte de fonds simplifiée pour projets solidaires, associatifs ou artistiques avec suivi en temps réel des objectifs atteints.
            </p>
          </div>
        </div>
      </div>

      {/* Section Chiffres & Engagement */}
      <div className="mt-16 border border-zinc-200 bg-zinc-900 p-8 text-white sm:p-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="block text-4xl font-black text-red-500">100%</span>
            <span className="mt-1 block text-sm font-medium text-zinc-400">
              Billets & Votes audités par IA
            </span>
          </div>
          <div>
            <span className="block text-4xl font-black text-white">&lt; 0.5s</span>
            <span className="mt-1 block text-sm font-medium text-zinc-400">
              Temps de vérification au scan
            </span>
          </div>
          <div>
            <span className="block text-4xl font-black text-red-500">0%</span>
            <span className="mt-1 block text-sm font-medium text-zinc-400">
              Fraude sur les transactions
            </span>
          </div>
          <div>
            <span className="block text-4xl font-black text-white">24/7</span>
            <span className="mt-1 block text-sm font-medium text-zinc-400">
              Surveillance & Assistance
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}