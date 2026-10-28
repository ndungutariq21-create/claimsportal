"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import type { Role } from "@/lib/types";
import { ROLE_LABELS } from "@/lib/types";
import { logoutAction } from "@/app/actions/auth";
import { StackwireBand } from "./StackwireBand";

export function AppShell({
  role,
  email,
  fullName,
  children,
}: {
  role: Role;
  email: string;
  fullName: string;
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const initials = fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="app-frame min-h-screen">
      <div className="flex min-h-screen">
        <aside
          className={`app-sidebar fixed inset-y-0 left-0 z-30 w-64 transform text-white transition-transform md:relative md:translate-x-0 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-5">
            <div className="border-b border-white/15 pb-5">
              <Logo variant="white" size={26} />
              <p className="mt-2 text-[11px] text-white/70">Enterprise claims management</p>
            </div>

            <div className="mt-5 rounded-lg bg-white/10 px-3 py-2.5">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Role</p>
              <p className="text-sm font-semibold">{ROLE_LABELS[role]}</p>
              <p className="mt-1 truncate text-xs text-white/70" title={fullName}>
                {fullName}
              </p>
              <p className="truncate text-[11px] text-white/50" title={email}>
                {email}
              </p>
            </div>

            <nav className="mt-5 flex-1 space-y-1 text-sm">
              <Link
                href="/app"
                className="block rounded-lg px-3 py-2 font-medium text-white/90 hover:bg-white/10"
              >
                Dashboard
              </Link>
            </nav>

            <p className="mt-5 border-t border-white/15 pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Enterprise systems by Stackwire
            </p>
          </div>
        </aside>

        {navOpen && (
          <button
            aria-label="Close navigation"
            className="fixed inset-0 z-20 bg-black/30 md:hidden"
            onClick={() => setNavOpen(false)}
          />
        )}

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="app-header flex items-center gap-3 px-4 py-3 md:px-8">
            <button
              className="rounded-md border border-black/10 p-2 md:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <Logo size={20} />
            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <StackwireBand className="hidden xl:inline-flex" />
              <details className="relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-black/10 bg-white/70 py-1.5 pl-1.5 pr-3 text-left hover:bg-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stackwire-navy text-xs font-bold text-white">
                    {initials}
                  </span>
                  <span className="hidden max-w-36 sm:block">
                    <span className="block truncate text-xs font-semibold text-stackwire-navy">
                      {fullName}
                    </span>
                    <span className="block text-[10px] text-black/50">Profile</span>
                  </span>
                  <span className="sr-only sm:hidden">Profile</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-black/50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.09 1.03l-4.25 4.5a.75.75 0 01-1.09 0l-4.25-4.5a.75.75 0 01.02-1.05z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="absolute right-0 z-40 mt-2 w-64 rounded-xl border border-black/10 bg-white p-4 shadow-popover">
                  <p className="text-sm font-semibold text-stackwire-navy">{fullName}</p>
                  <p className="mt-1 break-all text-xs text-black/55">{email}</p>
                  <p className="mt-3 border-t border-black/5 pt-3 text-xs font-medium text-black/65">
                    {ROLE_LABELS[role]}
                  </p>
                </div>
              </details>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-lg bg-stackwire-blue px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700 sm:px-4 sm:text-sm"
                >
                  <span className="sm:hidden">Log out</span>
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </form>
            </div>
          </header>

          <main className="flex-1 animate-slide-up px-4 py-6 motion-reduce:animate-none md:px-8 md:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
