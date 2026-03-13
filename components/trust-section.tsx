import Image from "next/image";
export default function TrustSection() {
	return (
		<section className="mx-auto w-full max-w-[1480px] px-4 py-20 lg:px-8">
			<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
				<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
					{/* LEFT SIDE */}
					<div className="relative p-8 sm:p-10 lg:p-14">
						<h2 className="mt-6 max-w-[18ch] text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
							Built for the scale of national digital services.
						</h2>
						<p className="mt-5 max-w-[64ch] text-base leading-8 text-slate-600 sm:text-[17px]">
							Motif UI is shaped by the operational reality of high-trust public
							platforms. It reflects the clarity, consistency, and service
							discipline expected from large-scale digital ecosystems serving
							millions of citizens.
						</p>
						{/* STATS */}
						<div className="mt-10 grid gap-4 sm:grid-cols-3">
							<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
								<p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-slate-900">
									Public sector
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-500">
									Designed for service-heavy, institution-grade interfaces.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
								<p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-slate-900">
									Consistency
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-500">
									Reusable patterns reduce friction across complex journeys.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
								<p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-slate-900">
									Citizen trust
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-500">
									Clearer interfaces create confidence in critical interactions.
								</p>
							</div>
						</div>
						{/* MOCKUP */}
						<div className="relative mt-14 w-full overflow-hidden rounded-[28px]">
							<Image
								src="/gallery/edevlet-mockup-platform.png"
								alt="e-Devlet platform mockup"
								width={1800}
								height={900}
								className="h-auto w-full object-contain"
								priority
							/>
						</div>
					</div>
					{/* RIGHT SIDE */}
					<div className="relative border-t border-slate-200 bg-slate-50/70 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
						<div className="space-y-5">
							<div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
								<div className="flex min-h-[116px] items-center justify-center rounded-2xl bg-slate-50 px-6">
									<Image
										src="/turksat.png"
										alt="Türksat"
										width={420}
										height={110}
										className="h-auto w-auto max-h-[72px] max-w-full object-contain"
									/>
								</div>
								<div className="mt-5">
									<p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
										Infrastructure reference
									</p>
									<p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-900">
										Türksat
									</p>
									<p className="mt-2 text-sm leading-7 text-slate-600">
										A strong technology and service backbone associated with
										national-scale digital delivery, operational continuity, and
										institutional reliability.
									</p>
								</div>
							</div>
							<div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
								<div className="flex min-h-[116px] items-center justify-center rounded-2xl bg-slate-50 px-6">
									<Image
										src="/edevlet-logo.png"
										alt="e-Devlet"
										width={420}
										height={110}
										className="h-auto w-auto max-h-[72px] max-w-full object-contain"
									/>
								</div>
								<div className="mt-5">
									<p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
										Service ecosystem reference
									</p>
									<p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-900">
										e-Devlet Gateway
									</p>
									<p className="mt-2 text-sm leading-7 text-slate-600">
										One of Turkey’s most visible digital public service
										environments, representing usability at scale, familiar
										flows, and trust-sensitive interaction design.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
