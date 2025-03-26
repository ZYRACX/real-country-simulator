import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@/components'] = path.join(__dirname, 'src/components');
    // Add other aliases if needed
    return config;
  },
};

export default nextConfig;
