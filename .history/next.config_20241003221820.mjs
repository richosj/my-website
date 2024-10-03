/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 이 부분을 추가
    images: {
      unoptimized: true,  // GitHub Pages에 이미지 최적화를 비활성화 (선택 사항)
    },
    basePath: '/my-website',  // GitHub Pages 경로
  }
  
  export default nextConfig;
  