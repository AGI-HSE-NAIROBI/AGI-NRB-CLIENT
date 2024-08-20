import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGI Nairobi Community",
  description: "We are dedicated to building a thriving AI community focused on responsible and ethical advancements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary bg-white flex flex-col items-center">
        <div className="mx-auto w-full relative">
          {children}
        </div>
    	</body>
    </html>
  );
}
