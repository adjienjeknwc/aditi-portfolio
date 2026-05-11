import type { Metadata } from "next";
import "./globals.css"; // THIS IS THE LINE THAT BRINGS IN THE DESIGN

export const metadata = {
  title: "Aditi Verma | Engineer & Designer",
  description: "The Logic of an Engineer. The Soul of a Designer. Portfolio of Aditi Verma.",
  openGraph: {
    images: ['/spec_girl_intro.png'], // This makes your Memoji the preview image!
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