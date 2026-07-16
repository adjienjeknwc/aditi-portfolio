import type { Metadata } from "next";
import "./globals.css"; // THIS IS THE LINE THAT BRINGS IN THE DESIGN

export const metadata = {
  title: "Aditi Verma | Engineer & Designer",
  description: "The Logic of an Engineer. The Soul of a Designer. Portfolio of Aditi Verma.",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    images: ['/spec_girl_intro_v2.png'], // This makes your Memoji the preview image!
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Add these Tailwind classes to the body to force the background */}
      <body className="bg-[#030303] text-white antialiased">
        {children}
      </body>
    </html>
  );
}