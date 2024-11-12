import { Navbar } from "@/app/(util)/components";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center gap-[48px] max-md:px-[24px] max-md:py-[36px]">
        <h3 className="text-[#999999] text-center max-md:text-[28px]">
          While we know branding & digital marketing,
          <br />
          <span className="italic font-bold">only you know your business</span>
        </h3>

        <h2 className="max-md:text-[36px] text-center">
          What do you think your brand needs right now?
        </h2>

        <div className="max-w-[750px] flex flex-wrap justify-center gap-[24px] max-md:gap-2">
          <Link href="/services/brand-identity">
            <button className="primary-btn max-md:scale-90">
              Brand Identity
            </button>
          </Link>
          <Link href="/services/packaging">
            <button className="primary-btn max-md:scale-90">Packaging</button>
          </Link>
          <button className="primary-btn max-md:scale-90">Stationary</button>
          <button className="primary-btn max-md:scale-90">Social Media</button>
          <button className="primary-btn max-md:scale-90">
            I don't know, Please help!
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
