import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col items-center justify-center bg-black p-0">
        <h1 className="text-white text-center scale-50 opacity-30">
          We craft brand{" "}
          <span className="text-[#E7BD70] italic">identities</span>, then market
          <br />
          their <span className="text-[#E7BD70] italic">personalities</span> on
          social media
        </h1>
        <div className="text-white flex flex-col items-center gap-[16px]">
          <h2 className="text-[54px]">How can we help you?</h2>
          <span className="flex gap-6">
            <Link href="/services">
              <button className="secondary-btn">Services</button>
            </Link>
            <Link href="/interships">
              <button className="secondary-btn">Interships</button>
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
