// Site-wide identity, contact information, and navigation for SEED Lab.

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  pi: string;
  institution: string;
  university: string;
  url: string;
  description: string;
  email: string;
  phone: string;
  address: string[];
  mapQuery: string;
  social: {
    scholar?: string;
    twitter?: string;
    github?: string;
  };
  nav: NavItem[];
}

export const site: SiteConfig = {
  name: "SEED 儿童早期社会发展实验室",
  shortName: "SEED Lab",
  pi: "曾广宇",
  institution: "香港中文大学（深圳）",
  university: "",
  url: "https://seed-lab-cuhksz.github.io/",
  description:
    "我们关注婴幼儿早期的认知、情感与社会发展，并结合行为观察、眼动、脑成像与计算方法，理解儿童个体差异及其发展机制。",
  email: "",
  phone: "",
  address: ["SEED 儿童早期社会发展实验室", "香港中文大学（深圳）"],
  mapQuery: "The Chinese University of Hong Kong, Shenzhen",
  social: {},
  nav: [
    { label: "首页 Home", href: "/" },
    { label: "研究团队 People", href: "/people" },
    { label: "研究方向 Research", href: "/research" },
    { label: "在研项目 Projects", href: "/projects" },
    { label: "研究成果 Publications", href: "/publications" },
    { label: "实验室日常 Lab Life", href: "/lab-life" },
    { label: "联系我们 Contact", href: "/contact" },
  ],
};
