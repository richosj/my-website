// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>My Website</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
