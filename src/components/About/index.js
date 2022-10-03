import books from '../../assets/books.jpg';

const About = () => (
  <section>
    <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div className="relative -z-0 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              className="absolute z-10 inset-0 object-cover w-full h-full"
              src={books}
              alt="books"
            />
          </div>
        </div>
        <div className="relative flex items-center bg-gray-100 dark:bg-gray-700">
          <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16 dark:bg-gray-700" />
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl dark:text-slate-50">
              Welcome to the Mov Book store!
            </h2>
            <p className="mt-4 text-gray-600 dark:text-slate-200">
              We are excited to offer our users a variety of functions to make their reading a much
              better experience. We have a wide selection of books to choose from, as well as
              helpful app which can help you find exactly what you&apos;re looking for.
            </p>
            <a
              className="inline-block transition px-12 py-3 mt-8 text-sm font-medium text-white bg-[#08ACB4] border border-[#08ACB4] rounded active:text-[#08ACB4] hover:text-[#08ACB4] hover:bg-transparent hover:text-infocus:outline-none focus:ring"
              href="/contact"
            >
              Get in Touch!
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
