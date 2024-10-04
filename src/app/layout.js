import "./globals.css";

export const metadata = {
  title: "Turismo de Aventura"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
