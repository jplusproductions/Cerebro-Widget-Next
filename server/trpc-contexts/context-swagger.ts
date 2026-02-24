import { OpenAPIV3 } from "openapi-types"
import { generateOpenApiDocument } from "trpc-swagger"

// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { AppRouter } from "@/server/trpc-routers"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const OpenApiDocument: OpenAPIV3.Document = (() => {
  return generateOpenApiDocument(AppRouter, {
    // NOTE: Value will be overwritten when the frontend compiles this value
    title: "OpenApiDocument",
    // NOTE: Value will be overwritten when the frontend compiles this value
    version: "0.0.0",
    // NOTE: Value will be overwritten when the frontend compiles this value
    baseUrl: "http://localhost:3000/api",
    docsUrl: "https://github.com/vercjames/package-trpc-swagger",
    description: "OpenAPI compliant REST API built using tRPC for Swagger integrations.",
    tags: [
      { name: "Auth", description: "Authentication - User access, management, and application security." },
      { name: "Profile", description: "CTX Based - Personal profile management" },
    ],
  })
})()
