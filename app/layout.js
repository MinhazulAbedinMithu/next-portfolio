import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Inter } from "next/font/google";
import ProfileBadge from "@/components/ProfileBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minhazul Abedin | About",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#161616] w-full`}>
        <div className="pt-0 md:pt-8 bg-[#161616] grid grid-cols-1 md:grid-cols-5 items-start justify-start gap-2 h-auto md:h-[90vh] w-full max-w-[70rem] mx-auto">
          <div className="flex flex-col-reverse md:flex-row w-full gap-2 col-auto md:col-span-2 h-full">
            <NavigationBar />
            <ProfileBadge />
          </div>
          <div
            className="w-full col-auto md:col-span-3 bg-[#0A192F] rounded-md overflow-y-auto h-full pt-2 pb-8"
            id="main-outlet"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
