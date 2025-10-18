export const metadata = {
  title: 'AI E-Commerce Store',
  description: 'Next-generation shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
          <h1>🛍️ AI Store</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
