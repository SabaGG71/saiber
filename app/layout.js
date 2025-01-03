import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { MovingBorderDemo } from "./_components/MovingBorderDemo";
import { Rethink_Sans } from "next/font/google";
import cursorYou from "../public/pointer.svg";
import Head from "next/head";
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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2PHPSGK1EQ"
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "po549l0gad");
            `,
          }}
        ></script>
      </Head>
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
