import Link from "next/link";
import { ArrowRight, Github, X, Linkedin, Youtube } from "lucide-react";
export default function PitchSection() {
	return (
		<section className="border-t border-slate-200 bg-[linear-gradient(135deg,#f8f8f8_0%,#f2f2f2_40%,#ffffff_100%)] text-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
					<h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-orange sm:text-5xl">
						Join our &nbsp;
						<span className="font-black text-orange-400">
							Motif UI ecosystem
						</span>
					</h2>
					<p className="mt-5 max-w-3xl text-lg leading-9 text-gray-900">
						Motif UI is shaped for serious public-sector and enterprise
						products. Explore the documentation, inspect the source, and build
						consistent interfaces without wrestling the same UI problems for the
						900th time.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link
							href="https://storybook.motif-ui.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(2,132,199,0.28)] transition hover:bg-sky-500">
							Open docs <ArrowRight className="h-4 w-4" />
						</Link>
						<Link
							href="https://github.com/motif-ui/motifreact"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:bg-slate-50">
							<Github className="h-4 w-4" /> View source
						</Link>
					</div>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						<Link
							href="https://github.com/motif-ui"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<Github className="h-4 w-4" /> GitHub
						</Link>
						<Link
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<X className="h-4 w-4" /> X
						</Link>
						<Link
							href="https://www.linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<Linkedin className="h-4 w-4" /> LinkedIn
						</Link>
						<Link
							href="https://www.youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<Youtube className="h-4 w-4" /> YouTube
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
