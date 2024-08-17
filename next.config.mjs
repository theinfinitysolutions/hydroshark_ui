/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2g3h1gpjmm5ra.cloudfront.net",
      },
    ],
  },
  modularizeImports: {
    "react-icons/?(((\\w*)?/?)*)": {
      transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
      skipDefaultConversion: true,
    },
  },
  transpilePackages: ["three"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.obj$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
