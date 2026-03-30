"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  ChevronDown,
  Clock3,
  Download,
  Folder,
  Upload,
  Check,
  LayoutGrid,
  Bell,
  X,
  User,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Image as ImageIcon,
  FileText,
  FolderOpen,
  ArrowLeft,
  ArrowRight,
  Home,
  RefreshCw,
} from "lucide-react";

const leftShowcaseItems = [
  { id: "card", node: <MiniCardPreview /> },
  { id: "time", node: <MiniTimePickerPreview /> },
  { id: "upload", node: <MiniUploadPreview /> },
  { id: "accordion", node: <MiniAccordionPreview /> },
  { id: "select", node: <MiniSelectPreview /> },
  { id: "radio", node: <MiniRadioGroupPreview /> },
  { id: "tabs", node: <MiniTabsPreview /> },
  { id: "toast", node: <MiniToastPreview /> },
  { id: "tokens", node: <MiniTokenPreview /> },
];

const rightShowcaseItems = [
  { id: "badge", node: <MiniBadgePreview /> },
  { id: "status", node: <MiniStatusPreview /> },
  { id: "listview", node: <MiniListViewPreview /> },
  { id: "textinput", node: <MiniTextInputPreview /> },
  { id: "pager", node: <MiniPagerPreview /> },
  { id: "tooltip", node: <MiniTooltipPreview /> },
  { id: "empty", node: <MiniEmptyPreview /> },
  { id: "stepper", node: <MiniStepperPreview /> },
];

const leftLoopItems = [...leftShowcaseItems, ...leftShowcaseItems];
const rightLoopItems = [...rightShowcaseItems, ...rightShowcaseItems];

export default function HeroVerticalShowcase() {
  const isMobileStatic = useMediaQuery("(max-width: 899px)");

  const leftItems = isMobileStatic ? leftShowcaseItems : leftLoopItems;
  const rightItems = isMobileStatic ? rightShowcaseItems : rightLoopItems;

  return (
    <div className="relative mx-auto -mt-20 -mb-18 h-[900px] w-full">
      <div className="pointer-events-none absolute inset-0 rounded-[12px] [background-size:18px_18px]" />

      <div className="relative z-10 flex h-full gap-[20px]">
        <ShowcaseColumn
          items={leftItems}
          direction="up"
          duration={60}
          isMobileStatic={isMobileStatic}
        />
        <ShowcaseColumn
          items={rightItems}
          direction="down"
          duration={60}
          isMobileStatic={isMobileStatic}
        />
      </div>
    </div>
  );
}

function ShowcaseColumn({
  items,
  direction,
  duration,
  isMobileStatic,
}: {
  items: { id: string; node: ReactNode }[];
  direction: "up" | "down";
  duration: number;
  isMobileStatic: boolean;
}) {
  return (
    <div className="relative h-full min-w-[260px] flex-1 overflow-hidden rounded-[12px]">
      <motion.div
        className="relative flex w-full flex-col gap-6"
        animate={
          isMobileStatic
            ? undefined
            : direction === "up"
              ? { y: ["0%", "-50%"] }
              : { y: ["-50%", "0%"] }
        }
        transition={
          isMobileStatic
            ? undefined
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            animate={isMobileStatic ? undefined : { y: [0, -4, 0] }}
            transition={
              isMobileStatic
                ? undefined
                : {
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="relative w-full"
          >
            <div className="relative w-full overflow-hidden rounded-[12px] border border-white/80">
              {item.node}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 ml-1 text-sm font-semibold text-slate-900">
      {children}
    </p>
  );
}

function MiniCardPreview() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-50 bg-white p-2">
      <SectionTitle>Card</SectionTitle>

      <div className="flex items-center justify-between px-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-[0_10px_20px_rgba(2,132,199,0.25)]">
            <Folder className="h-5 w-5 fill-white text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Card Header</p>
            <p className="text-xs text-slate-500">Motif subtitle</p>
          </div>
        </div>
        <Download className="h-5 w-5 text-slate-400" />
      </div>

      <div className="h-24 bg-[linear-gradient(135deg,#3d2a1f,#241c19_38%,#674228_72%,#1b1b1b)]" />

      <div className="px-4 py-4">
        <p className="text-sm font-semibold text-slate-900">Content title</p>
        <p className="mt-1 text-xs text-slate-500">Supporting text example</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white">
            Action
          </button>
          <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700">
            Alternate
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniTimePickerPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Timepicker</SectionTitle>

      <div className="text-center text-3xl font-semibold tracking-[-0.04em] text-sky-600">
        18 : 03
      </div>

      <div className="mt-4 rounded-xl p-1">
        <div className="grid grid-cols-2 gap-1">
          <div>
            <div className="mb-2 flex items-center justify-center gap-1 text-xs text-slate-500">
              Hr
            </div>
            <div className="space-y-1">
              {[14, 15, 16, 17, 18, 19].map((n) => (
                <div
                  key={n}
                  className={[
                    "flex h-8 items-center justify-center rounded-xl text-sm font-semibold",
                    n === 18
                      ? "bg-sky-600 text-white"
                      : "bg-white text-slate-600",
                  ].join(" ")}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1 text-center text-xs text-slate-500">Min</div>
            <div className="space-y-1">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className={[
                    "flex h-8 items-center justify-center rounded-xl text-sm font-semibold",
                    n === 3
                      ? "bg-sky-600 text-white"
                      : "bg-white text-slate-600",
                  ].join(" ")}
                >
                  {String(n).padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
          <button className="rounded-xl bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-300">
            Cancel
          </button>
          <button className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniUploadPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-2">
      <SectionTitle>Upload</SectionTitle>

      <div className="flex min-h-[150px] flex-col items-center justify-center px-5 py-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
          <Upload className="h-6 w-6 text-slate-500" />
        </div>
        <p className="mt-4 text-sm font-medium text-slate-700">
          Click here to upload files
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Or drag files into this area
        </p>
      </div>

      <div className="border-t border-slate-300 px-4 py-3">
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
          <div>
            <p className="text-xs font-medium text-slate-800">showcase.png</p>
            <p className="text-[11px] text-emerald-600">Uploaded successfully</p>
          </div>
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}

function MiniAccordionPreview() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-50 bg-white p-2">
      <SectionTitle>Accordion</SectionTitle>

      {[
        { title: "Accordion 1", open: false },
        { title: "Accordion 2", open: true },
        { title: "Accordion 3", open: false },
      ].map((item) => (
        <div key={item.title} className="border-b border-slate-300 last:border-b-0">
          <div className="flex items-center justify-between px-4 py-4">
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <ChevronDown
              className={`h-4 w-4 text-slate-500 transition ${item.open ? "rotate-180" : ""}`}
            />
          </div>
          {item.open && (
            <div className="px-4 pb-4 text-xs leading-6 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MiniSelectPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Select</SectionTitle>

      <button className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700">
        <span>Item 3</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </button>

      <div className="mt-3 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        {["Item 1", "Item 2", "Item 3", "Cities", "İstanbul"].map((item) => {
          const isGroup = item === "Cities";
          const isSelected = item === "Item 3";

          return (
            <div
              key={item}
              className={[
                "flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm last:border-b-0",
                isGroup
                  ? "text-slate-400"
                  : isSelected
                    ? "bg-slate-50 text-sky-600"
                    : "text-slate-700",
              ].join(" ")}
            >
              <span>{item}</span>
              {isSelected && !isGroup && <Check className="h-4 w-4" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniRadioGroupPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Radio group</SectionTitle>

      <div className="space-y-3">
        {[
          { label: "Radio default", state: "default" },
          { label: "Radio hover", state: "hover" },
          { label: "Radio selected", state: "selected" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span
              className={[
                "mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2",
                item.state === "selected"
                  ? "bg-sky-600"
                  : item.state === "hover"
                    ? "border-slate-500 bg-white"
                    : "border-slate-300 bg-white",
              ].join(" ")}
            >
              {item.state === "selected" && (
                <span className="h-2.5 w-2.5 rounded-full bg-sky-600 border-none" />
              )}
            </span>

            <div>
              <p className="text-sm font-medium text-slate-800">{item.label}</p>
              <p className="text-xs text-slate-400">Helper text</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniTabsPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Tabs</SectionTitle>

      <div className="flex items-center gap-6 border-b border-slate-200 pb-3">
        {[
          { label: "Tab 1", active: false },
          { label: "Tab 2", active: true },
          { label: "Tab 3", active: false },
        ].map((tab) => (
          <button
            key={tab.label}
            className={[
              "border-b-2 pb-2 text-sm font-semibold transition",
              tab.active
                ? "border-sky-600 text-sky-600"
                : "border-transparent text-slate-400 hover:text-slate-700",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Tabbed Content</p>
            <p className="text-xs text-slate-500">Preview for the active tab</p>
          </div>
        </div>

        <p className="text-xs leading-6 text-slate-600">
          Motif UI keeps content grouped cleanly with clear hierarchy and stable navigation states.
        </p>
      </div>
    </div>
  );
}

function MiniToastPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Toast / Alert</SectionTitle>

      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-blue-600">
              <Bell className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Update available
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                A new version of the component library is ready to review.
              </p>
            </div>
          </div>

          <button className="text-slate-400 transition hover:text-slate-600">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button className="rounded-full bg-sky-600 px-3 py-2 text-xs font-semibold text-white">
            Review
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniTokenPreview() {
  const tokens = [
    { name: "primary-100", value: "#E6F3FA" },
    { name: "primary-300", value: "#54ACDC" },
    { name: "primary-500", value: "#0083CB" },
    { name: "primary-700", value: "#005D90" },
    { name: "primary-900", value: "#003653" },
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Token scale</SectionTitle>

      <div className="space-y-2">
        {tokens.map((token) => (
          <div
            key={token.name}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-6 w-6 rounded-full border border-white"
                style={{ backgroundColor: token.value }}
              />
              <span className="text-xs font-medium text-slate-700">{token.name}</span>
            </div>
            <span className="text-xs text-slate-500">{token.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniBadgePreview() {
  const rows = [
    [
      "bg-[#4e83ca] text-white",
      "bg-[#7b8794] text-white",
      "bg-[#d13d1a] text-white",
      "bg-[#1d9a07] text-white",
    ],
    [
      "bg-[#dfeaf7] text-[#4e83ca]",
      "bg-[#edf2f7] text-[#5b6472]",
      "bg-[#f7e2df] text-[#d13d1a]",
      "bg-[#ed8506] text-[#ffffff]",
    ],
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Badge</SectionTitle>

      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap gap-3">
            {row.map((cls, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${cls}`}
              >
                <User className="h-4 w-4" />
                badge
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniStatusPreview() {
  const items = [
    { kind: "dot", color: "bg-emerald-500", text: "" },
    { kind: "count", color: "bg-slate-400", text: "3" },
    { kind: "count", color: "bg-[#4e83ca]", text: "223" },
    { kind: "count", color: "bg-[#4e83ca]", text: "3" },
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Status</SectionTitle>

      <div className="flex flex-wrap items-center gap-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <User className="h-7 w-7 text-slate-300" />
            <span
              className={[
                "inline-flex items-center justify-center rounded-full text-white",
                item.kind === "dot" ? "h-7 w-7" : "min-w-[44px] px-3 py-1.5 text-sm",
                item.color,
              ].join(" ")}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniListViewPreview() {
  const items = [
    { icon: <User className="h-5 w-5" />, title: "List Title", sub: "List Subtitle" },
    { icon: <FileText className="h-5 w-5" />, title: "List Title", sub: "List Subtitle" },
    { icon: <FolderOpen className="h-5 w-5" />, title: "List Title", sub: "List Subtitle" },
    { icon: <ImageIcon className="h-5 w-5" />, title: "List Title", sub: "List Subtitle" },
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Listview</SectionTitle>

      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniTextInputPreview() {
  const rows = [
    {
      label: "Text Input Label",
      border: "border-slate-300",
      icon: <AlertTriangle className="h-5 w-5 text-slate-400" />,
      helper: "Hint / Helper Text",
      helperColor: "text-slate-400",
      textColor: "text-slate-800",
    },
    {
      label: "Text Input Focus",
      border: "border-sky-500",
      icon: <AlertTriangle className="h-5 w-5 text-slate-400" />,
      helper: "Hint / Helper Text",
      helperColor: "text-slate-400",
      textColor: "text-slate-800",
    },
    {
      label: "Text Input Error",
      border: "border-red-500",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      helper: "Hint / Helper Text",
      helperColor: "text-red-500",
      textColor: "text-slate-800",
    },
    {
      label: "Text Input Success",
      border: "border-emerald-500",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      helper: "Hint / Helper Text",
      helperColor: "text-emerald-500",
      textColor: "text-slate-800",
    },
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Text Input</SectionTitle>

      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <p className="mb-2 text-xs font-semibold text-slate-700">{row.label}</p>
            <div className={`flex items-center justify-between rounded-xl border bg-white px-4 py-3 ${row.border}`}>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-slate-400" />
                <span className={`text-sm ${row.textColor}`}>input value</span>
              </div>
              {row.icon}
            </div>
            <p className={`mt-2 text-xs ${row.helperColor}`}>{row.helper}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniPagerPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Pager</SectionTitle>

      <div className="space-y-5 text-slate-600">
        <div className="flex items-center justify-between">
          <ArrowLeft className="h-5 w-5" />
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-[#4e83ca] px-3 py-2 text-white">1</span>
            <span className="rounded-xl bg-slate-100 px-3 py-2">2</span>
            <span>3</span>
            <span>...</span>
            <span>9</span>
          </div>
          <ArrowRight className="h-5 w-5" />
        </div>

        <div className="flex items-center gap-4">
          <ArrowLeft className="h-5 w-5" />
          <span>Önceki</span>
          <span className="text-[#4e83ca]">Sonraki</span>
          <ArrowRight className="h-5 w-5 text-[#4e83ca]" />
        </div>
      </div>
    </div>
  );
}

function MiniTooltipPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Tooltip</SectionTitle>

      <div className="grid grid-cols-2 gap-4">
        {[
          "after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-slate-500 after:border-x-transparent after:border-b-0",
          "after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-slate-500 after:border-x-transparent after:border-t-0",
          "after:right-full after:top-1/2 after:-translate-y-1/2 after:border-r-slate-500 after:border-y-transparent after:border-l-0",
          "after:left-full after:top-1/2 after:-translate-y-1/2 after:border-l-slate-500 after:border-y-transparent after:border-r-0",
        ].map((arrow, i) => (
          <div
            key={i}
            className={`relative flex h-15 items-center justify-center rounded-2xl bg-slate-500 text-lg font-medium text-white after:absolute after:h-0 after:w-0 after:border-[10px] ${arrow}`}
          >
            Label
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniEmptyPreview() {
  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Empty</SectionTitle>

      <div className="space-y-6">
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 text-sky-400">
            <Folder className="h-8 w-8" />
          </div>
          <p className="text-sm text-slate-500">Here will be the description.</p>
          <div className="mt-4 flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#4e83ca] px-4 py-2 text-xs font-semibold text-white">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500">
              <Home className="h-4 w-4" />
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStepperPreview() {
  const steps = [
    { label: "Step 1", state: "done" },
    { label: "Step 2", state: "active" },
    { label: "Step 3", state: "error" },
    { label: "Step 4", state: "idle" },
  ];

  return (
    <div className="rounded-[12px] border border-slate-50 bg-white p-4">
      <SectionTitle>Stepper</SectionTitle>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center gap-3">
              <span
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold",
                  step.state === "done"
                    ? "bg-[#4e83ca] text-white"
                    : step.state === "active"
                      ? "bg-[#4e83ca] text-white"
                      : step.state === "error"
                        ? "bg-[#d13d1a] text-white"
                        : "bg-slate-300 text-white",
                ].join(" ")}
              >
                {step.state === "done" ? (
                  <Check className="h-5 w-5" />
                ) : step.state === "error" ? (
                  "!"
                ) : (
                  i + 1
                )}
              </span>

              {i !== steps.length - 1 && (
                <div className={`h-[2px] flex-1 ${i === 0 ? "bg-[#4e83ca]" : "bg-slate-300"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          {steps.map((step) => (
            <p
              key={step.label}
              className={[
                "text-sm font-medium",
                step.state === "done" || step.state === "active"
                  ? "text-[#4e83ca]"
                  : step.state === "error"
                    ? "text-[#d13d1a]"
                    : "text-slate-400",
              ].join(" ")}
            >
              {step.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}