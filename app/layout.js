import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProfileBadge from "@/components/ProfileBadge";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minhazul Abedin | Full Stack Specialist",
  description:
    "Results-oriented Full Stack Specialist — Next.js, React, Node.js. Building high-performance SaaS, E-commerce, and AI-powered web platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-neutral-400 dark:bg-[#1f1f1f] w-full dark:text-white text-black`}>
        <CustomCursor />
        <div className="pt-0 md:pt-8 bg-neutral-400 dark:bg-[#1f1f1f] grid grid-cols-1 md:grid-cols-5 items-start justify-start gap-2 h-auto md:h-[90vh] w-full max-w-[70rem] mx-auto">
          <div className="flex flex-col-reverse md:flex-row w-full gap-2 col-auto md:col-span-2 h-full">
            <NavigationBar />
            <ProfileBadge />
          </div>
          <div
            className="w-full col-auto md:col-span-3 bg-neutral-200 dark:bg-[#0c0c0c] rounded-md overflow-y-auto h-full pt-2 pb-8 scrollbar-thumb-[#4f1372cc] scrollbar-track-[#3f2274aa] scrollbar-thin dark:scrollbar-thumb-[#0f5550] dark:scrollbar-track-[#0f55508a]"
            id="main-outlet"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
