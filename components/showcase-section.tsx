"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
	ArrowRight,
	Bell,
	ChartColumn,
	ChevronRight,
	FolderClosed,
	Grid2x2,
	Heart,
	Home,
	LineChart,
	MessageSquareText,
	Plus,
	Search,
	Settings,
	ShoppingBag,
	User,
} from "lucide-react";

type SidebarItem = {
	id: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
};

const railItems: SidebarItem[] = [
	{ id: "home", label: "Home", icon: Home },
	{ id: "stats", label: "Statistics", icon: ChartColumn },
	{ id: "projects", label: "Projects", icon: FolderClosed },
	{ id: "customers", label: "Customers", icon: ShoppingBag },
	{ id: "polls", label: "Polls", icon: LineChart },
	{ id: "settings", label: "Settings", icon: Settings },
];

const adminMenu: SidebarItem[] = [
	{ id: "home", label: "Home", icon: Home },
	{ id: "stats", label: "Statistics", icon: ChartColumn },
	{ id: "projects", label: "Projects", icon: FolderClosed },
	{ id: "customers", label: "Customers", icon: ShoppingBag },
	{ id: "polls", label: "Polls", icon: LineChart },
	{ id: "settings", label: "Settings", icon: Settings },
];

const semanticColors = [
	{ name: "primary", hex: "#4F46E5" },
	{ name: "secondary", hex: "#EC4899" },
	{ name: "accent", hex: "#14B8A6" },
	{ name: "neutral", hex: "#111827" },
	{ name: "info", hex: "#0EA5E9" },
	{ name: "success", hex: "#10B981" },
	{ name: "warning", hex: "#F59E0B" },
	{ name: "danger", hex: "#EF4444" },
];

const buttonSamples = [
	{ label: "info", className: "bg-sky-600 text-white hover:bg-sky-700" },
	{
		label: "Light",
		className:
			"border border-slate-300 bg-white text-slate-600 hover:bg-slate-50",
	},
	{
		label: "Primary",
		className: "border border-sky-600 bg-white text-sky-600 hover:bg-sky-50",
	},
	{
		label: "Danger",
		className: "border border-red-500 bg-white text-red-600 hover:bg-red-50",
	},
	{
		label: "Success",
		className:
			"border border-emerald-500 bg-white text-emerald-600 hover:bg-emerald-50",
	},
	{
		label: "Warning",
		className: "bg-amber-400 text-black hover:bg-amber-500",
	},
];

export default function ThemeSystemShowcaseSection() {
	const [activeRail, setActiveRail] = useState("home");
	const [activeMenu, setActiveMenu] = useState("people");
	const [activeTop, setActiveTop] = useState("updates");
	const [switchOn, setSwitchOn] = useState(true);
	const [radioValue, setRadioValue] = useState("selected");

	const heroTitle = useMemo(() => {
		if (activeTop === "inbox")
			return "Flexible themes for every service surface";
		if (activeTop === "stats")
			return "Design tokens that scale across products";
		return "Apply your own theming decisions";
	}, [activeTop]);

	return (
		<section className="mx-auto w-full max-w-[1520px] px-4 py-20 lg:px-8">
			<div className="mx-auto mb-10 max-w-5xl text-center">
				<h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
					Build themes that stay consistent everywhere
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
					Motif UI keeps navigation, semantic colors, actions, and control
					states aligned across different products. Same design logic, less
					chaos.
				</p>
			</div>

			<div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
				<div className="grid xl:grid-cols-[360px_minmax(0,1fr)_360px]">
					<aside className="border-b border-slate-200 p-6 xl:border-b-0 xl:border-r">
						<div className="grid grid-cols-[72px_1fr] gap-5">
							<div className="rounded-[24px] bg-slate-50 p-4">
								<div className="flex flex-col items-center gap-5">
									{railItems.map((item) => {
										const Icon = item.icon;
										const active = activeRail === item.id;

										return (
											<button
												key={item.id}
												onClick={() => setActiveRail(item.id)}
												className={[
													"flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-200",
													active
														? "bg-sky-600 text-white shadow-[0_8px_24px_rgba(14,165,233,0.28)]"
														: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
												].join(" ")}
												aria-label={item.label}>
												<Icon className="h-6 w-6" />
											</button>
										);
									})}
								</div>
							</div>

							<div className="rounded-[24px] bg-slate-50 p-6">
								<div className="space-y-6">
									{adminMenu.map((item) => {
										const Icon = item.icon;
										const active = activeMenu === item.id;

										return (
											<button
												key={item.id}
												onClick={() => setActiveMenu(item.id)}
												className={[
													"flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-200",
													active
														? "bg-blue-50 text-blue-600"
														: "text-slate-800 hover:bg-slate-100",
												].join(" ")}>
												<span className="flex items-center gap-3">
													<Icon className="h-5 w-5" />
													<span className="text-[18px] font-medium">
														{item.label}
													</span>
												</span>

												{item.id === "products" && (
													<span className="rounded-xl bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
														50
													</span>
												)}
											</button>
										);
									})}
								</div>
							</div>
						</div>

						<div className="mt-6 rounded-[28px] bg-slate-50 p-6">
							<div className="grid grid-cols-2 gap-3">
								<button className="rounded-xl bg-[#e6f3fa] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-50
								</button>

								<button className="rounded-xl bg-[#b0d9ef] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-100
								</button>

								<button className="rounded-xl bg-[#8ac6e7] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-200
								</button>

								<button className="rounded-xl bg-[#54acdc] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-300
								</button>

								<button className="rounded-xl bg-[#339cd5] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-400
								</button>

								<button className="rounded-xl bg-[#0083cb] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-500
								</button>

								<button className="rounded-xl bg-[#0077b9] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-600
								</button>

								<button className="rounded-xl bg-[#005d90] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-700
								</button>

								<button className="rounded-xl bg-[#004870] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-800
								</button>

								<button className="rounded-xl bg-[#003755] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-900
								</button>
							</div>
						</div>
						<div className="mt-5 rounded-[24px] bg-slate-50 p-5">
							<div className="grid grid-cols-2 gap-4">
								{buttonSamples.map((button) => (
									<button
										key={button.label}
										className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-lg font-semibold transition-transform duration-200 hover:scale-[1.03] ${button.className}`}>
										<Plus className="h-4 w-4" />
										{button.label}
										<ChevronRight className="h-4 w-4" />
									</button>
								))}
							</div>
						</div>
					</aside>

					<div className="border-b border-slate-200 p-6 xl:border-b-0">
						<div className="rounded-[24px] bg-slate-50 p-4">
							<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-28 items-center justify-center rounded-full">
										<Image
											src="/motiflogo.svg"
											alt="Motif UI"
											width={256}
											height={64}
										/>
									</div>
								</div>

								<nav className="flex flex-wrap items-center gap-4 text-[17px] font-medium text-slate-800">
									<button
										onClick={() => setActiveTop("inbox")}
										className={[
											"inline-flex items-center gap-2 rounded-full px-3 py-2 transition",
											activeTop === "inbox"
												? "bg-white shadow-sm"
												: "hover:bg-white/70",
										].join(" ")}>
										<Home className="h-4 w-4" />
										Dashboard
									</button>

									<button
										onClick={() => setActiveTop("updates")}
										className={[
											"inline-flex items-center gap-2 rounded-full px-3 py-2 transition",
											activeTop === "updates"
												? "bg-white shadow-sm"
												: "hover:bg-white/70",
										].join(" ")}>
										Updates
										<span className="rounded-full bg-amber-400 px-3 py-0.5 text-sm font-semibold text-slate-900">
											NEW
										</span>
									</button>

									<button
										onClick={() => setActiveTop("stats")}
										className={[
											"inline-flex items-center gap-2 rounded-full px-3 py-2 transition",
											activeTop === "stats"
												? "bg-white shadow-sm"
												: "hover:bg-white/70",
										].join(" ")}>
										Statistics
										<span className="h-5 w-5 rounded-full bg-sky-500" />
									</button>
								</nav>
							</div>
						</div>

						<div className="px-2 py-4 text-center">
							<br />
							<br />
							<h3 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
								{heroTitle}
							</h3>

							<p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
								Build interfaces that stay coherent while colors, navigation,
								and control states evolve across teams and products.
							</p>

							<div className="mt-8 flex justify-center">
								<Link
									href="https://www.figma.com/"
									target="_blank"
									className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.28)] transition hover:bg-indigo-700 hover:shadow-[0_16px_38px_rgba(79,70,229,0.34)]">
									Explore the Figma library
									<ArrowRight className="h-5 w-5" />
								</Link>
							</div>

							<div className="mt-20 flex justify-center">
								<div className="relative w-full max-w-[1080px] overflow-hidden rounded-[24px]">
									<Image
										src="/showcase/showcase.png"
										alt="Motif UI showcase preview"
										width={1920}
										height={1080}
										className="h-auto w-full object-cover"
										priority
									/>
								</div>
							</div>
						</div>
					</div>

					<aside className="p-6 xl:border-l xl:border-slate-200">
						<div className="rounded-[24px] bg-slate-50 p-6">
							<h4 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
								Semantic colors
							</h4>

							<div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4 xl:grid-cols-2">
								{semanticColors.map((item) => (
									<button key={item.name} className="group text-left">
										<div
											className="h-14 rounded-xl shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-md"
											style={{ backgroundColor: item.hex }}
										/>
										<div className="mt-2">
											<p className="text-base font-medium capitalize text-slate-800">
												{item.name}
											</p>
											<p className="text-sm text-slate-500">{item.hex}</p>
										</div>
									</button>
								))}
							</div>
						</div>
						<div className="mt-5 rounded-[24px] bg-slate-50 p-5">
							<div className="space-y-4">
								{[
									{ id: "default", label: "Radio Label", state: "default" },
									{ id: "hover", label: "Radio Hover", state: "hover" },
									{ id: "focus", label: "Radio Focus", state: "focus" },
									{ id: "error", label: "Radio Error", state: "error" },
									{
										id: "disabled",
										label: "Radio Disabled",
										state: "disabled",
									},
									{
										id: "selected",
										label: "Radio Selected",
										state: "selected",
									},
								].map((item) => {
									const selected = radioValue === item.id;

									return (
										<button
											key={item.id}
											disabled={item.state === "disabled"}
											onClick={() =>
												item.state !== "disabled" && setRadioValue(item.id)
											}
											className="flex items-start gap-4 text-left disabled:cursor-not-allowed">
											<span
												className={[
													"mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 transition",
													item.state === "hover"
														? "border-slate-500 bg-white"
														: item.state === "error"
															? "border-red-500"
															: item.state === "focus"
																? "border-sky-500"
																: item.state === "disabled"
																	? "border-slate-200"
																	: item.state === "selected" || selected
																		? "border-blue-600 bg-blue-600"
																		: "border-slate-300 bg-white",
												].join(" ")}>
												{(item.state === "selected" || selected) && (
													<span className="h-7 w-7 rounded-full bg-blue-600" />
												)}
											</span>

											<span>
												<p
													className={[
														"text-lg font-medium",
														item.state === "disabled"
															? "text-slate-400"
															: "text-slate-800",
														item.state === "error" ? "text-red-600" : "",
													].join(" ")}>
													{item.label}
												</p>
												<p
													className={[
														"text-base",
														item.state === "error"
															? "text-red-500"
															: "text-slate-400",
													].join(" ")}>
													Helper Text
												</p>
											</span>
										</button>
									);
								})}
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
