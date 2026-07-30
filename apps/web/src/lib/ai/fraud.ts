import OpenAI from 'openai'
const openai = new OpenAI()

export async function scoreFraud(data: any) {
  const prompt = `Tu es anti-fraude CentraTic. Score 0-100.
  Données: ${JSON.stringify(data)}
  Signaux: ${data.scanCount} scans en ${data.timeWindow}, distance ${data.distanceKm}km, ip ${data.ip}, device ${data.deviceId}
  Réponds JSON: {"score": number, "reason": string, "action": "allow|review|block"}`

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  })
  return JSON.parse(res.choices[0].message.content!)
}