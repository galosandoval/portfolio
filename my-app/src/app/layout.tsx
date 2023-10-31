import "~/styles/globals.css"
import { GeistSans } from "geist/font"

export const metadata = {
  title: "Galo Sandoval",
  description: "Galo Sandoval is a software engineer based in Los Angeles.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
