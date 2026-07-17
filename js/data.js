/* ============================================================
   REPORT DATA, edit this file whenever new analytics come in.
   Nothing else needs to change, the page reads straight from here.
   ============================================================ */

const REPORT = {
  updated: "July 17, 2026",

  kpis: [
    { label: "Videos live", value: "8", neutral: true },
    { label: "Total views", value: "2,667" },
    { label: "Total likes", value: "78" },
    { label: "Comments", value: "2" },
    { label: "Followers", value: "8" },
    { label: "Calls booked", value: "0", neutral: true },
  ],

  // one point per video, in the order posted, used for the two trend cards
  viewsTrend: [743, 170, 166, 171, 178, 176, 534, 529],
  likesTrend: [18, 8, 6, 7, 3, 2, 21, 13],

  videos: [
    {
      title: "Most people make decisions with their gut and call it instinct. I spent 20 years...",
      sub: "Weighted Decision Matrix",
      posted: "Jul 9, 2026",
      status: "live",
      views: 743, likes: 18, comments: 0, shares: 3,
    },
    {
      title: "Gen Z didn't get handed a playbook. My generation had one, real mentorship...",
      sub: "Gen Z is playing on hard mode",
      posted: "Jul 10, 2026",
      status: "live",
      views: 170, likes: 8, comments: 1, shares: 0,
    },
    {
      title: "Everyone wants to build the exciting business. The app, the brand, the thing p...",
      sub: "Which boring business do you like",
      posted: "Jul 11, 2026",
      status: "live",
      views: 166, likes: 6, comments: 1, shares: 0,
    },
    {
      title: "A pricing mistake turned into a luxury strategy. When Richard Mille launched...",
      sub: "Richard Mille luxury strategy",
      posted: "Jul 12, 2026",
      status: "live",
      views: 171, likes: 7, comments: 0, shares: 0,
    },
    {
      title: "Skip this if you don't have an older sibling. Research found the younger sibling...",
      sub: "The Leapfrog effect",
      posted: "Jul 13, 2026",
      status: "live",
      views: 178, likes: 3, comments: 0, shares: 1,
    },
    {
      title: "Nobody talks about this privilege, and it has nothing to do with how much money...",
      sub: "The hidden family tax",
      posted: "Jul 14, 2026",
      status: "live",
      views: 176, likes: 2, comments: 0, shares: 0,
    },
    {
      title: "You will never see a billionaire's kid at a cricket academy or a dance class...",
      sub: "Hobbies rich families choose",
      posted: "Jul 15, 2026",
      status: "live",
      views: 534, likes: 21, comments: 0, shares: 3,
    },
    {
      title: "People say Elon Musk succeeded because his father was rich. People who say this...",
      sub: "The 4 unfair advantages",
      posted: "Jul 16, 2026",
      status: "live",
      views: 529, likes: 13, comments: 0, shares: 0,
    },
    {
      title: "Nike's downfall will be studied for decades (two attempts, both restricted)",
      sub: "Pulled from the account, see Issues & fixes",
      posted: "Jul 10, 2026",
      status: "deleted",
      views: 7, likes: null, comments: null, shares: null,
    },
  ],

  // the honest read on where growth is stuck, shown as a callout band
  diagnosis: {
    headline: "Reach is recovering. Follows are the bottleneck.",
    points: [
      "97.9% of views come from the For You feed, so TikTok is distributing the videos normally. This is not a suppression problem.",
      "The last two posts (534 and 529 views) tripled the mid-week plateau of ~170, so reach is trending back up as the account ages.",
      "2,667 views turned into 52 profile visits and 8 followers. The leak is not reach, it is that viewers watch, enjoy, and scroll on without a reason to follow.",
      "2 comments across 8 videos is the single biggest thing holding distribution back, comments are the strongest signal TikTok uses to push a video wider.",
    ],
  },

  timeline: [
    {
      date: "Jul 10, 2026", resolved: false,
      title: "Nike's downfall (original edit) restricted",
      body: "Video was made ineligible for the For You feed under TikTok's Integrity &amp; Authenticity policy. Initial diagnosis pointed at the on-screen stock chart, showing a real company's share price falling alongside dramatic language can read as a financial claim.",
    },
    {
      date: "Jul 10, 2026", resolved: false,
      title: "Re-edit restricted again",
      body: "Removed the stock-chart segment and reposted. Restricted a second time. Revised diagnosis: the video names a real, publicly traded company (Nike) and frames its performance as declining, and that pattern itself appears to be the trigger, since an earlier post used similar B-roll without issue.",
    },
    {
      date: "Jul 10, 2026", resolved: true,
      title: "Video pulled, posting rule established",
      body: "Deleted rather than attempt a third edit. New screening rule going forward: no video that names a real person or company alongside a specific financial figure or a decline claim. Every candidate video is now screened against this rule before it goes out.",
    },
    {
      date: "Jul 17, 2026", resolved: true,
      title: "Week 2 diagnosis: shifting from reach to follows",
      body: "Reach is healthy and recovering, but almost none of it converts to follows. Root cause: the videos ask viewers to &quot;comment CALL&quot; (a high-commitment ask for a cold audience) with no simple follow reason and no engagement loop. Fix plan is in What's next, focused on follow CTAs, seeded comments, a named recurring series, and a tightened profile.",
    },
  ],

};
