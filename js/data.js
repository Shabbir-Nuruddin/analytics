/* ============================================================
   REPORT DATA, edit this file whenever new analytics come in.
   Nothing else needs to change, the page reads straight from here.
   ============================================================ */

const REPORT = {
  updated: "July 21, 2026",

  kpis: [
    { label: "Videos live", value: "13", neutral: true },
    { label: "Total views", value: "8,235" },
    { label: "Total likes", value: "143" },
    { label: "Comments", value: "10" },
    { label: "Followers", value: "8" },
    { label: "Calls booked", value: "0", neutral: true },
  ],

  // one point per video, in the order posted, used for the two trend cards
  viewsTrend: [746, 172, 167, 173, 181, 2246, 540, 533, 503, 822, 483, 469, 1200],
  likesTrend: [18, 8, 6, 8, 4, 3, 22, 14, 10, 21, 4, 6, 19],

  videos: [
    {
      title: "Most people make decisions with their gut and call it instinct. I spent 20 years...",
      sub: "Weighted Decision Matrix",
      posted: "Jul 9, 2026",
      status: "live",
      views: 746, likes: 18, comments: 0, shares: 3,
    },
    {
      title: "Gen Z didn't get handed a playbook. My generation had one, real mentorship...",
      sub: "Gen Z is playing on hard mode",
      posted: "Jul 10, 2026",
      status: "live",
      views: 172, likes: 8, comments: 1, shares: 0,
    },
    {
      title: "Everyone wants to build the exciting business. The app, the brand, the thing p...",
      sub: "Which boring business do you like",
      posted: "Jul 11, 2026",
      status: "live",
      views: 167, likes: 6, comments: 1, shares: 0,
    },
    {
      title: "A pricing mistake turned into a luxury strategy. When Richard Mille launched...",
      sub: "Richard Mille luxury strategy",
      posted: "Jul 12, 2026",
      status: "live",
      views: 173, likes: 8, comments: 0, shares: 0,
    },
    {
      title: "Skip this if you don't have an older sibling. Research found the younger sibling...",
      sub: "The Leapfrog effect",
      posted: "Jul 13, 2026",
      status: "live",
      views: 181, likes: 4, comments: 0, shares: 1,
    },
    {
      title: "Nobody talks about this privilege, and it has nothing to do with how much money...",
      sub: "The hidden family tax",
      posted: "Jul 14, 2026",
      status: "live",
      views: 2246, likes: 3, comments: 1, shares: 1,
    },
    {
      title: "You will never see a billionaire's kid at a cricket academy or a dance class...",
      sub: "Hobbies rich families choose",
      posted: "Jul 15, 2026",
      status: "live",
      views: 540, likes: 22, comments: 1, shares: 3,
    },
    {
      title: "People say Elon Musk succeeded because his father was rich. People who say this...",
      sub: "The 4 unfair advantages",
      posted: "Jul 16, 2026",
      status: "live",
      views: 533, likes: 14, comments: 0, shares: 0,
    },
    {
      title: "Run clubs are not a fitness trend. They are the new dating apps, and it is silently...",
      sub: "Run clubs are the new dating apps",
      posted: "Jul 17, 2026",
      status: "live",
      views: 503, likes: 10, comments: 0, shares: 1,
    },
    {
      title: "16 lakh rupees. Not for a coach. Not for equipment. For an astrologer. While ot...",
      sub: "The FIFA astrologer",
      posted: "Jul 18, 2026",
      status: "live",
      views: 822, likes: 21, comments: 2, shares: 6,
    },
    {
      title: "Rich families add children to grow the empire. Poor families add children and split it...",
      sub: "The quantity quality tradeoff",
      posted: "Jul 19, 2026",
      status: "live",
      views: 483, likes: 4, comments: 0, shares: 0,
    },
    {
      title: "11 lakh engineers. Zero products. One very old explanation. Infosys, Wipro, and TCS...",
      sub: "The Ringelmann effect",
      posted: "Jul 20, 2026",
      status: "live",
      views: 469, likes: 6, comments: 4, shares: 0,
    },
    {
      title: "Messi's left foot is insured for more than Virat Kohli, MS Dhoni, and Sachin Tendulkar's...",
      sub: "The two engines of athlete wealth",
      posted: "Jul 21, 2026",
      status: "live",
      views: 1200, likes: 19, comments: 0, shares: 1,
    },
  ],

  // account-wide totals per day, a different granularity than the per-video table above
  dailyPerf: [
    { date: "Jul 14", views: 220,  profileViews: 2, likes: 8,  comments: 0, shares: 2 },
    { date: "Jul 15", views: 521,  profileViews: 3, likes: 29, comments: 0, shares: 1 },
    { date: "Jul 16", views: 522,  profileViews: 7, likes: 9,  comments: 0, shares: 0 },
    { date: "Jul 17", views: 2566, profileViews: 7, likes: 14, comments: 0, shares: 3 },
    { date: "Jul 18", views: 850,  profileViews: 8, likes: 30, comments: 0, shares: 4 },
    { date: "Jul 19", views: 472,  profileViews: 3, likes: 3,  comments: 4, shares: 2 },
    { date: "Jul 20", views: 494,  profileViews: 7, likes: 7,  comments: 4, shares: 0 },
    { date: "Jul 21", views: 1200, profileViews: null, likes: 19, comments: 0, shares: 1 },
  ],

};
