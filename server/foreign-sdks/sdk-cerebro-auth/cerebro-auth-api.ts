import axios, { AxiosInstance } from "axios"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export class CerebroAuthApi {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_CEREBRO_AUTH,
      headers: { "Content-Type": "application/json" },
    })
  }

  /** Login with email/password → returns JWT + refresh token */
  async login(email: string, password: string): Promise<CerebroAuthTokens> {
    const url = `/api/login/email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    console.log(`[CerebroAuth] curl -X GET "${this.client.defaults.baseURL}${url}"`)
    const { data } = await this.client.get(url)
    console.log("[CerebroAuth] login response:", JSON.stringify(data, null, 2))
    return data
  }

  /** Refresh an expired JWT using the refresh token */
  async refresh(refreshToken: string): Promise<CerebroAuthTokens> {
    const url = `/api/refresh/refreshToken=${encodeURIComponent(refreshToken)}`
    console.log(`[CerebroAuth] curl -X GET "${this.client.defaults.baseURL}${url}"`)
    const { data } = await this.client.get(url)
    console.log("[CerebroAuth] refresh response:", JSON.stringify(data, null, 2))
    return data
  }
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export interface CerebroAuthTokens {
  jwt: string
  refreshToken: string
}
