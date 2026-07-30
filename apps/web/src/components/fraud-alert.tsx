"use client"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
export function FraudAlert({ score, reason, action }: { score:number, reason:string, action:string }) {
  const color = action==="block" ? "bg-red-500" : action==="review" ? "bg-yellow-500" : "bg-green-500"
  return (
    <Card><CardHeader><CardTitle>IA Anti-Fraude <Badge className={color+" text-white"}>{score}/100 - {action}</Badge></CardTitle></CardHeader>
    <CardContent><p className="text-sm">{reason}</p></CardContent></Card>
  )
}
