export const metadata = {
  title: 'Cirujano Maxilofacial en Sabadell',
  description: 'Muelas del juicio e implantes dentales en Sabadell',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
