import Link from "next/link";
import { Anchor, ArrowUpRight } from "lucide-react";

const COPYRIGHT_YEAR = "2026";

export function Footer() {
  return (
    <footer className="bg-[#191970] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-extrabold tracking-[0.12em]"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#EFBF04] text-[#191970]">
              <Anchor size={19} />
            </span>
            BATCH<span className="text-[#EFBF04]">—</span>HARBOR
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Thoughtful data engineering for teams turning complex information
            into useful products.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#EFBF04]">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/#about" className="hover:text-white">
              About
            </Link>
            <Link href="/#solutions" className="hover:text-white">
              Solutions
            </Link>
            <Link href="/#projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/#insights" className="hover:text-white">
              Insights
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#EFBF04]">
            Start a conversation
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Have a data challenge or a product idea? We&apos;d love to hear about
            it.
          </p>
          <a
            href="mailto:hello@batch-harbor.com"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#EFBF04]"
          >
            hello@batch-harbor.com
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© {COPYRIGHT_YEAR} Batch-Harbor. All rights reserved.</span>
          <span>Data engineering, simplified.</span>
        </div>
      </div>
    </footer>
  );
}
