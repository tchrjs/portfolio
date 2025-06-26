import createMDX from "@next/mdx";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  devIndicators: false,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
