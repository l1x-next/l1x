import { FaXTwitter, FaLinkedin, FaBehance } from "react-icons/fa6";

export const items = (t: (key: string) => string) => [
  { name: t("services"), link: "/#services" },
  { name: t("portfolio"), link: "/#portfolio" },
  { name: t("contact"), link: "/#contact" },
];

export const socialLinks = [
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: process.env.NEXT_PUBLIC_TWITTER,
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    name: "Behance",
    icon: FaBehance,
    link: process.env.NEXT_PUBLIC_BEHANCE,
  },
];
