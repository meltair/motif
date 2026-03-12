"use client";

import Image from "next/image";
import Link from "next/link";
import DateRangeShowcase from "@/components/date-range";
import InstallSection from "@/components/install-section";
import TrustSection from "@/components/trust-section";
import PitchSection from "@/components/pitch-section";
import GallerySection from "@/components/gallery-section";
import ComponentsSection from "@/components/components-section";
import TopSection from "@/components/top-section";
import ShowcaseSection from "@/components/showcase-section";
import CompactDesignToCodeSection from "@/components/design-to-code-section";
import MotifComponentMatrixSection from "@/components/theming-matrix-section";
import { useMemo, useState } from "react";
import {
	ArrowRight,
	BookOpen,
	Boxes,
	Building2,
	CalendarRange,
	Check,
	ChevronRight,
	ChevronDown,
	ChevronsRight,
	Code2,
	Component,
	Copy,
	FileText,
	Github,
	Home,
	Layers3,
	Menu,
	MoonStar,
	MousePointerClick,
	Palette,
	PanelRightClose,
	PanelTop,
	Play,
	ShieldCheck,
	SlidersHorizontal,
	Sparkles,
	SwatchBook,
	TerminalSquare,
	User,
	Workflow,
} from "lucide-react";

type TabKey = "forms" | "feedback" | "navigation" | "data";

const componentGroups: Record<
	TabKey,
	{ title: string; items: string[]; blurb: string }
> = {
	forms: {
		title: "Forms & input systems",
		blurb:
			"From text inputs to date range pickers, the form layer is where public service UX either becomes elegant or turns into bureaucratic soup.",
		items: [
			"Text Input",
			"Password Input",
			"Textarea",
			"Select",
			"Dropdown",
			"Date Input",
			"DateRange Picker",
			"DateTime Picker",
			"Upload Input",
			"Pin Code",
			"Slider",
			"Switch",
			"Radio",
			"Check",
		],
	},
	feedback: {
		title: "Feedback & system state",
		blurb:
			"Status, motion, confirmation and calm error handling. Because a citizen-facing product should never feel like a cryptic terminal from 1998.",
		items: [
			"Alert",
			"Toast",
			"Progress",
			"Skeleton",
			"Result",
			"Empty",
			"Tooltip",
			"Popover",
			"Modal",
			"Panel",
			"Timeline",
			"Stepper",
		],
	},
	navigation: {
		title: "Navigation & structure",
		blurb:
			"Large-scale government products live or die by navigational clarity. This set keeps the information architecture disciplined and readable.",
		items: [
			"Navbar",
			"Breadcrumb",
			"MenuList",
			"Pagination",
			"Tab",
			"Accordion",
			"Treeview",
			"Link",
			"Divider",
			"Button Group",
			"Icon Button",
		],
	},
	data: {
		title: "Data display & content blocks",
		blurb:
			"Rich display components tuned for dashboards, service directories, internal admin tools and design system documentation.",
		items: [
			"Card",
			"Business Card",
			"Badge",
			"Avatar",
			"Image",
			"Carousel",
			"Listview",
			"Table",
			"DataView",
			"Grid",
			"Chips",
			"Editor",
			"Icons",
		],
	},
};

const galleryItems = [
	{
		src: "/gallery/motif-1.png",
		title: "Navigation surfaces",
		caption: "Real Motif UI navigation patterns used across product flows.",
	},
	{
		src: "/gallery/motif-9.png",
		title: "Buttons and actions",
		caption: "Action hierarchy and button treatments from the design system.",
	},
	{
		src: "/gallery/motif-10.png",
		title: "Date & Time Pickers",
		caption:
			"Flexible selection components for dates, time values, and ranges,designed for scheduling flows and data-driven interfaces.",
	},
	{
		src: "/gallery/motif-5.png",
		title: "Controls",
		caption: "Selection patterns with helper text and visual state feedback.",
	},
	{
		src: "/gallery/motif-4.png",
		title: "Color foundations",
		caption: "Core semantic and palette decisions behind the system.",
	},
	{
		src: "/gallery/motif-3.png",
		title: "Form composition",
		caption: "Structured field groupings and enterprise-ready layouts.",
	},
];

const statCards = [
	{ value: "50+", label: "Production-oriented components" },
	{ value: "TS", label: "Typed from edge to edge" },
	{ value: "ESM + CJS", label: "Dual package output" },
];

const installCode = `npm i @motif-ui/react @fontsource/inter

import { MotifProvider } from "@motif-ui/react";
import "@motif-ui/react/themes/default-theme.css";

export default function App() {
  return (
    <MotifProvider>
      <YourApplication />
    </MotifProvider>
  );
}`;

const usageCode = `import { Button } from "@motif-ui/react";

export const MyComponent = () => {
  return (
    <Button variant="primary">
      My Fancy Button
    </Button>
  );
};`;

const devCode = `git clone https://github.com/motif-ui/motifreact
cd motifreact
npm install
npm run dev
npm run storybook
npm run build:lib`;

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Page() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [tab, setTab] = useState<TabKey>("forms");
	const [notifications, setNotifications] = useState(true);
	const [compactMode, setCompactMode] = useState(false);
	const [rangeStart, setRangeStart] = useState("2026-03-10");
	const [rangeEnd, setRangeEnd] = useState("2026-03-22");
	const [density, setDensity] = useState(38);
	const [progress] = useState(72);
	const [username, setUsername] = useState("edevlet.operator");
	const [password, setPassword] = useState("MotifUI-2026");
	const [serviceTier, setServiceTier] = useState("Kamu Projesi");

	const activeGroup = componentGroups[tab];

	const derivedTone = useMemo(() => {
		if (!notifications && compactMode) return "Strict state";
		if (notifications && compactMode) return "High-density ops";
		if (notifications && !compactMode) return "Balanced default";
		return "Quiet mode";
	}, [notifications, compactMode]);

	return (
		<main className="min-h-screen text-slate-900">
			<header className="sticky top-0 z-50 border-b border-slate-200/70 glass">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
					<Link href="#top" className="flex items-center gap-3">
						<Image
							src="/motiflogo.svg"
							alt="Motif UI logo"
							width={164}
							height={46}
							priority
						/>
					</Link>

					<nav className="hidden items-center gap-6 lg:flex">
						{[
							["Features", "#features"],
							["Playground", "#playground"],
							["Design to Code", "#design-to-code"],
							["Showcase", "#showcase"],
							["Gallery", "#gallery"],
							["Install", "#install"],
							["Components", "#components"],
						].map(([label, href]) => (
							<Link
								key={href}
								href={href}
								className="text-sm font-medium text-slate-600 transition hover:text-sky-600">
								{label}
							</Link>
						))}
					</nav>

					<div className="hidden items-center gap-3 lg:flex">
						<Link
							href="https://storybook.motif-ui.com"
							className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,134,201,0.26)] transition hover:bg-sky-700">
							Documentation <ArrowRight className="h-4 w-4" />
						</Link>
					</div>

					<button
						onClick={() => setMobileMenu((v) => !v)}
						className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
						aria-label="Toggle menu">
						{mobileMenu ? (
							<PanelRightClose className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</button>
				</div>

				{mobileMenu && (
					<div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
						<div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
							{[
								["Features", "#features"],
								["Playground", "#playground"],
								["Design to Code", "#design-to-code"],
								["Showcase", "#showcase"],
								["Gallery", "#gallery"],
								["Install", "#install"],
								["Components", "#components"],
							].map(([label, href]) => (
								<Link
									key={href}
									href={href}
									onClick={() => setMobileMenu(false)}>
									{label}
								</Link>
							))}
							<Link href="https://github.com/motif-ui/motifreact">GitHub</Link>
							<Link href="https://storybook.motif-ui.com">Documentation</Link>
						</div>
					</div>
				)}
			</header>

			<section id="top">
				<TopSection />
			</section>

			<section
				id="features"
				className="mt-20 mx-auto max-w-7xl px-4 py-14 lg:px-8">
				<div className="mx-auto mb-10 max-w-5xl text-center">
					<h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
						Features
					</h2>
					<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
						PrimeReact is the most complete solution for your UI requirements.
					</p>
				</div>
				<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm">
						<h2 className="mt-4 text-3xl font-black text-slate-950">
							Designed inside the discipline of e-Devlet.
						</h2>
						<p className="mt-4 text-base leading-8 text-slate-600">
							Motif UI began as a practical response to a very real problem:
							product teams building important interfaces need reusable
							patterns, not perpetual reinvention. Inside the Turkish
							e-Government ecosystem, that means disciplined forms, sturdy
							states, clear navigation, and a visual system calm enough to
							handle complexity without descending into bureaucratic sludge.
						</p>
						<p className="mt-4 text-base leading-8 text-slate-600">
							The result is not just another box of components. It is a system
							layer intended to help internal products, service portals and
							operational tools move faster while staying consistent with a
							shared interaction language.
						</p>
						<div className="mt-6 grid gap-3 sm:grid-cols-2">
							{[
								"Internal project foundations",
								"Production-ready UI primitives",
								"Themeable token architecture",
								"Storybook-driven documentation",
							].map((item) => (
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
								A clean, MUI-inspired information hierarchy with large breathing
								room, compact code moments and obvious next steps for
								developers.
							</p>
						</div>
						<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm">
							<Component className="h-8 w-8 text-violet-700" />
							<h3 className="mt-6 text-xl font-bold text-slate-900">
								Interactive component stories
							</h3>
							<p className="mt-3 text-sm leading-7 text-slate-600">
								Inspired by Reshaped and HeroUI style demos, components should
								feel alive on the page rather than sitting there like laminated
								museum potatoes.
							</p>
						</div>
						<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm">
							<SwatchBook className="h-8 w-8 text-amber-700" />
							<h3 className="mt-6 text-xl font-bold text-slate-900">
								Token-driven consistency
							</h3>
							<p className="mt-3 text-sm leading-7 text-slate-600">
								Palette, spacing, radius and motion choices stay centralized,
								reducing the delightful little chaos goblins that usually infest
								large front-end projects.
							</p>
						</div>
						<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
							<BookOpen className="h-8 w-8 text-emerald-700" />
							<h3 className="mt-6 text-xl font-bold text-slate-900">
								Grounded in documentation
							</h3>
							<p className="mt-3 text-sm leading-7 text-slate-600">
								The library already has Storybook documentation; this site
								amplifies that with narrative sections, use-case framing and
								credibility anchors.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="playground">
				<MotifComponentMatrixSection />
			</section>

			<section id="design-to-code">
				<CompactDesignToCodeSection />
			</section>

			<section id="showcase">
				<ShowcaseSection />
			</section>
			{/* 						
			<section id="gallery" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
				<GallerySection gallery={galleryItems} />
			</section>
			*/}		
			<section id="install" className="mx-auto max-w-8xl px-4 py-8 lg:px-8">
				<InstallSection />
			</section>

			<section
				id="components"
				className="mx-auto max-w-12xl px-4 py-8 lg:px-12">
				<ComponentsSection />
			</section>

			<section className="mt-20">
				<PitchSection />
			</section>
			{/* 
			<section className="mt-20">
				<TrustSection />
			</section>
 			*/}
			<footer className="border-t border-slate-200/80 bg-white/70">
				<div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
					<div>
						<div className="flex items-center gap-3">
							<Image
								src="/motiflogo.svg"
								alt="Motif UI logo"
								width={132}
								height={38}
							/>
						</div>
						<p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
							Copyright © 2026 Motif UI, TÜRKSAT.
						</p>
					</div>
					<div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
						<Link href="https://github.com/motif-ui/motifreact">GitHub</Link>
						<Link href="https://storybook.motif-ui.com">Storybook</Link>
						<Link href="#top">Back to top</Link>
					</div>
				</div>
			</footer>
		</main>
	);
}
