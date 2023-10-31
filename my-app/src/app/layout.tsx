import "~/styles/globals.css"
import { GeistSans } from "geist/font"
import { cn } from "~/lib/utils"
import { ThemeProvider } from "~/components/theme-provider"

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans antialiased",
          GeistSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
