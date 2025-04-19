import { NextPage } from "next";
import Link from "./Link";

const Footer: NextPage = () => {
  return (
    <footer className="py-8 md:mt-8 bg-black text-white text-center">
      <p>
        Designed and developed by{" "}
        <Link text="example" href="https://example.com" />
      </p>
    </footer>
  );
};

export default Footer;
