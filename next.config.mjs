/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: 'hjvxplpovfazqqegginc.supabase.co',
		pathname: '/storage/v1/object/public/store-items/**',
	  },
	],
  },
};

export default nextConfig;
