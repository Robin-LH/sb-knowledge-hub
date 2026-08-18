const BASE_URL = "https://azzle-sb.vercel.app";

const routes = [
  "",
  "home-2",
  "home-3",
  "home-4",
  "about",
  "blog",
  "blog-details",
  "contact",
  "faq-1",
  "faq-2",
  "portfolio",
  "portfolio-details",
  "reset-password",
  "service-details",
  "services",
  "team",
  "team-details",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
