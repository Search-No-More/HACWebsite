import { Navbar } from "@/app/(util)/components";

const Branding = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center gap-[48px]">
        <h2>What is Brand Identity design?</h2>
        <p className="text-[32px] text-[#999999] text-center pl-[72px] pr-[72px]">
          Brand identity design is more than just creating a logo; it involves
          crafting a comprehensive visual and emotional representation of a
          brand. By effectively combining visual elements with strategic
          messaging, brands can build strong identities that resonate with their
          target audience and foster lasting relationships.
        </p>

        <hr className="w-full h-0 border-t-[2px] border-dashed border-t-black" />

        <div className="w-full flex flex-col items-center gap-[48px]">
          <p className="text-[32px] text-[#999999]">What does it include?</p>
          <div className="flex">
            <div className="brand-attributes border-r-[2px] border-dashed border-black">
              <p className="text-[32px]">Visual Elements</p>
              <span className="flex flex-wrap gap-[12px]">
                <p className="ba-elements">Logo Suite</p>
                <p className="ba-elements">Colour Scheme</p>
                <p className="ba-elements">Typography</p>
              </span>
            </div>
            <div className="brand-attributes border-r-[2px] border-dashed border-black">
              <p className="text-[32px]">Messaging</p>
              <span className="flex flex-wrap gap-[12px]">
                <p className="ba-elements">Tone of voice</p>
                <p className="ba-elements">Positioning</p>
                <p className="ba-elements">Archetype</p>
              </span>
            </div>
            <div className="brand-attributes border-r-[2px] border-dashed border-black">
              <p className="text-[32px]">Brand Story</p>
              <span className="flex flex-wrap gap-[12px]">
                <p className="ba-elements">
                  The narrative behind the brand, including its history, values,
                  and vision, which helps create an emotional bond with
                  consumers.
                </p>
              </span>
            </div>
            <div className="brand-attributes">
              <p className="text-[32px]">Application</p>
              <span className="flex flex-wrap gap-[12px]">
                <p className="ba-elements">
                  How the brand identity is expressed across various touchpoints
                  such as, social media, packaging etc.
                </p>
              </span>
            </div>
          </div>

          <button className="primary-btn mt-[24px]">
            Book a project start date!
          </button>
        </div>
      </section>
    </>
  );
};

export default Branding;
