"use client"
import QRCode from "react-qr-code"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function QRTicket({ token, ticketId, status }: { token: string, ticketId: string, status?: string }) {
  return (
    <Card className="max-w-sm">
      <CardHeader><CardTitle className="flex justify-between">Billet #{ticketId.slice(0,6)} <Badge>{status || "valide"}</Badge></CardTitle></CardHeader>
      <CardContent className="flex justify-center bg-white p-6">
        <QRCode value={token} size={200} />
      </CardContent>
    </Card>
  )
}
