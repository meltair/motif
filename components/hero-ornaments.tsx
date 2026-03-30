"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const motifPalette = {
	red: "#e54238",
	orange: "#f59224",
	purple: "#a155a2",
	deepPurple: "#5d2a86",
	cyan: "#57c7d9",
	cyanSoft: "#7fd7e2",
	navy: "#4e5e8f",
	navyDark: "#3b466f",
	violetSoft: "#b57dc0",
};

type PieceVariant =
	| "diamond"
	| "triangleTop"
	| "triangleBottom"
	| "leftWing"
	| "rightWing"
	| "smallDiamond";

type Ornament = {
	id: number;
	variant: PieceVariant;
	fill: "solid" | "gradient";
	color?: string;
	gradientFrom?: string;
	gradientTo?: string;
	size: number;
	left: string;
	top: string;
	duration: number;
	driftX: number;
	driftY: number;
	rotate: number;
	opacity?: number;
};

const orangeOrnaments = Array.from({ length: 6 }).map((_, i) => ({
	id: 100 + i,
	variant: ["diamond", "triangleTop", "triangleBottom"][i % 3] as PieceVariant,
	fill: "solid" as const,
	color: motifPalette.orange,
	size: 50 + Math.random() * 40,
	left: `${Math.random() * 70}%`,
	top: `${Math.random() * 80}%`,
	duration: 6 + Math.random() * 6,
	driftX: (Math.random() - 0.5) * 30,
	driftY: (Math.random() - 0.5) * 30,
	rotate: (Math.random() - 0.5) * 20,
	opacity: 0.2,
}));

const ornaments: Ornament[] = [
	{
		id: 1,
		variant: "diamond",
		fill: "solid",
		color: motifPalette.purple,
		size: 70,
		left: "2%",
		top: "4%",
		duration: 10,
		driftX: 18,
		driftY: 34,
		rotate: 14,
		opacity: 0.22,
	},
	{
		id: 2,
		variant: "triangleTop",
		fill: "solid",
		color: motifPalette.orange,
		size: 86,
		left: "8%",
		top: "16%",
		duration: 8,
		driftX: 26,
		driftY: -18,
		rotate: -10,
		opacity: 0.2,
	},
	{
		id: 3,
		variant: "leftWing",
		fill: "solid",
		color: motifPalette.red,
		size: 140,
		left: "1%",
		top: "28%",
		duration: 12,
		driftX: 22,
		driftY: 30,
		rotate: 10,
		opacity: 0.16,
	},
	{
		id: 4,
		variant: "rightWing",
		fill: "solid",
		color: motifPalette.purple,
		size: 130,
		left: "18%",
		top: "44%",
		duration: 9,
		driftX: -16,
		driftY: 26,
		rotate: -12,
		opacity: 0.18,
	},
	{
		id: 5,
		variant: "triangleBottom",
		fill: "solid",
		color: motifPalette.red,
		size: 96,
		left: "34%",
		top: "8%",
		duration: 11,
		driftX: 18,
		driftY: 24,
		rotate: 12,
		opacity: 0.2,
	},
	{
		id: 6,
		variant: "diamond",
		fill: "solid",
		color: motifPalette.purple,
		size: 110,
		left: "42%",
		top: "22%",
		duration: 13,
		driftX: -22,
		driftY: 26,
		rotate: 18,
		opacity: 0.16,
	},

	{
		id: 7,
		variant: "leftWing",
		fill: "gradient",
		gradientFrom: motifPalette.cyan,
		gradientTo: motifPalette.navy,
		size: 150,
		left: "42%",
		top: "60%",
		duration: 12,
		driftX: 20,
		driftY: -18,
		rotate: -14,
		opacity: 0.22,
	},
	{
		id: 8,
		variant: "rightWing",
		fill: "gradient",
		gradientFrom: motifPalette.violetSoft,
		gradientTo: motifPalette.deepPurple,
		size: 150,
		left: "58%",
		top: "12%",
		duration: 11,
		driftX: -18,
		driftY: 24,
		rotate: 16,
		opacity: 0.22,
	},
	{
		id: 9,
		variant: "diamond",
		fill: "gradient",
		gradientFrom: motifPalette.violetSoft,
		gradientTo: motifPalette.deepPurple,
		size: 78,
		left: "26%",
		top: "10%",
		duration: 7,
		driftX: 10,
		driftY: 20,
		rotate: 10,
		opacity: 0.24,
	},
	{
		id: 10,
		variant: "diamond",
		fill: "gradient",
		gradientFrom: motifPalette.cyanSoft,
		gradientTo: motifPalette.cyan,
		size: 86,
		left: "48%",
		top: "54%",
		duration: 8,
		driftX: -12,
		driftY: 18,
		rotate: -8,
		opacity: 0.22,
	},
	{
		id: 11,
		variant: "smallDiamond",
		fill: "gradient",
		gradientFrom: motifPalette.violetSoft,
		gradientTo: motifPalette.deepPurple,
		size: 62,
		left: "62%",
		top: "26%",
		duration: 7,
		driftX: 12,
		driftY: 14,
		rotate: 14,
		opacity: 0.24,
	},
	{
		id: 12,
		variant: "triangleTop",
		fill: "gradient",
		gradientFrom: motifPalette.cyanSoft,
		gradientTo: motifPalette.cyan,
		size: 84,
		left: "64%",
		top: "46%",
		duration: 9,
		driftX: -14,
		driftY: 18,
		rotate: -12,
		opacity: 0.2,
	},
	{
		id: 13,
		variant: "triangleBottom",
		fill: "gradient",
		gradientFrom: motifPalette.violetSoft,
		gradientTo: motifPalette.deepPurple,
		size: 92,
		left: "66%",
		top: "62%",
		duration: 10,
		driftX: 16,
		driftY: -20,
		rotate: 12,
		opacity: 0.2,
	},
	{
		id: 14,
		variant: "leftWing",
		fill: "gradient",
		gradientFrom: motifPalette.navyDark,
		gradientTo: motifPalette.navy,
		size: 124,
		left: "33%",
		top: "55%",
		duration: 10,
		driftX: 15,
		driftY: 22,
		rotate: 10,
		opacity: 0.18,
	},
	{
		id: 15,
		variant: "rightWing",
		fill: "gradient",
		gradientFrom: motifPalette.cyan,
		gradientTo: motifPalette.violetSoft,
		size: 120,
		left: "8%",
		top: "78%",
		duration: 11,
		driftX: 18,
		driftY: -16,
		rotate: -14,
		opacity: 0.18,
	},
	{
		id: 16,
		variant: "smallDiamond",
		fill: "solid",
		color: motifPalette.orange,
		size: 56,
		left: "54%",
		top: "6%",
		duration: 6,
		driftX: 8,
		driftY: 12,
		rotate: 10,
		opacity: 0.24,
	},
	{
		id: 17,
		variant: "diamond",
		fill: "solid",
		color: motifPalette.cyan,
		size: 68,
		left: "20%",
		top: "74%",
		duration: 7,
		driftX: -10,
		driftY: 16,
		rotate: -10,
		opacity: 0.22,
	},
	{
		id: 18,
		variant: "triangleTop",
		fill: "solid",
		color: motifPalette.deepPurple,
		size: 74,
		left: "44%",
		top: "76%",
		duration: 8,
		driftX: 12,
		driftY: -14,
		rotate: 12,
		opacity: 0.18,
	},
	{
		id: 19,
		variant: "triangleTop",
		fill: "solid",
		color: motifPalette.orange,
		size: 70,
		left: "12%",
		top: "72%",
		duration: 9,
		driftX: 18,
		driftY: 22,
		rotate: 14,
		opacity: 0.22,
	},

	{
		id: 20,
		variant: "diamond",
		fill: "solid",
		color: motifPalette.orange,
		size: 60,
		left: "40%",
		top: "70%",
		duration: 7,
		driftX: -14,
		driftY: 18,
		rotate: -8,
		opacity: 0.2,
	},

	{
		id: 21,
		variant: "triangleBottom",
		fill: "solid",
		color: motifPalette.orange,
		size: 80,
		left: "55%",
		top: "30%",
		duration: 8,
		driftX: 16,
		driftY: -14,
		rotate: 10,
		opacity: 0.2,
	},

	{
		id: 22,
		variant: "smallDiamond",
		fill: "solid",
		color: motifPalette.orange,
		size: 50,
		left: "68%",
		top: "10%",
		duration: 6,
		driftX: 10,
		driftY: 12,
		rotate: 12,
		opacity: 0.24,
	},
	{
		id: 23,
		variant: "leftWing",
		fill: "solid",
		color: motifPalette.orange,
		size: 160,
		left: "6%",
		top: "50%",
		duration: 12,
		driftX: 20,
		driftY: 26,
		rotate: -14,
		opacity: 0.16,
	},
	{
		id: 24,
		variant: "rightWing",
		fill: "solid",
		color: motifPalette.orange,
		size: 120,
		left: "8%",
		top: "8%",
		duration: 11,
		driftX: 18,
		driftY: -16,
		rotate: -14,
		opacity: 0.18,
	},

	...orangeOrnaments,
];
export default function HeroMotifOrnaments({
	className = "",
}: {
	className?: string;
}) {
	const isMobileStatic = useMediaQuery("(max-width: 899px)");
	return (
		<div
			className={`hidden min-[1080px]:block pointer-events-none absolute left-[-4%] top-[-10%] bottom-[-10%] right-[26%] overflow-hidden ${className}`}>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(229,66,56,0.10),transparent_24%),radial-gradient(circle_at_40%_22%,rgba(245,146,36,0.10),transparent_22%),radial-gradient(circle_at_58%_62%,rgba(161,85,162,0.10),transparent_26%),radial-gradient(circle_at_74%_28%,rgba(87,199,217,0.10),transparent_22%)]" />

			<motion.div
				className="absolute left-[6%] top-[10%] h-[240px] w-[240px] rounded-full blur-3xl"
				style={{ backgroundColor: "rgba(229,66,56,0.12)" }}
				animate={
					isMobileStatic
						? undefined
						: {
								x: [0, 36, -10, 0],
								y: [0, 20, -16, 0],
								scale: [1, 1.08, 0.94, 1],
							}
				}
				transition={
					isMobileStatic
						? undefined
						: { duration: 8, repeat: Infinity, ease: "easeInOut" }
				}
			/>

			<motion.div
				className="absolute left-[38%] top-[34%] h-[260px] w-[260px] rounded-full blur-3xl"
				style={{ backgroundColor: "rgba(245,146,36,0.10)" }}
				animate={
					isMobileStatic
						? undefined
						: {
								x: [0, -28, 14, 0],
								y: [0, 24, -14, 0],
								scale: [1, 0.95, 1.07, 1],
							}
				}
				transition={
					isMobileStatic
						? undefined
						: { duration: 10, repeat: Infinity, ease: "easeInOut" }
				}
			/>

			<motion.div
				className="absolute left-[62%] top-[12%] h-[280px] w-[280px] rounded-full blur-3xl"
				style={{ backgroundColor: "rgba(161,85,162,0.10)" }}
				animate={
					isMobileStatic
						? undefined
						: {
								x: [0, 26, -12, 0],
								y: [0, -20, 18, 0],
								scale: [1, 1.06, 0.96, 1],
							}
				}
				transition={
					isMobileStatic
						? undefined
						: { duration: 11, repeat: Infinity, ease: "easeInOut" }
				}
			/>

			{ornaments.map((item) => (
				<motion.div
					key={item.id}
					className="absolute"
					style={{
						left: item.left,
						top: item.top,
						width: item.size,
						height: item.size,
						opacity: item.opacity ?? 0.18,
					}}
					animate={
						isMobileStatic
							? undefined
							: {
									x: [0, item.driftX, -item.driftX * 0.45, 0],
									y: [0, item.driftY, -item.driftY * 0.35, 0],
									rotate: [0, item.rotate, -item.rotate * 0.4, 0],
									scale: [1, 1.06, 0.96, 1],
								}
					}
					transition={
						isMobileStatic
							? undefined
							: {
									duration: item.duration,
									repeat: Infinity,
									ease: "easeInOut",
								}
					}>
					<MotifPiece
						variant={item.variant}
						fill={item.fill}
						color={item.color}
						gradientFrom={item.gradientFrom}
						gradientTo={item.gradientTo}
					/>
				</motion.div>
			))}
		</div>
	);
}

function MotifPiece({
	variant,
	fill,
	color,
	gradientFrom,
	gradientTo,
}: {
	variant: PieceVariant;
	fill: "solid" | "gradient";
	color?: string;
	gradientFrom?: string;
	gradientTo?: string;
}) {
	const common = "h-full w-full drop-shadow-[0_16px_30px_rgba(15,23,42,0.08)]";
	const gradientId =
		`grad-${variant}-${(gradientFrom || "") + (gradientTo || "")}`.replace(
			/[^a-zA-Z0-9-_]/g,
			"",
		);

	const fillValue =
		fill === "gradient" ? `url(#${gradientId})` : color || "#a155a2";

	return (
		<svg viewBox="0 0 46 46" className={common} fill="none">
			{fill === "gradient" && gradientFrom && gradientTo && (
				<defs>
					<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor={gradientFrom} />
						<stop offset="100%" stopColor={gradientTo} />
					</linearGradient>
				</defs>
			)}

			{variant === "diamond" && (
				<rect
					x="19.19"
					y="1.58"
					width="7.65"
					height="7.65"
					transform="rotate(-45 19.19 1.58)"
					fill={fillValue}
				/>
			)}

			{variant === "smallDiamond" && (
				<polygon
					points="22.85 35.05 20.38 37.52 17.44 40.46 22.85 45.86 28.26 40.46 22.85 35.05"
					fill={fillValue}
				/>
			)}

			{variant === "triangleTop" && (
				<polygon
					points="17.6 5.41 23.01 0 28.42 5.41 17.6 5.41"
					fill={fillValue}
				/>
			)}

			{variant === "triangleBottom" && (
				<polygon
					points="17.44 40.46 22.85 35.05 28.26 40.46 17.44 40.46"
					fill={fillValue}
				/>
			)}

			{variant === "leftWing" && (
				<polygon
					points="9.67 32.68 13.44 36.45 22.12 27.77 21.15 26.79 18.2 23.84 13.44 28.6 7.85 23.01 13.45 17.22 21.1 17.22 21.1 17.22 13.45 9.57 13.45 9.57 13.45 9.58 13.44 9.57 9.67 13.33 0 23.01 9.67 32.68"
					fill={fillValue}
				/>
			)}

			{variant === "rightWing" && (
				<polygon
					points="36.19 13.17 32.43 9.41 23.74 18.09 24.72 19.06 27.67 22.01 32.43 17.26 38.01 22.84 32.42 28.63 24.76 28.63 24.76 28.63 32.41 36.28 32.42 36.28 32.42 36.27 32.43 36.28 36.19 32.52 45.87 22.84 36.19 13.17"
					fill={fillValue}
				/>
			)}
		</svg>
	);
}
