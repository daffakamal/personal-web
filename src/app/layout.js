import "./globals.css";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm_sans",
  display: "swap",
});

export const metadata = {
  title: "Daffa K. Portfolio",
  description: "Daffa K. website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dm_sans.variable}`}
      suppressHydrationWarning
    >
      <body>
          <main>{children}</main>
      </body>
    </html>
  );
}
