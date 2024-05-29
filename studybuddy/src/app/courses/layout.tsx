import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Study Buddy",
};

export default function TopicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
