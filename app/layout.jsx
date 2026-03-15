export const metadata = {
  title: 'Bidvin — Vehicle Auction Interface',
  description: 'Next.js static landing inspired by the BIDVIN design.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
