import { logos } from "@/utils/contact";

import { FaCircleUser } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <div className="relative bg-linear-to-bl from-orange-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-orange-700 to-orange-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Lorem ipsum dolor sit.
              </p>

              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h2 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-gray-600 dark:text-neutral-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis sapiente distinctio aliquam eaque quia sed facilis
                  ratione ipsum mollitia, fugit nam voluptatum suscipit porro
                  dolore animi eius perferendis est. Odio!
                </p>
              </div>
              {/* End Title */}

              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <footer className="mt-3">
                  <div className="flex items-center gap-x-4">
                    <div className="shrink-0">
                      <FaCircleUser className="size-8 rounded-full text-gray-700" />
                    </div>
                    <div className="grow">
                      <div className="font-semibold text-gray-800 dark:text-neutral-200">
                        Lorem ipsum
                      </div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
                        Lorem ipsum dolor sit.
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
                        Contact Us
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
                              placeholder="John"
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
                              First name
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
                              placeholder="Doe"
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
                              Last name
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
                              placeholder="you@email.com"
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
                              Email
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
                              Company name
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
                              Message
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
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer transition-colors duration-300"
                        >
                          Confirm
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
              123,000
            </span>
            Lorem ipsum dolor sit
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
