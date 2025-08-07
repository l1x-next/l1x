import {
  FaXTwitter,
  FaYoutube,
  FaBehance,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

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
    name: "Youtube",
    icon: FaYoutube,
    link: process.env.NEXT_PUBLIC_YOUTUBE,
  },
  {
    name: "Behance",
    icon: FaBehance,
    link: process.env.NEXT_PUBLIC_BEHANCE,
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
];
