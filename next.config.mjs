/** @type {import('next').NextConfig} */
const nextConfig = {
  "/api": {
    "target": "http://127.0.0.1:8000/",
    "secure": false
  }
}

export default nextConfig;
