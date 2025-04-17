"use client";
import { useState } from "react";
import WaitlistModal from "../Waitlist";

const Simple = () => {
  const [Waitlist, setWaitList] = useState(false);
  return (
    <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
      <div className="">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
          <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">
            Protect your wallet. <br /> Empower your Web3 journey.
          </h3>
          <p className="text-center text-white/40 text-lg font-normal mb-8">
            Stay one step ahead with secure, decentralized access to your
            digital assets. We help you navigate the world of Web3 with
            confidence, clarity, and complete control. <br />
            Say goodbye to uncertainty — your wallet is safe with us.
          </p>
          <div className="flex justify-center ">
            <button
              className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl"
              onClick={() => setWaitList(true)}
            >
              Join Waitlist
            </button>
            {Waitlist && <WaitlistModal onClose={() => setWaitList(false)} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
