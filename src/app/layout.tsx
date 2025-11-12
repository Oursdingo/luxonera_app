import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Luxonera - LExcellence Horlogère",
  description:
    "Découvrez notre collection exclusive de montres de luxe. Artisanat suisse, design intemporel et précision exceptionnelle.",
  keywords: ["montres de luxe", "horlogerie", "montres suisses", "Luxonera"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
