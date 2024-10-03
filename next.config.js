/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 정적 사이트로 변환
  images: {
    unoptimized: true,  // 이미지 최적화 비활성화
  },
  basePath: '/my-website',  // GitHub Pages 경로
}

module.exports = nextConfig;  // CommonJS 방식으로 내보냄
