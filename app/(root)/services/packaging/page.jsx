import { Navbar } from "@/app/(util)/components";
import Link from "next/link";

const Packaging = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center gap-[48px] max-md:px-[24px] max-md:py-[36px]">
        <h2 className="pt-[48px] text-center max-md:text-[42px]">
          What is the value of well branded Packaging?
        </h2>

        <p className="text-[32px] text-[#999999] font-['Newsreader'] text-center max-md:text-[24px] max-md:p-[0px]">
          Well-branded packaging is not merely an aesthetic choice; it is a
          strategic investment that enhances brand recognition, improves
          customer experiences, communicates values, builds trust, serves as a
          marketing tool, generates social proof, and can be cost-effective in
          the long run. By prioritising branded packaging, businesses can
          significantly impact their overall success and customer relationships.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-[48px] max-md:px-[24px] max-md:py-[36px]">
        <hr className="w-full h-0 border-t-[2px] border-dashed border-t-black" />

        <h3 className="text-[#999999] text-center">
          Select what you're interested in:
        </h3>

        <div className="max-w-[700px] flex flex-wrap justify-center gap-[24px] max-md:gap-2">
          <span className="packaging-options max-md:scale-90">
            <p className="text-[18px]">Box Packaging Design</p>
          </span>
          <span className="packaging-options max-md:scale-90">
            <p className="text-[18px]">Label Design</p>
          </span>
          <span className="packaging-options max-md:scale-90">
            <p className="text-[18px]">Thank You Cards</p>
          </span>
          <span className="packaging-options max-md:scale-90">
            <p className="text-[18px]">Tissue Paper Design</p>
          </span>
          <span className="packaging-options max-md:scale-90">
            <p className="text-[18px]">Other</p>
          </span>
        </div>

        <button className="primary-btn mt-[24px] font-bold">
          Book a project start date!
        </button>
      </section>
    </>
  );
};

export default Packaging;
