"use client";
import { useRef, useState } from "react";
import { ListViewSurface } from "./list-view";
import {
	Accordion,
	Alert,
	Avatar,
	Breadcrumb,
	BusinessCard,
	Button,
	Card,
	DateRangePicker,
	Dropdown,
	Form,
	Grid,
	Icon,
	InputPassword,
	InputText,
	MenuList,
	Panel,
	Popover,
	Radio,
	RadioGroup,
	Select,
	Slider,
	SliderRange,
	Switch,
	Tab,
	Text,
	UploadInput,
	UploadList,
	Validations,
} from "@motif-ui/react";

export default function MotifComponentMatrixSection() {
	const tabs = [
		{ id: "forms", label: "Forms", icon: "description" },
		{ id: "navigation", label: "Navigation", icon: "home" },
		{ id: "feedback", label: "Feedback", icon: "info_outline" },
		{ id: "surfaces", label: "Surfaces", icon: "border_all" },
	] as const;

	const [activeTab, setActiveTab] = useState<string>("forms");

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

			<div className="mb-2 flex justify-center">
				<Tab
					onTabChange={setActiveTab}
					tabs={tabs.map(({ id, label, icon }) => ({ id, icon, title: label }))}
				/>
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

			<div className="flex min-h-[220px] items-start rounded-2xl p-3 sm:p-6 backdrop-blur-[1px]">
				{children}
			</div>
		</div>
	);
}

/* ---------------- FORMS ---------------- */

function FormsMatrix() {
	const today = new Date();
	const tenDaysLater = new Date();
	tenDaysLater.setDate(today.getDate() + 10);

	return (
		<MatrixShell>
			<Cell
				title="Date Range Picker"
				description="Large date-range selection surfaces support filtering, scheduling, and reporting flows in enterprise interfaces."
				className="md:col-span-2 xl:col-span-2">
				<div className="w-full overflow-x-auto overscroll-x-contain pb-2 touch-pan-x">
					<div className="min-w-[720px]">
						<DateRangePicker variant="bordered" value={[today, tenDaysLater]} />
					</div>
				</div>
			</Cell>

			<Cell
				title="Selection Controls"
				description="Radio buttons and switches present form decisions with a clean hierarchy and clear emphasis.">
				<Form onSubmit={() => {}} className="w-full">
					<Form.Field
						name="username"
						label="Username"
						helperText="Please enter your username.">
						<InputText value="Motif UI" />
					</Form.Field>
					<Form.Field
						name="password"
						label="Password"
						helperText="Please enter your password.">
						<InputPassword toggleMask value="password" />
					</Form.Field>
					<Form.Field
						name="blackwhite"
						label="Black or White"
						validations={[Validations.Required]}
						helperText="You have to choose one">
						<RadioGroup name="blackwhite" orientation="horizontal">
							<Radio value="black" label="Black" />
							<Radio value="white" label="White" />
						</RadioGroup>
					</Form.Field>
					<Form.Field
						name="terms"
						label="Terms and Conditions"
						validations={[Validations.Required]}
						helperText="I agree to the terms and conditions.">
						<Switch />
					</Form.Field>
				</Form>
			</Cell>

			<Cell
				title="Upload Inputs"
				description="Browse and drag-and-drop file flows can live within the same visual language.">
				<Form
					onSubmit={() => {}}
					submitButtonLabel=""
					className="w-full -mb-12"
					style={{ minWidth: "auto" }}>
					<Form.Field
						name="personaldocument"
						label="Personal Document"
						helperText="Upload any type of personal document">
						<UploadInput
							uploadRequest={{ method: "POST", url: "https://" }}
							deleteRequest={{ method: "POST", url: "https://" }}
							maxSize={1}
						/>
					</Form.Field>
					<Form.Field
						name="identityregister"
						label="Identitiy Register Copy"
						helperText="Upload any type of file, max size 1 MB"
						validations={[Validations.RequiredUploadedFile]}>
						<UploadList
							uploadRequest={{ method: "POST", url: "https://" }}
							deleteRequest={{ method: "POST", url: "https://" }}
							maxSize={1}
						/>
					</Form.Field>
				</Form>
			</Cell>

			<Cell
				title="Range Slider"
				description="Single-value sliders remain clean and readable on dense data entry screens.">
				<Form
					onSubmit={() => {}}
					submitButtonLabel=""
					className="w-full -mb-12">
					<Form.Field
						name="slider"
						label="Minimum Distance"
						helperText="Please choose a minimum distance: 30">
						<Slider value={30} />
					</Form.Field>
				</Form>
			</Cell>

			<Cell
				title="Range Between"
				description="Dual-handle range selection works well for filters such as age, price, or distance.">
				<Form
					onSubmit={() => {}}
					submitButtonLabel=""
					className="w-full -mb-12">
					<Form.Field
						name="range"
						label="Age Between"
						helperText="Please choose an age range">
						<SliderRange value={[30, 80]} min={20} max={90} />
					</Form.Field>
				</Form>
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- NAVIGATION ---------------- */

function NavigationMatrix() {
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
				<div className="w-full max-w-[360px] rounded-2xl border border-slate-200 bg-white p-1">
					<MenuList
						footerText="© All rights reserved."
						logo="https://cdn.e-devlet.gov.tr/downloads/kurumsal-kimlik/logo/e-devlet-logo.png"
						items={[
							{ label: "Home", icon: "home", href: "/", active: true },
							{ label: "About", icon: "info", disabled: true },
							{
								label: "Contact",
								icon: "person",
								targetBlank: true,
								href: "https://motif-ui.com/",
								chip: { label: "New", variant: "success" },
							},
							{
								label: "SubMenu",
								icon: "folder",
								items: [
									{ label: "SubMenu 1", href: "#" },
									{ label: "SubMenu 2", href: "#" },
								],
							},
						]}
					/>
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
					<Breadcrumb
						items={[
							{ label: "Link", path: "#" },
							{ label: "Link", path: "#" },
							{ label: "Link", path: "#" },
							{ label: "Current Page", path: "#" },
						]}
					/>
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
				<Alert
					message="This is a test message for the Alert component."
					title="Alert Title"
					className="w-full max-w-[420px]"
					variant="info"
				/>
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
				title="List View"
				description="List views help users browse structured collections of items, scan content efficiently, and select or interact with individual entries.">
				<ListViewSurface />
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- SURFACES ---------------- */

function SurfacesMatrix() {
	return (
		<MatrixShell>
			<Cell
				title="Card"
				description="Custom card components serve as the primary surface for services, navigation, and content emphasis.">
				<Card
					className="w-full max-w-[360px]"
					contentText="Alternate text"
					contentTitle="Custom Card Title"
					contentSubtitle="This is a small text to describe the card"
					contentLink={{ text: "Link Item", href: "#" }}
					contentImage="https://picsum.photos/400/200"
					contentActionButton={{ text: "Action", onClick: () => {} }}
					contentAlternateButton={{ text: "Alternate", onClick: () => {} }}
				/>
			</Cell>

			<Cell
				title="Simple Card"
				description="Icon, title, subtitle, and actions arranged in a single row.">
				<div className="w-full max-w-[420px] flex flex-col gap-6">
					<Card
						outlined
						title="Card Header Title"
						subtitle="Motif Card Subtitle"
						imagePosition="right"
						icon="folder"
						image="https://picsum.photos/100"
					/>
					<Card
						elevated
						title="Card Header Title"
						subtitle="Motif Card Subtitle"
						imagePosition="left"
						avatarText="MA"
						image="https://picsum.photos/80"
						action={{ icon: "download", onClick: () => {} }}
					/>
				</div>
			</Cell>

			<Cell
				title="Business Card"
				description="A large call-to-action card combines iconography, strong hierarchy, and a single primary action within one branded surface.">
				<BusinessCard
					className="w-full max-w-[420px]"
					title="Card Title"
					description="Business card description goes here. It can be a bit longer to show text wrapping behavior."
					solid
					variant="info"
					icon="check_circle"
					iconButton={{ icon: "download", onClick: () => {} }}
				/>
			</Cell>

			<Cell
				title="Panel"
				description="Panels help users organize related content and actions within a distinct container, providing clear separation and structure within the interface.">
				<Panel
					type="solid"
					className="w-full max-w-[780px]"
					title="Panel Title"
					titleIcon="home"
					bordered>
					<Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				</Panel>
			</Cell>

			<Cell
				title="Popover"
				description="Popover layers support anchored guidance, quick actions, and contextual messaging without disrupting the main layout.">
				<PopoverSurface />
			</Cell>

			<Cell
				title="Grid"
				description="Grids help users display and navigate structured data in rows and columns, enabling efficient scanning, comparison, and interaction across multiple items.">
				<div className="w-full max-w-[520px] rounded-[4px] bg-[#f3f4f6] text-center">
					<Grid colProps={{ style: { border: "solid 1px #CCC" } }} fluid>
						<Grid.Row>
							<Grid.Col size={3}>4 Cols</Grid.Col>
							<Grid.Col size={3}>4 Cols</Grid.Col>
							<Grid.Col size={3}>4 Cols</Grid.Col>
							<Grid.Col size={3}>4 Cols</Grid.Col>
						</Grid.Row>
						<Grid.Row>
							<Grid.Col size={4}>3 Cols</Grid.Col>
							<Grid.Col size={4}>3 Cols</Grid.Col>
							<Grid.Col size={4}>3 Cols</Grid.Col>
						</Grid.Row>
						<Grid.Row>
							<Grid.Col size={6}>2 Cols</Grid.Col>
							<Grid.Col size={6}>2 Cols</Grid.Col>
						</Grid.Row>
						<Grid.Row>
							<Grid.Col size={12}>1 Column</Grid.Col>
						</Grid.Row>
					</Grid>
				</div>
			</Cell>
		</MatrixShell>
	);
}

/* ---------------- FEEDBACK MINI COMPONENTS ---------------- */

function TooltipShowcase() {
	return (
		<div className="w-full max-w-[760px]">
			<div className="flex items-center justify-center gap-10 text-slate-500">
				<Icon name="home" size="xxl" />
				<Icon name="mail" size="xxl" />
				<Icon name="cases" size="xxl" />
			</div>

			<div className="relative mx-auto mt-2 flex w-[290px] justify-center">
				<div
					className="mtf-Tooltip mtf-Tooltip--lg mtf-Tooltip--bottom mtf-Tooltip--visible mtf-Tooltip--dark"
					role="tooltip"
					style={{ position: "relative" }}>
					<div className="mtf-Tooltip--triangle"></div>
					<div className="mtf-Tooltip--textWrapper">
						<span className="mtf-Tooltip--title">Icon Name</span>
						<span className="mtf-Tooltip--text">Mail</span>
					</div>
				</div>
			</div>

			<div className="relative mt-10 flex justify-center">
				<div
					className="mtf-Tooltip mtf-Tooltip--md mtf-Tooltip--top mtf-Tooltip--visible mtf-Tooltip--light relative"
					role="tooltip">
					<div className="mtf-Tooltip--triangle"></div>
					<div className="mtf-Tooltip--textWrapper">
						<span className="mtf-Tooltip--text">
							This will submit your form information.
						</span>
					</div>
				</div>
			</div>

			<div className="mt-12 flex justify-center">
				<Button label="Submit Form" variant="success" size="xl" />
			</div>
		</div>
	);
}

function ToastSurface() {
	const toasts = [
		{ variant: "danger", icon: "priority_high" },
		{ variant: "secondary", icon: "info" },
		{ variant: "success", icon: "check" },
	];
	return (
		<div className="w-full max-w-[520px] space-y-4">
			{toasts.map(({ variant, icon }) => (
				<div
					key={`${variant}-${icon}`}
					className={`mtf-Toast mtf-Toast--${variant}`}
					style={{ width: "auto" }}>
					<span
						className={`mtf-Icon mtf-Icon--xxl mtf-Icon--${variant} mtf-ui-icons mtf-Toast--icon`}>
						{icon}
					</span>
					<div className="mtf-Toast--contentContainer">
						<span className="mtf-Toast--title">Toast Title</span>
						<span className="mtf-Toast--content">Toast content</span>
					</div>
					<button
						className="mtf-IconButton mtf-IconButton--lg mtf-IconButton--secondary mtf-MotifIcon--motifIconsDefault"
						type="button">
						close
					</button>
				</div>
			))}
		</div>
	);
}

function ModalSurface() {
	return (
		<div>
			<div
				className="mtf-Modal--modal"
				style={{
					visibility: "visible",
					opacity: 1,
					transform: "none",
					top: 0,
					left: 0,
					scale: 1,
					position: "relative",
					maxWidth: "initial",
				}}>
				<button
					className="mtf-IconButton mtf-IconButton--xxl mtf-IconButton--secondary mtf-MotifIcon--motifIconsDefault mtf-Modal--closeButton"
					type="button">
					close
				</button>
				<div className="mtf-Modal--header">
					<div className="mtf-Modal--headerContent">
						<span className="mtf-Modal--headerTitle">Modal Title</span>
						<span className="mtf-Modal--headerSubtitle">Modal Subtitle</span>
					</div>
				</div>
				<div className="mtf-Modal--content">
					<div>
						<h4>MODAL</h4>
						<p>
							Modal Content Text Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Proin sed tristique tellus. Morbi vel sodales
							urna. Duis felis leo, lacinia id imperdiet ac, molestie ut neque.
						</p>
					</div>
				</div>
				<div className="mtf-Modal--actions">
					<button
						className="mtf-Button mtf-Button--primary mtf-Button--solid mtf-Button--md mtf-Button--pill"
						type="button">
						<span>Action</span>
					</button>
					<button
						className="mtf-Button mtf-Button--secondary mtf-Button--outline mtf-Button--md mtf-Button--pill"
						type="button">
						<span>Close</span>
					</button>
				</div>
			</div>
		</div>
	);
}

function PopoverSurface() {
	const avatarRef = useRef(null);
	const buttonRef = useRef(null);
	return (
		<div className="grid w-full max-w-[360px] grid-cols-1 gap-6 md:grid-cols-2 h-44">
			<div className="flex flex-col justify-end items-center">
				<Avatar letters="AB" ref={avatarRef} size="xxl" variant="primary" />
				<Popover anchorRef={avatarRef} open placeOn="top" variant="primary">
					<div className="w-35 p-3">
						Lorem ipsum dolor sit amet, consectetur...
					</div>
				</Popover>
			</div>

			<div className="flex flex-col justify-start items-center">
				<Button
					label="Back to Home"
					icon="home"
					ref={buttonRef}
					variant="secondary"
					pill
				/>
				<Popover anchorRef={buttonRef} open placeOn="bottom" variant="light">
					<div className="w-35 p-3">
						Lorem ipsum dolor sit amet, consectetur...
					</div>
				</Popover>
			</div>
		</div>
	);
}

/* ---------------- MINI COMPONENTS ---------------- */

function MiniAccordion() {
	const items = [
		{ id: 1, title: "Accordion 1" },
		{ id: 2, title: "Accordion 2" },
		{ id: 3, title: "Accordion 3" },
	];

	return (
		<div className="w-full max-w-[380px] overflow-hidden">
			<Accordion.Group>
				{items.map((item, index) => (
					<Accordion
						index={index}
						key={item.id}
						title={item.title}
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu, vitae dignissim quam."
					/>
				))}
			</Accordion.Group>
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
				<style>
					{`
                    .tabsPlayground > div:last-child {
						display: flex;
						align-self: stretch;
						margin-top: 0.5rem;
						border-top: 1px solid #ddd;
						padding: 0 0.25rem 0.5rem;
                    }
                    `}
				</style>
				<Tab
					type="solid"
					position="left"
					onTabChange={setTopTab}
					className="tabsPlayground"
					tabs={[
						{ id: "tab1", label: "Tab 1", icon: "home" },
						{ id: "tab2", label: "Tab 2", icon: "person" },
						{ id: "tab3", label: "Tab 3", icon: "border_all" },
						{ id: "tab4", label: "Tab 4", icon: "description" },
					].map(({ id, label, icon }) => ({ id, icon, title: label }))}>
					{["1", "2", "3", "4"].map((item) => (
						<Tab.Panel key={item} id={`tab${item}`}>
							<div className="mt-4 flex flex-1 flex-col gap-4 md:flex-row md:items-start">
								<div
									className={`h-[120px] w-full max-w-[180px] rounded-md ${current.visual}`}
								/>
								<p className="max-w-[620px] text-[14px] leading-7 text-slate-800">
									{current.title}
								</p>
							</div>
						</Tab.Panel>
					))}
				</Tab>
			</div>
		</div>
	);
}

function DropdownShowcase() {
	return (
		<Dropdown
			className="w-[320px]"
			label="Dropdown Menu"
			variant="secondary"
			items={[
				{ header: "This Is A Header" },
				{ label: "Item With Icon", icon: "home" },
				{ label: "Item With Action", action: () => alert("Item Clicked") },
				{ label: "Item Disabled", icon: "home", disabled: true },
				{ label: "Item With Colored Icon", icon: "warning", iconColor: "red" },
				{ label: "Item Success", icon: "check_circle", iconColor: "green" },
			]}
		/>
	);
}

function SelectShowcase() {
	return (
		<Select
			className="w-[320px]"
			data={[
				{ label: "Item 1", value: "i1" },
				{ label: "Item 2", value: "i2" },
				{
					groupLabel: "Cities",
					groupKey: "cities",
					items: [
						{ label: "İstanbul", value: "34" },
						{ label: "Ankara", value: "06" },
					],
				},
				{
					groupLabel: "Districts",
					groupKey: "districts",
					items: [
						{ label: "Gölbaşı", value: "golbasi" },
						{ label: "Çankaya", value: "cankaya" },
					],
				},
			]}
		/>
	);
}
