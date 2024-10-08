/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.asos-media.com",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
        ],
    },
};

export default nextConfig;
