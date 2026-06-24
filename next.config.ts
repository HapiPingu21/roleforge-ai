import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repository;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubPagesBuild ? `/${repository}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repository}/` : "",
};

export default nextConfig;
