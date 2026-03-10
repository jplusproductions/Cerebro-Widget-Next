import type { NextConfig } from "next"

// Application Architecture || Define Configurations
// =======================================================================================
// =======================================================================================
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.dc.prod.cloud.atriumsports.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  headers: async () => [
    {
      source: "/widget",
      headers: [
        { key: "X-Frame-Options", value: "ALLOWALL" },
        { key: "Content-Security-Policy", value: "frame-ancestors *" },
      ],
    },
  ],
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default nextConfig
