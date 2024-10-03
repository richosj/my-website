/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 정적 사이트로 출력 설정
    images: {
      unoptimized: true, // 이미지 최적화 비활성화 (GitHub Pages에서 이미지 지원을 위해)
    },
    basePath: '/my-website', // 리포지토리 이름 (GitHub Pages 배포 경로)
  }
  
  export default nextConfig;
  