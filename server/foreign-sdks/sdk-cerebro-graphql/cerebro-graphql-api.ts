import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { CerebroAuthApi, CerebroAuthTokens } from "../sdk-cerebro-auth/cerebro-auth-api"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export class CerebroGraphqlApi {
  private client: AxiosInstance
  private auth: CerebroAuthApi
  private tokens: CerebroAuthTokens | null = null
  private pendingAuth: Promise<CerebroAuthTokens> | null = null

  constructor() {
    this.auth = new CerebroAuthApi()
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_CEREBRO_GRAPHQL,
      headers: { "Content-Type": "application/json" },
    })

    // NOTE: Attach JWT to every request, acquiring/refreshing as needed
    this.client.interceptors.request.use(
      (config) => this.attachToken(config),
    )

    // NOTE: On 401, refresh token and retry once
    this.client.interceptors.response.use(
      (res) => res,
      async (error) => {
        const original = error.config
        if (error.response?.status === 401 && !original._retried) {
          original._retried = true
          await this.refreshToken()
          original.headers.Authorization = `Bearer ${this.tokens!.jwt}`
          return this.client(original)
        }
        return Promise.reject(error)
      },
    )
  }

  // Application Architecture || API Authentication
  // =====================================================================================
  private async attachToken(config: InternalAxiosRequestConfig) {
    if (!this.tokens) await this.authenticate()
    config.headers.Authorization = `Bearer ${this.tokens!.jwt}`
    return config
  }

  private async authenticate(): Promise<CerebroAuthTokens> {
    // Deduplicate concurrent auth calls
    if (this.pendingAuth) return this.pendingAuth
    this.pendingAuth = this.auth
      .login(process.env.CEREBRO_USERNAME!, process.env.CEREBRO_PASSWORD!)
      .finally(() => { this.pendingAuth = null })
    this.tokens = await this.pendingAuth
    return this.tokens
  }

  private async refreshToken(): Promise<CerebroAuthTokens> {
    if (!this.tokens) return this.authenticate()
    if (this.pendingAuth) return this.pendingAuth
    this.pendingAuth = this.auth
      .refresh(this.tokens.refreshToken)
      .catch(() => this.auth.login(process.env.CEREBRO_USERNAME!, process.env.CEREBRO_PASSWORD!))
      .finally(() => { this.pendingAuth = null })
    this.tokens = await this.pendingAuth
    return this.tokens
  }

  // Application Architecture || API Query
  // =====================================================================================
  async query<T = unknown>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const { data } = await this.client.post("", { query, variables })
    if (data.errors?.length) throw new CerebroGraphqlError(data.errors)
    return data.data as T
  }
}

// Application Architecture || Define Typologies
// =======================================================================================
// =======================================================================================
export class CerebroGraphqlError extends Error {
  errors: Array<{ message: string; [key: string]: unknown }>
  constructor(errors: Array<{ message: string }>) {
    super(errors.map((e) => e.message).join("; "))
    this.name = "CerebroGraphqlError"
    this.errors = errors
  }
}
