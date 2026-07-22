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

// ---------- daily performance ----------
if (REPORT.dailyPerf) {
  renderLineChart(
    document.getElementById("chartDailyViews"),
    REPORT.dailyPerf.map(d => ({ x: d.date, y: d.views })),
    { width: 460, height: 110, unit: "", ariaLabel: "Views per day" }
  );
  renderLineChart(
    document.getElementById("chartDailyComments"),
    REPORT.dailyPerf.map(d => ({ x: d.date, y: d.comments })),
    { width: 460, height: 110, unit: "", ariaLabel: "Comments per day" }
  );

  const dailyBody = document.querySelector("#dailyTable tbody");
  REPORT.dailyPerf.forEach(d => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.date}</td>
      <td>${d.views}</td>
      <td>${d.profileViews}</td>
      <td>${d.likes}</td>
      <td>${d.comments}</td>
      <td>${d.shares}</td>
    `;
    dailyBody.appendChild(tr);
  });
}

// ---------- video cards, highest views first ----------
const videoList = document.getElementById("videoList");
const statusLabel = { live: "Live", restricted: "Restricted", deleted: "Pulled" };
const sortedVideos = [...REPORT.videos].sort((a, b) => b.views - a.views);
sortedVideos.forEach(v => {
  const card = document.createElement("div");
  card.className = "video-card";

  const extraStats = (v.avgWatch || v.fullWatch)
    ? `
        <div><div class="stat-label">Avg watch</div><div class="stat-value">${v.avgWatch ?? "n/a"}</div></div>
        <div><div class="stat-label">Full watch</div><div class="stat-value">${v.fullWatch ?? "n/a"}</div></div>`
    : "";

  const statsHtml = v.status !== "deleted"
    ? `<div class="stat-row">
        <div><div class="stat-label">Views</div><div class="stat-value">${v.views}</div></div>
        <div><div class="stat-label">Likes</div><div class="stat-value">${v.likes ?? "n/a"}</div></div>
        <div><div class="stat-label">Comments</div><div class="stat-value">${v.comments ?? "n/a"}</div></div>
        <div><div class="stat-label">Shares</div><div class="stat-value">${v.shares ?? "n/a"}</div></div>${extraStats}
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


