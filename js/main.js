const number = value => value.toLocaleString("en-US");
const totals = REPORT.videos.reduce((a,v) => ({views:a.views+v.views,likes:a.likes+v.likes,comments:a.comments+v.comments}), {views:0,likes:0,comments:0});
const averageViews = Math.round(totals.views / REPORT.videos.length);
const interactionRate = ((totals.likes + totals.comments) / totals.views * 100).toFixed(1) + "%";

document.getElementById("updatedDate").textContent = REPORT.updated;
document.getElementById("heroNote").textContent = `${REPORT.videos.length} videos have generated ${number(totals.views)} views. The account moved from a sub-1,000-view baseline to consecutive breakout posts, while new uploads continue to build the content library.`;

[
  ["Posts published", number(REPORT.videos.length), "28 posts in 29 days"],
  ["Total post views", number(totals.views), "Current snapshot"],
  ["Total likes", number(totals.likes), "Across all posts"],
  ["Comments", number(totals.comments), "Audience responses"],
  ["Avg. views / post", number(averageViews), "Includes breakout reach"],
  ["Interaction rate", interactionRate, "Likes + comments ÷ views"]
].forEach(([label,value,note]) => {
  const el=document.createElement("div");el.className="kpi";
  el.innerHTML=`<div class="kpi-label">${label}</div><div class="kpi-value">${value}</div><div class="kpi-note">${note}</div>`;
  document.getElementById("kpiGrid").appendChild(el);
});

renderLineChart(document.getElementById("chartDailyViews"), REPORT.daily.map(d=>({x:`D${d.day}`,label:`Day ${d.day} · ${d.date}`,y:d.views})), {width:1050,height:210,labels:8,ariaLabel:"Daily TikTok video views from day 1 to day 27"});
renderLineChart(document.getElementById("chartPostViews"), REPORT.videos.map(v=>({x:`P${v.id}`,label:`Post ${v.id} · ${v.date}`,y:v.views})), {width:520,height:150,ariaLabel:"Views for each of 28 TikTok posts"});
renderLineChart(document.getElementById("chartPostLikes"), REPORT.videos.map(v=>({x:`P${v.id}`,label:`Post ${v.id} · ${v.date}`,y:v.likes})), {width:520,height:150,ariaLabel:"Likes for each of 28 TikTok posts"});

const list=document.getElementById("videoList");
function renderVideos(sort="recent"){
  const items=[...REPORT.videos];
  if(sort==="recent") items.reverse();
  if(sort==="top") items.sort((a,b)=>b.views-a.views);
  list.innerHTML="";
  items.forEach(v=>{
    const top=v.views>=9000?'<span class="rank">Breakout</span>':v.views>=2000?'<span class="rank">Top performer</span>':'';
    const el=document.createElement("article");el.className="video-card";
    el.innerHTML=`<div class="post-no">${String(v.id).padStart(2,"0")}</div><div><div class="video-title">${v.title}${top}</div><div class="video-meta">Posted ${v.date}, 2026</div></div><div class="metric"><small>Views</small><strong>${number(v.views)}</strong></div><div class="metric"><small>Likes</small><strong>${number(v.likes)}</strong></div><div class="metric"><small>Comments</small><strong>${number(v.comments)}</strong></div>`;
    list.appendChild(el);
  });
}
renderVideos();
document.querySelectorAll("[data-sort]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll("[data-sort]").forEach(b=>b.classList.toggle("active",b===button));renderVideos(button.dataset.sort)}));
