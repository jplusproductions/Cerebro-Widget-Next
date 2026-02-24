"use client"
import React from "react"
import "swagger-ui-react/swagger-ui.css"
import SwaggerUI from "swagger-ui-react"

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default function SwaggerPage() {
  return (
    <div className="light bg-white min-h-screen">
      <SwaggerUI url="/api/openapi" />
    </div>
  )
}
