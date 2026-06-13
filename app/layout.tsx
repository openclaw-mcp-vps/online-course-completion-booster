import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Completion Booster – Smart Reminders for Educators",
  description: "Increase course completion with personalized nudges, at-risk student detection, and automated intervention strategies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0accdd7f-8876-4c71-ae18-3b2cc799d767"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
