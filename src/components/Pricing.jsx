import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import SocialMediaIcons from "./SocialMediaIcons";

const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="contact">
        <Heading
          className="md:max-w-md lg:max-w-2xl lg:mt-[-4rem] mt-[1rem]"
          title="&nbsp;&nbsp;&nbsp;Let's Connect"
        />
      <div className="container relative z-2 text-center">
        <div className="relative flex flex-col justify-center lg:flex-row mt-[-4rem]">
          <img
            src={smallSphere}
            className="relative z-1"
            width={500}
            height={500}
            alt="Sphere"
          />
          <div></div>
        </div>

        <Heading
          tag="Contact me to discuss opportunities or collaborations"
          title="SIJIN SAJI JOHN"
        />
        <SocialMediaIcons />
      </div>
    </Section>
  );
};

export default Pricing;
