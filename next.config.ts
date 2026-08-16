/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requerido para usar <Image /> sin un servidor Node activo
  },
};

module.exports = nextConfig;