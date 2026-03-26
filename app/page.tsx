"use client";

import Image from "next/image";
import Link from "next/link";
import DateRangeShowcase from "@/components/date-range";
import HeaderSection from "@/components/header-section";
import InstallSection from "@/components/install-section";
import TrustSection from "@/components/trust-section";
import PitchSection from "@/components/pitch-section";
import GallerySection from "@/components/gallery-section";
import FooterSection from "@/components/footer-section";
import FeaturesSection from "@/components/features-section";
import ComponentsSection from "@/components/components-section";
import TopSection from "@/components/top-section";
import ShowcaseSection from "@/components/showcase-section";
import CompactDesignToCodeSection from "@/components/design-to-code-section";
import MotifComponentMatrixSection from "@/components/theming-matrix-section";
import { useMemo, useState } from "react";
import BackToTop from "@/components/back-to-top";

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
				<HeaderSection />
			</header>
			<section id="top">
				<TopSection />
			</section>
			<section id="playground">
				<MotifComponentMatrixSection />
			</section>
            <section id="features" className="mx-auto max-w-7xl py-10">
                <FeaturesSection />
            </section>
            <section id="design">
                <CompactDesignToCodeSection />
            </section>
            <section id="themes">
                <ShowcaseSection />
            </section>
			{/*
			<section id="gallery" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
				<GallerySection/>
			</section>
			<section id="install" className="mx-auto max-w-8xl px-4 py-8 lg:px-8">
				<InstallSection />
			</section>
			<section
				id="components"
				className="mx-auto max-w-12xl px-4 py-8 lg:px-12">
				<ComponentsSection />
			</section>
		    */}
			
			<section id="story">
				<TrustSection />
			</section>
			<section className="mt-20">
				<PitchSection />
			</section>
			<footer className="border-t border-slate-200/80 bg-white/70">
				<FooterSection />
			</footer>
			<BackToTop />
		</main>
	);
}
