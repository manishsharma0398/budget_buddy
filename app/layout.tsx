import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Budget Buddy",
  description:
    "BudgetBuddy is a user-friendly and intuitive budget and expense tracker app designed to help you take control of your finances. With BudgetBuddy, you can easily track your income, expenses, and savings goals, all in one place. Stay on top of your spending habits, identify areas for improvement, and make informed financial decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>{children}</body>
    </html>
  );
}
