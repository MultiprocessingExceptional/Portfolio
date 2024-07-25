import React from "react";
import Section from "./Section";
// import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 mt-[-2rem] lg:mt-[-5rem]">
      <div className="container flex justify-center">
        <p className="caption text-n-4 lg:block">
          Sijin Saji John © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
