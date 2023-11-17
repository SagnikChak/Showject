import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

type ColumnProps = {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold text-[#64748B] text-lg">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/Mlogo_T.svg"
            width={200}
            height={200}
            alt="Showject"
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            <span className="font-bold text-blue-600 text-lg">Showject</span>&nbsp; is the word's leading community for creatives to showcase their best projects, grow and see other developer's projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>

          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
          </div>

          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p className="text-slate-200">@ 2023 Showject. <span className="text-[20px]">©</span> All rights reserved</p>
        <p className="text-[#94A3B8]">
          <span className="text-blue-500 font-semibold">10,214</span> {" "}
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;