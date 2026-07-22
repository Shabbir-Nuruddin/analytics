/* ============================================================
   REPORT DATA, edit this file whenever new analytics come in.
   Nothing else needs to change, the page reads straight from here.
   ============================================================ */

const REPORT = {
  updated: "July 20, 2026",

  kpis: [
    { label: "Videos live", value: "9", neutral: true },
    { label: "Total views", value: "4,887" },
    { label: "Total likes", value: "83" },
    { label: "Comments", value: "2" },
    { label: "Followers", value: "8" },
    { label: "Calls booked", value: "0", neutral: true },
  ],

  // one point per video, in the order posted, used for the two trend cards
  viewsTrend: [743, 170, 166, 171, 178, 2237, 534, 529, 159],
  likesTrend: [18, 8, 6, 7, 3, 2, 21, 13, 5],

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
      views: 2237, likes: 2, comments: 0, shares: 1,
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
      title: "16 lakh rupees. Not for a coach. Not for equipment. For an astrologer. While ot...",
      sub: "The FIFA astrologer",
      posted: "Jul 18, 2026",
      status: "live",
      views: 159, likes: 5, comments: 0, shares: 0,
    },
  ],

  // the honest read on where growth is stuck, shown as a callout band
  diagnosis: {
    headline: "Reach is not the problem. Converting it to follows is.",
    points: [
      "One video proved the point this week: the Jul 14 post quietly climbed from 176 to 2,237 views, and produced 0 new followers, 2 likes, and 0 comments. TikTok gave it the audience, the audience did not convert.",
      "Distribution is healthy across the board: For You accounts for 95% to 100% of views on every post, so the videos are being pushed to strangers, not suppressed.",
      "The first real comment signal just showed up: 4 comments landed on Jul 19 and 4 more on Jul 20, after two weeks of near-zero. That is the single biggest lever for reach, and it just started moving in the right direction.",
      "Watch quality is actually improving, the newest post held an average watch of 10.24s, the highest yet. People who stay are engaged. The gap is that almost none of them are given a reason to follow.",
    ],
  },

  // account-wide totals per day, a different granularity than the per-video table above
  dailyPerf: [
    { date: "Jul 14", views: 220,  profileViews: 2, likes: 8,  comments: 0, shares: 2 },
    { date: "Jul 15", views: 521,  profileViews: 3, likes: 29, comments: 0, shares: 1 },
    { date: "Jul 16", views: 522,  profileViews: 7, likes: 9,  comments: 0, shares: 0 },
    { date: "Jul 17", views: 2566, profileViews: 7, likes: 14, comments: 0, shares: 3 },
    { date: "Jul 18", views: 850,  profileViews: 8, likes: 30, comments: 0, shares: 4 },
    { date: "Jul 19", views: 472,  profileViews: 3, likes: 3,  comments: 4, shares: 2 },
    { date: "Jul 20", views: 494,  profileViews: 7, likes: 7,  comments: 4, shares: 0 },
  ],

};
