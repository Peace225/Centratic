import * as jose from 'jose'
import crypto from 'crypto'

const HMAC_SECRET = new TextEncoder().encode(process.env.QR_HMAC_SECRET!)
const AES_KEY = process.env.QR_AES_KEY! // 32 chars

// Génération billet
export async function generateSecureQRPayload(ticketId: string, userId: string) {
  return await new jose.SignJWT({ ticketId, userId, nonce: crypto.randomUUID() })
   .setProtectedHeader({ alg: 'HS256' })
   .setExpirationTime('12h') // billet expire vite
   .setIssuedAt()
   .sign(HMAC_SECRET)
}

// Vérif scan
export async function verifyQRPayload(token: string) {
  const { payload } = await jose.jwtVerify(token, HMAC_SECRET)
  return payload // { ticketId, userId, nonce, exp }
}