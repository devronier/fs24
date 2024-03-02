import Header from "@/components/Header";

export const metadata = {
  title: "Digital Blog",
  description: "Este é um blog da digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

