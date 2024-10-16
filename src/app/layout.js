import HeaderClient from "@/components/globals/header/HeaderClient";
import "../styles/globals.css";
import FooterServer from "@/components/globals/footer/FooterServer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <HeaderClient />
        {children}
        <FooterServer />
      </body>
    </html>
  );
}
