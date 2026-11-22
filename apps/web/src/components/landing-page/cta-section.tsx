import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="bg-white px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#EFBF04] px-6 py-12 text-[#191970] sm:px-12 sm:py-16 lg:px-16">
        <div className="absolute -right-20 -top-28 size-80 rounded-full border border-[#191970]/10" />
        <div className="absolute -right-4 -top-12 size-48 rounded-full border border-[#191970]/10" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#191970]/65">
              Have a challenge in mind?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s make something work better.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#191970]/75">
              Tell us what you&apos;re trying to solve. We&apos;ll help you find a
              clear next step.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="mailto:hello@batch-harbor.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#191970] px-5 py-3.5 font-bold text-white transition hover:bg-[#29297b]"
            >
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <span className="inline-flex items-center justify-center gap-2 text-sm font-medium">
              <Mail size={16} />
              hello@batch-harbor.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
