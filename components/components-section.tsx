"use client";

import { useState } from "react";
import {
  Boxes,
  ChevronRight,
  LayoutGrid,
  MessageSquareWarning,
  MousePointerSquareDashed,
  PanelsTopLeft,
} from "lucide-react";

type GroupKey = "forms" | "feedback" | "navigation" | "display";

type GroupData = {
  title: string;
  blurb: string;
  accent: string;
  icon: React.ReactNode;
  items: string[];
};

const componentGroups: Record<GroupKey, GroupData> = {
  forms: {
    title: "Forms & Inputs",
    blurb:
      "Data-entry primitives for service flows, internal dashboards, identity journeys and operational screens.",
    accent: "from-sky-500/15 to-cyan-400/10",
    icon: <MousePointerSquareDashed className="h-5 w-5" />,
    items: [
      "Text Input",
      "Password Input",
      "Textarea",
      "Select",
      "Dropdown",
      "Autocomplete",
      "Date Input",
      "DatePicker",
      "DateRange Picker",
      "DateTime Picker",
      "TimePicker",
      "Upload",
      "Upload Input",
      "Pin Code",
      "Input Group",
      "Form Labels",
      "Control Labels",
    ],
  },
  feedback: {
    title: "Feedback & Status",
    blurb:
      "System responses, transient messages, loading states and confidence-building status patterns.",
    accent: "from-emerald-500/15 to-lime-400/10",
    icon: <MessageSquareWarning className="h-5 w-5" />,
    items: [
      "Alert",
      "Toast",
      "Tooltip",
      "Result",
      "Empty",
      "Skeleton",
      "Progress",
      "Badge",
      "Chips",
      "Timeline",
    ],
  },
  navigation: {
    title: "Navigation & Structure",
    blurb:
      "Hierarchy, movement and wayfinding patterns for large, service-heavy information architectures.",
    accent: "from-violet-500/15 to-fuchsia-400/10",
    icon: <PanelsTopLeft className="h-5 w-5" />,
    items: [
      "Navbar",
      "Breadcrumb",
      "Pagination",
      "Tab",
      "Stepper",
      "MenuList",
      "Treeview",
      "Listview",
      "Link",
      "Divider",
    ],
  },
  display: {
    title: "Display & Content",
    blurb:
      "Rich presentation surfaces for cards, collections, media, overlays and information-dense views.",
    accent: "from-amber-500/15 to-orange-400/10",
    icon: <LayoutGrid className="h-5 w-5" />,
    items: [
      "Card",
      "Business Card",
      "Avatar",
      "Image",
      "Carousel",
      "Panel",
      "Table",
      "Grid",
      "DataView",
      "Modal",
      "Popover",
      "Editor",
      "Icons",
      "Image Upload",
    ],
  },
};

const groupOrder: GroupKey[] = ["forms", "feedback", "navigation", "display"];

export default function ComponentsSection() {
  const [activeGroup, setActiveGroup] = useState<GroupKey>("forms");

  const active = componentGroups[activeGroup];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 lg:px-4">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
          A broad component map built for actual product surfaces.
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Instead of a sleepy spreadsheet of names, this section turns the library
          into an interactive catalog. Visitors should feel the breadth fast, not
          rummage through docs like confused raccoons in a CSS dumpster.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Library groups
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                Explore by categories
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <Boxes className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-3">
            {groupOrder.map((key) => {
              const group = componentGroups[key];
              const isActive = key === activeGroup;

              return (
                <button
                  key={key}
                  onClick={() => setActiveGroup(key)}
                  className={[
                    "group relative w-full overflow-hidden rounded-[24px] border p-4 text-left transition-all duration-300",
                    isActive
                      ? "border-slate-300 bg-slate-950 text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)]"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100 transition",
                      isActive ? group.accent : "from-transparent to-transparent opacity-0",
                    ].join(" ")}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={[
                          "mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl transition",
                          isActive
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-700",
                        ].join(" ")}
                      >
                        {group.icon}
                      </div>

                      <div>
                        <h4
                          className={[
                            "text-lg font-bold tracking-[-0.02em]",
                            isActive ? "text-white" : "text-slate-950",
                          ].join(" ")}
                        >
                          {group.title}
                        </h4>
                        <p
                          className={[
                            "mt-1 text-sm leading-7",
                            isActive ? "text-slate-300" : "text-slate-600",
                          ].join(" ")}
                        >
                          {group.blurb}
                        </p>
                      </div>
                    </div>

                    <div
                      className={[
                        "inline-flex shrink-0 items-center rounded-2xl px-3 py-2 text-sm font-bold",
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-700",
                      ].join(" ")}
                    >
                      {group.items.length}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                {active.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                {active.blurb}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {active.items.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-black text-slate-400 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}