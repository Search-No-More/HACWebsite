import { Navbar } from "@/app/(util)/components";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center gap-[48px]">
        <h3 className="text-[#999999] text-center">
          While we know branding & digital marketing,
          <br />
          <span className="italic font-bold">only you know your business</span>
        </h3>

        <h2>What do you think your brand needs right now?</h2>

        <div className="max-w-[750px] flex flex-wrap justify-center gap-[24px]">
          <Link href="/services/brand-identity">
            <button className="primary-btn">Brand Identity</button>
          </Link>
          <button className="primary-btn">Packaging</button>
          <button className="primary-btn">Stationary</button>
          <button className="primary-btn">Social Media</button>
          <button className="primary-btn">I don't know, Please help!</button>
        </div>
      </section>
    </>
  );
};

export default Services;
