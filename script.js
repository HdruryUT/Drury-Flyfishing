const flyData = {
  upper: {
    spring: {
      morning: [
        { name: "BWO #18-20", why: "Cool spring mornings often produce baetis." },
        { name: "Pheasant Tail #16-18", why: "Strong searching nymph in upper sections." },
        { name: "Zebra Midge", why: "Reliable in clear tailwater drifts." }
      ],
      afternoon: [
        { name: "RS2 #20", why: "Matches emerging mayflies in slower glides." },
        { name: "Rainbow Warrior #18-20", why: "Good attractor as activity rises." },
        { name: "Scud #16", why: "Effective around structure and weed edges." }
      ],
      evening: [
        { name: "Elk Hair Caddis #16", why: "Useful through evening caddis movement." },
        { name: "Parachute Adams #16-18", why: "Covers mixed late rises." },
        { name: "Soft Hackle PT #16", why: "Swing in riffles at light drop." }
      ]
    },
    summer: {
      morning: [
        { name: "PMD Sparkle Dun #16-18", why: "Solid summer morning dry option." },
        { name: "Frenchie #14-16", why: "Fast confidence nymph for pocket water." },
        { name: "Top Secret Midge #20", why: "Useful trailer when fish are selective." }
      ],
      afternoon: [
        { name: "Chubby Chernobyl #10-12", why: "Dry-dropper anchor in summer current." },
        { name: "Perdigon #14-16", why: "Gets down quickly in faster lanes." },
        { name: "Hare's Ear #14-16", why: "Classic searching pattern." }
      ],
      evening: [
        { name: "Tan Caddis #14-16", why: "Evening caddis windows are common." },
        { name: "Ant Pattern #16", why: "Terrestrials can be excellent late." },
        { name: "CDC Emerger #18", why: "For fish taking just below film." }
      ]
    },
    fall: {
      morning: [
        { name: "BWO Comparadun #18-20", why: "Fall staple in upper section." },
        { name: "Midge Larva #20-22", why: "Good for cold starts." },
        { name: "Prince Nymph #14-16", why: "Strong contrast in pocket water." }
      ],
      afternoon: [
        { name: "Juju Baetis #18-20", why: "Great baetis imitation." },
        { name: "Sow Bug #16-18", why: "Tailwater trout key on crustaceans." },
        { name: "Copper John #14-16", why: "Gets noticed in mixed clarity." }
      ],
      evening: [
        { name: "Parachute BWO #18", why: "Good through evening baetis tail." },
        { name: "Soft Hackle Baetis #18", why: "Swing for emergers at dusk." },
        { name: "Zebra Midge", why: "Finish subsurface when rises fade." }
      ]
    },
    winter: {
      morning: [
        { name: "Zebra Midge", why: "Primary winter confidence fly." },
        { name: "WD-40 #20-22", why: "Tiny profile for technical fish." },
        { name: "Small Scud #18", why: "Good in softer winter buckets." }
      ],
      afternoon: [
        { name: "RS2 #20-22", why: "Useful in short winter hatch windows." },
        { name: "Rainbow Warrior #18-20", why: "Attractor when fish are slow." },
        { name: "Micro Perdigon #18", why: "Gets to fish near bottom quickly." }
      ],
      evening: [
        { name: "Midge Cluster #20", why: "For occasional evening sips." },
        { name: "Zebra Midge", why: "Precise drifts to close the day." },
        { name: "Thread Midge #22-24", why: "Fine profile for picky fish." }
      ]
    }
  },
  middle: {},
  lower: {}
};

// Reuse upper logic as baseline where section-specific tuning is not yet custom.
flyData.middle = JSON.parse(JSON.stringify(flyData.upper));
flyData.lower = JSON.parse(JSON.stringify(flyData.upper));

const riverCoords = {
  upper: { label: "Upper Provo", latitude: 40.702, longitude: -110.897 },
  middle: { label: "Middle Provo", latitude: 40.614, longitude: -111.409 },
  lower: { label: "Lower Provo", latitude: 40.349, longitude: -111.593 }
};

const weatherCodeMap = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  95: "Thunderstorm"
};

const flyPreferredColors = {
  "BWO #18-20": "Olive",
  "Pheasant Tail #16-18": "Natural brown",
  "Zebra Midge": "Black/silver",
  "RS2 #20": "Olive-gray",
  "Rainbow Warrior #18-20": "Pearl/silver with red hotspot",
  "Scud #16": "Olive-gray",
  "Elk Hair Caddis #16": "Tan",
  "Parachute Adams #16-18": "Gray with white post",
  "Soft Hackle PT #16": "Pheasant tail brown",
  "PMD Sparkle Dun #16-18": "Pale yellow/cream",
  "Frenchie #14-16": "Natural with orange hotspot",
  "Top Secret Midge #20": "Black/silver",
  "Chubby Chernobyl #10-12": "Tan/golden",
  "Perdigon #14-16": "Olive",
  "Hare's Ear #14-16": "Tan/olive-brown",
  "Tan Caddis #14-16": "Tan",
  "Ant Pattern #16": "Black",
  "CDC Emerger #18": "Olive-gray",
  "BWO Comparadun #18-20": "Olive",
  "Midge Larva #20-22": "Red/black",
  "Prince Nymph #14-16": "Brown peacock",
  "Juju Baetis #18-20": "Olive",
  "Sow Bug #16-18": "Light gray/tan",
  "Copper John #14-16": "Red copper",
  "Parachute BWO #18": "Olive-gray",
  "Soft Hackle Baetis #18": "Olive-brown",
  "WD-40 #20-22": "Gray-olive",
  "Small Scud #18": "Olive-gray",
  "RS2 #20-22": "Olive-gray",
  "Micro Perdigon #18": "Black with orange hotspot",
  "Midge Cluster #20": "Black",
  "Thread Midge #22-24": "Black or dark olive",
  "Humpy": "Yellow (red as alternate)",
  "White Wulff": "White with grizzly/brown hackle",
  "Stimulator": "Golden yellow/orange (olive alternate)",
  "Bead Head Woolly Bugger": "Olive (black and brown alternates)",
  "Dave's Hopper": "Tan (yellow alternate)",
  "Foam Beetle": "Black with red indicator (purple alternate)",
  "Pat's Rubber Legs": "Black with light rubber legs (coffee/tan alternate)",
  "Sculpin Streamer": "Olive-brown (black alternate)"
};

const customFlies = [
  { name: "Humpy", why: "High-floating attractor dry fly for pocket water and chop." },
  { name: "White Wulff", why: "Visible attractor dry fly for rough surface currents." },
  { name: "Stimulator", why: "Large buoyant attractor that can represent stones and caddis." },
  { name: "Bead Head Woolly Bugger", why: "Versatile streamer for searching and covering water." },
  { name: "Dave's Hopper", why: "Classic terrestrial for summer and early fall bankside drifts." },
  { name: "Foam Beetle", why: "Low-profile terrestrial that excels near overhanging grass and trees." },
  { name: "Pat's Rubber Legs", why: "Heavy stonefly-style nymph for fast seams and high water periods." },
  { name: "Sculpin Streamer", why: "Bigger profile streamer for aggressive trout in deeper slots." }
];

// Hatch calendar data
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const hatchData = [
  {
    name: "Midges",
    latin: "Chironomidae",
    description: "Year-round staple of the Provo tailwater. Most critical in winter when other insects are dormant. Fish near bottom in slow seams during the coldest months; look for surface clustering during brief afternoon windows.",
    sizes: "#18-26",
    timing: "All day in winter; mid-morning through early afternoon in shoulder seasons",
    flies: ["Zebra Midge", "Thread Midge #22-24", "WD-40 #20-22", "Midge Larva #20-22"],
    activity: [3, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3]
  },
  {
    name: "Blue-Winged Olive",
    latin: "Baetis spp.",
    description: "The signature Provo River hatch. These small mayflies thrive in cool, overcast conditions. Peak action runs March through April and again in October. Fish dries during heavy emergence; lead with nymphs in the hour before.",
    sizes: "#16-22",
    timing: "Mid-morning to early afternoon, peaking on overcast days",
    flies: ["BWO #18-20", "BWO Comparadun #18-20", "RS2 #20", "Juju Baetis #18-20", "Soft Hackle Baetis #18"],
    activity: [0, 1, 3, 3, 2, 0, 0, 0, 1, 3, 2, 0]
  },
  {
    name: "Pale Morning Dun",
    latin: "Ephemerella spp.",
    description: "Prime summer hatch window for dry fly fishing. PMDs produce reliable mid-morning rises in May and June on the middle Provo. Look for evening spinner falls in calmer flat water for a second opportunity.",
    sizes: "#16-18",
    timing: "Mid-morning 9am–noon; evening spinner falls",
    flies: ["PMD Sparkle Dun #16-18", "RS2 #20"],
    activity: [0, 0, 0, 1, 3, 3, 2, 0, 0, 0, 0, 0]
  },
  {
    name: "Caddis",
    latin: "Trichoptera",
    description: "Summer and fall staple producing spectacular evening hatches. Fish the skating caddis method during heavy activity when trout are slashing at the surface. Soft hackle wets on the swing also work well.",
    sizes: "#14-18",
    timing: "Afternoon through sunset; peaks just before dark",
    flies: ["Elk Hair Caddis #16", "Tan Caddis #14-16", "Soft Hackle PT #16"],
    activity: [0, 0, 0, 0, 1, 3, 3, 2, 1, 0, 0, 0]
  },
  {
    name: "Trico",
    latin: "Tricorythodes spp.",
    description: "July and August early-morning spinner fall. Fish small dark dries as trout key on spent spinners in flat water. The hatch is typically finished by 9am — early arrival is essential.",
    sizes: "#18-24",
    timing: "Early morning only, 6–9am",
    flies: ["Dark thread dry fly #20-22"],
    activity: [0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0]
  },
  {
    name: "Stonefly",
    latin: "Plecoptera",
    description: "Early season opportunity on the upper Provo. Larger golden and brown stones trigger big nymph and streamer action in March and April during pre-runoff flows. Pat's Rubber Legs is the proven imitation.",
    sizes: "#8-14",
    timing: "Morning and afternoon in early spring",
    flies: ["Pat's Rubber Legs"],
    activity: [0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Terrestrials",
    latin: "Hoppers, Ants, Beetles",
    description: "Summer through early fall bank-huggers. Drift hoppers tight to grassy banks; ants and beetles in calmer pockets behind structure. Best on warm afternoons with a light breeze pushing insects onto the water.",
    sizes: "#10-16",
    timing: "Warm afternoons, mid-July through September",
    flies: ["Ant Pattern #16", "Dave's Hopper", "Foam Beetle"],
    activity: [0, 0, 0, 0, 0, 1, 3, 3, 2, 0, 0, 0]
  }
];

// USGS gauge stations for live stream conditions
const usgsStations = [
  { id: "10154200", name: "Upper Provo", note: "Near Woodland, UT" },
  { id: "10155200", name: "Lower Provo", note: "Below Deer Creek Dam" }
];

const sectionSelect = document.getElementById("sectionSelect");
const seasonSelect = document.getElementById("seasonSelect");
const timeSelect = document.getElementById("timeSelect");
const flyList = document.getElementById("flyList");
const recommendationMeta = document.getElementById("recommendationMeta");
const weatherCards = document.getElementById("weatherCards");
const weatherStatus = document.getElementById("weatherStatus");
const refreshWeatherButton = document.getElementById("refreshWeatherButton");
const plannerTab = document.getElementById("plannerTab");
const flyIndexTab = document.getElementById("flyIndexTab");
const riverMapTab = document.getElementById("riverMapTab");
const plannerView = document.getElementById("plannerView");
const flyIndexView = document.getElementById("flyIndexView");
const riverMapView = document.getElementById("riverMapView");
const flyIndexList = document.getElementById("flyIndexList");
const flyIndexMeta = document.getElementById("flyIndexMeta");
const riverDetailCards = document.getElementById("riverDetailCards");
const provoRiverMapImage = document.getElementById("provoRiverMapImage");
const hatchCalendarTab = document.getElementById("hatchCalendarTab");
const conditionsTab = document.getElementById("conditionsTab");
const regulationsTab = document.getElementById("regulationsTab");
const hatchCalendarView = document.getElementById("hatchCalendarView");
const conditionsView = document.getElementById("conditionsView");
const regulationsView = document.getElementById("regulationsView");
const refreshConditionsButton = document.getElementById("refreshConditionsButton");
const conditionsStatus = document.getElementById("conditionsStatus");
const conditionsCards = document.getElementById("conditionsCards");

const riverSectionDetails = {
  upper: {
    title: "Upper Provo",
    summary: "High-elevation canyon water with colder flows, pocket water, and technical drifts.",
    access: "Mirror Lake Highway corridor and pull-offs through upper canyon sections.",
    focus: "Best for nymph rigs, smaller baetis patterns, and precise drifts in broken current."
  },
  middle: {
    title: "Middle Provo",
    summary: "Classic tailwater influence with consistent flows, riffle-run structure, and strong hatch activity.",
    access: "Popular access around Heber Valley reaches and public walk-in stretches.",
    focus: "Excellent for dry-dropper in summer and hatch-matching dries during PMD and caddis windows."
  },
  lower: {
    title: "Lower Provo",
    summary: "Broader river profile with mixed speed seams, deeper slots, and year-round opportunity.",
    access: "Convenient pull-offs and trails around Provo Canyon stretches below Deer Creek.",
    focus: "Strong midge and baetis game in colder months, streamers and terrestrials when flows allow."
  }
};

let riverMapRendered = false;

function flowDescription(cfs) {
  if (cfs < 30) return { label: "Very Low", note: "Technical wading; delicate, precise drifts needed.", color: "flow-low" };
  if (cfs < 100) return { label: "Low–Moderate", note: "Good wade access and prime dry fly conditions.", color: "flow-good" };
  if (cfs < 250) return { label: "Optimal", note: "Ideal range for nymph and dry-dropper rigs.", color: "flow-optimal" };
  if (cfs < 500) return { label: "Moderate–High", note: "Use heavier nymphs; wade carefully in faster seams.", color: "flow-moderate" };
  return { label: "High", note: "Streamers and heavy rigs; approach all wading with caution.", color: "flow-high" };
}

function tempDescription(tempC) {
  const tempF = ((tempC * 9) / 5 + 32).toFixed(0);
  let note;
  if (tempC < 4.4) note = "Cold water: fish lethargic; midges and slow, deep nymph drifts work best.";
  else if (tempC < 12.8) note = "Cool water: active fish; BWO and nymph prime range.";
  else if (tempC < 18.3) note = "Optimal temp: full hatch activity and best dry fly conditions.";
  else note = "Warm water: fish stressed; focus on early mornings and shaded runs.";
  return { tempF, tempC: tempC.toFixed(1), note };
}

let hatchCalendarRendered = false;

function renderHatchCalendar() {
  if (hatchCalendarRendered) return;
  const grid = document.getElementById("hatchCalendarGrid");
  if (!grid) return;

  const currentMonth = new Date().getMonth();

  let html = '<div class="hatch-table-wrap"><table class="hatch-table"><thead><tr><th>Insect</th>';
  MONTHS_SHORT.forEach((m, i) => {
    html += `<th class="${i === currentMonth ? "hatch-current-month" : ""}">${m}</th>`;
  });
  html += "</tr></thead><tbody>";

  hatchData.forEach((insect, rowIndex) => {
    html += `<tr class="hatch-row${rowIndex === 0 ? " hatch-selected" : ""}" data-hatch="${rowIndex}">`;
    html += `<td class="hatch-insect-name">${insect.name}</td>`;
    insect.activity.forEach((level, monthIndex) => {
      html += `<td class="hatch-cell${monthIndex === currentMonth ? " hatch-current-month" : ""}">`;
      if (level > 0) html += `<span class="hatch-dot hatch-dot-${level}"></span>`;
      html += "</td>";
    });
    html += "</tr>";
  });

  html += `</tbody></table></div>
    <div class="hatch-legend">
      <span class="legend-label">Activity:</span>
      <span class="legend-item"><span class="hatch-dot hatch-dot-1"></span>Low</span>
      <span class="legend-item"><span class="hatch-dot hatch-dot-2"></span>Moderate</span>
      <span class="legend-item"><span class="hatch-dot hatch-dot-3"></span>Peak</span>
    </div>`;

  grid.innerHTML = html;

  document.querySelectorAll(".hatch-row").forEach((row) => {
    row.addEventListener("click", () => {
      document.querySelectorAll(".hatch-row").forEach(r => r.classList.remove("hatch-selected"));
      row.classList.add("hatch-selected");
      renderHatchDetails(Number(row.dataset.hatch));
    });
  });

  hatchCalendarRendered = true;
  renderHatchDetails(0);
}

function renderHatchDetails(index) {
  const insect = hatchData[index];
  const details = document.getElementById("hatchDetails");
  if (!details) return;

  const fliesHtml = insect.flies.length
    ? insect.flies.map(f => `<span class="hatch-fly-pill">${f}</span>`).join("")
    : '<span class="hatch-fly-pill">Match current local hatch</span>';

  details.innerHTML = `
    <div class="hatch-detail-card">
      <h3>${insect.name} <span class="hatch-latin">(${insect.latin})</span></h3>
      <p>${insect.description}</p>
      <div class="hatch-detail-row">
        <div>
          <p class="hatch-detail-label">Hook Sizes</p>
          <p>${insect.sizes}</p>
        </div>
        <div>
          <p class="hatch-detail-label">Best Timing</p>
          <p>${insect.timing}</p>
        </div>
      </div>
      <p class="hatch-detail-label">Top Fly Patterns</p>
      <div class="hatch-fly-pills">${fliesHtml}</div>
    </div>
  `;
}

let conditionsLoaded = false;

async function fetchUSGSData() {
  const sites = usgsStations.map(s => s.id).join(",");
  const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${sites}&parameterCd=00060,00010&siteStatus=all`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("USGS fetch failed");
  return response.json();
}

function parseUSGSData(data) {
  const results = {};
  (data?.value?.timeSeries || []).forEach((series) => {
    const siteNo = series?.sourceInfo?.siteCode?.[0]?.value;
    const paramCode = series?.variable?.variableCode?.[0]?.value;
    const rawValue = series?.values?.[0]?.value?.[0]?.value;
    if (!siteNo || rawValue === undefined || rawValue === null) return;
    const numValue = parseFloat(rawValue);
    if (isNaN(numValue) || numValue < -9000) return;
    if (!results[siteNo]) results[siteNo] = { siteNo };
    if (paramCode === "00060") results[siteNo].flow = numValue;
    if (paramCode === "00010") results[siteNo].tempC = numValue;
  });
  return results;
}

function renderConditionsData(parsed) {
  if (!conditionsCards) return;
  conditionsCards.innerHTML = usgsStations.map((station) => {
    const data = parsed[station.id];
    if (!data) {
      return `<article class="conditions-card"><h3>${station.name}</h3><p>No data available.</p></article>`;
    }
    const flowDesc = data.flow !== undefined ? flowDescription(data.flow) : null;
    const tempDesc = data.tempC !== undefined ? tempDescription(data.tempC) : null;
    return `
      <article class="conditions-card">
        <h3>${station.name}</h3>
        <p class="conditions-gauge">USGS ${station.id} — ${station.note}</p>
        ${flowDesc ? `
          <p><strong>Flow:</strong> ${data.flow.toFixed(0)} cfs &mdash; <span class="flow-badge ${flowDesc.color}">${flowDesc.label}</span></p>
          <p class="conditions-note">${flowDesc.note}</p>
        ` : ""}
        ${tempDesc ? `
          <p><strong>Water Temp:</strong> ${tempDesc.tempF}&deg;F (${tempDesc.tempC}&deg;C)</p>
          <p class="conditions-note">${tempDesc.note}</p>
        ` : ""}
      </article>
    `;
  }).join("");
}

async function loadConditions() {
  if (conditionsStatus) conditionsStatus.textContent = "Fetching USGS stream data...";
  try {
    const raw = await fetchUSGSData();
    const parsed = parseUSGSData(raw);
    renderConditionsData(parsed);
    if (conditionsStatus) {
      conditionsStatus.textContent = `Last updated: ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
    }
    conditionsLoaded = true;
  } catch (error) {
    if (conditionsStatus) conditionsStatus.textContent = "Could not load USGS data. Try refreshing.";
    if (conditionsCards) conditionsCards.innerHTML = "";
    console.error(error);
  }
}

function sectionMapUrl(latitude, longitude) {
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

function setActiveRiverSection(sectionKey) {
  document.querySelectorAll(".section-pill").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === sectionKey);
  });

  document.querySelectorAll(".river-detail-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.section === sectionKey);
  });
}

function renderRiverMap() {
  if (!riverDetailCards || riverMapRendered) return;

  const cards = Object.entries(riverSectionDetails).map(([key, section]) => {
    const coords = riverCoords[key];
    return `
      <article class="river-detail-card" data-section="${key}">
        <h3>${section.title}</h3>
        <p>${section.summary}</p>
        <p><strong>Access:</strong> ${section.access}</p>
        <p><strong>Fishing focus:</strong> ${section.focus}</p>
        <a href="${sectionMapUrl(coords.latitude, coords.longitude)}" target="_blank" rel="noopener noreferrer">Open ${section.title} on map</a>
      </article>
    `;
  });

  riverDetailCards.innerHTML = cards.join("");

  document.querySelectorAll(".section-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionKey = button.dataset.section;
      setActiveRiverSection(sectionKey);

      const card = document.querySelector(`.river-detail-card[data-section="${sectionKey}"]`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  riverMapRendered = true;
  setActiveRiverSection("upper");
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function slugifyFlyName(name) {
  return name
    .toLowerCase()
    .replace(/#/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function flyImageCandidates(flyName) {
  const slug = slugifyFlyName(flyName);
  return [
    `assets/flies/${slug}.jpg`,
    `assets/flies/${slug}.jpeg`,
    `assets/flies/${slug}.png`,
    `assets/flies/${slug}.webp`,
    "assets/flies/placeholder.svg"
  ];
}

function handleFlyImageError(img) {
  const index = Number(img.dataset.index || "0");
  const candidates = img.dataset.candidates.split("|");
  const next = index + 1;
  if (next >= candidates.length) return;
  img.dataset.index = String(next);
  img.src = candidates[next];
}

function renderFlyCard(fly, statusId = "") {
  const candidates = flyImageCandidates(fly.name);
  const preferredColor = flyPreferredColors[fly.name] || "Varies";
  const statusHtml = statusId
    ? `<span id="${statusId}" class="image-status image-status-unknown">Checking image...</span>`
    : "";

  return `
    <article class="fly-card">
      <img
        class="fly-photo"
        src="${candidates[0]}"
        alt="${fly.name} fly pattern"
        loading="lazy"
        data-index="0"
        data-candidates="${candidates.join("|")}"
        data-status-id="${statusId}"
      />
      <h3>${fly.name}</h3>
      <p>${fly.why}</p>
      <p class="fly-color"><strong>Preferred color:</strong> ${preferredColor}</p>
      ${statusHtml}
    </article>
  `;
}

function updateImageStatus(img) {
  const statusId = img.dataset.statusId;
  if (!statusId) return;

  const statusEl = document.getElementById(statusId);
  if (!statusEl) return;

  if (img.src.includes("placeholder.svg")) {
    statusEl.textContent = "Placeholder";
    statusEl.className = "image-status image-status-placeholder";
    return;
  }

  statusEl.textContent = "Image Added";
  statusEl.className = "image-status image-status-live";
}

function wireFlyImages() {
  document.querySelectorAll(".fly-photo").forEach((img) => {
    img.addEventListener("load", () => updateImageStatus(img));
    img.addEventListener("error", () => handleFlyImageError(img));
  });
}

function renderFlies() {
  const section = sectionSelect.value;
  const season = seasonSelect.value;
  const time = timeSelect.value;
  const flies = flyData[section][season][time];

  recommendationMeta.textContent = `${titleCase(section)} Provo | ${titleCase(season)} | ${titleCase(time)}`;

  flyList.innerHTML = flies.map((fly) => renderFlyCard(fly)).join("");
  wireFlyImages();
}

function getAllUniqueFlies() {
  const byName = new Map();

  Object.values(flyData).forEach((sectionData) => {
    Object.values(sectionData).forEach((seasonData) => {
      Object.values(seasonData).forEach((timeData) => {
        timeData.forEach((fly) => {
          if (!byName.has(fly.name)) byName.set(fly.name, fly.why);
        });
      });
    });
  });

  customFlies.forEach((fly) => {
    if (!byName.has(fly.name)) byName.set(fly.name, fly.why);
  });

  return Array.from(byName.entries())
    .map(([name, why]) => ({ name, why }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderFlyIndex() {
  const allFlies = getAllUniqueFlies();
  flyIndexMeta.textContent = `${allFlies.length} fly patterns`;

  flyIndexList.innerHTML = allFlies
    .map((fly, index) => renderFlyCard(fly, `fly-status-${index}`))
    .join("");

  wireFlyImages();
}

function setView(viewName) {
  const showPlanner = viewName === "planner";
  const showFlyIndex = viewName === "fly-index";
  const showRiverMap = viewName === "river-map";
  const showHatchCalendar = viewName === "hatch-calendar";
  const showConditions = viewName === "conditions";
  const showRegulations = viewName === "regulations";

  plannerView.classList.toggle("view-hidden", !showPlanner);
  flyIndexView.classList.toggle("view-hidden", !showFlyIndex);
  riverMapView.classList.toggle("view-hidden", !showRiverMap);
  hatchCalendarView.classList.toggle("view-hidden", !showHatchCalendar);
  conditionsView.classList.toggle("view-hidden", !showConditions);
  regulationsView.classList.toggle("view-hidden", !showRegulations);

  plannerTab.classList.toggle("is-active", showPlanner);
  flyIndexTab.classList.toggle("is-active", showFlyIndex);
  riverMapTab.classList.toggle("is-active", showRiverMap);
  hatchCalendarTab.classList.toggle("is-active", showHatchCalendar);
  conditionsTab.classList.toggle("is-active", showConditions);
  regulationsTab.classList.toggle("is-active", showRegulations);

  if (showFlyIndex) renderFlyIndex();
  if (showRiverMap) renderRiverMap();
  if (showHatchCalendar) renderHatchCalendar();
  if (showConditions && !conditionsLoaded) loadConditions();
}

function setTheme() {
  document.body.classList.add("theme-camo");
  document.body.classList.remove("theme-water");

  try {
    localStorage.setItem("druryTheme", "camo");
  } catch (error) {
    console.warn("Could not save theme preference", error);
  }
}

function loadThemePreference() {
  setTheme();
}

function wireMapImageFallback() {
  if (!provoRiverMapImage) return;

  provoRiverMapImage.addEventListener("error", () => {
    provoRiverMapImage.src = "assets/flies/placeholder.svg";
    provoRiverMapImage.alt = "Map image placeholder";

    const caption = document.querySelector(".river-map-caption");
    if (caption) {
      caption.textContent = "Map image missing. Add assets/theme/provo-river-map.png to display your uploaded river map.";
    }
  });
}

async function fetchSectionWeather(config) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", config.latitude);
  url.searchParams.set("longitude", config.longitude);
  url.searchParams.set("current", "temperature_2m,apparent_temperature,wind_speed_10m,weather_code");
  url.searchParams.set("hourly", "precipitation_probability");
  url.searchParams.set("temperature_unit", "fahrenheit");
  url.searchParams.set("wind_speed_unit", "mph");
  url.searchParams.set("timezone", "America/Denver");

  const response = await fetch(url.toString());
  if (!response.ok) throw new Error(`Weather fetch failed for ${config.label}`);

  const data = await response.json();
  return {
    label: config.label,
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    wind: data.current.wind_speed_10m,
    code: data.current.weather_code,
    precipitationChance: data.hourly?.precipitation_probability?.[0] ?? null
  };
}

function weatherTip(report) {
  if (report.wind >= 20) return "High wind: fish heavier nymph rigs in tighter seams.";
  if (report.temperature <= 40) return "Cold water: lean on midge and small baetis deeper.";
  if (report.code >= 61 && report.code <= 65) return "Rain period: larger silhouette flies can help.";
  return "Stable conditions: start hatch-matching and adjust depth first.";
}

function renderWeather(reports) {
  weatherCards.innerHTML = reports.map((report) => {
    const condition = weatherCodeMap[report.code] || "Mixed";
    const precip = report.precipitationChance === null ? "n/a" : `${report.precipitationChance}%`;
    return `
      <article class="weather-card">
        <h3>${report.label}</h3>
        <p><strong>${condition}</strong></p>
        <p>Temp: ${report.temperature}F (feels ${report.feelsLike}F)</p>
        <p>Wind: ${report.wind} mph</p>
        <p>Precip: ${precip}</p>
        <p>${weatherTip(report)}</p>
      </article>
    `;
  }).join("");
}

async function loadWeather() {
  weatherStatus.textContent = "Updating weather...";
  try {
    const reports = await Promise.all(Object.values(riverCoords).map(fetchSectionWeather));
    renderWeather(reports);
    weatherStatus.textContent = `Last updated: ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  } catch (error) {
    weatherStatus.textContent = "Could not load weather. Try again.";
    weatherCards.innerHTML = "";
    console.error(error);
  }
}

sectionSelect.addEventListener("change", renderFlies);
seasonSelect.addEventListener("change", renderFlies);
timeSelect.addEventListener("change", renderFlies);
refreshWeatherButton.addEventListener("click", loadWeather);
plannerTab.addEventListener("click", () => setView("planner"));
flyIndexTab.addEventListener("click", () => setView("fly-index"));
riverMapTab.addEventListener("click", () => setView("river-map"));
hatchCalendarTab.addEventListener("click", () => setView("hatch-calendar"));
conditionsTab.addEventListener("click", () => setView("conditions"));
regulationsTab.addEventListener("click", () => setView("regulations"));
refreshConditionsButton.addEventListener("click", () => {
  conditionsLoaded = false;
  loadConditions();
});

renderFlies();
loadWeather();
setView("planner");
loadThemePreference();
wireMapImageFallback();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const isLocalhost =
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname === "::1";

    if (isLocalhost) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
      return;
    }

    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed", error);
    });
  });
}
