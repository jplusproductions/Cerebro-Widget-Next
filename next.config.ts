import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.dc.prod.cloud.atriumsports.com" },
    ],
  },
}

export default nextConfig
