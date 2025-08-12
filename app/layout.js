import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Frontend Assignment",
  description: "Frontend Developer Task - ComputerChacha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
