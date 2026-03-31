"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
	ArrowRight,
} from "lucide-react";
import ShowcaseImage from "./showcase-image";
import {Button, Checkbox, Form, InputText, MenuList, NavBar, Radio} from "@motif-ui/react";

const semanticColors = [
	{ name: "primary", hex: "#0083CB" },
	{ name: "secondary", hex: "#88929B" },
	{ name: "info", hex: "#3684D1" },
	{ name: "success", hex: "#04AE56" },
	{ name: "warning", hex: "#FFC800" },
	{ name: "danger", hex: "#D00000" },
];

const buttonSamples = [
    { label: "primary", icon: "grade" },
    { label: "secondary" },
    { label: "success", icon: "check" },
    { label: "danger" },
	{ label: "warning" },
	{ label: "info", icon: "info_outline" },
];

type Variant = "primary" | "secondary" | "info" | "success" | "warning" | "danger" | undefined;

export default function ThemeSystemShowcaseSection() {
	const [activeTop, setActiveTop] = useState("updates");

	const heroTitle = useMemo(() => {
		if (activeTop === "inbox")
			return "Flexible themes for every service surface";
		if (activeTop === "stats")
			return "Design tokens that scale across products";
		return "Apply your own theming decisions";
	}, [activeTop]);

	return (
		<section className="mx-auto w-full max-w-[1520px] px-4 py-16 lg:px-8">
			<div className="mx-auto mb-10 max-w-5xl text-center">
				<h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
					Themes that stay
					<span className="block pb-2 bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
						consistent everywhere
					</span>
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
					Motif UI keeps navigation, semantic colors, actions, and control
					states aligned across different products. Same design logic, less
					chaos.
				</p>
			</div>

			<div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
				<div className="grid xl:grid-cols-[360px_minmax(0,1fr)_360px]">
					<aside className="border-b border-slate-200 p-6 xl:border-b-0 xl:border-r">
						<div className="grid grid-cols-[72px_1fr] gap-5">
                            <MenuList collapsed items={[
                                { label: "Home", icon: "home"},
                                { label: "Statistics", icon: "finance"},
                                { label: "Projects", icon: "folder"},
                                { label: "Customers", icon: "group"},
                                { label: "Polls", icon: "bar_chart"},
                                { label: "Settings", icon: "settings"},
                            ]} />
                            <MenuList darkMode items={[
                                { label: "Home", icon: "home"},
                                { label: "Statistics", icon: "finance"},
                                { label: "Projects", icon: "folder"},
                                { label: "Customers", icon: "group"},
                                { label: "Polls", icon: "bar_chart"},
                                { label: "Settings", icon: "settings"},
                            ]} />
						</div>

						<div className="mt-6 rounded-[12px] bg-slate-50 p-6">
							<div className="grid grid-cols-2 gap-3">
								<button className="rounded-sm bg-[#e6f3fa] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-50
								</button>

								<button className="rounded-sm bg-[#b0d9ef] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-100
								</button>

								<button className="rounded-sm bg-[#8ac6e7] py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition">
									primary-200
								</button>

								<button className="rounded-sm bg-[#54acdc] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-300
								</button>

								<button className="rounded-sm bg-[#339cd5] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-400
								</button>

								<button className="rounded-sm bg-[#0083cb] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-500
								</button>

								<button className="rounded-sm bg-[#0077b9] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-600
								</button>

								<button className="rounded-sm bg-[#005d90] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-700
								</button>

								<button className="rounded-sm bg-[#004870] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-800
								</button>

								<button className="rounded-sm bg-[#003755] py-3 text-sm font-semibold text-white hover:scale-[1.02] transition">
									primary-900
								</button>
							</div>
						</div>
						<div className="mt-5 rounded-[12px] bg-slate-50 p-5">
							<div className="grid grid-cols-2 gap-4">
								{buttonSamples.map((button) => (
									<Button
										key={button.label}
                                        label={button.label}
                                        icon={button.icon}
                                        shape="outline"
                                        pill
                                        variant={button.label as Variant}/>
								))}
							</div>
						</div>
					</aside>

					<div className="border-b border-slate-200 xl:border-b-0">
                        <div className="p-4">
                            <NavBar
                                variant="neutral"
                                logo={{
                                    alt: "Motif UI Logo",
                                    imgPath: "https://cdn.jsdelivr.net/gh/motif-ui/assets@master/images/motifui-logo.svg"
                                }}
                                mainMenu={{
                                    items: [
                                        { label: "Home", icon: "home" },
                                        { label: "Contact", icon: "mail" },
                                    ]
                                }}
                                search={{
                                    pill: true,
                                    placeholder: "Search...",
                                    onSubmit: () => {}
                                }}
                            />
                        </div>

						<div className="py-4 text-center">
							<br />
							<br />
							<h3 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
								{heroTitle}
							</h3>

							<p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-slate-600">
								Build interfaces that stay coherent while colors, navigation,
								and control states evolve across teams and products.
							</p>

							<div className="mt-8 flex justify-center">
								<Link
									href="https://docs.motif-ui.com/?path=/docs/design-themes--docs"
									className="inline-flex items-center gap-2 rounded-md bg-[#975a9d] px-8 py-4 text-lg font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.28)] transition hover:bg-[#6e3b73] hover:shadow-[0_16px_38px_rgba(79,70,229,0.34)]">
									Explore themes
									<ArrowRight className="h-5 w-5" />
								</Link>
							</div>

							<ShowcaseImage />
						</div>
					</div>

					<aside className="p-6 xl:border-l xl:border-slate-200">
						<div className="rounded-[12px] bg-slate-50 p-6">
							<h4 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
								Semantic colors
							</h4>

							<div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4 xl:grid-cols-2">
								{semanticColors.map((item) => (
									<button key={item.name} className="group text-left">
										<div
											className="h-14 rounded-md shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-md"
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
						<div className="mt-5 rounded-[12px] bg-slate-50 p-5">
                            <Form onSubmit={() => {}} submitButtonLabel="" className="-mb-8">
                                <Form.Field name="cb1"  helperText="Checkbox Helper Text">
                                    <Checkbox label="Checkbox Label" />
                                </Form.Field>
                                <Form.Field name="cb2"  helperText="Checkbox Disabled Helper" disabled >
                                    <Checkbox label="Checkbox Disabled" />
                                </Form.Field>
                                <Form.Field name="cb2"  helperText="Checkbox Error Helper" className="mtf-FormField--error">
                                    <Checkbox label="Checkbox Error" className="mtf-Checkbox--error" />
                                </Form.Field>
                                <Form.Field name="cb2"  helperText="Checkbox Selected Helper" >
                                    <Checkbox label="Checkbox Selected" checked />
                                </Form.Field>
                                <Form.Field name="cb2"  helperText="Checkbox Success Helper" success >
                                    <Checkbox label="Checkbox Success" checked />
                                </Form.Field>
                            </Form>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
