import Image from "next/image";

import { useTranslations } from "next-intl";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { services } from "@/utils/services";

// import { TbArrowNarrowRight } from "react-icons/tb";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section id="services">
      <div className="flex flex-col justify-center items-center gap-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <h2 className="font-semibold text-7xl leading-[1.3] text-transparent bg-clip-text bg-linear-to-l from-orange-600 to-orange-500">
          {t("title")}
        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services(t as (key: string) => string).map((service, i) => (
            <CardContainer key={i}>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  {service.image && (
                    <Image
                      src={service.image}
                      height={1000}
                      width={1000}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  )}
                </CardItem>
                {/* <div className="flex justify-end items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {t("button")}
                    <TbArrowNarrowRight className="size-4 rtl:rotate-180" />
                  </CardItem>
                </div> */}
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
