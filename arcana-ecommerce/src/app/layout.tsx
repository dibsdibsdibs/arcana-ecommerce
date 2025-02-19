import "./globals.css";
import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cream">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
