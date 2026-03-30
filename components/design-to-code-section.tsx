"use client";
import { useMemo, useState } from "react";
import {
	ChevronLeft,
	ChevronRight,

} from "lucide-react";
import {
    Accordion,
    Card,
    DataView,
    Pagination,
    PinCode,
    Select, Table,
    TimePicker,
    UploadDragger
} from "@motif-ui/react";
type ComponentKey =
	| "card"
	| "dataview"
	| "timepicker"
	| "upload"
	| "accordion"
	| "select"
	| "table"
	| "pincode"
	| "pagination";
const componentOrder: ComponentKey[] = [
	"card",
	"dataview",
	"timepicker",
	"upload",
	"accordion",
	"select",
	"table",
	"pincode",
	"pagination",
];
const componentLabels: Record<ComponentKey, string> = {
	card: "Card",
	dataview: "DataView",
	timepicker: "TimePicker",
	upload: "UploadDragger",
	accordion: "Accordion",
	select: "Select",
	table: "Table",
	pincode: "PinCode",
	pagination: "Pagination",
};
export default function CompactDesignToCodeSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectItems, setSelectItems] = useState<string[]>(["06", "34", "golbasi", "cankaya" ]);
	const [pinValues, setPinValues] = useState(["X", "Y", "", "", "T", "M"]);
	const [paginationPage, setPaginationPage] = useState(3);
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
			card: `export default CardUse = () => {
   return (
      <Card
        title="Card Header Title"
        subtitle="Motif Card Subtitle"
        icon="folder"
        action={{icon: "download", onClick: () => {}}}
        contentImage="https://picsum.photos/500/220"
        contentTitle="Card Content Title"
        contentSubtitle="Card Content Subtitle"
        contentText="Motif Card Supporting Text"
        contentLink={{text: "Motif Link", href: "#"}}
        contentActionButton={{text: "Action", onClick: ()=>{}}}
        contentAlternateButton={{text: "Alternate", onClick: ()=>{}}}
        contentActionLink={{text: "Motif Link", href: "#"}}
        elevated />
   );
};`,
			dataview: `export default DataViewUse = () => {
    return (
        <DataView rowVariant="solid">
            <DataView.Item label="Name" value="Motif" />
            <DataView.Item label="Platform" value="Web, mobile" />
            <DataView.Item label="Founded" value="2008" />
            <DataView.Item label="Website" value="motif-ui.com" />
            <DataView.Item label="Country" value="Türkiye" />
            <DataView.Item label="Developer" value="Türksat" />
            <DataView.Item label="Failure" value="N/A" />
        </DataView>
    );
};`,
			timepicker: `export default TimePickerUse = () => {
    return (
        <TimePicker
            value={{hours: 12, minutes: 12, seconds: 8}}
            secondsEnabled
            size="md"
            onOkClick={time => alert(JSON.stringify(time))}
            onClearClick={() => console.log("cleared...")}
            variant="bordered"
            format="12h" />
    );
};`,
			upload: `export default UploadUse = () => {
    return (
        <UploadDragger
            size="lg"
            uploadRequest={{method: "POST", url: "https://my.url"}}
            deleteRequest={{method: "POST", url: "https://my.url"}}
            maxSize={10}
            maxFile={1}
            autoUpload={false} />
    );
};`,
			accordion: `export default AccordionUse = () => {
    return (
        <Accordion.Group multiExpand={false} condensed>
            <Accordion 
                index={0} 
                icon="folder" 
                title="Accordion 1" 
                text="Lorem ipsum dolor..." />
            <Accordion 
                index={1} 
                expanded 
                title="Accordion 2" 
                text="Lorem ipsum dolor..." />
            <Accordion 
                index={2} 
                title="Accordion 3">
                <div className="py-12 font-bold text-amber-700 bg-purple-100 text-center">
                    Custom HTML content
                </div>
            </Accordion>
        </Accordion.Group>
    );
};`,
			select: `export default SelectUse = () => {
    return (
        <Select
            multiple
            filterable
            value={[${selectItems.map((i) => `"${i}"`).join(", ")}]}
            size="lg"
            onChange={values => ...}
            data={[
              { groupLabel: "Cities", groupKey: "cities", 
                items: [
                  { label: "İstanbul", value: "34" },
                  { label: "Ankara", value: "06" },
                  { label: "İzmir", value: "35" }]
              },
              { groupLabel: "Districts", groupKey: "districs", 
                items: [
                  { label: "Gölbaşı", value: "golbasi" },
                  { label: "Polatlı", value: "polatli" },
                  { label: "Çankaya", value: "cankaya" }]
               }
            ]}/>
	);
};`,
			table: `export default TableUse = () => {
 return (
   <Table
    fluid
    hoverable
    selectable
    data={userData}
    columns={[
     {title: "Name", dataKey:"name", sorting: {} },
     {title: "Surname", dataKey:"surname" },
     {title: "Age", dataKey:"age", footer:{type:"avg", title:"Avg"}},
     {title: "City", dataKey:"address.city" }
     ]} />
 );
};`,
			pincode: `export default PinCodeUse = () => {
    return (
        <PinCode 
            size="lg" 
            circle 
            value={[${pinValues.map((i) => `"${i}"`).join(", ")}]} 
            onChange={newVals => setValues(newVals as string[])}
            style={{padding: 12}}>
            
            <PinCode.Item />
            <PinCode.Item masked />
            <PinCode.Item />
            <PinCode.Item space />
            <PinCode.Item disabled />
            <PinCode.Item />
            
        </PinCode>
    );
};`,
			pagination: `export default PaginationUse = () => {
    return (
        <Pagination 
            total={50} 
            current={${paginationPage}} 
            pageSize={10} 
            size="lg" 
            onChange={page => setPage(page)} />
    );
};`,
		};
		return codeMap[activeComponent];
	}, [
		activeComponent,
		selectItems,
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
									<LiveMotifTimePicker />
								</PreviewFrame>
							)}
							{activeComponent === "upload" && (
								<PreviewFrame>
									<LiveMotifUpload />
								</PreviewFrame>
							)}
							{activeComponent === "accordion" && (
								<PreviewFrame>
									<LiveMotifAccordion />
								</PreviewFrame>
							)}
							{activeComponent === "select" && (
								<PreviewFrame>
									<LiveSelect
										values={selectItems}
										setValues={setSelectItems}
									/>
								</PreviewFrame>
							)}
							{activeComponent === "table" && (
								<PreviewFrame>
									<LiveTable />
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
								{componentLabels[activeComponent]}Use.tsx
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
	return (<div className="mx-auto w-full max-w-[420px]">
        <Card
        title="Card Header Title"
        subtitle="Motif Card Subtitle"
        icon="folder"
        action={{icon: "download", onClick: () => {}}}
        contentImage="https://picsum.photos/500/220"
        contentTitle="Card Content Title"
        contentSubtitle="Card Content Subtitle"
        contentText="Motif Card Supporting Text"
        contentLink={{text: "Motif Link", href: "#"}}
        contentActionButton={{text: "Action", onClick: () => {}}}
        contentAlternateButton={{text: "Alternate", onClick: () => {}}}
        contentActionLink={{text: "Motif Link", href: "#"}}
        elevated />
    </div>);
}
function LiveMotifDataView() {
	const rows = [
		["Name", "Motif"],
		["Platform", "Web, mobile"],
		["Founded", "2008"],
		["Website", "motif-ui.com"],
		["Country", "Türkiye"],
		["Developer", "Türksat"],
        ["Failure", "N/A"],
	];
	return (
		<div className="mx-auto w-full max-w-[520px] overflow-hidden border border-slate-300 ">
            <DataView rowVariant="solid">
                {rows.map(([label, value], index) => (
                    <DataView.Item
                        key={`${label}-${index}`}
                        label={label}
                        value={value} />
                ))}
            </DataView>
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
function LiveMotifTimePicker() {
	return (
        <TimePicker
            value={{hours: 12, minutes: 12, seconds: 8}}
            secondsEnabled
            size="md"
            onOkClick={time => alert(JSON.stringify(time))}
            onClearClick={() => console.log("cleared...")}
            variant="bordered"
            format="12h"
        />
	);
}
function LiveMotifUpload() {
	return (
		<div className="mx-auto w-full max-w-[520px] overflow-hidden">
			<UploadDragger
                size="lg"
                uploadRequest={{method: "POST", url: "https://my.url"}}
                deleteRequest={{method: "POST", url: "https://my.url"}}
                maxSize={10}
                maxFile={1}
                autoUpload={false} />
		</div>
	);
}
function LiveMotifAccordion() {
	return (
        <Accordion.Group multiExpand={false} condensed>
            <Accordion index={0} icon="folder" title="Accordion 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu, vitae dignissim quam. Suspendisse eu nisi semper, congue augue tincidunt, porttitor dui." />
            <Accordion index={1} expanded title="Accordion 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta eu orci non varius. Sed ac orci suscipit turpis tristique feugiat. Maecenas vitae diam elit. Donec ac mi blandit, vehicula tellus sed, iaculis turpis. Integer in odio ut metus imperdiet pulvinar. Sed lobortis, sem in egestas ornare, lectus metus ultrices erat, vel interdum ante libero vitae ante. Morbi ut interdum eros, ac sollicitudin turpis. Nullam augue metus, blandit ut ligula vitae, posuere condimentum purus. Ut facilisis dui a sapien pharetra facilisis. Fusce placerat sem ut magna mattis, sit amet porta purus pretium. Quisque libero turpis, facilisis non tempor nec, egestas vitae odio." />
            <Accordion index={2} title="Accordion 3">
                <div className="py-12 font-bold text-amber-700 bg-purple-100 text-center">Custom HTML content</div>
            </Accordion>
        </Accordion.Group>
	);
}
function LiveSelect({values, setValues }: {values: string[]; setValues: (value: string[]) => void;}) {
	return (
        <Select
            className="mx-auto w-full max-w-[560px] relative"
            multiple
            filterable
            value={values}
            size="lg"
            onChange={val => setValues((val as {value: string}[]).map((v:{value: string}) => v.value) )}
            data={[
                {groupLabel: "Cities", groupKey: "cities",
                    items: [
                        { label: "İstanbul", value: "34" },
                        { label: "Ankara", value: "06" },
                        { label: "İzmir", value: "35" }
                    ]
                },
                {groupLabel: "Districts", groupKey: "districs",
                    items: [
                        { label: "Gölbaşı", value: "golbasi" },
                        { label: "Polatlı", value: "polatli" },
                        { label: "Çankaya", value: "cankaya" }
                    ]
                }
            ]}/>
	);
}
function LivePagination({ page, setPage,}: { page: number; setPage: (value: number) => void; }) {
	return (
        <div className="mx-auto w-full max-w-[420px] text-center">
            <Pagination total={50} current={page} pageSize={10} size="lg" onChange={setPage} />
        </div>
	);
}
function LivePinCode({values, setValues,}: { values: string[]; setValues: (value: string[]) => void; }) {
	return (<PinCode style={{padding: 12}} size="lg" circle value={values} onChange={newVals => setValues(newVals as string[])}>
            <PinCode.Item />
            <PinCode.Item masked />
            <PinCode.Item />
            <PinCode.Item space />
            <PinCode.Item disabled />
            <PinCode.Item />
        </PinCode>
	);
}
function LiveTable() {
	return (
        <div className="flex h-full w-full">
            <Table
                fluid
                hoverable
                selectable
                data={[
                    { "name": "Ahmet", "surname": "Yılmaz", "age": 28, "address": { "city": "Istanbul" } },
                    { "name": "Ayşe", "surname": "Demir", "age": 34, "address": { "city": "Ankara" } },
                    { "name": "Mehmet", "surname": "Kaya", "age": 45, "address": { "city": "Izmir" } },
                    { "name": "Elif", "surname": "Çelik", "age": 22, "address": { "city": "Bursa" } },
                    { "name": "Can", "surname": "Şahin", "age": 31, "address": { "city": "Antalya" } },
                    { "name": "Zeynep", "surname": "Koç", "age": 27, "address": { "city": "Adana" } },
                    { "name": "Burak", "surname": "Aydın", "age": 39, "address": { "city": "Gaziantep" } },
                    { "name": "Selin", "surname": "Arslan", "age": 25, "address": { "city": "Eskişehir" } }
                ]}
                columns={[
                    { title: "Name", dataKey: "name", sorting: {} },
                    { title: "Surname", dataKey: "surname" },
                    { title: "Age", dataKey: "age", footer:{type: "avg", title:"Avg"} },
                    { title: "City", dataKey: "address.city" },
                ]}
            />
        </div>
	);
}
