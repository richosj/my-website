/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 정적 사이트로 내보내기 설정
  images: {
    unoptimized: true,  // 이미지 최적화 비활성화
  },
  basePath: '/my-website',  // GitHub Pages 경로
  trailingSlash: true,  // 모든 URL에 슬래시 추가
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-website/' : '',  // 정적 파일 경로 설정
}

module.exports = nextConfig;
