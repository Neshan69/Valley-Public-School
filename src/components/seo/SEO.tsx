import { Helmet } from "react-helmet-async";

export function SEO({ title, description, path = "/" }: { title: string; description: string; path?: string }) {
  const site = typeof window === "undefined" ? "" : window.location.origin;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site}${path}`} />
    </Helmet>
  );
}
