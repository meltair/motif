"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
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
type NavItem = [string, string];

export default function Navbar() {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);

	const navItems: NavItem[] = [
        ["Playground", "#playground"],
        ["Features", "#features"],
        ["Design", "#design"],
        ["Themes", "#themes"],
        ["The Story", "#story"],
		["Components", "https://docs.motif-ui.com/?path=/docs/components"],
	];

	return (
		<>
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
					{navItems.map(([label, href]) => {
						const isExternal = href.startsWith("http");

						return (
							<Link
								key={href}
								href={href}
								className={`text-sm font-medium transition hover:text-[#975a9d] ${label==="Components" ? "text-amber-600" : "text-slate-600"}`}
                                {...(isExternal ? {target:"_blank", rel:"noopener noreferrer"}: {})}>
								{label}
							</Link>
						);
					})}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<a
						href="https://docs.motif-ui.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-[14px] bg-[#975a9d] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,134,201,0.26)] transition hover:bg-[#6e3b73]">
						Docs <FileText className="h-4 w-4" />
					</a>
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
						{navItems.map(([label, href]) => {
							const isExternal = href.startsWith("http");

							if (isExternal) {
								return (
									<a
										key={href}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setMobileMenu(false)}
										className="transition hover:text-sky-600">
										{label}
									</a>
								);
							}

							return (
								<Link
									key={href}
									href={href}
									onClick={() => setMobileMenu(false)}
									className="transition hover:text-sky-600">
									{label}
								</Link>
							);
						})}

						<a
							href="https://github.com/motif-ui/motifreact"
							target="_blank"
							rel="noopener noreferrer"
							className="transition hover:text-sky-600">
							GitHub
						</a>

						<a
							href="https://docs.motif-ui.com"
							target="_blank"
							rel="noopener noreferrer"
							className="transition hover:text-sky-600">
							Documentation
						</a>
					</div>
				</div>
			)}
		</>
	);
}
