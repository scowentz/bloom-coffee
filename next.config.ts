import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bloom-coffee",
  images: { unoptimized: true },
};

export default nextConfig;
