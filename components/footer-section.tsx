import Image from "next/image";

export default function FooterSection() {
	return (
		<div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-center">
			<div className="flex justify-center">
				<Image
					src="/motiflogo.svg"
					alt="Motif UI logo"
					width={132}
					height={38}
				/>
			</div>

			<p className="max-w-2xl text-sm leading-7 text-slate-500">
				Copyright © 2026 Motif UI, TÜRKSAT.
			</p>
		</div>
	);
}
