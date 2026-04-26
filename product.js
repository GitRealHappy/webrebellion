(function initProductPage() {
  const target = document.getElementById("product-container");
  const yearNode = document.getElementById("year");

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  if (!target || !window.STORE) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = STORE.products.find((item) => item.id === id);

  if (!product) {
    target.innerHTML = `
      <div class="not-found">
        <h2>Module not found.</h2>
        <p>No subsystem matches that signature.</p>
        <p style="margin-top:1.25rem;"><a class="btn-ghost" href="index.html#modules">← Return to catalog</a></p>
      </div>
    `;
    return;
  }

  const statusLabel = product.isUnavailable ? (product.isTba ? "Locked" : "Standby") : "Active";
  const headOfflineClass = product.isUnavailable ? " is-offline" : "";

  const idBlock = product.isTba
    ? `<span class="id"><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.thumbnailLabel)}</span><span class="sr-only">${escapeHtml(product.thumbnailLabel)}</span></span>`
    : `<span class="id">${escapeHtml(product.thumbnailLabel)}</span>`;

  const offlineBanner = product.isUnavailable
    ? `<div class="offline-banner">// Subsystem offline ${product.substackUrl ? "// Notify on uplink" : "// Standby for transmission"}</div>`
    : "";

  const titleBlock = product.isTba
    ? `<h1 class="detail-title"><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.title)}</span><span class="sr-only">${escapeHtml(product.title)}</span></h1>`
    : `<h1 class="detail-title">${escapeHtml(product.title)}</h1>`;

  const isRemoteVideo = /^https?:\/\//i.test(product.videoUrl || "");
  const mediaBlock = !product.videoUrl
    ? `<div class="video-shell empty" role="img" aria-label="Video not yet available">// Transmission pending</div>`
    : isRemoteVideo
      ? `<div class="video-shell">
           <iframe
             src="${escapeAttr(product.videoUrl)}"
             title="${escapeAttr(product.title)} demo video"
             loading="lazy"
             referrerpolicy="strict-origin-when-cross-origin"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
           </iframe>
         </div>`
      : `<div class="video-shell">
           <video controls playsinline title="${escapeAttr(product.title)} demo video">
             <source src="${escapeAttr(product.videoUrl)}" type="video/quicktime">
             Your browser does not support embedded video.
           </video>
         </div>`;

  const featureMarkup = product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");

  const ctaBlock = product.isUnavailable
    ? (product.substackUrl
        ? `<a class="btn-primary spec-cta" href="${escapeAttr(product.substackUrl)}" target="_blank" rel="noopener noreferrer">Notify on uplink →</a>`
        : `<span class="btn-locked spec-cta" role="button" aria-disabled="true">[ ${product.isTba ? "Encrypted" : "Standby"} ]</span>`)
    : `<a class="btn-primary spec-cta" href="${escapeAttr(product.stripeUrl)}" target="_blank" rel="noopener noreferrer">Acquire module →</a>`;

  target.innerHTML = `
    <article class="product-detail">
      <header class="detail-head${headOfflineClass}">
        ${idBlock}
        <span class="status"><span class="dot" aria-hidden="true"></span>${escapeHtml(statusLabel)}</span>
      </header>
      ${offlineBanner}
      ${titleBlock}
      <p class="detail-desc">${escapeHtml(product.longDescription)}</p>
      <div class="detail-body">
        ${mediaBlock}
        <aside class="spec-sheet">
          <div class="spec-price">${escapeHtml(product.price)}</div>
          <ul class="spec-features">${featureMarkup}</ul>
          ${ctaBlock}
        </aside>
      </div>
    </article>
  `;
})();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}
