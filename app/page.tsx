import HeaderSection from "@/components/header-section";
import TrustSection from "@/components/trust-section";
import PitchSection from "@/components/pitch-section";
import FooterSection from "@/components/footer-section";
import FeaturesSection from "@/components/features-section";
import TopSection from "@/components/top-section";
import ShowcaseSection from "@/components/showcase-section";
import CompactDesignToCodeSection from "@/components/design-to-code-section";
import MotifComponentMatrixSection from "@/components/theming-matrix-section";
import BackToTop from "@/components/back-to-top";

export default function Page() {
	return (
		<main className="min-h-screen text-slate-900">
			<header className="sticky top-0 z-50 border-b border-slate-200/70 glass">
				<HeaderSection />
			</header>
			<section id="top">
				<TopSection />
			</section>
			<section id="playground">
				<MotifComponentMatrixSection />
			</section>
			<section id="features">
				<FeaturesSection />
			</section>
			<section id="design">
				<CompactDesignToCodeSection />
			</section>
			<section id="themes">
				<ShowcaseSection />
			</section>
			<section id="story">
				<TrustSection />
			</section>
			<section className="mt-20">
				<PitchSection />
			</section>
			<footer className="border-t border-slate-200/80 bg-white/70">
				<FooterSection />
			</footer>
			<BackToTop />
		</main>
	);
}
