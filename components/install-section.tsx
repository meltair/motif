import { Boxes, Code2, TerminalSquare } from "lucide-react";

const installCode = `npm i @motif-ui/react

import { MotifProvider } from "@motif-ui/react";
import "@motif-ui/react/themes/default-theme.css";

export default function App() {
  return (
    <MotifProvider>
      {/* your app */}
    </MotifProvider>
  );
}`;

const usageCode = `import { MotifProvider, Button } from "@motif-ui/react";
import "@motif-ui/react/themes/default-theme.css";

export default function App() {
  return (
    <MotifProvider>
      <Button variant="primary">Click Me</Button>
    </MotifProvider>
  );
}`;

const devCode = `npm install
npm run dev
npm run storybook
npm run build:lib`;

export default function QuickStartSection() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
			<div className="mx-auto mb-10 max-w-5xl text-center">
				<h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
					A fast path from zero to a usable, 
					<span className="block pb-3 bg-[linear-gradient(90deg,#1a1220_0%,#975a9d_35%,#6f3c7a_100%)] bg-clip-text text-transparent">
						production-ready UI
					</span>
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
					Show the installation story early and clearly. Developers should
					understand package setup in seconds, not spelunk through prose caves
					with a headlamp.
				</p>
			</div>

			<div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
				<div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.22)]">
					<div className="mb-4 flex items-center justify-between">
						<div>
							<div className="text-xs uppercase tracking-[0.22em] text-slate-400">
								Install
							</div>
						</div>

						<div className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-300">
							npm
						</div>
					</div>

					<pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7">
						{installCode}
					</pre>
				</div>

				<div className="space-y-6">
					<div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h3 className="text-xl font-bold text-slate-900">
									Use components immediately
								</h3>

								<p className="mt-2 text-sm leading-7 text-slate-600">
									Import a theme, wrap with{" "}
									<code className="rounded bg-slate-100 px-1.5 py-0.5 text-sky-700">
										MotifProvider
									</code>
									, then start dropping components into your product without
									ritual sacrifice.
								</p>
							</div>

							<Boxes className="h-6 w-6 text-sky-700" />
						</div>

						<pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
							{usageCode}
						</pre>
					</div>

					<div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h3 className="text-xl font-bold text-slate-900">
									Develop locally
								</h3>

								<p className="mt-2 text-sm leading-7 text-slate-600">
									Built on top of Next.js primarily to reduce boilerplate during
									library development, component testing and docs work.
								</p>
							</div>

							<Code2 className="h-6 w-6 text-sky-700" />
						</div>

						<pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
							{devCode}
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
}
