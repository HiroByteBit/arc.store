import { productsData } from './data.js';
import { formatPrice } from './utils.js';
import { openModal } from './modal.js';
import { addToCart } from './cart.js';
import { toggleWishlist, isInWishlist } from './wishlist.js';

let currentFilter = 'All';
let currentSort = 'newest';

export const initProducts = () => {
    const container = document.getElementById('products-container');
    const filters = document.getElementById('product-filters');
    const sortDropdown = document.getElementById('sort-dropdown');

    if (!container || !filters || !sortDropdown) return;

    renderProducts();

    filters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (btn) {
            filters.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts();
        }
    });

    sortDropdown.addEventListener('click', (e) => {
        const trigger = e.target.closest('.dropdown-trigger');
        const item = e.target.closest('li');
        const label = document.getElementById('current-sort');

        if (trigger) sortDropdown.classList.toggle('open');
        if (item) {
            currentSort = item.dataset.value;
            if (label) label.textContent = item.textContent;
            sortDropdown.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            sortDropdown.classList.remove('open');
            renderProducts();
        }
    });

    document.addEventListener('click', (e) => {
        if (!sortDropdown.contains(e.target)) sortDropdown.classList.remove('open');
    });

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        const id = card.dataset.id;
        if (e.target.closest('.wishlist-btn')) {
            toggleWishlist(id);
            renderProducts();
        } else if (e.target.closest('.add-to-cart-btn')) {
            addToCart(id);
        } else {
            openModal(id);
        }
    });
};

export const renderProducts = () => {
    const container = document.getElementById('products-container');
    if (!container) return;

    let filtered = productsData.filter(p => currentFilter === 'All' || p.category === currentFilter);

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    container.innerHTML = filtered.map(product => {
        const isWishlisted = isInWishlist(product.id);
        return `
            <div class="product-card" data-id="${product.id}" style="cursor: pointer; position: relative; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #eee;">
                ${product.badge ? `<div style="position: absolute; top: 10px; left: 10px; background: #000; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 10px; z-index: 1;">${product.badge}</div>` : ''}
                <button class="wishlist-btn" style="position: absolute; top: 10px; right: 10px; background: white; border: none; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 1; color: ${isWishlisted ? 'red' : '#ccc'};">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <div style="height: 240px; background: #f9f9f9;">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x400?text=${encodeURIComponent(product.name)}'">
                </div>
                <div style="padding: 15px;">
                    <div style="font-size: 10px; color: #888; text-transform: uppercase;">${product.category}</div>
                    <h3 style="font-size: 14px; margin: 5px 0;">${product.name}</h3>
                    <div style="color: #ffc107; font-size: 12px; margin-bottom: 10px;">★★★★★ <span style="color: #888;">(${product.reviews})</span></div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold;">${formatPrice(product.price)}</span>
                        <button class="add-to-cart-btn" style="background: #000; color: #fff; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M12 10v6"/><path d="M9 13h6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};
