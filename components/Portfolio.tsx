import { ParallaxScroll } from "@/components/ui/parallax-scroll";

import { images } from "@/utils/portfolio";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col justify-center items-center gap-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-40"
    >
      <h2 className="font-semibold text-7xl text-transparent bg-clip-text bg-linear-to-l from-orange-600 to-orange-500">
        Portfolio
      </h2>
      <ParallaxScroll images={images} />;
    </section>
  );
};

export default Portfolio;
