import PersonJsonLd from "@/components/seo/PersonJsonLd";
import HeroSection from "@/components/home/HeroSection";
import ImpactStatsSection from "@/components/home/ImpactStatsSection";
import PautasSection from "@/components/home/PautasSection";
import ManifestoMarquee from "@/components/home/ManifestoMarquee";
import StoryPreviewSection from "@/components/home/StoryPreviewSection";
import InstagramSection from "@/components/home/InstagramSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
    return (
        <>
            <PersonJsonLd />
            <HeroSection />
            <ImpactStatsSection />
            <PautasSection />
            <ManifestoMarquee />
            <StoryPreviewSection />
            <InstagramSection />
            <BlogPreviewSection />
            <NewsletterSection />
        </>
    );
}
