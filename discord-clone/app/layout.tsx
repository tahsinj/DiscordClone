import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { DiscordContextProvider } from "@/context/DiscordContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <DiscordContextProvider>
      <body>
        <header>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
        </SignedIn>
      </header>
      <main>{children}</main>
      </body>
      </DiscordContextProvider>
    </html>
    </ClerkProvider>
  );
}
