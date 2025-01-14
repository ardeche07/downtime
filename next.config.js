module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.istockphoto.com"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: [/node_modules/],
      use: ["@svgr/webpack"],
    });
    return config;
  }
};
