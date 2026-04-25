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
      <div class="error-card">
        <h1>Not found</h1>
        <p>No product matches that slug. Return to the catalog.</p>
        <a class="btn btn-primary" href="index.html#bundles">Back to catalog</a>
      </div>
    `;
    return;
  }

  const featureMarkup = product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");

  const titleBlock = product.isTba
    ? `<span class="tba-banner">To be announced</span>
       <h1><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.title)}</span><span class="sr-only">${escapeHtml(product.title)}</span></h1>`
    : `${product.isUnavailable ? '<span class="tba-banner">Currently unavailable</span>' : ""}<h1>${escapeHtml(product.title)}</h1>`;

  const mediaBlock = product.videoUrl
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
         <div class="video-placeholder" role="img" aria-label="Video not yet available">Film strip — TBA</div>
       </div>`;

  const stripeBtn = product.isUnavailable
    ? (product.substackUrl
        ? `<div class="substack-cta">
             <p>Available soon — subscribe to be the first to know when this drops.</p>
             <a class="btn btn-primary" href="${escapeAttr(product.substackUrl)}" target="_blank" rel="noopener noreferrer">Subscribe on Substack</a>
           </div>`
        : `<span class="btn btn-primary btn-locked btn-locked-primary" role="button" aria-disabled="true">✕ Unavailable</span>`)
    : `<a class="btn btn-primary" href="${escapeAttr(product.stripeUrl)}" target="_blank" rel="noopener noreferrer">Purchase Now</a>`;

  target.innerHTML = `
    <div class="product-detail">
      <div>
        ${titleBlock}
        <p class="hero-subtitle">${escapeHtml(product.longDescription)}</p>
        ${mediaBlock}
      </div>
      <aside class="detail-panel">
        <p class="price">${escapeHtml(product.price)}</p>
        <h2>Key features</h2>
        <ul class="feature-list">${featureMarkup}</ul>
        <div class="cta-row">
          ${stripeBtn}
        </div>
      </aside>
    </div>
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
