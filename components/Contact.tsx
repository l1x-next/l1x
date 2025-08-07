import { useTranslations } from "next-intl";

import { logos } from "@/utils/contact";

import { FaCircleUser } from "react-icons/fa6";
import { MdFormatQuote } from "react-icons/md";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section id="contact">
      <div className="relative bg-linear-to-bl from-orange-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-orange-700 to-orange-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                {t("highlight")}
              </span>

              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h2 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                  {t("title")}
                </h2>
                <p className="text-gray-600 dark:text-neutral-400">
                  {t("description")}
                </p>
              </div>
              {/* End Title */}

              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <MdFormatQuote className="absolute top-0 start-0 transform -translate-x-6 rtl:translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800 ltr:rotate-180" />

                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800 dark:text-white">
                    {t("quote")}
                  </p>
                </div>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-4">
                    <div className="shrink-0">
                      <FaCircleUser className="size-8 rounded-full text-gray-700" />
                    </div>
                    <div className="grow">
                      <div className="font-semibold text-gray-800 dark:text-neutral-200">
                        {t("user.name")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
                        {t("user.role")}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}

            <div>
              {/* Form */}
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-gray-800 dark:text-white">
                        {t("form.title")}
                      </span>
                    </div>

                    <div className="mt-5">
                      {/* Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Input Group */}
                        <div>
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-first-name"
                              className="peer p-3 sm:p-4 block w-full border border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="First name"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-first-name"
                              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500"
                            >
                              {t("form.firstname")}
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}

                        {/* Input Group */}
                        <div>
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-last-name"
                              className="peer p-3 sm:p-4 block w-full border border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="Last name"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-last-name"
                              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500"
                            >
                              {t("form.lastname")}
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}

                        {/* Input Group */}
                        <div className="col-span-2">
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              className="peer p-3 sm:p-4 block w-full border border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="email@email.com"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-email"
                              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500"
                            >
                              {t("form.email")}
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}

                        {/* Input Group */}
                        <div className="col-span-2">
                          {/* Floating Input */}
                          <div className="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-company-name"
                              className="peer p-3 sm:p-4 block w-full border border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="Company name"
                            />
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-company-name"
                              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500"
                            >
                              {t("form.company")}
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}

                        {/* Input Group */}
                        <div className="col-span-2">
                          {/* Floating Input */}
                          <div className="relative">
                            <textarea
                              id="hs-hero-signup-form-floating-input-message"
                              className="peer p-3 sm:p-4 block w-full border border-gray-200 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2 min-h-32"
                              placeholder="Message"
                            />

                            <label
                              htmlFor="hs-hero-signup-form-floating-input-message"
                              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:translate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500"
                            >
                              {t("form.message")}
                            </label>
                          </div>
                          {/* End Floating Input */}
                        </div>
                        {/* End Input Group */}
                      </div>
                      {/* End Grid */}

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-500 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer transition-colors duration-300"
                        >
                          {t("form.confirm")}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          {/* Clients Section */}
          <div className="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-700">
            <span className="font-semibold bg-clip-text bg-linear-to-l from-orange-700 to-orange-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              {t("clients.number")}
            </span>
            {t("clients.title")}
          </div>

          {/* Clients */}
          <div className="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-24">
            {logos.map((Logo, i) => (
              <Logo
                key={i}
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-gray-500 dark:text-neutral-500"
              />
            ))}
          </div>
          {/* End Clients */}
        </div>
        {/* End Clients Section */}
      </div>
    </section>
  );
};

export default Contact;
