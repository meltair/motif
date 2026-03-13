import { Check, PanelTop, Component, SwatchBook, BookOpen } from "lucide-react";
export default function FeaturesSection() {
	const featureItems: string[] = [
		"Internal project foundations",
		"Production-ready UI primitives",
		"Themeable token architecture",
		"Storybook-driven documentation",
	];
	return (
		<div>
			<div className="mx-auto mb-10 max-w-6xl text-center">
				<h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
					Features
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
					Motif UI provides a structured, production-ready foundation for
					building large-scale service interfaces.
				</p>
			</div>
			<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
					<h2 className="mt-4 text-3xl font-black text-slate-950">
						Designed inside the discipline of e-Devlet.
					</h2>
					<p className="mt-4 text-base leading-8 text-slate-600">
						Motif UI began as a practical response to a very real problem:
						product teams building important interfaces need reusable patterns,
						not perpetual reinvention. Inside the Turkish e-Government
						ecosystem, that means disciplined forms, sturdy states, clear
						navigation, and a visual system calm enough to handle complexity
						without descending into bureaucratic sludge.
					</p>
					<p className="mt-4 text-base leading-8 text-slate-600">
						The result is not just another box of components. It is a system
						layer intended to help internal products, service portals and
						operational tools move faster while staying consistent with a shared
						interaction language.
					</p>
					<div className="mt-6 grid gap-3 sm:grid-cols-2">
						{featureItems.map((item) => (
							<div
								key={item}
								className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
								<Check className="h-4 w-4 text-sky-600" /> {item}
							</div>
						))}
					</div>
				</div>
				<div className="grid gap-5 sm:grid-cols-2">
					<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
						<PanelTop className="h-8 w-8 text-sky-700" />
						<h3 className="mt-6 text-xl font-bold text-slate-900">
							Docs-first presentation
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							A clean documentation hierarchy with generous spacing, readable
							examples and obvious next steps for developers exploring the
							system.
						</p>
					</div>
					<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm">
						<Component className="h-8 w-8 text-violet-700" />
						<h3 className="mt-6 text-xl font-bold text-slate-900">
							Interactive component stories
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							Components should feel alive on the page, with real interaction
							states and clear behavior examples rather than static previews.
						</p>
					</div>
					<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm">
						<SwatchBook className="h-8 w-8 text-amber-700" />
						<h3 className="mt-6 text-xl font-bold text-slate-900">
							Token-driven consistency
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							Color, spacing, radius and motion tokens remain centralized,
							preventing the slow chaos that creeps into large front-end
							codebases.
						</p>
					</div>
					<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
						<BookOpen className="h-8 w-8 text-emerald-700" />
						<h3 className="mt-6 text-xl font-bold text-slate-900">
							Grounded in documentation
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							Storybook documentation forms the backbone of the system, while
							this site adds narrative context, usage guidance and real-world
							framing.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
