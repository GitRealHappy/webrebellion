(function initHomePage() {
  const productGrid = document.getElementById("product-grid");
  const yearNode = document.getElementById("year");

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  if (!productGrid || !window.STORE) {
    return;
  }

  const cardMarkup = STORE.products.map((product) => {
    const tbaClass = product.isTba ? " is-tba" : "";
    const unavailableClass = product.isUnavailable ? " is-unavailable" : "";
    const featuredClass = product.isFeatured ? " is-featured" : "";

    const titleHtml = product.isTba
      ? `<h3 class="card-title"><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.title)}</span><span class="sr-only">${escapeHtml(product.title)}</span></h3>`
      : `<h3 class="card-title">${escapeHtml(product.title)}</h3>`;

    const idHtml = product.isTba
      ? `<span class="card-id"><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.thumbnailLabel)}</span><span class="sr-only">${escapeHtml(product.thumbnailLabel)}</span></span>`
      : `<span class="card-id">${escapeHtml(product.thumbnailLabel)}</span>`;

    const statusLabel = product.isUnavailable ? (product.isTba ? "Locked" : "Standby") : "Active";

    const ctaHtml = product.isUnavailable
      ? (product.substackUrl
          ? `<a class="btn-ghost" href="${escapeAttr(product.substackUrl)}" target="_blank" rel="noopener noreferrer">Notify me →</a>`
          : product.isTba
            ? `<span class="btn-locked" role="button" aria-disabled="true">[ Encrypted ]</span>`
            : `<span class="btn-locked" role="button" aria-disabled="true">[ Standby ]</span>`)
      : (product.externalUrl
          ? `<a class="btn-ghost" href="${escapeAttr(product.externalUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeAttr(product.title)} (opens in new tab)">Open →</a>`
          : `<a class="btn-ghost" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${escapeAttr(product.title)}">View →</a>`);

    const badgeHtml = product.isFeatured
      ? `<span class="card-badge">// Primary Module</span>`
      : "";

    return `
      <article class="product-card${tbaClass}${unavailableClass}${featuredClass}">
        ${badgeHtml}
        <header class="card-head">
          ${idHtml}
          <span class="card-status"><span class="dot" aria-hidden="true"></span>${escapeHtml(statusLabel)}</span>
        </header>
        ${titleHtml}
        <p class="card-desc">${escapeHtml(product.shortDescription)}</p>
        <div class="card-foot">
          <span class="card-price">${escapeHtml(product.price)}</span>
          ${ctaHtml}
        </div>
      </article>
    `;
  }).join("");

  productGrid.innerHTML = cardMarkup;
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
