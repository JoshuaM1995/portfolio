import React from "react";

export const SeoMeta = () => {
  return (
    <>
      <meta content="Joshua McNabb - Software Engineer" name="title" />
      <meta content="joshuamcnabb, joshuamcnabb website" name="keywords" />
      <meta
        content="I'm Joshua McNabb, a Full-Stack Software Developer skilled in JavaScript, TypeScript, Node.js, PostgreSQL, and React. Explore my portfolio and experience."
        name="description"
      />

      <meta property="og:url" content="https://joshuamcnabb.ca" />
      <meta property="og:type" content="website" />

      {/* Facebook meta tags */}
      <meta property="og:title" content="Joshua McNabb - Software Engineer" />
      <meta
        property="og:description"
        content="I'm Joshua McNabb, a Full-Stack Software Developer skilled in JavaScript, TypeScript, Node.js, PostgreSQL, and React. Explore my portfolio and experience."
      />
      <meta
        property="og:image"
        content="https://vdzkeywzwfa1l5hg.public.blob.vercel-storage.com/social.png"
      />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="joshuamcnabb.ca" />
      <meta property="twitter:url" content="https://joshuamcnabb.ca" />
      <meta name="twitter:title" content="Joshua McNabb - Software Engineer" />
      <meta
        name="twitter:description"
        content="I'm Joshua McNabb, a Full-Stack Software Developer skilled in JavaScript, TypeScript, Node.js, PostgreSQL, and React. Explore my portfolio and experience."
      />
      <meta
        name="twitter:image"
        content="https://vdzkeywzwfa1l5hg.public.blob.vercel-storage.com/social.png"
      />
    </>
  );
};
