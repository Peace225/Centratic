import "./globals.css"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Toaster } from "../components/ui/sonner"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-zinc-50">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}