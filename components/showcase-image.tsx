"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
	{
		id: 1,
		label: "Interactive carousel",
		description:
			"A fully responsive carousel component with smooth transitions, auto-play behavior, and manual navigation controls.",
		gradient: "from-violet-500 via-fuchsia-500 to-purple-700",
	},
	{
		id: 2,
		label: "Theme foundations",
		description:
			"Centralized tokens keep navigation, actions, and semantic states aligned across every product surface.",
		gradient: "from-sky-500 via-cyan-500 to-blue-700",
	},
	{
		id: 3,
		label: "Scalable design system",
		description:
			"Motif UI supports enterprise-grade theming decisions with predictable behavior across large interfaces.",
		gradient: "from-emerald-500 via-teal-500 to-green-700",
	},
	{
		id: 4,
		label: "Built for real products",
		description:
			"Designed for practical product teams that need clean structure, flexibility, and durable visual consistency.",
		gradient: "from-amber-400 via-orange-500 to-red-600",
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

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 4000);

		return () => clearInterval(timer);
	}, []);

	const activeSlide = slides[activeIndex];

	return (
		<div className="mt-20 flex justify-center py-10 px-4">
			<div className="relative w-full max-w-[960px] overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
				<div
					className={`relative flex max-h-[460px] items-end justify-center bg-gradient-to-br ${activeSlide.gradient} px-12 py-16 transition-all duration-700 sm:min-h-[460px]`}>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_45%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.30),rgba(15,23,42,0.06),transparent)]" />

					<button
						onClick={prevSlide}
						className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 backdrop-blur transition hover:bg-white"
						aria-label="Previous slide">
						<ChevronLeft className="h-7 w-7" />
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 backdrop-blur transition hover:bg-white"
						aria-label="Next slide">
						<ChevronRight className="h-7 w-7" />
					</button>

					<div className="relative z-10 max-w-3xl text-center text-white">
						<h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-3xl">
							{activeSlide.label}
						</h3>
						<p className="mx-auto mt-3 max-w-2xl text-md leading-6 text-white/90 sm:text-md">
							{activeSlide.description}
						</p>
					</div>

					<div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
						{slides.map((slide, index) => (
							<button
								key={slide.id}
								onClick={() => setActiveIndex(index)}
								className={[
									"h-2.5 rounded-full transition-all duration-300",
									index === activeIndex
										? "w-2.5 bg-white"
										: "w-2.5 bg-white/45 hover:bg-white/70",
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
