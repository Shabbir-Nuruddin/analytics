function renderLineChart(container, points, opts = {}) {
  const W = opts.width || 600, H = opts.height || 170;
  const pad = { top: 12, right: 14, bottom: 24, left: 14 };
  const innerW = W - pad.left - pad.right, innerH = H - pad.top - pad.bottom;
  const maxY = Math.max(...points.map(p => p.y), 1) * 1.06;
  const xAt = i => pad.left + i * (points.length > 1 ? innerW / (points.length - 1) : 0);
  const yAt = v => pad.top + innerH - (v / maxY) * innerH;
  const line = points.map((p,i) => `${i ? "L" : "M"}${xAt(i).toFixed(1)},${yAt(p.y).toFixed(1)}`).join(" ");
  const area = `${line} L${xAt(points.length-1).toFixed(1)},${pad.top+innerH} L${xAt(0).toFixed(1)},${pad.top+innerH} Z`;
  const grids = [0,.25,.5,.75].map(t => `<line class="grid-line" x1="${pad.left}" x2="${W-pad.right}" y1="${(pad.top+innerH*(1-t)).toFixed(1)}" y2="${(pad.top+innerH*(1-t)).toFixed(1)}"/>`).join("");
  const every = Math.max(1, Math.ceil(points.length / (opts.labels || 6)));
  const labels = points.map((p,i) => (i===0 || i===points.length-1 || i%every===0) ? `<text class="axis-label" x="${xAt(i)}" y="${H-4}" text-anchor="${i===0?'start':i===points.length-1?'end':'middle'}">${p.x}</text>` : "").join("");
  const last = points.length-1;
  container.innerHTML = `<svg class="linechart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${opts.ariaLabel||'Trend chart'}"><defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6d9696" stop-opacity=".26"/><stop offset="1" stop-color="#6d9696" stop-opacity="0"/></linearGradient></defs>${grids}<path class="area" d="${area}"/><path class="series" d="${line}"/><circle class="end-dot" cx="${xAt(last)}" cy="${yAt(points[last].y)}" r="4"/>${labels}<line class="hover-line" y1="${pad.top}" y2="${pad.top+innerH}"/><circle class="hover-dot" r="4"/></svg>`;
  const tip=document.createElement('div');tip.className='chart-tooltip';container.appendChild(tip);
  const svg=container.querySelector('svg'), hoverLine=svg.querySelector('.hover-line'), hoverDot=svg.querySelector('.hover-dot');
  const show=i=>{const x=xAt(i),y=yAt(points[i].y);hoverLine.setAttribute('x1',x);hoverLine.setAttribute('x2',x);hoverLine.style.opacity=1;hoverDot.setAttribute('cx',x);hoverDot.setAttribute('cy',y);hoverDot.style.opacity=1;tip.style.left=`${x/W*100}%`;tip.style.top=`${y/H*container.clientHeight}px`;tip.textContent=`${points[i].label||points[i].x}: ${points[i].y.toLocaleString()}`;tip.style.opacity=1};
  const pick=e=>{const r=svg.getBoundingClientRect(),rel=((e.clientX-r.left)/r.width)*W;show(Math.max(0,Math.min(points.length-1,Math.round((rel-pad.left)/(innerW/(points.length-1))))))};
  svg.addEventListener('mousemove',pick);svg.addEventListener('touchstart',e=>pick(e.touches[0]),{passive:true});svg.addEventListener('mouseleave',()=>{hoverLine.style.opacity=0;hoverDot.style.opacity=0;tip.style.opacity=0});
}
