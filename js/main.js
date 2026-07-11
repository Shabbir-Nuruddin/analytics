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
  REPORT.watchTimeTrend.map((v, i) => ({ x: `Post ${i + 1}`, y: v })),
  { width: 460, height: 110, unit: "s", ariaLabel: "Average watch time by post" }
);
renderLineChart(
  document.getElementById("chartFullWatch"),
  REPORT.fullWatchTrend.map((v, i) => ({ x: `Post ${i + 1}`, y: v })),
  { width: 460, height: 110, unit: "%", ariaLabel: "Full-video watch rate by post" }
);

// ---------- video cards ----------
const videoList = document.getElementById("videoList");
const statusLabel = { live: "Live", restricted: "Restricted", deleted: "Pulled" };
REPORT.videos.forEach(v => {
  const card = document.createElement("div");
  card.className = "video-card";

  const chartId = "chart_" + Math.random().toString(36).slice(2);
  const statsHtml = v.chart
    ? `<div class="stat-row">
        <div><div class="stat-label">Views</div><div class="stat-value">${v.views}</div></div>
        <div><div class="stat-label">Likes</div><div class="stat-value">${v.likes ?? "n/a"}</div></div>
        <div><div class="stat-label">Avg watch</div><div class="stat-value">${v.avgWatch}</div></div>
        <div><div class="stat-label">Full watch</div><div class="stat-value">${v.fullWatch}</div></div>
        <div><div class="stat-label">New followers</div><div class="stat-value">${v.followers}</div></div>
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
      <div class="video-chart" id="${chartId}"></div>
      ${statsHtml}
    </div>
  `;
  videoList.appendChild(card);

  if (v.chart) {
    renderLineChart(document.getElementById(chartId), v.chart, { width: 220, height: 100, ariaLabel: v.sub + " views over time" });
  } else {
    document.getElementById(chartId).innerHTML = '<div style="font-size:12.5px;color:var(--muted);padding-top:30px;text-align:center;">No chart, restricted before meaningful data</div>';
  }
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

// ---------- leads table ----------
const leadsBody = document.querySelector("#leadsTable tbody");
REPORT.leads.forEach(l => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${l.name}</td>
    <td>${l.video}</td>
    <td>${l.date}</td>
    <td><span class="pill ${l.status}">${l.status === "booked" ? "Booked" : "Pending"}</span></td>
  `;
  leadsBody.appendChild(tr);
});

// ---------- next steps ----------
const nextList = document.getElementById("nextList");
REPORT.next.forEach(n => {
  const li = document.createElement("li");
  li.textContent = n;
  nextList.appendChild(li);
});
