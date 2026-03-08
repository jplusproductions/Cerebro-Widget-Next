import axios, { AxiosInstance } from "axios"
import { scripts } from "chalk-scripts"

// Application Architecture || Define Client
// =======================================================================================
// =======================================================================================
const script = scripts({ name: "CerebroAuthApi()" })

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export class CerebroAuthApi {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DOMAIN_CEREBRO_AUTH,
      headers: { "Content-Type": "application/json" },
    })
  }

  /** Login with email/password → returns JWT + refresh token */
  async login(email: string, password: string): Promise<CerebroAuthTokens> {
    const url = `/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    await script.insight(`Login request for ${email}`)
    const { data } = await this.client.get(url)
    await script.insight("Login successful")
    return data
  }

  /** Refresh an expired JWT using the refresh token */
  async refresh(refreshToken: string): Promise<CerebroAuthTokens> {
    await script.insight("Refreshing token")
    const { data } = await this.client.get(
      `/api/refresh?refreshToken=${encodeURIComponent(refreshToken)}`,
    )
    await script.insight("Token refreshed successfully")
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
