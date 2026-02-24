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
    const { data } = await this.client.get("/api/login", {
      params: { email, password },
    })
    return data
  }

  /** Refresh an expired JWT using the refresh token */
  async refresh(refreshToken: string): Promise<CerebroAuthTokens> {
    const { data } = await this.client.get("/api/refresh", {
      params: { refreshToken },
    })
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
