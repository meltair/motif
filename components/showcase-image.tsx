"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
	{
		id: 1,
		label: "Success",
		description:
			"Base success surfaces define the primary positive state across alerts, badges, messages, and confirmation patterns.",
		background:
			"bg-[linear-gradient(135deg,#eefbf4_0%,#e4f7ed_50%,#daf3e6_100%)]",
		text: "text-[#037C3D]",
		muted: "text-[#037C3D]/80",
		border: "border-[#04AE56]/25",
	},
	{
		id: 2,
		label: "Success Hover",
		description:
			"Hover state strengthens affordance while preserving the semantic calm expected from a successful interaction pattern.",
		background:
			"bg-[linear-gradient(135deg,#ebfaf2_0%,#def6e9_55%,#d3f1e1_100%)]",
		text: "text-[#037C3D]",
		muted: "text-[#037C3D]/80",
		border: "border-[#049E4E]/25",
	},
	{
		id: 3,
		label: "Success Active",
		description:
			"Active state gives stronger visual commitment for pressed or selected success-driven components without breaking consistency.",
		background:
			"bg-[linear-gradient(135deg,#e5f7ec_0%,#d5efdf_52%,#c8e8d5_100%)]",
		text: "text-[#037C3D]",
		muted: "text-[#037C3D]/80",
		border: "border-[#037C3D]/25",
	},
	{
		id: 4,
		label: "Success Disabled",
		description:
			"Disabled success treatment keeps semantic meaning visible while reducing emphasis to match non-interactive system states.",
		background:
			"bg-[linear-gradient(135deg,#f4fbf7_0%,#eef8f2_55%,#e8f4ec_100%)]",
		text: "text-[#005328]",
		muted: "text-[#005328]/80",
		border: "border-[#8CDAB1]/35",
	},
];

export default function ShowcaseCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);

	const prevSlide = () => {
		setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const activeSlide = slides[activeIndex];

	return (
		<div className="mt-20 flex justify-center px-4 py-10">
			<div className="relative w-full max-w-[960px] overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
				<div
					className={`relative flex min-h-[420px] items-center justify-center px-16 py-16 transition-all duration-300 ${activeSlide.background}`}>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_42%)]" />

					<button
						onClick={prevSlide}
						className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
						aria-label="Previous slide">
						<ChevronLeft className="h-6 w-6" />
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
						aria-label="Next slide">
						<ChevronRight className="h-6 w-6" />
					</button>

					<div className="relative z-10 mt-50 w-full max-w-[720px]">
						<h3
							className={`mt-5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl ${activeSlide.text}`}>
							{activeSlide.label}
						</h3>

						<p
							className={`mt-4 max-w-2xl text-base leading-7 sm:text-md ${activeSlide.muted}`}>
							{activeSlide.description}
						</p>
					</div>

					<div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
						{slides.map((slide, index) => (
							<button
								key={slide.id}
								onClick={() => setActiveIndex(index)}
								className={[
									"h-2.5 rounded-full border transition-all duration-200",
									index === activeIndex
										? `w-2.5 border-slate-400 bg-slate-700`
										: "w-2.5 border-slate-300 bg-slate-300 hover:bg-slate-400",
								].join(" ")}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}