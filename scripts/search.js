import { productsData } from './data.js';
import { formatPrice } from './utils.js';
import { openModal } from './modal.js';

const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const closeSearch = document.getElementById('close-search');
const clearSearch = document.getElementById('clear-search');
const searchSuggestions = document.getElementById('search-suggestions');
const searchResultsWrapper = document.getElementById('search-results-wrapper');
const searchResultsGrid = document.getElementById('search-results-grid');
const resultsCount = document.getElementById('results-count');
const recentSearchesContainer = document.getElementById('recent-searches');

let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

export const initSearch = () => {
    // Open search
    document.querySelector('.icon-btn[aria-label="Search"]').addEventListener('click', openSearch);
    
    // Close search
    closeSearch.addEventListener('click', closeSearchOverlay);
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearchOverlay();
    });

    // Input logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            clearSearch.classList.remove('hidden');
            performSearch(query);
        } else {
            clearSearch.classList.add('hidden');
            showSuggestions();
        }
    });

    // Clear search
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        clearSearch.classList.add('hidden');
        showSuggestions();
    });

    // Suggestion clicks
    document.querySelector('.trending-tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('trending-tag')) {
            searchInput.value = e.target.textContent;
            performSearch(e.target.textContent);
            clearSearch.classList.remove('hidden');
        }
    });

    recentSearchesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('recent-tag')) {
            searchInput.value = e.target.textContent;
            performSearch(e.target.textContent);
            clearSearch.classList.remove('hidden');
        }
    });

    // Handle result clicks
    searchResultsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.search-result-card');
        if (card) {
            const id = card.dataset.id;
            saveRecentSearch(searchInput.value.trim());
            closeSearchOverlay();
            openModal(id);
        }
    });

    renderRecentSearches();
};

const openSearch = () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
    renderRecentSearches();
};

const closeSearchOverlay = () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

const performSearch = (query) => {
    const q = query.toLowerCase();
    const results = productsData.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );

    renderResults(results);
};

const renderResults = (results) => {
    searchSuggestions.classList.add('hidden');
    searchResultsWrapper.classList.remove('hidden');
    
    resultsCount.textContent = `${results.length} product${results.length === 1 ? '' : 's'} found`;
    searchResultsGrid.innerHTML = '';

    if (results.length === 0) {
        searchResultsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No matching products found. Try another keyword.</p>';
        return;
    }

    results.forEach(product => {
        const html = `
            <div class="search-result-card" data-id="${product.id}">
                <div class="img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="name">${product.name}</div>
                <div class="price">${formatPrice(product.price)}</div>
            </div>
        `;
        searchResultsGrid.insertAdjacentHTML('beforeend', html);
    });
};

const showSuggestions = () => {
    searchSuggestions.classList.remove('hidden');
    searchResultsWrapper.classList.add('hidden');
};

const saveRecentSearch = (query) => {
    if (!query) return;
    recentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
};

const renderRecentSearches = () => {
    recentSearchesContainer.innerHTML = '';
    if (recentSearches.length === 0) {
        recentSearchesContainer.innerHTML = '<span style="font-size: 0.875rem; color: var(--color-text-muted);">No recent searches</span>';
        return;
    }
    recentSearches.forEach(search => {
        const span = document.createElement('span');
        span.className = 'recent-tag';
        span.textContent = search;
        recentSearchesContainer.appendChild(span);
    });
};
