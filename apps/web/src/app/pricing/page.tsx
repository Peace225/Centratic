"use client"

import { Check, ShieldCheck, Sparkles, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Gratuit / Standard",
    price: "0 FCFA",
    period: "par événement publié",
    description: "Idéal pour les événements gratuits, meetups et réunions de communauté.",
    features: [
      "Publication d'événements illimitée",
      "Billetterie digitale standard",
      "Génération de QR Codes simples",
      "Accès à la communauté CentraTic",
      "Support par e-mail",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro • Anti-Fraude IA",
    price: "4,5 %",
    period: "+ 100 FCFA par billet vendu",
    description: "La solution ultime pour sécuriser vos concerts, festivals et événements VIP.",
    features: [
      "Toutes les fonctionnalités Standard",
      "Validation des billets par Anti-Fraude IA",
      "Détection des reventes illicites & doublons",
      "Application de scan ultrarapide pour l'entrée",
      "Statistiques en temps réel & export CSV",
      "Assistance prioritaire 24/7",
    ],
    cta: "Activer la sécurité IA",
    popular: true,
  },
  {
    name: "Entreprise / Sur mesure",
    price: "Sur Devis",
    period: "pour les grands festivals & stades",
    description: "Accompagnement dédié pour les flux massifs et intégrations personnalisées.",
    features: [
      "Commission négociée selon le volume",
      "Déploiement d'une équipe technique sur site",
      "Intégration API avec vos systèmes",
      "Badges physiques RFID / NFC anti-fraude",
      "Gestionnaire de compte dédié",
    ],
    cta: "Contacter l'équipe",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
          <Sparkles className="h-3.5 w-3.5" /> Tarification transparente
        </span>
        <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          Choisissez la sécurité adaptée à vos événements
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600">
          Pas de frais cachés. Activez la technologie Anti-Fraude IA pour protéger vos revenus et offrir une expérience fluide à vos participants.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-between border p-8 ${
              plan.popular
                ? "border-2 border-red-600 bg-white shadow-xl"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div>
              {plan.popular && (
                <span className="mb-4 inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Recommandé
                </span>
              )}
              <h3 className="text-xl font-extrabold text-zinc-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{plan.description}</p>
              
              <div className="mt-6 border-b border-zinc-100 pb-6">
                <span className="text-3xl font-black text-zinc-900">{plan.price}</span>
                <span className="ml-1 text-xs font-medium text-zinc-500">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-700">
                    <Check className="h-5 w-5 shrink-0 text-red-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link href={plan.popular ? "/register" : "/contact"}>
                <Button
                  className={`w-full rounded-none py-3 font-bold ${
                    plan.popular
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-zinc-200 bg-zinc-50 p-6 text-center">
        <p className="text-sm text-zinc-700">
          Vous avez des questions sur nos commissions ou le fonctionnement du système IA ?{" "}
          <Link href="/faq" className="font-bold text-red-600 underline">
            Consulter notre FAQ
          </Link>{" "}
          ou{" "}
          <Link href="/contact" className="font-bold text-red-600 underline">
            contactez notre support technique
          </Link>.
        </p>
      </div>
    </div>
  )
}