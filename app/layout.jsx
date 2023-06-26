import "../styles/globals.css";
import "../styles/main.scss";
import FiltersBar from './blogs/FiltersBar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
          {children}
        </body>
    </html>
  );
}
