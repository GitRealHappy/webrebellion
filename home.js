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
    const titleHtml = product.isTba
      ? `<h3><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.title)}</span><span class="sr-only">${escapeHtml(product.title)}</span></h3>`
      : `<h3>${escapeHtml(product.title)}</h3>`;
    const thumbHtml = product.isTba
      ? `<p><span class="text-blur-illegible" aria-hidden="true">${escapeHtml(product.thumbnailLabel)}</span><span class="sr-only">${escapeHtml(product.thumbnailLabel)}</span></p>`
      : `<p>${escapeHtml(product.thumbnailLabel)}</p>`;

    const ctaHtml = product.isUnavailable
      ? (product.substackUrl
          ? `<a class="btn btn-ghost" href="${escapeAttr(product.substackUrl)}" target="_blank" rel="noopener noreferrer">Get notified on Substack</a>`
          : `<span class="btn btn-ghost btn-locked" role="button" aria-disabled="true">Coming soon</span>`)
      : `<a class="btn btn-ghost" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${escapeAttr(product.title)}">View details</a>`;

    return `
      <article class="product-card${tbaClass}${unavailableClass}">
        <div class="thumb">
          ${thumbHtml}
        </div>
        <div class="card-body">
          ${titleHtml}
          <p class="description">${escapeHtml(product.shortDescription)}</p>
          <p class="price">${escapeHtml(product.price)}</p>
          <div class="card-actions">
            ${ctaHtml}
          </div>
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
