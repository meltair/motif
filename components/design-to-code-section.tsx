"use client";
import { useMemo, useState } from "react";
import {
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Download,
	Folder,
	Upload as UploadIcon,
	FileUp,
	X,
	Eye,
	Trash2,
	ChevronDown,
} from "lucide-react";
type ComponentKey =
	| "card"
	| "dataview"
	| "timepicker"
	| "upload"
	| "accordion"
	| "autocomplete"
	| "uploadImage"
	| "pincode"
	| "pagination";
const componentOrder: ComponentKey[] = [
	"card",
	"dataview",
	"timepicker",
	"upload",
	"accordion",
	"autocomplete",
	"uploadImage",
	"pincode",
	"pagination",
];
const componentLabels: Record<ComponentKey, string> = {
	card: "Card",
	dataview: "DataView",
	timepicker: "TimePicker",
	upload: "Upload",
	accordion: "Accordion",
	autocomplete: "Autocomplete",
	uploadImage: "Upload Image",
	pincode: "PinCode",
	pagination: "Pagination",
};
export default function CompactDesignToCodeSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [timepickerHour, setTimepickerHour] = useState(19);
	const [timepickerMinute, setTimepickerMinute] = useState(3);
	const [uploadUploaded, setUploadUploaded] = useState(true);
	const [accordionOpenIndex, setAccordionOpenIndex] = useState(1);
	const [autocompleteItems, setAutocompleteItems] = useState<string[]>([
		"item 2",
		"item 1",
	]);
	const [uploadImageState, setUploadImageState] = useState<
		"empty" | "uploading" | "done"
	>("empty");
	const [pinValues, setPinValues] = useState(["1", "5", "", ""]);
	const [paginationPage, setPaginationPage] = useState(1);
	const activeComponent = componentOrder[activeIndex];
	const goPrev = () => {
		setActiveIndex((prev) =>
			prev === 0 ? componentOrder.length - 1 : prev - 1,
		);
	};
	const goNext = () => {
		setActiveIndex((prev) =>
			prev === componentOrder.length - 1 ? 0 : prev + 1,
		);
	};
	const reactCode = useMemo(() => {
		const codeMap: Record<ComponentKey, string> = {
			card: `export default function Example() {
			return (
				<Card>
				<CardHeader
					title="Card Header Title"
					subtitle="Motif Card Subtitle"
					icon="folder"
					actionIcon="download"
				/>

				<CardContent
					title="Card Content Title"
					subtitle="Card Content Subtitle"
					supportingText="Motif Card Supporting Text"
					image="/images/card-preview.jpg"
				/>

				<CardFooter>
					<Button variant="primary">Action</Button>
					<Button variant="secondary">Alternate</Button>
					<Link href="#">Motif Link</Link>
				</CardFooter>
				</Card>
			);}`,
			dataview: `export default function Example() {
			return (
				<DataView
				rows={[
					{ label: "Name", value: "Motif" },
					{ label: "Platform", value: "Web, mobile" },
					{ label: "Founded", value: "2008" },
					{ label: "Website", value: "https://www.motif-ui.com" },
					{ label: "Country", value: "Türkiye" },
					{ label: "Developer", value: "Türksat" },
				]}
				/>
			);
			}`,
			timepicker: `export default function Example() {
			return (
				<TimePicker
				hour={${timepickerHour}}
				minute={${timepickerMinute}}
				onClear={() => console.log("clear")}
				onConfirm={() => console.log("confirm")}
				/>
			);}`,
			upload: `export default function Example() {
			return (
				<Upload
				title="Click here to upload files or drag files here."
				helperText="You can add maximum 1 file."
				fileName=${uploadUploaded ? `"showcase.png"` : `""`}
				status=${uploadUploaded ? `"success"` : `"idle"`}
				/>
			);}`,
			accordion: `export default function Example() {
			return (
				<Accordion
				items={[
					{ title: "Accordion 1", content: "" },

					{
					title: "Accordion 2",
					content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu."
					},

					{ title: "Accordion 3", content: "" },
				]}
				defaultOpenIndex={${accordionOpenIndex}}
				/>
			);}`,
			autocomplete: `export default function Example() {
			return (
				<Autocomplete
				items={[${autocompleteItems.map((i) => `"${i}"`).join(", ")}]}
				onRemove={(item) => {}}
				onClear={() => {}}
				/>
			);}`,
			uploadImage: `export default function Example() {
			return (
				<UploadImage
				state="${uploadImageState}"
				onUpload={() => {}}
				onRemove={() => {}}
				/>
			);}`,
			pincode: `export default function Example() {
			return (
				<PinCode
				values={[${pinValues.map((i) => `"${i}"`).join(", ")}]}
				onChange={(vals) => {}}
				/>
			);}`,
			pagination: `export default function Example() {
			return (
				<Pagination
				page={${paginationPage}}
				total={9}
				onChange={(page) => {}}
				/>
			);}`,
		};
		return codeMap[activeComponent];
	}, [
		activeComponent,
		timepickerHour,
		timepickerMinute,
		uploadUploaded,
		accordionOpenIndex,
		autocompleteItems,
		uploadImageState,
		pinValues,
		paginationPage,
	]);
	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-8">
			<div className="mx-auto mb-8 max-w-3xl text-center">
				<h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
					<span className="block pb-2 bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
						Design to code, pixel-perfect
					</span>
				</h2>
				<p className="mt-3 text-base leading-7 text-slate-600">
                    React components are the precise reflection of Motif UI design. It is this easy to check out
                    the interactive design previews and inspect the matching React implementation beside them.
				</p>
			</div>
			<div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
					<div className="mb-4 flex items-center justify-between gap-3">
						<div className="text-center lg:text-left">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
								Figma Design
							</p>
							<p className="mt-1 text-sm font-medium text-slate-500">
								{componentLabels[activeComponent]}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<button
								onClick={goPrev}
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
								aria-label="Previous component">
								<ChevronLeft className="h-4 w-4" />
							</button>
							<button
								onClick={goNext}
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
								aria-label="Next component">
								<ChevronRight className="h-4 w-4" />
							</button>
						</div>
					</div>
					<div className="rounded-[20px] p-4">
						<div className="flex h-[560px] items-start justify-center overflow-hidden">
							{activeComponent === "card" && (
								<PreviewFrame>
									<LiveMotifCard />
								</PreviewFrame>
							)}
							{activeComponent === "dataview" && (
								<PreviewFrame>
									<LiveMotifDataView />
								</PreviewFrame>
							)}
							{activeComponent === "timepicker" && (
								<PreviewFrame>
									<LiveMotifTimePicker
										selectedHour={timepickerHour}
										selectedMinute={timepickerMinute}
										setSelectedHour={setTimepickerHour}
										setSelectedMinute={setTimepickerMinute}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "upload" && (
								<PreviewFrame>
									<LiveMotifUpload
										uploaded={uploadUploaded}
										setUploaded={setUploadUploaded}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "accordion" && (
								<PreviewFrame>
									<LiveMotifAccordion
										openIndex={accordionOpenIndex}
										setOpenIndex={setAccordionOpenIndex}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "autocomplete" && (
								<PreviewFrame>
									<LiveAutocomplete
										items={autocompleteItems}
										setItems={setAutocompleteItems}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "uploadImage" && (
								<PreviewFrame>
									<LiveUploadImage
										state={uploadImageState}
										setState={setUploadImageState}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "pincode" && (
								<PreviewFrame>
									<LivePinCode values={pinValues} setValues={setPinValues} />
								</PreviewFrame>
							)}
							{activeComponent === "pagination" && (
								<PreviewFrame>
									<LivePagination
										page={paginationPage}
										setPage={setPaginationPage}
									/>
								</PreviewFrame>
							)}
						</div>
					</div>
					<div className="mt-4 flex items-center justify-center gap-2">
						{componentOrder.map((item, index) => (
							<button
								key={item}
								onClick={() => setActiveIndex(index)}
								className={[
									"h-2.5 rounded-full transition-all",
									activeIndex === index
										? "w-8 bg-sky-600"
										: "w-2.5 bg-slate-300 hover:bg-slate-400",
								].join(" ")}
								aria-label={componentLabels[item]}
							/>
						))}
					</div>
				</div>
				<div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
					<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
						<div className="text-center lg:text-left">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
								React Library
							</p>
							<p className="mt-1 text-sm font-medium text-slate-500">
								{componentLabels[activeComponent]}.tsx
							</p>
						</div>
					</div>
					<div className="relative p-4">
						<pre className="whitespace-pre-wrap text-[13px] leading-6 text-slate-800">
							<code className="block w-full">{reactCode}</code>
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
}
function LiveMotifCard() {
	return (
		<div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
			<div className="flex items-center justify-between gap-4 px-5 py-4">
				<div className="flex items-center gap-4">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white">
						<Folder className="h-6 w-6 fill-white text-white" />
					</div>
					<div>
						<h4 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">
							Card Header Title
						</h4>
						<p className="text-base text-slate-500">Motif Card Subtitle</p>
					</div>
				</div>
				<button className="text-slate-400 transition hover:text-slate-600">
					<Download className="h-8 w-8" />
				</button>
			</div>
			<div className="h-[180px] w-full bg-[linear-gradient(135deg,#3d2a1f,#241c19_38%,#674228_72%,#1b1b1b)]" />
			<div className="px-5 py-5">
				<h5 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">
					Card Content Title
				</h5>
				<p className="mt-1 text-base text-slate-500">Card Content Subtitle</p>
				<p className="mt-5 text-base text-slate-800">
					Motif Card Supporting Text
				</p>
				<button className="mt-5 text-base font-medium text-sky-600 transition hover:text-sky-700">
					Motif Link
				</button>
			</div>
			<div className="flex flex-wrap items-center gap-3 border-t border-slate-200 px-5 py-4">
				<button className="rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-700">
					Action
				</button>
				<button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50">
					Alternate
				</button>
				<button className="inline-flex items-center gap-2 text-base font-medium text-sky-600 transition hover:text-sky-700">
					Motif Link <ArrowRight className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
function LiveMotifDataView() {
	const rows = [
		["Name", "Motif"],
		["Platform", "Web, mobile"],
		["Founded", "2008"],
		["Website", "https://www.motif-ui.com"],
		["Platform Failures", ""],
		["Country", "Türkiye"],
		["Developer", "Türksat"],
	];
	return (
		<div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[18px] border border-slate-300 bg-white">
			{rows.map(([label, value], index) => (
				<div
					key={`${label}-${index}`}
					className="grid grid-cols-[180px_1fr] border-b border-slate-300 px-5 py-4 last:border-b-0">
					<div className="text-[18px] text-slate-500">{label}</div>
					<div className="text-[18px] text-slate-800">{value}</div>
				</div>
			))}
		</div>
	);
}
function PreviewFrame({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full w-full items-start justify-center">
			{children}
		</div>
	);
}
function LiveMotifTimePicker({
	selectedHour,
	selectedMinute,
	setSelectedHour,
	setSelectedMinute,
}: {
	selectedHour: number;
	selectedMinute: number;
	setSelectedHour: (value: number) => void;
	setSelectedMinute: (value: number) => void;
}) {
	const hours = [14, 15, 16, 17, 18, 19];
	const minutes = [3, 4, 5, 6, 7, 8];
	return (
		<div className="flex justify-center">
			<div className="origin-top">
				<div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
					<div className="px-2 pt-2 text-center text-[36px] font-semibold tracking-[-0.04em] text-sky-600">
						{String(selectedHour).padStart(2, "0")} :
						{String(selectedMinute).padStart(2, "0")}
					</div>
					<div className="px-6 pb-6 pt-4">
						<div className="rounded-md bg-slate-50 px-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="text-center">
									<div className="mb-2 text-[14px] text-slate-500">Hr</div>
									<div className="space-y-2">
										{hours.map((hour) => (
											<button
												key={hour}
												onClick={() => setSelectedHour(hour)}
												className={[
													"flex h-11 w-full items-center justify-center rounded-xl text-[20px] font-semibold transition",
													selectedHour === hour
														? "border-2 border-blue-700 bg-sky-600 text-white"
														: "text-slate-600 hover:bg-slate-100",
												].join(" ")}>
												{String(hour).padStart(2, "0")}
											</button>
										))}
									</div>
								</div>
								<div className="text-center">
									<div className="mb-2 text-[14px] text-slate-500">Mn</div>
									<div className="space-y-2">
										{minutes.map((minute) => (
											<button
												key={minute}
												onClick={() => setSelectedMinute(minute)}
												className={[
													"flex h-11 w-full items-center justify-center rounded-xl text-[20px] font-semibold transition",
													selectedMinute === minute
														? "bg-sky-600 text-white"
														: "text-slate-600 hover:bg-slate-100",
												].join(" ")}>
												{String(minute).padStart(2, "0")}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4 flex items-center justify-between border-t border-slate-300 pt-4">
							<button
								onClick={() => {
									setSelectedHour(19);
									setSelectedMinute(3);
								}}
								className="rounded-xl bg-slate-200 px-8 py-3 text-[16px] font-semibold text-slate-700 transition hover:bg-slate-300">
								Clear
							</button>
							<button className="rounded-xl ml-6 bg-sky-600 px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-sky-700">
								OK
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function LiveMotifUpload({
	uploaded,
	setUploaded,
}: {
	uploaded: boolean;
	setUploaded: (value: boolean) => void;
}) {
	return (
		<div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[12px] border border-slate-400 bg-white">
			<div
				className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center px-8 py-10 text-center transition hover:bg-slate-50"
				onClick={() => setUploaded(true)}>
				<FileUp className="h-16 w-16 text-slate-400" />
				<p className="mt-6 text-[20px] text-slate-700">
					Click here to upload files or drag files here.
				</p>
				<p className="mt-3 text-[16px] text-slate-500">
					You can add maximum 1 file.
				</p>
			</div>
			{uploaded && (
				<div className="flex items-center justify-between border-t border-slate-400 px-5 py-4">
					<div className="flex items-center gap-4">
						<UploadIcon className="h-8 w-8 text-slate-400" />
						<div>
							<p className="text-[18px] text-slate-800">showcase.png</p>
							<p className="text-[14px] text-emerald-600">
								Uploaded Successfully
							</p>
						</div>
					</div>
					<button
						onClick={() => setUploaded(false)}
						className="text-slate-400 transition hover:text-red-500">
						<Trash2 className="h-8 w-8" />
					</button>
				</div>
			)}
		</div>
	);
}
function LiveMotifAccordion({
	openIndex,
	setOpenIndex,
}: {
	openIndex: number;
	setOpenIndex: (value: number) => void;
}) {
	const items = [
		{ title: "Accordion 1", content: "" },
		{
			title: "Accordion 2",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu, vitae dignissim quam. Suspendisse eu nisi semper, congue augue tincidunt, porttitor dui.",
		},
		{ title: "Accordion 3", content: "" },
	];
	return (
		<div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[10px] border border-slate-400 bg-white">
			{items.map((item, index) => {
				const open = openIndex === index;
				return (
					<div
						key={item.title}
						className="border-b border-slate-400 last:border-b-0">
						<button
							onClick={() => setOpenIndex(open ? -1 : index)}
							className="flex w-full items-center justify-between px-4 py-3 text-left">
							<span className="text-[18px] font-semibold text-slate-900">
								{item.title}
							</span>
							<ChevronDown
								className={`h-6 w-6 text-slate-900 transition ${open ? "rotate-180" : ""}`}
							/>
						</button>
						{open && item.content && (
							<div className="px-4 pb-6 text-[14px] leading-8 text-slate-600">
								{item.content}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
function LiveAutocomplete({
	items,
	setItems,
}: {
	items: string[];
	setItems: (value: string[]) => void;
}) {
	const options = [
		"item 1",
		"item 2",
		"item 3",
		"item 4",
		"item 5",
		"item 6",
		"item 7",
	];
	const [open, setOpen] = useState(false);
	const addItem = (item: string) => {
		if (!items.includes(item)) {
			setItems([...items, item]);
		}
	};
	const removeItem = (item: string) => {
		setItems(items.filter((i) => i !== item));
	};
	const clearAll = () => {
		setItems([]);
	};
	return (
		<div className="mx-auto w-full max-w-[560px] relative">
			<div className="rounded-[16px] bg-slate-200 px-4 py-4 flex items-center gap-2">
			
				<div className="ml-2 flex flex-wrap items-center gap-2 flex-1">
					{items.map((item) => (
						<div
							key={item}
							className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-[16px] text-slate-600">
							{item}
							<button onClick={() => removeItem(item)}>
								<X className="h-5 w-5 text-slate-500" />
							</button>
						</div>
					))}
				</div>
				<button
					onClick={clearAll}
					className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white shrink-0">
					<X className="h-4 w-4" />
				</button>
				<button onClick={() => setOpen(!open)} className="shrink-0">
					<ChevronDown className="h-6 w-6 text-slate-600 ml-1" />
				</button>
			</div>
			{open && (
				<div className="absolute mt-2 w-full rounded-xl border border-slate-300 bg-white shadow-lg z-20 overflow-hidden">
					{options.map((option) => (
						<button
							key={option}
							onClick={() => addItem(option)}
							className="w-full px-4 py-2 text-left text-[16px] hover:bg-slate-100">
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
function LivePagination({
	page,
	setPage,
}: {
	page: number;
	setPage: (value: number) => void;
}) {
	const pages = [1, 2, 3];
	return (
		<div className="flex items-center gap-6 text-[20px] text-slate-700">
			<button onClick={() => setPage(Math.max(1, page - 1))}>
				<ChevronLeft className="h-12 w-12 cursor-pointer" />
			</button>
			{pages.map((p) => (
				<button
					key={p}
					onClick={() => setPage(p)}
					className={[
						"flex h-12 w-12 items-center justify-center rounded-xl",
						page === p
							? "bg-sky-700 text-white"
							: "bg-slate-200 text-slate-700",
					].join(" ")}>
					{p}
				</button>
			))}
			<span className="px-2">...</span> <span>9</span>
			<button onClick={() => setPage(Math.min(9, page + 1))}>
				<ChevronRight className="h-8 w-8 cursor-pointer" />
			</button>
		</div>
	);
}
function LivePinCode({
	values,
	setValues,
}: {
	values: string[];
	setValues: (value: string[]) => void;
}) {
	const update = (index: number, val: string) => {
		const copy = [...values];
		copy[index] = val;
		setValues(copy);
	};
	return (
		<div className="flex gap-4">
			{values.map((v, i) => (
				<input
					key={i}
					value={v}
					maxLength={1}
					onChange={(e) => update(i, e.target.value)}
					className={[
						"h-20 w-20 rounded-xl border text-center text-[32px] font-semibold outline-none",
						i === 1
							? "border-4 border-sky-500 ring-4 ring-sky-200"
							: "border-slate-300",
					].join(" ")}
				/>
			))}
		</div>
	);
}
function LiveUploadImage({
	state,
	setState,
}: {
	state: "empty" | "uploading" | "done";
	setState: (value: "empty" | "uploading" | "done") => void;
}) {
	const [viewing, setViewing] = useState(false);
	if (state === "empty") {
		return (
			<div
				onClick={() => {
					setState("uploading");
					setTimeout(() => setState("done"), 1500);
				}}
				className="flex h-[360px] w-[360px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 text-center">
				<div className="text-[80px] text-slate-400">+</div>
				<p className="mt-4 text-[28px] text-slate-500">
					Choose or Drag <br /> an Image
				</p>
			</div>
		);
	}
	if (state === "uploading") {
		return (
			<div className="flex h-[360px] w-[360px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100">
				<p className="text-[28px] text-slate-500">Uploading</p>
				<div className="mt-6 h-3 w-64 rounded-full bg-slate-300">
					<div className="h-3 w-40 rounded-full bg-sky-600" />
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="relative h-[360px] w-[360px] overflow-hidden rounded-xl border bg-white">
				<img
					src="/gallery/card-preview.png"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center gap-6 bg-white/70">
					<button
						onClick={() => setViewing(true)}
						className="flex h-20 w-20 items-center justify-center rounded-xl bg-white shadow">
						<Eye className="h-10 w-10 text-sky-600" />
					</button>
					<button
						onClick={() => setState("empty")}
						className="flex h-20 w-20 items-center justify-center rounded-xl bg-white shadow">
						<Trash2 className="h-10 w-10 text-red-600" />
					</button>
				</div>
			</div>
			{viewing && (
				<div
					onClick={() => setViewing(false)}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10">
					<img
						src="/gallery/card-preview.png"
						className="max-h-full max-w-full rounded-xl"
					/>
				</div>
			)}
		</>
	);
}
