import Image from "next/image";
import Link from "next/link";
export default function TrustSection() {
	return (
		<section className="mx-auto w-full max-w-[1480px] px-4 py-16 lg:px-8">
            <div className="mx-auto mb-8 max-w-5xl text-center">
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
                    Designed inside the
                    <span className="block pb-2 bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
						discipline of e-Devlet.
					</span>
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                    Shaped by the operational reality of high-trust public
                    platforms, Motif UI reflects the clarity, consistency, and service
                    discipline expected from large-scale digital ecosystems serving
                    millions of citizens.
                </p>
            </div>

            <div
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfe_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
				<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
					{/* LEFT SIDE */}
					<div className="relative p-8 sm:p-10 lg:p-14 content-center">
						<h2 className="mt-6 max-w-[18ch] text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                            Built for the scale of national digital services.
						</h2>
                        <p className="mt-5 max-w-[64ch] text-base leading-8 text-slate-600 sm:text-[17px]">
                            It all began as a response to a boring but expensive problem:
                            serious products cannot afford perpetual reinvention. In the
                            Turkish e-Government context, that means disciplined forms,
                            stable navigation, predictable states, and a visual system calm
                            enough to handle complexity without becoming bureaucratic
                            sludge.
                        </p>
                        <p className="mt-5 max-w-[64ch] text-base leading-8 text-slate-600 sm:text-[17px]">
                            So this is not just another pile of components. It is a system
                            layer built to help internal tools, service portals, and
                            operational products move faster while speaking the same design
                            language.
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
					</div>
					{/* RIGHT SIDE */}
					<div className="relative border-t border-slate-200 bg-slate-50/70 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
						<div className="space-y-5">
							<div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                                <Link href="https://turksat.com.tr/en" target="_blank" rel="noopener noreferrer">
                                    <div className="flex min-h-[116px] items-center justify-center rounded-2xl bg-slate-50 px-6">
                                        <Image
                                            src="/turksat.png"
                                            alt="Türksat"
                                            width={420}
                                            height={110}
                                            className="h-auto w-auto max-h-[72px] max-w-full object-contain"
                                        />
                                    </div>
                                </Link>
								<div className="mt-5">
									<p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
										Infrastructure reference
									</p>
                                    <Link
                                        href="https://turksat.com.tr/en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="t-2 text-xl font-semibold tracking-[-0.03em] text-slate-900 hover:text-slate-700 transition">
                                        Türksat
                                    </Link>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">
										A strong technology and service backbone associated with
										national-scale digital delivery, operational continuity, and
										institutional reliability.
									</p>
								</div>
							</div>
                            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                                <Link href="https://turkiye.gov.tr" target="_blank" rel="noopener noreferrer">
                                    <div className="flex min-h-[116px] items-center justify-center rounded-2xl bg-slate-50 px-6">
                                        <Image
                                            src="/edevlet-logo.png"
                                            alt="e-Devlet"
                                            width={420}
                                            height={110}
                                            className="h-auto w-auto max-h-[72px] max-w-full object-contain"
                                        />
                                    </div>
                                </Link>
                                <div className="mt-5">
                                    <p className="text-sm mb-2 font-semibold uppercase tracking-[0.16em] text-slate-400">
                                        Service ecosystem reference
                                    </p>

                                    <Link
                                        href="https://turkiye.gov.tr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="t-2 text-xl font-semibold tracking-[-0.03em] text-slate-900 hover:text-slate-700 transition">
                                        e-Devlet Gateway
                                    </Link>

                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                        One of Turkey’s most visible digital public service environments,
                                        representing usability at scale, familiar flows, and trust-sensitive
                                        interaction design.
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
