import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-2 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <Image
            src="/motiflogo.svg"
            alt="Motif UI logo"
            width={132}
            height={38}
          />
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
          Copyright © 2026 Motif UI, TÜRKSAT.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
        <Link href="https://github.com/motif-ui/motifreact">GitHub</Link>
        <Link href="https://storybook.motif-ui.com">Storybook</Link>
      </div>
    </div>
  );
}