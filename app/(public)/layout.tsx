import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1F1F1F] transition-colors duration-200">
      {/* Full-width children (for cover image) */}
      <div className="w-full">{React.Children.toArray(children)[0]}</div>

      {/* Constrained content container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {React.Children.toArray(children).slice(1)}
      </div>
    </div>
  );
}
