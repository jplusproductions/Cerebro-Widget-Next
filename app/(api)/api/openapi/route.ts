import { NextResponse, NextRequest } from "next/server"
import { OpenApiDocument } from "@/server/trpc-contexts/context-swagger"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export async function GET(req: NextRequest) {
  const forwardedHost = req.headers.get("x-forwarded-host")
  const forwardedProto = req.headers.get("x-forwarded-proto")
  const updatedDocument = {
    ...OpenApiDocument,
    baseUrl: `${forwardedProto}://${forwardedHost}/api`,
    servers: [{ url: `${forwardedProto}://${forwardedHost}/api` }],
  }
  return NextResponse.json(updatedDocument)
}
