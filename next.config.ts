import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? "/lab-1-setup" : "",
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;