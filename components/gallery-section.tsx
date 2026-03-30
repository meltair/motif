"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
export interface GalleryItem {
	src: string;
	thumbSrc?: string;
	title: string;
	caption: string;
}
const gallery: GalleryItem[] = [
	{
		src: "/gallery/navigation-surfaces.png",
		thumbSrc: "/gallery/layout.png",
		title: "Navigation surfaces",
		caption:
			"Structured navigation patterns and service-entry layouts used across product flows.",
	},
	{
		src: "/gallery/buttons-and-actions.png",
		thumbSrc: "/gallery/buttons.png",
		title: "Buttons and actions",
		caption:
			"Action hierarchy, semantic states, and button treatments from the Motif UI system.",
	},
	{
		src: "/gallery/date-time-pickers.png",
		thumbSrc: "/gallery/pickers.png",
		title: "Date & time pickers",
		caption:
			"Scheduling and range-selection components designed for data-heavy enterprise interfaces.",
	},
	{
		src: "/gallery/controls-mockup.png",
		thumbSrc: "/gallery/controls.png",
		title: "Controls",
		caption:
			"Checkbox, radio, and switch patterns with state clarity across multiple usage scenarios.",
	},
	{
		src: "/gallery/color-foundations-mockup.png",
		thumbSrc: "/gallery/colors.png",
		title: "Color foundations",
		caption:
			"Core semantic and palette foundations that shape visual consistency across the system.",
	},
	{
		src: "/gallery/form-composition.png",
		thumbSrc: "/gallery/form.png",
		title: "Form composition",
		caption:
			"Enterprise-ready field structures, alerts, validation states, and grouped input patterns.",
	},
];
export default function GallerySection() {
	const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
	return (
		<>
			<section className="relative">
				<div className="mx-auto mb-12 max-w-5xl text-center">
					<h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
						Actual Motif UI visuals, re-framed as product stories
					</h2>
					<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
						A more cinematic gallery for real Motif UI artifacts across forms,
						navigation, controls, tokens, and data-driven component patterns.
					</p>
				</div>
				<div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
					{gallery.map((item, index) => {
						const baseTilt =
							index % 3 === 0
								? "-rotate-[1.25deg]"
								: index % 3 === 1
									? "-rotate-[1deg]"
									: "-rotate-[0.4deg]";

						const hoverTilt =
							index % 3 === 0
								? "group-hover:-rotate-[4deg]"
								: index % 3 === 1
									? "group-hover:-rotate-[4deg]"
									: "group-hover:-rotate-[3deg]";
						return (
							<button
								key={item.title}
								type="button"
								onClick={() => setActiveImage(item)}
								className="group text-left cursor-pointer">
								<div className="relative">
									<div className="pointer-events-none absolute inset-x-10 bottom-2 h-10 rounded-full bg-slate-900/10 blur-2xl opacity-100 transition-all duration-500 group-hover:opacity-0" />
									<div className="relative flex min-h-[260px] items-center justify-center px-4 py-6">
										<div
											className={[
												"relative w-full transform-gpu transition-all duration-500 ease-out",
												"will-change-transform",
												baseTilt,
												hoverTilt,
												"group-hover:scale-[1.3]",
											].join(" ")}>
											<Image
												src={item.thumbSrc || item.src}
												alt={item.title}
												width={1400}
												height={1000}
												className="h-auto w-full object-contain drop-shadow-[0_22px_40px_rgba(15,23,42,0.18)]"
												sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											/>
										</div>
									</div>
								</div>
								<div className="px-1 pt-5">
									<h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 transition group-hover:text-sky-700">
										{item.title}
									</h3>
									<p className="mt-2 max-w-[42ch] text-sm leading-7 text-slate-600">
										{item.caption}
									</p>
								</div>
							</button>
						);
					})}
				</div>
			</section>
			{activeImage && (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-10 backdrop-blur-md"
					onClick={() => setActiveImage(null)}>
					<div
						className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
							<div className="max-w-3xl">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
									Gallery Preview
								</p>
								<h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
									{activeImage.title}
								</h3>
								<p className="mt-2 text-sm leading-7 text-slate-600">
									{activeImage.caption}
								</p>
							</div>
							<button
								type="button"
								onClick={() => setActiveImage(null)}
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
								aria-label="Close preview">
								<X className="h-5 w-5" />
							</button>
						</div>
						<div className="bg-[radial-gradient(circle_at_top,#ffffff_0%,#f4f7fb_55%,#eef2f7_100%)] p-4 sm:p-6 lg:p-8">
							<div className="relative flex items-center justify-center rounded-[24px] px-2 py-4 sm:px-6 sm:py-8">
								<div className="pointer-events-none absolute inset-x-[12%] bottom-5 h-10 rounded-full bg-slate-900/10 blur-3xl" />
								<Image
									src={activeImage.src}
									alt={activeImage.title}
									width={2200}
									height={1500}
									className="relative max-h-[70vh] w-full object-contain drop-shadow-[0_28px_60px_rgba(15,23,42,0.22)]"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
