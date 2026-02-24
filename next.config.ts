import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.dc.prod.cloud.atriumsports.com" },
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

export default nextConfig
