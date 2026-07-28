/* ============================================================
   REPORT DATA, edit this file whenever new analytics come in.
   Nothing else needs to change, the page reads straight from here.
   ============================================================ */

const REPORT = {
  updated: "July 28, 2026",

  kpis: [
    { label: "Videos live", value: "19", neutral: true },
    { label: "Total views", value: "41,698" },
    { label: "Total likes", value: "634" },
    { label: "Comments", value: "21" },
    { label: "Followers", value: "20" },
    { label: "Calls booked", value: "0", neutral: true },
  ],

  // one point per video, in the order posted, used for the two trend cards
  viewsTrend: [746, 174, 169, 175, 183, 2250, 542, 534, 506, 829, 488, 482, 1469, 1634, 7881, 19000, 3567, 514, 555],
  likesTrend: [18, 8, 6, 8, 4, 3, 22, 14, 10, 21, 5, 7, 22, 17, 97, 303, 46, 10, 13],

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
      views: 174, likes: 8, comments: 1, shares: 0,
    },
    {
      title: "Everyone wants to build the exciting business. The app, the brand, the thing p...",
      sub: "Which boring business do you like",
      posted: "Jul 11, 2026",
      status: "live",
      views: 169, likes: 6, comments: 1, shares: 0,
    },
    {
      title: "A pricing mistake turned into a luxury strategy. When Richard Mille launched...",
      sub: "Richard Mille luxury strategy",
      posted: "Jul 12, 2026",
      status: "live",
      views: 175, likes: 8, comments: 0, shares: 0,
    },
    {
      title: "Skip this if you don't have an older sibling. Research found the younger sibling...",
      sub: "The Leapfrog effect",
      posted: "Jul 13, 2026",
      status: "live",
      views: 183, likes: 4, comments: 0, shares: 1,
    },
    {
      title: "Nobody talks about this privilege, and it has nothing to do with how much money...",
      sub: "The hidden family tax",
      posted: "Jul 14, 2026",
      status: "live",
      views: 2250, likes: 3, comments: 2, shares: 1,
    },
    {
      title: "You will never see a billionaire's kid at a cricket academy or a dance class...",
      sub: "Hobbies rich families choose",
      posted: "Jul 15, 2026",
      status: "live",
      views: 542, likes: 22, comments: 1, shares: 3,
    },
    {
      title: "People say Elon Musk succeeded because his father was rich. People who say this...",
      sub: "The 4 unfair advantages",
      posted: "Jul 16, 2026",
      status: "live",
      views: 534, likes: 14, comments: 0, shares: 0,
    },
    {
      title: "Run clubs are not a fitness trend. They are the new dating apps, and it is silently...",
      sub: "Run clubs are the new dating apps",
      posted: "Jul 17, 2026",
      status: "live",
      views: 506, likes: 10, comments: 0, shares: 1,
    },
    {
      title: "16 lakh rupees. Not for a coach. Not for equipment. For an astrologer. While ot...",
      sub: "The FIFA astrologer",
      posted: "Jul 18, 2026",
      status: "live",
      views: 829, likes: 21, comments: 2, shares: 6,
    },
    {
      title: "Rich families add children to grow the empire. Poor families add children and split it...",
      sub: "The quantity quality tradeoff",
      posted: "Jul 19, 2026",
      status: "live",
      views: 488, likes: 5, comments: 0, shares: 0,
    },
    {
      title: "11 lakh engineers. Zero products. One very old explanation. Infosys, Wipro, and TCS...",
      sub: "The Ringelmann effect",
      posted: "Jul 20, 2026",
      status: "live",
      views: 482, likes: 7, comments: 5, shares: 0,
    },
    {
      title: "Messi's left foot is insured for more than Virat Kohli, MS Dhoni, and Sachin Tendulkar's...",
      sub: "The two engines of athlete wealth",
      posted: "Jul 21, 2026",
      status: "live",
      views: 1469, likes: 22, comments: 0, shares: 1,
    },
    {
      title: "Harsh Beniwal spent years building a fanbase as the ultimate desi, bold, unfiltered guy...",
      sub: "Fake accent, real consequences",
      posted: "Jul 22, 2026",
      status: "live",
      views: 1634, likes: 17, comments: 0, shares: 0,
    },
    {
      title: "Everyone jokes about Anand Ambani launching an ice cream brand. Nobody talks about...",
      sub: "The Ambani succession structure",
      posted: "Jul 23, 2026",
      status: "live",
      views: 7881, likes: 97, comments: 3, shares: 0,
    },
    {
      title: "Alia Bhatt reportedly got paid 30 lakhs to appear on Samay Raina's show. She wasn't...",
      sub: "Getting blacklisted made him richer",
      posted: "Jul 24, 2026",
      status: "live",
      views: 19000, likes: 303, comments: 4, shares: 7,
    },
    {
      title: "India's most exclusive school isn't owned by the Ambanis, and money alone won't...",
      sub: "The Woodstock School",
      posted: "Jul 25, 2026",
      status: "live",
      views: 3567, likes: 46, comments: 2, shares: 0,
    },
    {
      title: "A lot of what feels like control from your parents was never really about you...",
      sub: "Inherited survival, not control",
      posted: "Jul 27, 2026",
      status: "live",
      views: 514, likes: 10, comments: 0, shares: 0,
    },
    {
      title: "Luxury was never really about the price tag. It is about scarcity. The...",
      sub: "The most expensive thing money can't buy more of",
      posted: "Jul 28, 2026",
      status: "live",
      views: 555, likes: 13, comments: 0, shares: 0,
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
    { date: "Jul 21", views: 1469, profileViews: null, likes: 22, comments: 0, shares: 1 },
    { date: "Jul 22", views: 1634, profileViews: null, likes: 17, comments: 0, shares: 0 },
    { date: "Jul 23", views: 7881, profileViews: null, likes: 97, comments: 3, shares: 0 },
    { date: "Jul 24", views: 19000, profileViews: null, likes: 303, comments: 4, shares: 7 },
    { date: "Jul 25", views: 3567, profileViews: null, likes: 46, comments: 2, shares: 0 },
    { date: "Jul 27", views: 514, profileViews: null, likes: 10, comments: 0, shares: 0 },
    { date: "Jul 28", views: 555, profileViews: null, likes: 13, comments: 0, shares: 0 },
  ],

};
