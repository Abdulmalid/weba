const listings = [
  { title: 'Modern Loft in Downtown', price: '$780,000', img: 'https://picsum.photos/seed/list1/600/400' },
  { title: 'Family Home with Garden', price: '$920,000', img: 'https://picsum.photos/seed/list2/600/400' },
  { title: 'Waterfront Apartment', price: '$1,050,000', img: 'https://picsum.photos/seed/list3/600/400' }
];

const resultsEl = document.getElementById('results');
const skeletonEl = document.getElementById('skeletons');
const filterPanel = document.getElementById('filterPanel');
const filterToggle = document.getElementById('filterToggle');
const saveButton = document.getElementById('saveButton');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function renderListings() {
  skeletonEl.classList.remove('hidden');
  resultsEl.classList.add('hidden');

  window.setTimeout(() => {
    resultsEl.innerHTML = listings
      .map(
        (item) => `
        <article class="card">
          <img loading="lazy" src="${item.img}" alt="${item.title}" />
          <div class="body">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button class="btn btn-secondary" type="button">Contact Agent</button>
          </div>
        </article>`
      )
      .join('');

    skeletonEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');
  }, 900);
}

filterToggle.addEventListener('click', () => {
  filterPanel.classList.toggle('hidden');
});

saveButton.addEventListener('click', () => {
  const active = saveButton.getAttribute('aria-pressed') === 'true';
  saveButton.setAttribute('aria-pressed', String(!active));
  saveButton.textContent = active ? '♡ Save Listing' : '♥ Saved';
  showToast(active ? 'Removed from saved listings.' : 'Listing saved successfully.');
});

renderListings();
