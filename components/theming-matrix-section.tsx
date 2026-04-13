import { useState } from "react";
import { TreeViewSurface } from "./tree-view";
import {
	Home,
	User,
	CalendarDays,
	ChevronRight,
	ChevronLeft,
	ChevronDown,
	Folder,
	Download,
	Boxes,
	FileText,
	Info,
	Check,
	House,
	RotateCcw,
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
	List,
	ListOrdered,
	Link as LinkIcon,
	Image as ImageIcon,
	Table2,
	Strikethrough,
	X,
	Mail,
	Briefcase,
	CircleHelp,
} from "lucide-react";
import {
    DateRangePicker,
    Form,
    InputPassword,
    InputText,
    Radio,
    RadioGroup, Slider, SliderRange,
    Switch, Tab,
    UploadInput, UploadList,
    Validations
} from "@motif-ui/react";

export default function MotifComponentMatrixSection() {
	const tabs = [
        { id: "forms", label: "Forms", icon: "description" },
        { id: "navigation", label: "Navigation", icon: "home" },
        { id: "feedback", label: "Feedback", icon: "info_outline" },
        { id: "surfaces", label: "Surfaces", icon: "border_all" },
	] as const;


	const [activeTab, setActiveTab] =
		useState<string>("forms");

	return (
		<section className="mx-auto w-full max-w-[1480px] px-4 py-16 lg:px-8">
			<div className="mx-auto mb-8 max-w-4xl text-center">
				<h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
					Choose the components
					<span className="block pb-2 bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
						and build your app
					</span>
				</h2>
				<p className="mt-3 text-base leading-7 text-slate-600">
					Motif UI components adapt seamlessly across themes, variants, and
					interaction states. Design once and apply your theming decisions
					consistently across the system.
				</p>
			</div>

			<div className="mb-8 flex justify-center">
                <Tab
                    onTabChange={setActiveTab}
                    tabs={tabs.map(({id, label, icon}) => ({id, icon, title: label}))} />
			</div>

			<div className="overflow-visible rounded-[28px] border border-slate-200 bg-white">
				{activeTab === "forms" && <FormsMatrix />}
				{activeTab === "navigation" && <NavigationMatrix />}
				{activeTab === "feedback" && <FeedbackMatrix />}
				{activeTab === "surfaces" && <SurfacesMatrix />}
			</div>
		</section>
	);
}

function MatrixShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{children}
		</div>
	);
}

function Cell({
	title,
	description,
	children,
	className = "",
}: {
	title: string;
	description: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`border-b border-r rounded-md border-slate-200 bg-white p-6
      [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)]
      [background-size:16px_16px] ${className}`}>
			<div className="mb-5">
				<h3 className="text-[17px] font-semibold tracking-[-0.02em] text-slate-900">
					{title}
				</h3>
				<p className="mt-2 max-w-[40ch] text-sm leading-6 text-slate-500">
					{description}
				</p>
			</div>

			<div className="flex min-h-[220px] items-start rounded-2xl p-6 backdrop-blur-[1px]">
				{children}
			</div>
		</div>
	);
}

/* ---------------- FORMS ---------------- */

function FormsMatrix() {
	const [radio, setRadio] = useState("black");
	const [terms, setTerms] = useState(false);
	const [distance, setDistance] = useState(35);
    const today = new Date();
    const tenDaysLater = new Date();
    tenDaysLater.setDate(today.getDate() + 10);

	return (
		<MatrixShell>
			<Cell
				title="Date Range Picker"
				description="Large date-range selection surfaces support filtering, scheduling, and reporting flows in enterprise interfaces."
				className="md:col-span-2 xl:col-span-2">
                <DateRangePicker variant="bordered" value={[today, tenDaysLater]} />
			</Cell>

			<Cell
				title="Selection Controls"
				description="Radio buttons and switches present form decisions with a clean hierarchy and clear emphasis.">
                <Form onSubmit={() => {}} className="w-full">
                    <Form.Field name="username" label="Username" helperText="Please enter your username.">
                        <InputText value="Motif UI" />
                    </Form.Field>
                    <Form.Field name="password" label="Password" helperText="Please enter your password.">
                        <InputPassword toggleMask value="password" />
                    </Form.Field>
                    <Form.Field name="blackwhite" label="Black or White" validations={[Validations.Required]} helperText="You have to choose one">
                        <RadioGroup name="blackwhite" orientation="horizontal">
                            <Radio value="black" label="Black" />
                            <Radio value="white" label="White" />
                        </RadioGroup>
                    </Form.Field>
                    <Form.Field name="terms" label="Terms and Conditions" validations={[Validations.Required]} helperText="I agree to the terms and conditions.">
                        <Switch />
                    </Form.Field>
                </Form>
			</Cell>

			<Cell
				title="Upload Inputs"
				description="Browse and drag-and-drop file flows can live within the same visual language.">
                <Form onSubmit={() => {}} submitButtonLabel="" className="w-full -mb-12" style={{minWidth: "auto"}}>
                    <Form.Field name="personaldocument" label="Personal Document" helperText="Upload any type of personal document">
                        <UploadInput uploadRequest={{method: "POST", url: "https://"}} deleteRequest={{method: "POST", url: "https://"}} maxSize={1} />
                    </Form.Field>
                    <Form.Field name="identityregister" label="Identitiy Register Copy" helperText="Upload any type of file, max size 1 MB"  validations={[Validations.RequiredUploadedFile]}>
                        <UploadList uploadRequest={{method: "POST", url: "https://"}} deleteRequest={{method: "POST", url: "https://"}} maxSize={1} />
                    </Form.Field>
                </Form>
			</Cell>

			<Cell
				title="Range Slider"
				description="Single-value sliders remain clean and readable on dense data entry screens.">
                <Form onSubmit={() => {}} submitButtonLabel="" className="w-full -mb-12">
                    <Form.Field name="slider" label="Minimum Distance" helperText="Please choose a minimum distance: 30">
                        <Slider value={30} />
                    </Form.Field>
                </Form>
			</Cell>

			<Cell
				title="Range Between"
				description="Dual-handle range selection works well for filters such as age, price, or distance.">
                <Form onSubmit={() => {}} submitButtonLabel="" className="w-full -mb-12">
                    <Form.Field name="range" label="Age Between" helperText="Please choose an age range">
                        <SliderRange value={[30, 80]} min={20} max={90} />
                    </Form.Field>
                </Form>
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- NAVIGATION ---------------- */

function NavigationMatrix() {
	const [active, setActive] = useState("home");

	return (
		<MatrixShell>
			<Cell
				title="Tabs"
				description="Tabbed top navigation creates a clear backbone for horizontal content groups."
				className="md:col-span-2 xl:col-span-2">
				<WideTopTabs />
			</Cell>

			<Cell
				title="Sidebar Navigation"
				description="Service-oriented side navigation supports active states, grouped actions, and status badges.">
				<div className="w-full max-w-[360px] rounded-2xl border border-slate-200 bg-white p-4">
					<div className="mb-5 text-center text-xl font-bold text-red-500">
						turkiye.gov.tr
					</div>

					<div className="space-y-3">
						<button
							onClick={() => setActive("home")}
							className={[
								"flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left text-xl font-medium",
								active === "home" ? "bg-sky-600 text-white" : "text-slate-700",
							].join(" ")}>
							<Home className="h-6 w-6" />
							Home
						</button>

						<button
							onClick={() => setActive("about")}
							className="flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left text-xl font-medium text-slate-400">
							<Info className="h-6 w-6" />
							About
						</button>

						<button
							onClick={() => setActive("contact")}
							className="flex w-full items-center gap-3 rounded-xl bg-slate-100 px-4 py-4 text-left text-xl font-medium text-sky-600">
							<User className="h-6 w-6" />
							Contact
							<span className="ml-1 rounded-full bg-green-500 px-3 py-1 text-sm text-white">
								New
							</span>
						</button>

						<button className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-xl font-medium text-slate-800">
							<span className="flex items-center gap-3">
								<Folder className="h-6 w-6" />
								Submenu
							</span>
							<ChevronDown className="h-6 w-6 -rotate-90" />
						</button>
					</div>
				</div>
			</Cell>

			<Cell
				title="Dropdown"
				description="Dropdown menus support labels, icons, disabled items, and single-selection behavior.">
				<div className="pt-2">
					<DropdownShowcase />
				</div>
			</Cell>

			<Cell
				title="Select"
				description="For simpler choice surfaces, a clean list-based select pattern keeps selection readable.">
				<div className="pt-2">
					<SelectShowcase />
				</div>
			</Cell>

			<Cell
				title="Breadcrumb"
				description="Hierarchy links arranged inline help users understand location and navigate upward.">
				<div className="w-full max-w-[800px] rounded-2xl bg-slate-100 px-4 py-5">
					<div className="flex flex-wrap items-center gap-x-2 gap-y-2">
						<div className="flex items-center gap-2 text-sky-600">
							<Home className="h-4 w-4" />
							<span className="text-lg font-semibold">Link</span>
						</div>

						<div className="flex items-center gap-2">
							<ChevronRight className="h-4 w-4 text-slate-400" />
							<span className="text-lg font-semibold text-slate-400">...</span>
						</div>

						<div className="flex items-center gap-2">
							<ChevronRight className="h-4 w-4 text-slate-400" />
							<span className="text-lg font-semibold text-sky-600">Link</span>
						</div>

						<div className="flex items-center gap-2">
							<ChevronRight className="h-4 w-4 text-slate-400" />
							<span className="text-lg font-semibold text-slate-900">
								Current Page
							</span>
						</div>
					</div>
				</div>
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- FEEDBACK ---------------- */

function FeedbackMatrix() {
	return (
		<MatrixShell>
			<Cell
				title="Alert"
				description="Information, warning, and status messages provide a simple feedback layer.">
				<div className="w-full max-w-[420px] rounded-2xl bg-slate-100 px-6 py-5">
					<div className="flex items-start gap-4">
						<Info className="mt-1 h-8 w-8 text-slate-500" />
						<div>
							<p className="text-2xl font-semibold text-slate-800">
								Alert Title
							</p>
							<p className="mt-2 text-lg text-slate-700">
								This is a test message for the Alert component.
							</p>
						</div>
					</div>
				</div>
			</Cell>

			<Cell
				title="Tooltip"
				description="Tooltips provide short contextual guidance near a focused element without interrupting the main task.">
				<TooltipShowcase />
			</Cell>

			<Cell
				title="Accordion"
				description="Dense descriptions are progressively revealed to maintain readability.">
				<MiniAccordion />
			</Cell>

			<Cell
				title="Toast"
				description="Toast notifications deliver transient status updates with visual tone, concise content, and dismiss actions.">
				<ToastSurface />
			</Cell>

			<Cell
				title="Modal"
				description="Modal dialogs isolate important actions, confirmations, and decision points within a focused surface.">
				<ModalSurface />
			</Cell>

			<Cell
				title="Tree View"
				description="Tree views help users browse nested structures, expand groups, and make selections across hierarchical content.">
				<TreeViewSurface />
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- SURFACES ---------------- */

function SurfacesMatrix() {
	return (
		<MatrixShell>
			<Cell
				title="Custom Card"
				description="Custom card components serve as the primary surface for services, navigation, and content emphasis.">
				<div className="w-full max-w-[360px] rounded-2xl border border-slate-300 bg-white p-8 text-center">
					<Boxes className="mx-auto h-12 w-12 text-slate-500" />
					<h4 className="mt-4 text-2xl font-semibold text-slate-900">
						Custom Card Title
					</h4>
					<p className="mt-4 text-lg text-slate-500">
						This is a small text to describe the card
					</p>
					<button className="mt-6 text-2xl text-sky-600">Link Item</button>
				</div>
			</Cell>

			<Cell
				title="Simple Card"
				description="Icon, title, subtitle, and actions arranged in a single row.">
				<div className="w-full max-w-[420px] rounded-2xl bg-slate-100 px-6 py-5">
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white">
								<Folder className="h-8 w-8" />
							</div>
							<div>
								<p className="text-2xl font-semibold text-slate-900">
									Card Header Title
								</p>
								<p className="text-xl text-slate-500">Motif Card Subtitle</p>
							</div>
						</div>
						<Download className="h-10 w-10 text-slate-400" />
					</div>
				</div>
			</Cell>

			<Cell
				title="Business Card"
				description="A large call-to-action card combines iconography, strong hierarchy, and a single primary action within one branded surface.">
				<BusinessCardSurface />
			</Cell>

			<Cell
				title="Editor"
				description="Rich text editing surfaces bring together formatting, media actions, and structured content in a single working canvas.">
				<EditorSurface />
			</Cell>

			<Cell
				title="Popover"
				description="Popover layers support anchored guidance, quick actions, and contextual messaging without disrupting the main layout.">
				<PopoverSurface />
			</Cell>

			<Cell
				title="Result"
				description="Result screens communicate completion clearly, reinforce confidence, and guide the user toward the next action.">
				<ResultSurface />
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- FEEDBACK MINI COMPONENTS ---------------- */

function TooltipShowcase() {
	return (
		<div className="w-full max-w-[760px]">
			<div className="flex items-center justify-center gap-10 text-slate-500">
				<Home className="h-10 w-10" strokeWidth={1.8} />
				<Mail className="h-10 w-10" strokeWidth={1.8} />
				<Briefcase className="h-10 w-10" strokeWidth={1.8} />
			</div>

			<div className="relative mx-auto mt-5 flex w-[290px] justify-center">
				<div className="relative rounded-2xl bg-slate-100 px-8 py-4 text-[16px] font-light tracking-[-0.02em] text-slate-600">
					Home
					<div className="absolute left-1/2 top-[-10px] h-5 w-5 -translate-x-1/2 rotate-45 bg-slate-100" />
				</div>
			</div>

			<div className="relative mt-10 flex justify-center">
				<div className="relative rounded-2xl bg-slate-100 px-6 py-4 text-center text-[16px] leading-[1.35] text-slate-600">
					This will submit your form information.
					<div className="absolute left-1/2 top-full h-5 w-5 -translate-x-1/2 -translate-y-2 rotate-45 bg-slate-100" />
				</div>
			</div>

			<div className="mt-6 flex justify-center">
				<button className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 text-[18px] font-semibold tracking-[-0.03em] text-white shadow-sm">
					<span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
						<Check className="h-6 w-6 text-emerald-500" strokeWidth={3} />
					</span>
					Submit Form
				</button>
			</div>
		</div>
	);
}

function ToastSurface() {
	return (
		<div className="w-full max-w-[520px] space-y-4">
			<ToastItem
				tone="danger"
				title="Toast Title"
				content="Toast Content"
				showContent
			/>
			<ToastItem
				tone="info"
				title="Toast Title"
				content="Toast Content"
				showContent
			/>
			<ToastItem tone="neutral" title="Toast Title" content="" />
		</div>
	);
}

function ToastItem({
	tone,
	title,
	content,
	showContent = false,
}: {
	tone: "danger" | "info" | "neutral";
	title: string;
	content: string;
	showContent?: boolean;
}) {
	const toneMap = {
		danger: {
			box: "bg-red-50",
			iconWrap: "bg-red-600",
			title: "text-red-700",
		},
		info: {
			box: "bg-sky-50 shadow-[0_10px_24px_rgba(15,23,42,0.10)]",
			iconWrap: "bg-blue-500",
			title: "text-blue-700",
		},
		neutral: {
			box: "bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]",
			iconWrap: "bg-slate-600",
			title: "text-slate-700",
		},
	}[tone];

	return (
		<div
			className={`flex items-start gap-5 rounded-2xl px-4 py-3 ${toneMap.box}`}>
			<div
				className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${toneMap.iconWrap}`}>
				<CircleHelp className="h-4 w-4 text-white" strokeWidth={2.5} />
			</div>

			<div className="flex-1">
				<p
					className={`text-[16px] font-semibold tracking-[-0.03em] ${toneMap.title}`}>
					{title}
				</p>
				{showContent && (
					<p className="mt-2 text-[12px] font-light text-slate-800">
						{content}
					</p>
				)}
			</div>

			<X className="mt-1 h-5 w-5 shrink-0 text-slate-400" strokeWidth={1.8} />
		</div>
	);
}

function ModalSurface() {
	return (
		<div className="w-full max-w-[720px] overflow-hidden rounded-[14px] border border-slate-300 bg-white shadow-sm">
			<div className="flex items-center justify-between border-b border-slate-300 px-6 py-5">
				<h4 className="text-[20px] font-semibold tracking-[-0.03em] text-slate-800">
					EDKUI Modal Title
				</h4>
				<X className="h-6 w-6 text-slate-400" strokeWidth={2} />
			</div>

			<div className="border-b border-slate-300 px-6 py-6">
				<h5 className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
					Modal Content Title
				</h5>

				<div className="mt-6 flex gap-4">
					<p className="max-w-[560px] text-[13px] leading-[1.55] text-slate-800">
						Modal Content Text Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Proin sed tristique tellus. Morbi vel sodales urna.
						Duis felis leo, lacinia id imperdiet ac, molestie ut neque.
					</p>
				</div>
			</div>

			<div className="flex justify-end gap-5 px-4 py-3">
				<button className="rounded-full border border-slate-400 px-5 py-2 text-[16px] font-semibold text-slate-600">
					Button
				</button>
				<button className="rounded-full bg-sky-600 px-5 py-2 text-[16px] font-semibold text-white">
					Button
				</button>
			</div>
		</div>
	);
}


function TreeRow({
	level,
	label,
	expanded = false,
	checked = false,
	folder = false,
	highlight = false,
	focus = false,
}: {
	level: number;
	label: string;
	expanded?: boolean;
	checked?: boolean;
	folder?: boolean;
	highlight?: boolean;
	focus?: boolean;
}) {
	return (
		<div
			className={[
				"flex items-center gap-2 rounded-xl px-2 py-2",
				highlight ? "bg-slate-100" : "bg-transparent",
			].join(" ")}
			style={{ paddingLeft: `${16 + level * 44}px` }}>
			<div className="w-6 shrink-0">
				{level === 0 ||
				folder ||
				label.includes("Guitars") ||
				label.includes("Collection") ? (
					expanded ? (
						<ChevronDown className="h-4 w-4 text-slate-600" />
					) : (
						<ChevronRight className="h-4 w-4 text-slate-600" />
					)
				) : null}
			</div>

			<div
				className={[
					"relative flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2",
					checked ? "border-sky-600 bg-sky-600" : "border-slate-300 bg-white",
				].join(" ")}>
				{focus && (
					<div className="absolute inset-[-6px] rounded-xl border-2 border-sky-400" />
				)}
				{checked && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
			</div>

			{folder && <Folder className="h-6 w-6 shrink-0 text-slate-500" />}

			<span className="truncate text-[12px] text-slate-700">{label}</span>
		</div>
	);
}

/* ---------------- SURFACE MINI COMPONENTS ---------------- */

function BusinessCardSurface() {
	return (
		<div className="w-full max-w-[420px] rounded-[22px] bg-sky-600 px-4 py-6 text-white shadow-[0_10px_30px_rgba(2,132,199,0.18)]">
			<div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/95">
				<Check className="h-6 w-6 text-sky-600" strokeWidth={3} />
			</div>

			<div className="mt-10 text-center">
				<h4 className="text-[20px] font-semibold tracking-[-0.02em]">
					Card Title
				</h4>
				<p className="mt-3 text-[16px] font-light text-white/90">
					EDK Card Description
				</p>
			</div>

			<div className="mt-8 flex justify-center">
				<button className="flex h-8 w-8 items-center justify-center rounded-full text-white/95 transition hover:bg-white/10">
					<Download className="h-10 w-10" strokeWidth={2.2} />
				</button>
			</div>
		</div>
	);
}

function EditorSurface() {
	const toolbarButton =
		"flex h-8 w-8 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100";
	const divider = <div className="mx-1 h-6 w-px bg-slate-300" />;

	return (
		<div className="w-full max-w-[780px] overflow-hidden rounded-[14px] border border-slate-400 bg-white shadow-sm">
			<div className="flex flex-wrap items-center border-b border-slate-300 bg-slate-50 px-3 py-2">
				<button className={`${toolbarButton} w-auto gap-2 px-3 font-semibold`}>
					H1 <ChevronDown className="h-4 w-4" />
				</button>
				<button className={`${toolbarButton} w-auto gap-2 px-3 font-semibold`}>
					<span className="text-lg">T</span>
					<ChevronDown className="h-4 w-4" />
				</button>
				<button className={`${toolbarButton} w-auto gap-2 px-3 font-semibold`}>
					<span className="text-lg">A</span>
					<ChevronDown className="h-4 w-4" />
				</button>

				{divider}

				<button className={`${toolbarButton} bg-slate-200`}>
					<Bold className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<Italic className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<Underline className="h-5 w-5" />
				</button>

				{divider}

				<button
					className={`${toolbarButton} w-auto gap-2 bg-sky-600 px-3 text-white hover:bg-sky-700`}>
					<AlignLeft className="h-5 w-5" />
					<ChevronDown className="h-4 w-4" />
				</button>

				<button className={toolbarButton}>
					<List className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<ListOrdered className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<AlignCenter className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<AlignRight className="h-5 w-5" />
				</button>

				{divider}

				<button className={toolbarButton}>
					<LinkIcon className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<ImageIcon className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<Table2 className="h-5 w-5" />
				</button>
				<button className={toolbarButton}>
					<Strikethrough className="h-5 w-5" />
				</button>
			</div>

			<div className="relative bg-white p-5">
				<div className="space-y-4 text-slate-900">
					<div>
						<h4 className="text-[18px] font-bold tracking-[-0.03em]">Title</h4>
						<p className="mt-4 max-w-[92%] text-[12px] leading-6 text-slate-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>

					<div>
						<h5 className="text-[18px] font-bold tracking-[-0.02em]">
							Subtitle
						</h5>

						<div className="relative mt-4 w-full max-w-[240px] overflow-hidden rounded-sm bg-slate-800">
							<div className="aspect-[4/2.5] bg-[linear-gradient(135deg,#111827_0%,#6b7280_40%,#1f2937_70%,#000_100%)]" />
							<div className="absolute inset-0 flex items-center justify-center text-[72px] font-semibold text-white/95">
								3:2
							</div>
						</div>
					</div>
				</div>

				<div className="pointer-events-none absolute left-[10%] -top-[18px] hidden rounded-xl border border-slate-300 bg-white shadow-lg lg:block">
					<div className="flex flex-col divide-y divide-slate-200">
						<div className="flex h-10 w-[48px] items-center justify-center">
							<AlignLeft className="h-5 w-5 text-slate-600" />
						</div>
						<div className="flex h-10 w-[48px] items-center justify-center">
							<AlignCenter className="h-5 w-5 text-slate-600" />
						</div>
						<div className="flex h-10 w-[48px] items-center justify-center">
							<AlignRight className="h-5 w-5 text-slate-600" />
						</div>
					</div>
					<div className="absolute left-4 top-[-8px] h-4 w-4 rotate-45 border-l border-t border-slate-300 bg-white" />
				</div>

				<div className="pointer-events-none absolute right-[5px] -top-[70px] hidden w-[190px] overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg lg:block">
					<div className="border-b border-slate-200 px-3 py-2 text-[12px] text-slate-600">
						Text Menu Sample
					</div>
					<div className="border-b border-slate-200 px-3 py-2 text-[16px] font-bold text-slate-700">
						Header 2
					</div>
					<div className="border-b border-slate-200 px-3 py-2 text-[14px] font-semibold text-slate-700">
						Header 3
					</div>
					<div className="border-b border-slate-200 px-3 py-2 text-[12px] font-semibold text-slate-700">
						Header 4
					</div>
					<div className="px-3 py-3 text-[12px] text-slate-500">Paragraph</div>
				</div>

				<div className="pointer-events-none absolute left-[25%] top-[140px] hidden rounded-xl border border-slate-300 bg-white shadow-lg lg:flex">
					<div className="flex items-center gap-2 px-4 py-3">
						<AlignLeft className="h-5 w-5 text-slate-600" />
						<AlignCenter className="h-5 w-5 text-slate-600" />
						<ImageIcon className="h-5 w-5 text-slate-600" />
					</div>
					<div className="absolute left-8 top-full h-4 w-4 -translate-y-2 rotate-45 border-b border-r border-slate-300 bg-white" />
				</div>
			</div>

			<div className="flex items-center justify-between border-t border-slate-300 px-3 py-2 text-sm text-slate-500">
				<span>H1</span>
				<span>28 Characters</span>
			</div>
		</div>
	);
}

function PopoverSurface() {
	return (
		<div className="grid w-full max-w-[360px] grid-cols-1 gap-6 md:grid-cols-2">
			<div className="flex flex-col items-start gap-4">
				<div className="relative rounded-lg bg-sky-600 px-4 py-4 text-[12px] leading-5 text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<div className="absolute bottom-[-10px] left-8 h-5 w-5 rotate-45 bg-sky-600" />
				</div>

				<div className="mt-2 flex h-21 w-21 items-center justify-center rounded-full bg-sky-600 text-[24px] font-semibold tracking-[-0.03em] text-white">
					AB
				</div>
			</div>

			<div className="flex flex-col gap-5">
				<div className="rounded-2xl bg-slate-200 px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
					<div className="flex items-center gap-4 text-slate-600">
						<House className="h-6 w-6" strokeWidth={1.8} />
						<span className="text-[14px] font-medium tracking-[-0.03em]">
							Back to Home
						</span>
					</div>
				</div>

				<div className="mt-2 relative rounded-2xl bg-sky-600 px-4 py-4 text-[12px] leading-5 text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<div className="absolute left-9 top-[-10px] h-5 w-5 rotate-45 bg-sky-600" />
				</div>
			</div>
		</div>
	);
}

function ResultSurface() {
	return (
		<div className="w-full max-w-[520px] rounded-[24px] bg-[#f3f4f6] px-4 py-6 text-center">
			<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
				<Check className="h-6 w-6 text-white" strokeWidth={3.5} />
			</div>

			<h4 className="mt-4 text-[12px] font-semibold tracking-[-0.03em] text-slate-700 sm:text-[16px]">
				Thank you for your purchase!
			</h4>

			<p className="mt-1 text-[12px] text-slate-500 sm:text-[12px]">
				Your order was completed successfully.
			</p>

			<div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
				<button className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-sky-600 px-2 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-sky-700">
					<Download className="h-6 w-6" />
					Download Invoice
				</button>

				<button className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-slate-200 px-2 py-2 text-[12px] font-semibold text-slate-600 transition hover:bg-slate-300">
					<RotateCcw className="h-6 w-6" />
					Buy Again
				</button>
			</div>
		</div>
	);
}

/* ---------------- MINI COMPONENTS ---------------- */

function MiniAccordion() {
	const [open, setOpen] = useState(1);

	const items = [
		{ id: 1, title: "Accordion 1", body: "" },
		{
			id: 2,
			title: "Accordion 2",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu, vitae dignissim quam.",
		},
		{ id: 3, title: "Accordion 3", body: "" },
	];

	return (
		<div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-slate-300 bg-white">
			{items.map((item) => (
				<div
					key={item.id}
					className="border-b border-slate-300 last:border-b-0">
					<button
						onClick={() => setOpen(open === item.id ? 0 : item.id)}
						className="flex w-full items-center justify-between px-5 py-4 text-left">
						<span className="text-lg font-semibold text-slate-900">
							{item.title}
						</span>
						<ChevronDown
							className={[
								"h-6 w-6 transition",
								open === item.id ? "rotate-180" : "",
							].join(" ")}
						/>
					</button>
					{open === item.id && item.body && (
						<div className="px-6 pb-6 text-lg leading-9 text-slate-600">
							{item.body}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

function WideTopTabs() {
	const [topTab, setTopTab] = useState("tab1");

	const tabContent = {
		tab1: {
			title:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
			visual: "bg-sky-900/90",
		},
		tab2: {
			title:
				"Motif UI helps teams create predictable service flows with familiar interaction patterns.",
			visual: "bg-slate-700",
		},
		tab3: {
			title:
				"Reusable navigation structures reduce decision fatigue across enterprise products.",
			visual: "bg-indigo-900/80",
		},
		tab4: {
			title:
				"Tabbed content creates a cleaner separation between dense information layers.",
			visual: "bg-teal-900/80",
		},
	} as const;

	const current = tabContent[topTab as keyof typeof tabContent];

	return (
		<div className="w-full max-w-[920px]">
			<div className="overflow-x-auto">
				<div className="flex min-w-max items-center gap-8 border-b border-slate-300 px-1 pb-2">
					{[
						{ id: "tab1", label: "Tab 1", icon: Home },
						{ id: "tab2", label: "Tab 2", icon: User },
						{ id: "tab3", label: "Tab 3", icon: Boxes },
						{ id: "tab4", label: "Tab 4", icon: FileText },
					].map((tab) => {
						const Icon = tab.icon;
						const isActive = topTab === tab.id;

						return (
							<button
								key={tab.id}
								onClick={() => setTopTab(tab.id)}
								className={[
									"flex items-center gap-2 border-b-[3px] pb-3 whitespace-nowrap text-[16px] font-semibold transition",
									isActive
										? "border-sky-600 text-sky-600"
										: "border-transparent text-slate-400 hover:text-slate-700",
								].join(" ")}>
								<Icon className="h-5 w-5" />
								{tab.label}
							</button>
						);
					})}
				</div>
			</div>

			<div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start">
				<div
					className={`h-[120px] w-full max-w-[180px] rounded-md ${current.visual}`}
				/>
				<p className="max-w-[620px] text-[14px] leading-7 text-slate-800">
					{current.title}
				</p>
			</div>
		</div>
	);
}

function DropdownShowcase() {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState("item-colored");

	const items = [
		{ id: "header", label: "This Is A Header", type: "header" },
		{ id: "item-icon", label: "Item With Icon", icon: Home },
		{ id: "item-action", label: "Item With Action" },
		{ id: "item-disabled", label: "Item Disabled", icon: Home, disabled: true },
		{ id: "item-colored", label: "Item With Colored Icon", color: "red" },
		{ id: "item-success", label: "Item Success", color: "green" },
	];

	return (
		<div className="relative w-[320px]">
			<button
				onClick={() => setOpen((v) => !v)}
				className={[
					"relative z-20 flex h-[52px] w-full items-center justify-between rounded-xl border bg-white px-4 text-left shadow-sm transition",
					open
						? "border-sky-300 ring-4 ring-sky-200"
						: "border-slate-300 hover:border-slate-400",
				].join(" ")}>
				<span className="flex items-center gap-3 text-[14px] text-slate-800">
					<User className="h-5 w-5 text-slate-800" />
					Dropdown Menu
				</span>
				<ChevronDown
					className={`h-4 w-4 text-slate-700 transition ${open ? "rotate-180" : ""}`}
				/>
			</button>

			{open && (
				<div className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl">
					<div className="absolute right-6 top-[-6px] h-3 w-3 rotate-45 border-l border-t border-slate-300 bg-white" />

					{items.map((item) => {
						if (item.type === "header") {
							return (
								<div
									key={item.id}
									className="border-b border-slate-300 px-4 py-4 text-[14px] text-slate-400">
									{item.label}
								</div>
							);
						}

						const Icon = item.icon;

						return (
							<button
								key={item.id}
								disabled={item.disabled}
								onClick={() => {
									if (item.disabled) return;
									setSelected(item.id);
									setOpen(false);
								}}
								className={[
									"flex w-full items-center justify-between border-b border-slate-300 px-4 py-4 text-left transition last:border-b-0",
									item.disabled
										? "cursor-not-allowed text-slate-400"
										: "text-slate-700 hover:bg-slate-50",
									selected === item.id ? "bg-slate-50" : "",
								].join(" ")}>
								<span className="flex items-center gap-3 text-[14px]">
									{Icon && (
										<Icon
											className={[
												"h-5 w-5",
												item.disabled ? "text-slate-400" : "text-slate-700",
											].join(" ")}
										/>
									)}

									{item.color === "red" && (
										<span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
											✓
										</span>
									)}

									{item.color === "green" && (
										<span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] text-white">
											✓
										</span>
									)}

									<span>{item.label}</span>
								</span>

								{selected === item.id && !item.disabled && (
									<span className="text-sky-600">✓</span>
								)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

function SelectShowcase() {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState("Item 3");

	const options = ["Item 1", "Item 2", "Item 3", "Cities", "Istanbul"];

	return (
		<div className="relative w-[320px]">
			<button
				onClick={() => setOpen((v) => !v)}
				className="flex h-[52px] w-[320px] items-center justify-between rounded-xl border border-slate-400 bg-white px-6 text-left text-[16px] text-slate-800">
				<span>{selected}</span>
				<ChevronDown
					className={`h-4 w-4 text-slate-700 transition ${open ? "rotate-180" : ""}`}
				/>
			</button>

			{open && (
				<div className="absolute left-0 top-[calc(100%+8px)] z-30 w-[320px] max-h-[260px] overflow-y-auto rounded-xl border border-slate-400 bg-white shadow-lg">
					{options.map((item) => {
						const isGroup = item === "Cities";
						const isSelected = selected === item;

						return (
							<button
								key={item}
								onClick={() => {
									if (isGroup) return;
									setSelected(item);
									setOpen(false);
								}}
								className={[
									"flex min-h-[56px] w-full items-center justify-between border-b border-slate-300 px-6 py-4 text-left text-[16px] last:border-b-0",
									isGroup
										? "cursor-default text-slate-400"
										: isSelected
											? "bg-slate-100 text-sky-600"
											: "text-slate-800 hover:bg-slate-50",
								].join(" ")}>
								<span>{item}</span>
								{isSelected && !isGroup && (
									<span className="text-sky-600">✓</span>
								)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

function RangeBetween() {
	const MIN = 0;
	const MAX = 100;

	const [minVal, setMinVal] = useState(20);
	const [maxVal, setMaxVal] = useState(80);

	const handleMinChange = (value: number) => {
		setMinVal(Math.min(value, maxVal - 1));
	};

	const handleMaxChange = (value: number) => {
		setMaxVal(Math.max(value, minVal + 1));
	};

	const leftPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
	const rightPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

	return (
		<div className="w-full">
			<p className="mb-4 text-sm font-semibold text-slate-800">Age Between</p>

			<div className="relative h-10">
				<div className="absolute left-0 right-0 top-4 h-2 rounded-full bg-slate-200" />

				<div
					className="absolute top-4 h-2 rounded-full bg-sky-600"
					style={{
						left: `${leftPercent}%`,
						width: `${rightPercent - leftPercent}%`,
					}}
				/>

				<div
					className="absolute top-1.5 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-sky-600 bg-white shadow"
					style={{ left: `${leftPercent}%` }}
				/>

				<div
					className="absolute top-1.5 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-sky-600 bg-white shadow"
					style={{ left: `${rightPercent}%` }}
				/>

				<input
					type="range"
					min={MIN}
					max={MAX}
					value={minVal}
					onChange={(e) => handleMinChange(Number(e.target.value))}
					className="range-thumb absolute inset-0 h-10 w-full opacity-0"
				/>

				<input
					type="range"
					min={MIN}
					max={MAX}
					value={maxVal}
					onChange={(e) => handleMaxChange(Number(e.target.value))}
					className="range-thumb absolute inset-0 h-10 w-full opacity-0"
				/>
			</div>

			<div className="mt-4 flex items-center justify-between text-sm text-slate-600">
				<span>{minVal}</span>
				<span>{maxVal}</span>
			</div>

			<p className="mt-3 text-sm text-slate-500">Please choose an age range</p>

			<style jsx>{`
				.range-thumb {
					-webkit-appearance: none;
					appearance: none;
					background: transparent;
					pointer-events: none;
				}

				.range-thumb::-webkit-slider-thumb {
					-webkit-appearance: none;
					appearance: none;
					height: 28px;
					width: 28px;
					border-radius: 9999px;
					background: transparent;
					cursor: pointer;
					pointer-events: auto;
				}

				.range-thumb::-moz-range-thumb {
					height: 28px;
					width: 28px;
					border: none;
					border-radius: 9999px;
					background: transparent;
					cursor: pointer;
					pointer-events: auto;
				}
			`}</style>
		</div>
	);
}

function MiniDateRangePicker() {
	const [leftMonth, setLeftMonth] = useState(new Date(2026, 2, 1));
	const [startDate, setStartDate] = useState<Date | null>(
		new Date(2026, 2, 10),
	);
	const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 3, 30));

	const rightMonth = new Date(
		leftMonth.getFullYear(),
		leftMonth.getMonth() + 1,
		1,
	);

	const handleDayClick = (date: Date) => {
		if (!startDate || (startDate && endDate)) {
			setStartDate(date);
			setEndDate(null);
			return;
		}

		if (date < startDate) {
			setStartDate(date);
			return;
		}

		setEndDate(date);
	};

	const clear = () => {
		setStartDate(null);
		setEndDate(null);
	};

	return (
		<div className="w-full rounded-2xl border border-slate-200 bg-white p-4">
			<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
				<button className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800 lg:min-w-[120px]">
					Today
					<ChevronDown className="ml-3 h-4 w-4" />
				</button>

				<div className="flex flex-wrap gap-2">
					<DateInput value={startDate} />
					<DateInput value={endDate} />
				</div>
			</div>

			<div className="my-4 h-px bg-slate-200" />

			<div className="grid grid-cols-1 gap-4 xl:grid-cols-[48px_1fr_1fr_48px] xl:items-start">
				<div className="hidden justify-center pt-10 xl:flex">
					<button
						onClick={() =>
							setLeftMonth(
								new Date(leftMonth.getFullYear(), leftMonth.getMonth() - 1, 1),
							)
						}
						className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
						<ChevronLeft className="h-5 w-5" />
					</button>
				</div>

				<MonthBlockInteractive
					monthDate={leftMonth}
					startDate={startDate}
					endDate={endDate}
					onDayClick={handleDayClick}
				/>

				<MonthBlockInteractive
					monthDate={rightMonth}
					startDate={startDate}
					endDate={endDate}
					onDayClick={handleDayClick}
				/>

				<div className="hidden justify-center pt-10 xl:flex">
					<button
						onClick={() =>
							setLeftMonth(
								new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1),
							)
						}
						className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>
			</div>

			<div className="mt-4 flex justify-end gap-2">
				<button
					onClick={clear}
					className="rounded-xl bg-slate-200 px-4 py-2 font-semibold text-slate-700">
					Clear
				</button>

				<button className="rounded-xl bg-sky-600 px-4 py-2 font-semibold text-white">
					OK
				</button>
			</div>
		</div>
	);
}

function DateInput({ value }: { value: Date | null }) {
	const formatted = value
		? `${String(value.getDate()).padStart(2, "0")}/${String(
				value.getMonth() + 1,
			).padStart(2, "0")}/${value.getFullYear()}`
		: "--/--/----";

	return (
		<div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-3 text-sm text-slate-700">
			<CalendarDays className="h-4 w-4 text-slate-400" />
			{formatted}
		</div>
	);
}

function MonthBlockInteractive({
	monthDate,
	startDate,
	endDate,
	onDayClick,
}: {
	monthDate: Date;
	startDate: Date | null;
	endDate: Date | null;
	onDayClick: (date: Date) => void;
}) {
	const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const year = monthDate.getFullYear();
	const month = monthDate.getMonth();

	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);

	const firstWeekDay = (firstDay.getDay() + 6) % 7;
	const totalDays = lastDay.getDate();

	const cells: (Date | null)[] = [];

	for (let i = 0; i < firstWeekDay; i++) cells.push(null);
	for (let day = 1; day <= totalDays; day++) {
		cells.push(new Date(year, month, day));
	}
	while (cells.length % 7 !== 0) cells.push(null);

	const isSameDay = (a: Date | null, b: Date | null) =>
		!!a &&
		!!b &&
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth() &&
		a.getDate() === b.getDate();

	const isInRange = (date: Date) =>
		startDate && endDate && date > startDate && date < endDate;

	return (
		<div>
			<div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-slate-700">
				<span>{monthNames[month]}</span>
				<span>{year}</span>
			</div>

			<div className="mb-2 grid grid-cols-7 gap-1">
				{labels.map((label) => (
					<div
						key={label}
						className="flex h-7 items-center justify-center text-[11px] font-semibold text-slate-400">
						{label}
					</div>
				))}
			</div>

			<div className="grid grid-cols-7 gap-1">
				{cells.map((date, index) => {
					if (!date) {
						return <div key={index} className="h-8" />;
					}

					const isStart = isSameDay(date, startDate);
					const isEnd = isSameDay(date, endDate);
					const between = isInRange(date);

					return (
						<button
							key={index}
							onClick={() => onDayClick(date)}
							className={[
								"flex h-8 items-center justify-center rounded-[6px] text-xs font-semibold transition",
								isStart
									? "border-2 border-sky-300 bg-sky-100 text-slate-700"
									: isEnd
										? "bg-sky-600 text-white"
										: between
											? "bg-[#EAF4FB] text-slate-700"
											: "text-slate-600 hover:bg-slate-100",
							].join(" ")}>
							{date.getDate()}
						</button>
					);
				})}
			</div>
		</div>
	);
}

function MonthBlock({
	title,
	year,
	days,
	startDay,
	endDay,
	inRange = [],
}: {
	title: string;
	year: string;
	days: string[][];
	startDay?: string;
	endDay?: string;
	inRange?: string[];
}) {
	const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

	return (
		<div>
			<div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-slate-700">
				<span>{title}</span>
				<span>{year}</span>
			</div>

			<div className="mb-2 grid grid-cols-7 gap-1">
				{labels.map((label) => (
					<div
						key={label}
						className="flex h-7 items-center justify-center text-[11px] font-semibold text-slate-400">
						{label}
					</div>
				))}
			</div>

			<div className="grid gap-1">
				{days.map((week, i) => (
					<div key={i} className="grid grid-cols-7 gap-1">
						{week.map((day, j) => {
							const isEmpty = !day;
							const isStart = day === startDay;
							const isEnd = day === endDay;
							const isRangeDay = inRange.includes(day);

							return (
								<div
									key={`${i}-${j}`}
									className={[
										"flex h-8 items-center justify-center rounded-[6px] text-xs font-semibold",
										isEmpty
											? "text-transparent"
											: isStart
												? "border-2 border-sky-300 bg-sky-100 text-slate-700"
												: isEnd
													? "bg-sky-600 text-white"
													: isRangeDay
														? "bg-[#EAF4FB] text-slate-600"
														: "text-slate-600",
									].join(" ")}>
									{day || "."}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}
