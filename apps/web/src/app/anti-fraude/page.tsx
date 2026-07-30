"use client"

import Link from "next/link"
import {
  ShieldCheck,
  Cpu,
  QrCode,
  AlertTriangle,
  RefreshCw,
  Lock,
  Smartphone,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AntiFraudePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* SECTION HÉROS */}
      <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950 px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-500">
            <ShieldCheck className="h-4 w-4" />
            Infrastructure de confiance CentraTic
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            La sécurité des billets propulsée par{" "}
            <span className="text-red-600">Anti-Fraude IA</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Fini les faux billets, les doubles entrées et les reventes sur les
            marchés noirs. CentraTic combine signature cryptographique et
            intelligence artificielle pour garantir 100 % d&apos;authenticité
            à chaque contrôle d&apos;accès.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/pricing">
              <Button className="rounded-none bg-red-600 px-6 py-6 text-sm font-bold text-white hover:bg-red-700">
                Protéger mes événements <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-none border-zinc-700 bg-transparent px-6 py-6 text-sm font-bold text-white hover:bg-zinc-900"
              >
                Parler à un expert sécurité
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION COMMENT ÇA MARCHE (4 ÉTAPES) */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            Processus de sécurisation
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Comment fonctionne notre moteur de vérification ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Dès sa génération, chaque billet digital suit un cycle strict de
            validation pour empêcher toute falsification.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Étape 1 */}
          <div className="relative border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center bg-red-600/10 text-red-500">
                <Lock className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-zinc-500">01</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Signature unique
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Chaque billet émis est associé à un hash cryptographique à usage unique
              enregistré de manière immutable dans notre base.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="relative border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center bg-red-600/10 text-red-500">
                <QrCode className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-zinc-500">02</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              QR Code dynamique
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Pour les événements à haut risque, le QR code se régénère par
              intervalles dans l&apos;application, rendant les captures
              d&apos;écran inutilisables.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="relative border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center bg-red-600/10 text-red-500">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-zinc-500">03</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Analyse comportementale
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Notre IA surveille les tentatives d&apos;achats de masse par des
              bots et les schémas d&apos;adresse e-mail ou IP suspects en temps
              réel.
            </p>
          </div>

          {/* Étape 4 */}
          <div className="relative border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center bg-red-600/10 text-red-500">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-zinc-500">04</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Contrôle &lt; 0.5s
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              À l&apos;entrée, le scan invalide instantanément le billet
              à l&apos;échelle de tous les terminaux connectés au site.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION COMPARATIF DU SCAN */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                Tolérance zéro pour les fraudeurs
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Ce que l&apos;IA détecte et bloque aux portes de votre événement
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Les méthodes traditionnelles comme les billets PDF statiques
                ou les badges papiers sont responsables d&apos;importantes
                pertes financières. Voici comment notre système réagit aux cas
                les plus courants de fraude.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Photocopies & Captures d&apos;écran
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Les duplicatas sont rejetés dès la première entrée
                      validée. Notre IA signale immédiatement au poste de
                      sécurité le terminal qui tente un re-scan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Achat par bots & revendeurs non agréés
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Limitation du volume par utilisateur et annulation
                      automatique des transactions suspectes sans émission du QR
                      Code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Mode dégradé hors-ligne sécurisé
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Même en cas de coupure Internet sur le lieu du concert ou
                      de la conférence, l&apos;application stocke de façon
                      chiffrée la liste blanche des signatures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation visuelle d'une carte d'attestation */}
            <div className="border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-zinc-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Terminal Scan : Porte Nord - 04
                  </span>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
              </div>

              {/* Cas Validé */}
              <div className="mt-6 border border-green-500/30 bg-green-950/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-sm font-bold text-white">
                        BILLET VALIDE • ACCÈS AUTORISÉ
                      </p>
                      <p className="text-xs text-green-400">
                        Signature : #CT-9824-A7 • Type : PASS VIP
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">0.18s</span>
                </div>
              </div>

              {/* Cas Bloqué */}
              <div className="mt-4 border border-red-500/30 bg-red-950/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="text-sm font-bold text-red-400">
                        REFUSÉ • DOUBLON DÉTECTÉ
                      </p>
                      <p className="text-xs text-zinc-400">
                        Billet déjà scanné à 21:14 (Porte Sud - 01)
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">0.12s</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4 text-xs text-zinc-500">
                <span>Moteur : CentraTic IA v2.4</span>
                <span>Synchronisation : En continu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Prêt à organiser un événement sans risque de fraude ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
          Rejoignez les organisateurs qui font confiance à CentraTic pour
          sécuriser leurs revenus et fluidifier leurs accès.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/register">
            <Button className="rounded-none bg-red-600 px-8 py-6 font-bold text-white hover:bg-red-700">
              Créer mon premier événement
            </Button>
          </Link>
          <Link href="/faq">
            <Button
              variant="outline"
              className="rounded-none border-zinc-700 bg-transparent px-8 py-6 font-bold text-white hover:bg-zinc-900"
            >
              Consulter la FAQ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}