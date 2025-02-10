/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io", "ik.imagekit.io"],
  },
};

export default nextConfig;
