/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xlsx|xls|jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|ogg|csv|txt)$/,
      use: "file-loader",
    });
    return config;
  },
};

export default nextConfig;
