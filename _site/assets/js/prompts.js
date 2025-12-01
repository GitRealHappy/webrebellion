document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('prompt-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalTags = document.getElementById('modal-tags');
  const modalImage = document.getElementById('modal-image');
  const modalDesc = document.getElementById('modal-desc');
  const modalCode = document.getElementById('modal-code');
  const copyBtn = document.getElementById('copy-btn');
  
  const cards = document.querySelectorAll('.prompt-card');
  const closeButtons = document.querySelectorAll('[data-close="modal"]');
  const filterSelect = document.getElementById('category-filter');

  // Open Modal
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent;
      const category = card.dataset.category;
      const tags = card.dataset.tags;
      const imageSrc = card.querySelector('img').src;
      
      // Get hidden content
      const desc = card.querySelector('.prompt-desc').innerHTML;
      const body = card.querySelector('.prompt-body').innerText; // Use innerText to get code text

      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalTags.textContent = tags.split(',').map(t => `#${t}`).join(' ');
      modalImage.src = imageSrc;
      modalDesc.innerHTML = desc;
      modalCode.textContent = body;

      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close Modal
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // Copy to Clipboard
  copyBtn.addEventListener('click', () => {
    const textToCopy = modalCode.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
  });

  // Filtering
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      const filter = e.target.value.toLowerCase();
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

