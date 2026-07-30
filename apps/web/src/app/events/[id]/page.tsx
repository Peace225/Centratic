"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  Ticket, 
  ShieldCheck, 
  Minus, 
  Plus, 
  X, 
  CheckCircle2, 
  Smartphone, 
  Lock,
  ChevronDown,
  Share2,
  Mail,
  Cpu,
  Fingerprint,
  Activity,
  CreditCard,
  QrCode
} from "lucide-react"

const MOCK_EVENTS = [
  {
    id: 1,
    title: "TRK EN CONCERT AU PALAIS",
    category: "Concert Live",
    date: "Sam. 15 Août 2026 | 13:00 GMT",
    price: "À partir de 5 000 F CFA",
    location: "Palais de la Culture, Bangui",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    description: "Vivez une expérience musicale inoubliable avec TRK en concert live au Palais. Un show exceptionnel réunissant les meilleurs titres de l'artiste dans une ambiance survoltée, protégée par un contrôle d'accès biométrique et des billets infalsifiables.",
    tickets: [
      { 
        id: "std", 
        name: "Pass Standard", 
        price: 5000, 
        badge: "Grand Public",
        badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
        indicator: "🔥 Forte demande",
        indicatorColor: "bg-amber-50 text-amber-700 border-amber-200",
        description: "Accès général grand public + Billet électronique infalsifiable à QR code dynamique." 
      },
      { 
        id: "vip", 
        name: "Pass VIP", 
        price: 15000, 
        badge: "Accès Rapide",
        badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
        indicator: "⚡ Plus que 15 places",
        indicatorColor: "bg-rose-50 text-rose-700 border-rose-200",
        description: "Zone VIP dédiée, places assises réservées, file d'attente prioritaire & rafraîchissements." 
      },
      { 
        id: "vvip", 
        name: "Pass VVIP Ultra", 
        price: 35000, 
        badge: "Sécurité Renforcée",
        badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
        indicator: "👑 Places très limitées",
        indicatorColor: "bg-purple-50 text-purple-700 border-purple-200",
        description: "Table exclusive, service personnalisé, liaison d'identité biométrique & meet-up artiste." 
      },
    ]
  },
  {
    id: 2,
    title: "KEROZEN LIVE SHOW EXCLUSIF",
    category: "Concert Premium",
    date: "Ven. 21 Août 2026 | 20:00 GMT",
    price: "10 000 F CFA",
    location: "Complexe Sportif, Bangui",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
    description: "Kerozen débarque à Bangui pour un concert live exclusif. Venez chanter en cœur les tubes à succès de l'artiste motivateur avec un contrôle d'accès intelligent anti-revente.",
    tickets: [
      { 
        id: "std", 
        name: "Entrée Standard", 
        price: 10000, 
        badge: "Populaire",
        badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
        indicator: "🔥 Forte demande",
        indicatorColor: "bg-amber-50 text-amber-700 border-amber-200",
        description: "Accès gradins et pelouse sécurisé." 
      },
      { 
        id: "vip", 
        name: "Espace VIP Gold", 
        price: 25000, 
        badge: "Premium",
        badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
        indicator: "⚡ Places limitées",
        indicatorColor: "bg-rose-50 text-rose-700 border-rose-200",
        description: "Vue imprenable sur scène avec bar privé et contrôle coupe-file." 
      },
    ]
  },
]

const FAQS = [
  {
    question: "Comment fonctionne la protection Anti-Fraude IA ?",
    answer: "Notre algorithme analyse en temps réel l'empreinte de votre appareil et la cohérence de votre transaction pour générer un QR code dynamique à cryptage unique, infalsifiable par capture d'écran."
  },
  {
    question: "Quels sont les moyens de paiement disponibles ?",
    answer: "Règlement 100% sécurisé via Orange Money et Carte Bancaire (Visa/Mastercard) avec chiffrement de bout en bout (TLS 1.3 - SHA-256)."
  },
  {
    question: "Comment accéder à mes billets après l'achat ?",
    answer: "Vos billets électroniques intelligents sont transmis instantanément par SMS et WhatsApp, avec un lien sécurisé permettant l'affichage hors-ligne."
  },
  {
    question: "Comment valider mon ticket le jour de l'événement ?",
    answer: "Présentez simplement le QR code dynamique depuis votre téléphone ou application de messagerie à nos bornes de contrôle optique à haute vitesse."
  },
  {
    question: "Puis-je transférer mon billet à un proche ?",
    answer: "Oui, uniquement via notre module officiel de transfert sécurisé anti-revente illégale intégré à votre espace client."
  },
  {
    question: "Que faire en cas de perte de mon téléphone ?",
    answer: "Contactez notre support officiel ou régénérez votre passe unique instantanément grâce à votre identifiant cryptographique de transaction."
  }
]

export default function EventDetailPage() {
  const params = useParams()
  const eventId = Number(params?.id) || 1
  const event = MOCK_EVENTS.find((e) => e.id === eventId) || MOCK_EVENTS[0]

 const ticketId = event?.tickets?.[0]?.id ?? "std"
const [quantities, setQuantities] = useState<{ [key: string]: number }>({
  [ticketId]: 1
})

  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"orange" | "card">("orange")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisStep, setAnalysisStep] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [securityHash, setSecurityHash] = useState("")

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const aiRiskScore = "0.01% (Risque Nul)"

  const handleQuantityChange = (ticketId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[ticketId] || 0
      const updated = Math.max(0, current + delta)
      return { ...prev, [ticketId]: updated }
    })
  }

  const totalAmount = event?.tickets?.reduce((sum, ticket) => {
  const qty = quantities[ticket.id] || 0
  return sum + ticket.price * qty
}, 0) ?? 0

  const totalTicketsCount = Object.values(quantities).reduce((a, b) => a + b, 0)

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    setAnalysisStep(1)

    setTimeout(() => {
      setAnalysisStep(2)
    }, 1000)

    setTimeout(() => {
      setAnalysisStep(3)
    }, 2000)

    setTimeout(() => {
      setIsAnalyzing(false)
      setIsSuccess(true)
      setSecurityHash(`SEC-AI-${Math.random().toString(36).substring(2, 10).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-rose-600 selection:text-white pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-rose-500/10 via-emerald-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 py-8 space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-rose-600 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la billetterie
          </Link>

          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-emerald-200 px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-700">
                Bouclier Anti-Fraude IA : <strong className="text-emerald-600 font-semibold">Actif • SHA-256</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-80 sm:h-[440px] w-full overflow-hidden rounded-3xl bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-xl bg-rose-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg border border-rose-400/30">
                  {event.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200 shadow-sm">
                  <QrCode className="h-3.5 w-3.5" /> Billet Dynamique Infalsifiable
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-100">
                  <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/60 text-white">
                    <Calendar className="h-4 w-4 text-rose-400" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/60 text-white">
                    <MapPin className="h-4 w-4 text-rose-400" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-100">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <Cpu className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900 tracking-wide">
                    Protocole de Sécurité Numérique Anti-Fraude
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                  IA v4.2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                  <QrCode className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">QR Code Rotatif</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Rotation dynamique toutes les 30s. Impossible à capturer à l&apos;écran.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                  <Fingerprint className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Liaison Biométrique</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Association unique entre l&apos;acheteur et l&apos;empreinte de l&apos;appareil.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                  <Activity className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Contrôle Éclair</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Validation sur borne optique en moins de 0.4 seconde sans réseau.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-base font-bold text-slate-900 tracking-wide">À propos de l&apos;événement</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 h-fit shadow-xl shadow-slate-100 relative">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
              Sécurisé par IA
            </div>

            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <Ticket className="h-5 w-5 text-rose-600" />
              <h2 className="text-lg font-extrabold text-slate-900">Sélectionner vos billets</h2>
            </div>

            <div className="space-y-4">
              {event.tickets.map((ticket) => {
                const qty = quantities[ticket.id] || 0
                return (
                  <div 
                    key={ticket.id} 
                    className={`rounded-2xl border p-4 space-y-3 transition ${
                      qty > 0 
                        ? "border-rose-500 bg-rose-50/40 shadow-sm shadow-rose-100" 
                        : "border-slate-200 bg-slate-50/60 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      {/* Ajout de min-w-0 ici pour empêcher les coupures de texte bizarres dans le flex item */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-1.5">
                          <h4 className="font-bold text-slate-900 text-sm">{ticket.name}</h4>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${ticket.badgeColor}`}>
                            {ticket.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed break-words">{ticket.description}</p>
                      </div>

                      <div className="text-right shrink-0 space-y-1.5">
                        <span className="font-black text-rose-600 text-sm block">
                          {ticket.price.toLocaleString()} F
                        </span>
                        {ticket.indicator && (
                          <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${ticket.indicatorColor}`}>
                            {ticket.indicator}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
                      <span className="text-xs font-medium text-slate-600">Quantité</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(ticket.id, -1)}
                          disabled={qty === 0}
                          className={`rounded-xl border p-1.5 transition ${
                            qty === 0 
                              ? "border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed" 
                              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-slate-900">{qty}</span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(ticket.id, 1)}
                          className="rounded-xl border border-slate-300 bg-white p-1.5 text-slate-700 hover:bg-slate-100 transition"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total billets ({totalTicketsCount})</span>
                <span className="font-extrabold text-slate-900 text-base">{totalAmount.toLocaleString()} F CFA</span>
              </div>

              <div className="flex items-center justify-between text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-600 flex items-center gap-2 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Protection Transactionnelle
                </span>
                <span className="font-bold text-emerald-600">{aiRiskScore}</span>
              </div>

              <button
                disabled={totalTicketsCount === 0}
                onClick={() => setIsModalOpen(true)}
                className={`w-full rounded-2xl py-4 text-sm font-extrabold tracking-wide text-white transition shadow-lg ${
                  totalTicketsCount > 0
                    ? "bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 shadow-rose-500/20 cursor-pointer"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
                }`}
              >
                Procéder au paiement sécurisé
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <Lock className="h-3.5 w-3.5 text-emerald-600" />
                <span>Chiffrement 256-bit • Orange Money & Carte Bancaire</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pt-8 border-t border-slate-200">
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900">Lieu sur carte</h2>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm h-[380px]">
              <iframe
                title="Carte de localisation"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="h-full w-full border-0"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900">Questions fréquentes</h2>
            <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 shadow-sm">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left text-sm font-bold text-slate-800 hover:text-rose-600 transition"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-600" : ""}`} />
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-300">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">Partager l&apos;événement</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Découvre cet événement sécurisé : ${event.title} - ${event.date}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
            >
              <Smartphone className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-500 transition"
            >
              <Share2 className="h-4 w-4" /> Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(event.title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition"
            >
              𝕏 X (Twitter)
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(`Regarde cet événement : ${shareUrl}`)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden space-y-6 p-6 sm:p-8">
            <button
              onClick={() => {
                setIsModalOpen(false)
                setIsSuccess(false)
                setIsAnalyzing(false)
              }}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
            >
              <X className="h-5 w-5" />
            </button>

            {isAnalyzing ? (
              <div className="py-10 text-center space-y-6">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 border border-emerald-500/40 text-emerald-600 shadow-lg shadow-emerald-500/10">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping" />
                  <Cpu className="h-10 w-10 animate-spin" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Analyse de Sécurité IA en cours...</h3>
                  <p className="text-xs text-emerald-600 font-mono max-w-xs mx-auto font-semibold">
                    {analysisStep === 1 && ">> [1/3] Audit de l'empreinte appareil & IP..."}
                    {analysisStep === 2 && ">> [2/3] Détection comportementale Anti-Bot..."}
                    {analysisStep === 3 && ">> [3/3] Chiffrement SHA-256 du Billet Dynamique..."}
                  </p>
                </div>

                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden max-w-xs mx-auto border border-slate-200">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-700" 
                    style={{ width: analysisStep === 1 ? "35%" : analysisStep === 2 ? "75%" : "100%" }}
                  />
                </div>
              </div>
            ) : isSuccess ? (
              <div className="py-8 text-center space-y-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Paiement Validé avec Succès !</h3>
                  <p className="text-xs text-slate-600">
                    Vos billets sécurisés ont été générés et transmis par SMS et WhatsApp au <strong className="text-slate-900">{customerPhone}</strong>.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-left font-mono text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Hash de Sécurité :</span>
                    <span className="font-bold text-emerald-600">{securityHash}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Titulaire :</span>
                    <span className="font-bold text-slate-900">{customerName}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Montant réglé :</span>
                    <span className="font-bold text-slate-900">{totalAmount.toLocaleString()} F CFA</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsModalOpen(false)
                    setIsSuccess(false)
                    setIsAnalyzing(false)
                  }}
                  className="w-full rounded-2xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition shadow-md cursor-pointer"
                >
                  Fermer et retourner à l&apos;événement
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="h-3.5 w-3.5" /> IA Anti-Fraude Validée (Score: 99.9%)
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900">Finaliser votre commande</h2>
                  <p className="text-xs text-slate-600">{event.title}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Billets sélectionnés :</span>
                    <span className="font-bold text-slate-900">{totalTicketsCount} billet(s)</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 border-t border-slate-200/80 pt-2">
                    <span>Montant total :</span>
                    <span className="text-rose-600">{totalAmount.toLocaleString()} F CFA</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nom complet (Titulaire officiel)</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Kevin Kouamé"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Numéro de téléphone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +225 07 00 00 00 00"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 py-4 text-sm font-extrabold text-white hover:from-rose-500 hover:to-red-500 transition shadow-lg shadow-rose-500/20 cursor-pointer"
                >
                  Confirmer et payer {totalAmount.toLocaleString()} F CFA
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}