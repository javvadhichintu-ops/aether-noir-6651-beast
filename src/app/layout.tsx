import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AETHER NOIR | Cybernetic High-Fidelity Orchestration | Digital Empire",
  description: "Sovereign builder of reality-bending digital experiences. Where physics ends, the code begins. I do not build websites; I materialize digital empires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-[#020617] text-slate-100 antialiased"}>
        {children}
      </body>
    </html>
  );
}