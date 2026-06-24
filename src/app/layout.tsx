import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoleForge AI | Your application command center",
  description: "Private working-student job discovery and application tailoring assistant.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
