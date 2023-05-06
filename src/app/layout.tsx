import { Nunito } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";

import "./globals.css";
import ClientOnly from "../components/ClientOnly";
import RegisterModal from "../components/modals/RegisterModal";
import RentModal from "../components/modals/RentModal";
import LoginModal from "../components/modals/LoginModal";
import ToasterProvider from "../providers/ToasterProvider";
import { getCurrentUser } from "../actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}