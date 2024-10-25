import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/common";
import { Toaster } from "@/components/ui/toaster";
import { Setup } from "@/components/utils";
import ThemeProvider from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext"; // Import AuthProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optics Plus",
  description: "optics plus",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Setup />
            <Navbar />
            <div className="mx-auto px-2 sm:px-2 lg:px-4">{children}</div>
            <Toaster />
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
