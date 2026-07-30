"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ShieldCheck, Ticket, CreditCard } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: "GÉNÉRAL" | "ANTI-FRAUDE IA" | "PAIEMENTS"
}

const faqs: FAQItem[] = [
  {
    category: "ANTI-FRAUDE IA",
    question: "Comment fonctionne la technologie Anti-Fraude IA de CentraTic ?",
    answer: "Notre IA analyse en temps réel la génération, les transferts et les scans des billets. Elle attribue une signature cryptographique unique à chaque QR Code et détecte automatiquement les tentatives de copie, de capture d'écran ou d'utilisation simultanée à plusieurs points d'entrée.",
  },
  {
    category: "GÉNÉRAL",
    question: "Comment puis-je vérifier l'authenticité de mon billet ?",
    answer: "À tout moment, vous pouvez utiliser l'option 'Vérifier billet' sur notre plateforme. Il vous suffit d'importer le QR Code ou de saisir le numéro de série de votre e-ticket pour obtenir une attestation immédiate d'authenticité émise par notre système.",
  },
  {
    category: "PAIEMENTS",
    question: "Quels sont les moyens de paiement acceptés pour acheter un billet ?",
    answer: "Nous acceptons les principaux services de Mobile Money (Orange Money, MTN Mobile Money, Moov Money, Wave) ainsi que les cartes bancaires internationales (Visa, Mastercard).",
  },
  {
    category: "GÉNÉRAL",
    question: "Un organisateur peut-il scanner les billets hors-ligne (sans connexion internet) ?",
    answer: "Oui. Notre application de contrôle d'accès synchronise les signatures cryptographiques avant l'événement, permettant un contrôle ultra-rapide et sécurisé à l'entrée même en cas de coupure réseau sur le lieu de l'événement.",
  },
  {
    category: "PAIEMENTS",
    question: "Quand et comment l'organisateur reçoit-il les recettes de son événement ?",
    answer: "Les revenus des ventes sont reversés par virement bancaire ou Mobile Money selon votre configuration. Pour les organisateurs certifiés, les versements peuvent être demandés de manière échelonnée avant même la date de l'événement.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL")

  const filteredFaqs = selectedCategory === "ALL" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <div className="text-center">
        <HelpCircle className="mx-auto h-10 w-10 text-red-600" />
        <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          Foire Aux Questions
        </h1>
        <p className="mt-2 text-zinc-600">
          Tout ce que vous devez savoir sur CentraTic, la billetterie sécurisée et l'Anti-Fraude IA.
        </p>
      </div>

      {/* Filtres par catégorie */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["ALL", "GÉNÉRAL", "ANTI-FRAUDE IA", "PAIEMENTS"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat)
              setOpenIndex(null)
            }}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {cat === "ALL" ? "Toutes les questions" : cat}
          </button>
        ))}
      </div>

      {/* Liste FAQ (Accordéon) */}
      <div className="mt-10 space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="border border-zinc-200 bg-white transition hover:border-zinc-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-5 text-left font-bold text-zinc-900 focus:outline-none"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-zinc-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-zinc-600">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}