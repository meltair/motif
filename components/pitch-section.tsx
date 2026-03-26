import Link from "next/link";
import { ArrowRight, Github, X, Linkedin, Youtube } from "lucide-react";
export default function PitchSection() {
	return (
		<section className="border-t border-slate-200 bg-[linear-gradient(135deg,#f8f8f8_0%,#f2f2f2_40%,#ffffff_100%)] text-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
				<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
					<h2 className="max-w-3xl text-3xl font-small tracking-[-0.04em] sm:text-3xl">
						Join our &nbsp;
						<span className="font-black text-[#975a9d]">
							Motif UI ecosystem
						</span>
					</h2>
					<p className="mt-5 max-w-3xl text-md leading-7 text-gray-900">
						Motif UI is more than a component library — it’s a growing ecosystem for teams building serious digital products. Explore the documentation, contribute to the source, and help shape the future of large-scale public and enterprise interfaces.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link
							href="https://docs.motif-ui.com"
							className="inline-flex items-center gap-2 rounded-xl bg-[#975a9d] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(130, 2, 199, 0.28)] transition hover:bg-[#6e3b73]">
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
							href="https://x.com/turksat"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<X className="h-4 w-4" /> X
						</Link>
						<Link
							href="https://www.linkedin.com/company/turksat"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-50">
							<Linkedin className="h-4 w-4" /> LinkedIn
						</Link>
						<Link
							href="https://www.youtube.com/@turksat"
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
