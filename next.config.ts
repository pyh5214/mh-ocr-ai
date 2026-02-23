import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mh-ocr-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
