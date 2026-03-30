import { useMemo, useState } from "react";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";

type TreeNode = {
	id: string;
	label: string;
	children?: TreeNode[];
};

const initialTreeData: TreeNode[] = [
	{
		id: "guitars",
		label: "Guitars",
		children: [
			{ id: "classic", label: "Classic Guitars" },
			{
				id: "electro",
				label: "Electro Guitars",
				children: [
					{ id: "electro-6", label: "6 String Electro Guitars" },
					{ id: "electro-78", label: "7&8 String Electro Guitars" },
					{ id: "electro-hollow", label: "Hollow Body Electro Guitars" },
				],
			},
			{
				id: "gibson",
				label: "Gibson Collection",
				children: [
					{ id: "gibson-1957", label: "Gibson 1957 Les Paul Custom" },
					{
						id: "gibson-1959",
						label: "Gibson 1959 Les Paul Standard...",
						children: [
							{ id: "gibson-1959-gold", label: "Gold Hardware Edition" },
							{ id: "gibson-1959-vos", label: "VOS Collection" },
						],
					},
					{
						id: "gibson-1968",
						label: "Gibson Custom 1968 Les Paul...",
					},
				],
			},
			{ id: "acoustic", label: "Acoustic Guitars" },
		],
	},
];

export function TreeViewSurface() {
	const [expandedIds, setExpandedIds] = useState<Set<string>>(
		new Set(["guitars", "electro", "gibson"]),
	);
	const [checkedIds, setCheckedIds] = useState<Set<string>>(
		new Set(["guitars", "electro-6", "electro-hollow", "gibson"]),
	);
	const [selectedId, setSelectedId] = useState<string>("electro");

	const descendantsMap = useMemo(() => {
		const map = new Map<string, string[]>();

		const walk = (nodes: TreeNode[]): string[] => {
			const all: string[] = [];
			for (const node of nodes) {
				const childIds = node.children ? walk(node.children) : [];
				map.set(node.id, childIds);
				all.push(node.id, ...childIds);
			}
			return all;
		};

		walk(initialTreeData);
		return map;
	}, []);

	const toggleExpand = (id: string) => {
		setExpandedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};

	const toggleChecked = (id: string) => {
		setCheckedIds((prev) => {
			const next = new Set(prev);
			const branch = [id, ...(descendantsMap.get(id) ?? [])];
			const shouldCheck = !next.has(id);

			for (const branchId of branch) {
				if (shouldCheck) next.add(branchId);
				else next.delete(branchId);
			}

			return next;
		});
	};

	return (
		<div className="w-full max-w-[520px] rounded-[18px] border border-slate-200 bg-white p-3">
			<div className="space-y-1 text-[12px] text-slate-700">
				{initialTreeData.map((node) => (
					<TreeNodeRow
						key={node.id}
						node={node}
						level={0}
						expandedIds={expandedIds}
						checkedIds={checkedIds}
						selectedId={selectedId}
						onToggleExpand={toggleExpand}
						onToggleChecked={toggleChecked}
						onSelect={setSelectedId}
					/>
				))}
			</div>
		</div>
	);
}

function TreeNodeRow({
	node,
	level,
	expandedIds,
	checkedIds,
	selectedId,
	onToggleExpand,
	onToggleChecked,
	onSelect,
}: {
	node: TreeNode;
	level: number;
	expandedIds: Set<string>;
	checkedIds: Set<string>;
	selectedId: string;
	onToggleExpand: (id: string) => void;
	onToggleChecked: (id: string) => void;
	onSelect: (id: string) => void;
}) {
	const hasChildren = !!node.children?.length;
	const expanded = expandedIds.has(node.id);
	const checked = checkedIds.has(node.id);
	const selected = selectedId === node.id;

	return (
		<div>
			<div
				className={[
					"group flex items-center gap-2 rounded-xl px-2 py-2 transition",
					selected ? "bg-sky-50 ring-1 ring-sky-200" : "hover:bg-slate-50",
				].join(" ")}
				style={{ paddingLeft: `${level * 18 + 8}px` }}>
				<button
					type="button"
					onClick={() => hasChildren && onToggleExpand(node.id)}
					className={[
						"flex h-5 w-5 items-center justify-center rounded text-slate-500 transition",
						hasChildren ? "hover:bg-slate-200" : "opacity-30 cursor-default",
					].join(" ")}
					aria-label={hasChildren ? (expanded ? "Collapse" : "Expand") : "No children"}>
					{hasChildren ? (
						<ChevronRight
							className={`h-3.5 w-3.5 transition ${expanded ? "rotate-90" : ""}`}
						/>
					) : (
						<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
					)}
				</button>

				<button
					type="button"
					onClick={() => onToggleChecked(node.id)}
					className={[
						"flex h-4 w-4 items-center justify-center rounded border transition",
						checked
							? "border-sky-600 bg-sky-600 text-white"
							: "border-slate-300 bg-white hover:border-slate-400",
					].join(" ")}
					aria-label={checked ? "Uncheck" : "Check"}>
					{checked && <span className="text-[10px] leading-none">✓</span>}
				</button>

				<button
					type="button"
					onClick={() => onSelect(node.id)}
					className="flex min-w-0 flex-1 items-center gap-2 text-left">
					{hasChildren ? (
						expanded ? (
							<FolderOpen className="h-4 w-4 shrink-0 text-amber-500" />
						) : (
							<Folder className="h-4 w-4 shrink-0 text-amber-500" />
						)
					) : (
						<span className="h-0 w-0" />
					)}

					<span
						className={[
							"truncate",
							selected ? "font-semibold text-sky-700" : "text-slate-700",
						].join(" ")}>
						{node.label}
					</span>
				</button>
			</div>

			{hasChildren && expanded && (
				<div className="mt-1 space-y-1">
					{node.children!.map((child) => (
						<TreeNodeRow
							key={child.id}
							node={child}
							level={level + 1}
							expandedIds={expandedIds}
							checkedIds={checkedIds}
							selectedId={selectedId}
							onToggleExpand={onToggleExpand}
							onToggleChecked={onToggleChecked}
							onSelect={onSelect}
						/>
					))}
				</div>
			)}
		</div>
	);
}