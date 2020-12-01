const config = {
  siteTitle: "The STEM Gazette",
  siteTitleShort: "STEM Gazette",
  siteTitleAlt: "The STEM Egypt Gazette",
  siteLogo: "/logos/logo_square.png",
  siteUrl: "https://thestemgazette.netlify.com",
  keywords: [
    "The STEM Gazette",
    "STEM October",
    "STEM Gazette",
    "The STEM Egypt Gazette",
    "STEM Egypt High School for Boys",
    "STEM High School for Boys",
    "STEM Egypt",
  ],
  pathPrefix: "/",
  siteDescription: `All that matters to and happens on the STEM October campus.`,
  // siteRss: "/rss.xml", // TODO: are we gonna?
  // siteRssTitle: "STEM Egypt RSS feed", // TODO: Here too.
  dateFromFormat: "yyyyMMdd",
  dateFormat: "yy.MM.dd",
  // postsPerPage: 4, // TODO: Needed?
  author: "The STEM Gazette Team",
  email: "gazette@stemegypt.edu.eg",
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com",
      iconClassArray: ["fab", "twitter"],
    },
    {
      label: "Facebook",
      url: "https://facebook.com",
      iconClassArray: ["fab", "facebook-f"],
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com",
      iconClassArray: ["fab", "linkedin-in"],
    },
    {
      label: "Instagram",
      url: "https://instagram.com",
      iconClassArray: ["fab", "instagram-square"],
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassArray: ["fa", "envelope"],
    },
  ],
  themeColor: "#0098d2",
  backgroundColor: "#e0e0e0",
};

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
