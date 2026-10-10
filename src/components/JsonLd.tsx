import { OFFICIAL_GAME, SITE } from "@/lib/constants";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description:
        "An unofficial, fan-made guide to the Lagos Life browser game.",
      publisher: { "@id": `${SITE.url}/#publisher` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#publisher`,
      name: SITE.name,
      url: SITE.url,
      description: "Independent fan-run guide. Not affiliated with Lagos Life.",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#webpage`,
      url: `${SITE.url}/`,
      name: "Lagos Life Game — Working Link, How to Play & Tips (Unofficial Guide)",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: {
        "@type": "VideoGame",
        name: "Lagos Life",
        url: OFFICIAL_GAME.primary,
        author: {
          "@type": "Person",
          name: OFFICIAL_GAME.creator,
          sameAs: [OFFICIAL_GAME.creatorX],
        },
      },
      dateModified: SITE.lastUpdatedIso,
      breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Lagos Life game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lagos Life is a free, browser-based life simulation game set in Lagos, Nigeria. You create a character, then ride danfo buses, rent a home, earn virtual naira and socialise with other players who are online at the same time.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life free to play?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The official page lets you sign up free and play in the browser. Optional in-game naira top-ups exist. Its own cookie notice says it uses one cookie to keep you signed in and another to count visits, and states there are no ad trackers.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the working Lagos Life game link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official primary address is https://lagoslife.app/. If a page asks you to download an installer or pay to register, it is not the official entry point.",
          },
        },
        {
          "@type": "Question",
          name: "Can I play Lagos Life on iPhone or Android?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because it runs in the browser, you can open it on a phone. In-app browsers inside TikTok or Instagram often break it — copy the link into Chrome or Safari instead.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life safe to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a public multiplayer game, so you will interact with strangers. Use a throwaway email, never pay anyone to progress, and never give your password to a third-party 'Lagos Life app' site.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the Lagos Life link not work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The usual causes are a blocked cookie stopping the sign-in loop finishing, a traffic spike at peak hours, opening the link inside a social app's built-in browser, or clearing site data that held your session.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life legit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. Lagos Life is operated by ${OFFICIAL_GAME.creator}, named in the Terms of Use and credited on lagoslife.app/stats (${OFFICIAL_GAME.creatorHandle}). The official game domain is lagoslife.app.`,
          },
        },
      ],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
