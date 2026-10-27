import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/LoginForm";
import { StackwireBand } from "@/components/StackwireBand";

export default async function LoginPage() {
  const session = await getSession();
  if (session.authenticated) redirect("/app");

  return (
    <main className="login-page flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="inline-block text-center sm:text-left">
            <Logo size={44} showTagline />
          </div>
          <StackwireBand />
        </div>
        <LoginForm />
        <p className="mt-6 text-center text-xs text-black/40">
          Definite Assurance Co. Ltd — Claims Portal v3.0 (revamp) · Demo environment
        </p>
      </div>
    </main>
  );
}
