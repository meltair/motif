"use client";

import {
	ArrowRight,
	BookOpen,
	Check,
	Component,
	Layers3,
	PanelTop,
	Sparkles,
	SwatchBook,
	WandSparkles,
    Puzzle,
    FileText,
    TypeOutline,
} from "lucide-react";

export default function FeaturesSection() {
	const highlights: string[] = [
		"Figma as the source of truth",
		"Design tokens",
		"Style Dictionary to convert",
		"CSS modules",
	];

	const featureCards = [
		{
			icon: FileText,
			title: "Docs that feel alive",
			description:
				"Storybook-driven, readable structure, clearer hierarchy, and component guidance that helps people move instead of trapping them in dead-end documentation.",
			tone: "from-sky-100 via-white to-cyan-50 text-sky-700 border-sky-200/70",
		},
		{
			icon: TypeOutline,
			title: "Type safe",
			description:
				"Types are there for us to stay consistent, and for you to develop easily. Typescript is what only used in Motif UI.",
			tone: "from-violet-100 via-white to-fuchsia-50 text-violet-700 border-violet-200/70",
		},
		{
			icon: Component,
			title: "Tokens with discipline",
			description:
				"Color, spacing, motion, and radius stay centralized so the system scales without quietly turning into front-end sludge.",
			tone: "from-amber-100 via-white to-orange-50 text-amber-700 border-amber-200/70",
		},
		{
			icon: Puzzle,
			title: "All in one components",
			description:
				"Components like Table and Form provide built-in features commonly found in third-party libs, avoiding the need for extra dependencies.",
			tone: "from-emerald-100 via-white to-teal-50 text-emerald-700 border-emerald-200/70",
		},
	];

	return (
		<section className="relative ">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-4xl text-center">
                    <h2 className="mt-12 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
						Features that actually
						<span className="block bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
							pull people deeper in
						</span>
					</h2>

					<p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
						Motif UI is built to make large-scale product systems feel clearer,
						faster, and more controlled. Less filler, less drift, less
						reinventing obvious things badly.
					</p>
				</div>

				<div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
					<div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_24%)]" />
						<div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-500/20 blur-3xl" />
						<div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/20 blur-3xl" />

						<div className="relative">
							<div className="flex flex-wrap items-center gap-3">
							</div>

                            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                                Styling at its best.
                            </h3>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                                Motif UI approaches styling with a design-first mindset. Styles are defined
                                through design tokens and structured conventions like BEM, then translated
                                into scalable foundations using rem units and SCSS. This ensures clarity,
                                consistency, and a shared language across the system.
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                                With CSS Modules, styles stay modular yet aligned with a single source of
                                truth, enabling flexible customization while preserving consistency.
                            </p>

							<div className="mt-8 grid gap-3 sm:grid-cols-2">
								{highlights.map((item) => (
									<div
										key={item}
										className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/90 backdrop-blur-sm">
										<span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/15">
											<Check className="h-4 w-4 text-sky-300" />
										</span>
										{item}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
						{featureCards.map((card, index) => {
							const Icon = card.icon;

							return (
								<div
									key={card.title}
									className={[
										"group relative overflow-hidden rounded-[30px] border bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]",
										card.tone,
										index % 2 === 0 ? "sm:translate-y-3" : "sm:-translate-y-0",
									].join(" ")}>
									<div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-current/10 blur-2xl transition duration-500 group-hover:scale-125" />

									<div className="relative">
										<div className="flex items-start justify-between gap-4">
											<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-current/10 bg-white/70 shadow-sm">
												<Icon className="h-6 w-6" />
											</div>
										</div>

										<h4 className="mt-6 text-xl font-bold tracking-[-0.03em] text-slate-950">
											{card.title}
										</h4>

										<p className="mt-3 text-sm leading-7 text-slate-600">
											{card.description}
										</p>

									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
