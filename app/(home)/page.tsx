import { ExploreSections } from './_components/explore-sections';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { Hero } from './_components/hero';
import { PopularTopics } from './_components/popular-topics';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-fd-background selection:bg-brand-light/30 selection:text-fd-foreground">
      {/* Dynamic Grid Background Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Header />
      <Hero />
      <ExploreSections />
      <PopularTopics />
      <Footer />
    </div>
  );
}
