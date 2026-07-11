/* ============================================================
   REPORT DATA, edit this file whenever new analytics come in.
   Nothing else needs to change, the page reads straight from here.
   ============================================================ */

const REPORT = {
  updated: "July 11, 2026",

  kpis: [
    { label: "Videos live", value: "3", neutral: true },
    { label: "Total views (live)", value: "1,039" },
    { label: "Total likes", value: "28" },
    { label: "New followers", value: "5" },
    { label: "Leads captured", value: "1" },
    { label: "Calls booked", value: "0", neutral: true },
  ],

  // one point per video, in the order posted, used for the two trend cards
  watchTimeTrend: [6.54, 6.89, 8.27],
  fullWatchTrend: [2.1, 3.7, 3.3],

  videos: [
    {
      title: "Most people make decisions with their gut and call it instinct. I spent 20 years...",
      sub: "Weighted Decision Matrix",
      posted: "Jul 9, 2026",
      status: "live",
      views: 731, likes: 17, comments: 0, shares: 2, saves: 5,
      avgWatch: "6.89s", fullWatch: "2.0%", followers: 2,
      chart: [
        { x: "Jul 9", y: 731 },
        { x: "Jul 10", y: 6 },
        { x: "Jul 11", y: 0 },
      ],
    },
    {
      title: "Gen Z didn't get handed a playbook. My generation had one, real mentorship...",
      sub: "Gen Z is playing on hard mode",
      posted: "Jul 10, 2026",
      status: "live",
      views: 155, likes: 7, comments: 0, shares: 0, saves: 0,
      avgWatch: "6.89s", fullWatch: "3.7%", followers: 0,
      chart: [
        { x: "0h", y: 0 }, { x: "1h", y: 26 }, { x: "2h", y: 20 }, { x: "3h", y: 16 },
        { x: "4h", y: 60 }, { x: "5h", y: 78 }, { x: "6h", y: 6 }, { x: "7h", y: 1 },
        { x: "12h", y: 5 }, { x: "18h", y: 0 },
      ],
    },
    {
      title: "Everyone wants to build the exciting business. The app, the brand, the thing p...",
      sub: "Which boring business do you like",
      posted: "Jul 11, 2026",
      status: "live",
      views: 153, likes: 4, comments: 0, shares: 0, saves: 1,
      avgWatch: "8.27s", fullWatch: "3.3%", followers: 2,
      chart: [
        { x: "0h", y: 0 }, { x: "1h", y: 26 }, { x: "2h", y: 15 }, { x: "3h", y: 20 },
        { x: "4h", y: 26 }, { x: "5h", y: 20 }, { x: "6h", y: 55 }, { x: "7h", y: 10 }, { x: "8h", y: 0 },
      ],
    },
    {
      title: "Nike's downfall will be studied for decades (two attempts, both restricted)",
      sub: "Pulled from the account, see Issues & fixes",
      posted: "Jul 10, 2026",
      status: "deleted",
      views: 7, likes: null, comments: null, shares: null, saves: null,
      avgWatch: "n/a", fullWatch: "n/a", followers: 0,
      chart: null,
    },
  ],

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
      body: "Deleted rather than attempt a third edit. New screening rule going forward: no video that names a real person or company alongside a specific financial figure or a decline claim. Five additional candidate videos were screened against this rule before the next post went out.",
    },
  ],

  leads: [
    { name: "Reshma Thomas", video: "Weighted Decision Matrix", date: "Jul 9, 2026", status: "pending" },
  ],

  next: [
    "Post daily, same window, 2am UAE / 6pm US Eastern",
    "Reply to every comment and DM within 2 hours",
    "Screen every new video for real names, companies, or financial figures before it goes up",
    "Reach 1,000 followers to unlock the bio link",
    "Keep qualifying DM leads before offering the free call, Ankett's time goes to real prospects",
  ],
};
