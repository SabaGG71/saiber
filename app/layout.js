import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { MovingBorderDemo } from "./_components/MovingBorderDemo";
import { Rethink_Sans } from "next/font/google";
import cursorYou from "../public/pointer.svg";
export const metadata = {
  title: "Saiber | Official",
};

const rethink_Sans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X553ZZF6YN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2PHPSGK1EQ');
            `,
          }}
        ></script>
      </head>
      <body
        className={`bg-primary-900 max-w-full ${rethink_Sans.className} text-white antialiased`}
      >
        <section
          style={{
            cursor: `url(${cursorYou.src}), auto`,
          }}
        >
          <MovingBorderDemo />
          <Header />
          {children}

          <Footer />
        </section>
      </body>
    </html>
  );
}
