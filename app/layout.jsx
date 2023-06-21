import "../styles/globals.css";
import "../styles/main.scss";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
