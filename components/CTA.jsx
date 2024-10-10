const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="relative w-full rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 px-6 py-8 dark:from-gray-900 md:px-8 md:py-10">
          <div className="absolute right-0 top-0 flex h-full w-full justify-end">
            <div className="relative flex h-28 w-28 overflow-hidden rounded-xl blur-2xl">
              <span className="absolute -right-1 -top-1 h-16 w-16 rotate-45 rounded-md bg-purple-500" />
              <span className="absolute -bottom-1 -right-1 h-16 w-16 rotate-45 rounded-md bg-purple-500" />
              <span className="absolute -bottom-1 -left-1 h-16 w-16 rotate-45 rounded-md bg-purple-300" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex h-full w-full items-end">
            <div className="relative flex h-28 w-28 overflow-hidden rounded-xl blur-2xl">
              <span className="absolute -right-1 -top-1 h-16 w-16 rotate-45 rounded-md bg-purple-500" />
              <span className="absolute -bottom-1 -right-1 h-16 w-16 rotate-45 rounded-md bg-purple-500" />
              <span className="absolute -bottom-1 -left-1 h-16 w-16 rotate-45 rounded-md bg-purple-300" />
            </div>
          </div>
          <div className="relative mx-auto max-w-xl space-y-8 text-center md:max-w-2xl">
            <h1 className="text-3xl/tight font-bold text-purple-950 dark:text-white sm:text-4xl/tight md:text-5xl/tight">
              Quick Start your{" "}
              <span className="bg-gradient-to-br from-purple-600 from-20% via-indigo-400 via-30% to-purple-600 bg-clip-text text-transparent">
                Strategic Digital
              </span>{" "}
              Marketing Campaing
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              delectus architecto ullam earum
            </p>
            <div className="mx-auto flex max-w-md justify-center sm:max-w-xl">
              <button className="flex h-12 items-center rounded-xl bg-purple-600 px-5 text-white outline-none">
                Get In touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
