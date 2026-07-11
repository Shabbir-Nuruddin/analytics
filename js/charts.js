/* Minimal, dependency-free line chart. Single series, so no legend
   (title names the metric). Thin 2px line, rounded end marker,
   hairline gridlines, hover crosshair + tooltip. */

function renderLineChart(container, points, opts = {}) {
  const W = opts.width || 400;
  const H = opts.height || 120;
  const pad = { top: 10, right: 12, bottom: 20, left: 12 };
  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;

  const ys = points.map(p => p.y);
  const maxY = Math.max(...ys, 1);
  const minY = 0;

  const xStep = points.length > 1 ? innerW / (points.length - 1) : 0;
  const xAt = i => pad.left + i * xStep;
  const yAt = v => pad.top + innerH - ((v - minY) / (maxY - minY || 1)) * innerH;

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xAt(i).toFixed(1)} ${yAt(p.y).toFixed(1)}`).join(" ");

  const gridLines = [0.25, 0.5, 0.75].map(t => {
    const y = pad.top + innerH * (1 - t);
    return `<line class="grid-line" x1="${pad.left}" x2="${W - pad.right}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}"/>`;
  }).join("");

  // show first, last, and a few evenly spaced labels so it never overcrowds
  const labelEvery = Math.max(1, Math.ceil(points.length / 5));
  const labels = points.map((p, i) => {
    if (i !== 0 && i !== points.length - 1 && i % labelEvery !== 0) return "";
    return `<text class="axis-label" x="${xAt(i).toFixed(1)}" y="${H - 4}" text-anchor="${i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"}">${p.x}</text>`;
  }).join("");

  const last = points[points.length - 1];

  const svg = `
    <svg class="linechart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${opts.ariaLabel || "trend chart"}">
      ${gridLines}
      <line class="baseline" x1="${pad.left}" x2="${W - pad.right}" y1="${(pad.top + innerH).toFixed(1)}" y2="${(pad.top + innerH).toFixed(1)}"/>
      <path class="series" d="${linePath}"/>
      <circle class="end-dot" cx="${xAt(points.length - 1).toFixed(1)}" cy="${yAt(last.y).toFixed(1)}" r="4"/>
      ${labels}
      <line class="hover-line" data-hover x1="0" x2="0" y1="${pad.top}" y2="${(pad.top + innerH).toFixed(1)}"/>
      <circle class="hover-dot" data-hover r="4"/>
    </svg>
  `;

  container.style.position = "relative";
  container.innerHTML = svg;

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  container.appendChild(tooltip);

  const svgEl = container.querySelector("svg");
  const hoverLine = svgEl.querySelector(".hover-line");
  const hoverDot = svgEl.querySelector(".hover-dot");

  function showAt(i) {
    const p = points[i];
    const cx = xAt(i);
    const cy = yAt(p.y);
    hoverLine.setAttribute("x1", cx); hoverLine.setAttribute("x2", cx);
    hoverLine.style.opacity = 1;
    hoverDot.setAttribute("cx", cx); hoverDot.setAttribute("cy", cy);
    hoverDot.style.opacity = 1;
    const pct = cx / W * 100;
    tooltip.style.left = pct + "%";
    tooltip.style.top = (cy / H * container.clientHeight) + "px";
    tooltip.textContent = `${p.x}: ${p.y.toLocaleString()}${opts.unit || ""}`;
    tooltip.style.opacity = 1;
  }
  function hide() {
    hoverLine.style.opacity = 0; hoverDot.style.opacity = 0; tooltip.style.opacity = 0;
  }

  svgEl.addEventListener("mousemove", (e) => {
    const rect = svgEl.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * W;
    let nearest = 0, best = Infinity;
    points.forEach((p, i) => { const d = Math.abs(xAt(i) - relX); if (d < best) { best = d; nearest = i; } });
    showAt(nearest);
  });
  svgEl.addEventListener("mouseleave", hide);
}
