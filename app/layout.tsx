import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Analytics — Member Engagement by Role",
  description: "Track message frequency, reaction patterns, and participation rates across Discord server roles. Identify inactive members and grow your community."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="640ff0e8-4ffc-45df-9178-ba1dea096b6f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
