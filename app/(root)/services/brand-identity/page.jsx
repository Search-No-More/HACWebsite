import { Navbar } from "@/app/(util)/components";

const Branding = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center gap-[48px] text-center max-md:px-[24px] max-md:py-[36px]">
        <h2 className="max-md:text-[42px]">What is Brand Identity design?</h2>
        <p className="text-[32px] text-[#999999] text-center pl-[72px] pr-[72px] font-['Newsreader'] max-md:text-[24px] max-md:p-[0px]">
          Brand identity design is more than just creating a logo; it involves
          crafting a comprehensive visual and emotional representation of a
          brand. By effectively combining visual elements with strategic
          messaging, brands can build strong identities that resonate with their
          target audience and foster lasting relationships.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-[48px] max-md:px-[16px] max-md:py-[36px]">
        <hr className="w-full h-0 border-t-[2px] border-dashed border-t-black" />

        <h3 className="text-[#999999] font-['Newsreader'] text-center">
          What does it include?
        </h3>
        <div className="flex max-md:flex-wrap">
          <div className="brand-attributes border-r-[2px] border-dashed border-black max-md:pl-6 max-md:border-r-[0px] max-md:border-l-[2px] max-md:ml-3">
            <p className="text-[24px]">Visual Elements</p>
            <span className="flex flex-wrap gap-[12px]">
              <p className="ba-elements">Logo Suite</p>
              <p className="ba-elements">Colour Scheme</p>
              <p className="ba-elements">Typography</p>
            </span>
          </div>
          <div className="brand-attributes border-r-[2px] border-dashed border-black max-md:pl-6 max-md:mt-6 max-md:border-r-[0px] max-md:border-l-[2px] max-md:ml-3">
            <p className="text-[24px]">Messaging</p>
            <span className="flex flex-wrap gap-[12px]">
              <p className="ba-elements">Tone of voice</p>
              <p className="ba-elements">Positioning</p>
              <p className="ba-elements">Archetype</p>
            </span>
          </div>
          <div className="brand-attributes border-r-[2px] border-dashed border-black max-md:pl-6 max-md:mt-6 max-md:border-r-[0px] max-md:border-l-[2px] max-md:ml-3">
            <p className="text-[24px]">Brand Story</p>
            <span className="flex flex-wrap gap-[12px]">
              <p className="ba-elements">
                The narrative behind the brand, including its history, values,
                and vision, which helps create an emotional bond with consumers.
              </p>
            </span>
          </div>
          <div className="brand-attributes max-md:mt-6 max-md:border-l-[2px] max-md:border-dashed max-md:border-black max-md:ml-3">
            <p className="text-[24px]">Application</p>
            <span className="flex flex-wrap gap-[12px]">
              <p className="ba-elements">
                How the brand identity is expressed across various touchpoints
                such as, social media, packaging etc.
              </p>
            </span>
          </div>
        </div>

        <button className="primary-btn mt-[24px] font-bold">
          Book a project start date!
        </button>
      </section>
    </>
  );
};

export default Branding;
