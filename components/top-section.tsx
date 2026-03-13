import { ChevronsRight, Copy, Github, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HeroVerticalShowcase from "@/components/hero-vertical-showcase";
import HeroOrnaments from "@/components/hero-ornaments";
export default function TopSection() {
	const [activeItem, setActiveItem] = useState("react");
	const [copied, setCopied] = useState(false);

	return (
		<div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pb-18 lg:pt-18">
			<HeroOrnaments />
			<div className="relative">
				<div className="relative z-10">
					<h2 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
						<span className="mt-10 block text-slate-800">
							A production-ready React design system with 50+ components
						</span>
					</h2>

					<p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
						A comprehensive React design system initially designed by the e-Government Application Development Department of TÜRKSAT, now available as an open-source library for public-sector and enterprise projects. Motif UI offers a robust set of customizable and production-ready UI components built under the design system discipline of TÜRKSAT.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link
							href="https://storybook.motif-ui.com"
							className="inline-flex items-center gap-2 rounded-2xl bg-[#975a9d] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_50px_rgba(17,134,201,0.28)] transition hover:bg-[#6e3b73]">
							Explore Storybook <ChevronsRight className="h-4 w-4" />
						</Link>

						<Link
							href="https://github.com/motif-ui/motifreact"
							className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300">
							<Github className="h-4 w-4" />
							View source
						</Link>
					</div>

					<div className="mt-10 flex w-full max-w-xl">
						<button
							onClick={() => {
								navigator.clipboard.writeText("npm i @motif-ui/react");
								setCopied(true);
								setTimeout(() => setCopied(false), 2000);
							}}
							className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-left text-sm font-mono text-slate-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50">
							<span className="text-slate-500">$</span>

							<span className="flex-1">
								{copied ? "Copied!" : "npm i @motif-ui/react"}
							</span>

							{copied ? (
								<Check className="h-4 w-4 text-emerald-500" />
							) : (
								<Copy className="h-4 w-4 text-slate-400" />
							)}
						</button>
					</div>
				</div>
			</div>
			<div className="relative hidden min-[1080px]:block">
				<div className="grid items-center lg:grid-cols-[1fr_520px]">
					<div>{/* sol metin alanı */}</div>
					<div className="lg:row-span-2 lg:col-start-2 lg:row-start-2">
						<HeroVerticalShowcase />
					</div>
				</div>
			</div>
		</div>
	);
}
