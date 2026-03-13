"use client";

import Image from "next/image";
import { useState } from "react";

export default function ShowcaseImage() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="mt-20 flex justify-center">
				<div
					onClick={() => setOpen(true)}
					className="relative w-full max-w-[1080px] cursor-pointer overflow-hidden rounded-[24px]">
					<Image
						src="/showcase/showcase-bg.png"
						alt="Motif UI showcase preview"
						width={1920}
						height={1200}
						className="h-auto w-full object-cover"
						priority
					/>
				</div>
			</div>

			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10">
					<Image
						src="/showcase/showcase-bg.png"
						alt="Motif UI showcase preview"
						width={1920}
						height={1200}
						className="max-h-full max-w-full rounded-xl object-contain"
					/>
				</div>
			)}
		</>
	);
}