document.getElementById("updatedDate").textContent = REPORT.updated;

// ---------- KPI strip ----------
const kpiGrid = document.getElementById("kpiGrid");
REPORT.kpis.forEach(k => {
  const div = document.createElement("div");
  div.className = "kpi";
  div.innerHTML = `<div class="kpi-label">${k.label}</div><div class="kpi-value${k.neutral ? " neutral" : ""}">${k.value}</div>`;
  kpiGrid.appendChild(div);
});

// ---------- trend cards ----------
renderLineChart(
  document.getElementById("chartWatchTime"),
  REPORT.viewsTrend.map((v, i) => ({ x: `Post ${i + 1}`, y: v })),
  { width: 460, height: 110, unit: "", ariaLabel: "Views by post" }
);
renderLineChart(
  document.getElementById("chartFullWatch"),
  REPORT.likesTrend.map((v, i) => ({ x: `Post ${i + 1}`, y: v })),
  { width: 460, height: 110, unit: "", ariaLabel: "Likes by post" }
);

// ---------- diagnosis band ----------
if (REPORT.diagnosis) {
  const dHead = document.getElementById("diagHeadline");
  const dList = document.getElementById("diagList");
  if (dHead) dHead.textContent = REPORT.diagnosis.headline;
  if (dList) REPORT.diagnosis.points.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    dList.appendChild(li);
  });
}

// ---------- video cards ----------
const videoList = document.getElementById("videoList");
const statusLabel = { live: "Live", restricted: "Restricted", deleted: "Pulled" };
REPORT.videos.forEach(v => {
  const card = document.createElement("div");
  card.className = "video-card";

  const statsHtml = v.status !== "deleted"
    ? `<div class="stat-row">
        <div><div class="stat-label">Views</div><div class="stat-value">${v.views}</div></div>
        <div><div class="stat-label">Likes</div><div class="stat-value">${v.likes ?? "n/a"}</div></div>
        <div><div class="stat-label">Comments</div><div class="stat-value">${v.comments ?? "n/a"}</div></div>
        <div><div class="stat-label">Shares</div><div class="stat-value">${v.shares ?? "n/a"}</div></div>
      </div>`
    : `<div class="stat-row"><div><div class="stat-label">Views before restriction</div><div class="stat-value">${v.views}</div></div></div>`;

  card.innerHTML = `
    <div class="video-top">
      <div>
        <div class="video-title">${v.title}</div>
        <div class="video-meta">${v.sub} &middot; Posted ${v.posted}</div>
      </div>
      <span class="status-badge ${v.status}"><span class="dot"></span>${statusLabel[v.status]}</span>
    </div>
    <div class="video-body">
      ${statsHtml}
    </div>
  `;
  videoList.appendChild(card);
});

// ---------- issues timeline ----------
const timeline = document.getElementById("timeline");
REPORT.timeline.forEach(t => {
  const item = document.createElement("div");
  item.className = "tl-item" + (t.resolved ? " resolved" : "");
  item.innerHTML = `
    <div class="tl-date">${t.date}</div>
    <div class="tl-title">${t.title}</div>
    <div class="tl-body">${t.body}</div>
  `;
  timeline.appendChild(item);
});

