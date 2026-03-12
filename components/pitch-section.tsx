import Link from "next/link";
import {
  ArrowRight,
  Github,
  Sparkles,
  BadgeHelp,
  X,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function PitchSection() {
	return (
		<section className="border-t border-slate-200 bg-[linear-gradient(135deg,#f8f8f8_0%,#f2f2f2_40%,#ffffff_100%)] text-gray-900"> 
			<div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-2">
				<div>

					<h2 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-orange sm:text-5xl">
						Join our <span className="text-orange-400 font-black">Motif UI ecosystem</span>
					</h2>

					<p className="mt-5 max-w-3xl text-lg leading-9 text-gray-900">
						Motif UI is shaped for serious public-sector and enterprise
						products. Explore the documentation, inspect the source, and build
						consistent interfaces without wrestling the same UI problems for the
						900th time.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="https://storybook.motif-ui.com"
							className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(2,132,199,0.28)] transition hover:bg-sky-500">
							Open docs
							<ArrowRight className="h-4 w-4" />
						</Link>

						<Link
							href="https://github.com/motif-ui/motifreact"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white/90 px-5 py-3 text-sm font-bold text-gray-800 transition hover:bg-white/10">
							<Github className="h-4 w-4" />
							View source
						</Link>
					</div>

					<div className="mt-6 flex flex-wrap items-center gap-3">
						<Link
							href="https://github.com/motif-ui"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white/10 px-4 py-2 text-sm font-semibold text-gray transition hover:bg-white/10">
							<Github className="h-4 w-4" />
							GitHub
						</Link>

						<Link
							href="https://twitter.com"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white/10 px-4 py-2 text-sm font-semibold text-gray transition hover:bg-white/10">
							<X className="h-4 w-4" />X
						</Link>

						<Link
							href="https://www.linkedin.com"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white/10 px-4 py-2 text-sm font-semibold text-gray transition hover:bg-white/10">
							<Linkedin className="h-4 w-4" />
							LinkedIn
						</Link>

						<Link
							href="https://www.youtube.com"
							className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-white/10 px-4 py-2 text-sm font-semibold text-gray transition hover:bg-white/10">
							<Youtube className="h-4 w-4" />
							YouTube
						</Link>
					</div>
				</div>

				<div className="lg:pl-2">
					<div className="rounded-2xl border border-gray-500/30 bg-white/5 p-5 backdrop-blur-sm">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-500/30 bg-white-500/10 text-white-400">
								<BadgeHelp className="h-5 w-5" />
							</div>

							<div>
								<h3 className="text-2xl font-bold text-gray-900">
									Does it support real product scale?
								</h3>

								<p className="mt-3 text-lg leading-8 text-white-300">
									Motif UI is designed for admin-heavy interfaces, service
									journeys, dense forms and documentation surfaces. It aims to
									reduce noise, enforce consistency and make product teams move
									faster without duct-taping random components together.
								</p>

								<p className="mt-4 text-base leading-8 text-white-300">
									Follow the{" "}
									<Link
										href="https://github.com/motif-ui/motifreact"
										className="font-semibold text-sky-400 hover:text-sky-300">
										GitHub repository
									</Link>{" "}
									and{" "}
									<Link
										href="https://storybook.motif-ui.com"
										className="font-semibold text-sky-400 hover:text-sky-300">
										Storybook docs
									</Link>{" "}
									for component updates, implementation patterns and usage
									guidance.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
