import Navbar from "./Navbar";
import Footer from "./Footer";

export default function StaticPage({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream">
      <Navbar />

      <div className="border-b border-ink/8 bg-cream pt-36 pb-10 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="kicker text-gold-deep">
            <span className="h-px w-8 bg-gold-deep" />
            {kicker}
          </span>
          <h1 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="prose-page space-y-6 text-[0.95rem] leading-relaxed text-ink/75">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}
