import { productsData } from './data.js';
import { formatPrice } from './utils.js';
import { addToCart } from './cart.js';
import { toggleWishlist, isInWishlist } from './wishlist.js';

// DOM Elements
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('close-modal');
let currentProductId = null;
let currentSize = 'M';
let currentColor = 'dark';
let currentQty = 1;

export const initModal = () => {
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Qty Stepper
    document.getElementById('modal-qty-inc').addEventListener('click', () => updateModalQty(1));
    document.getElementById('modal-qty-dec').addEventListener('click', () => updateModalQty(-1));

    // Size Selectors
    document.getElementById('modal-sizes').addEventListener('click', (e) => {
        if (e.target.classList.contains('size-pill')) {
            document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            currentSize = e.target.dataset.size;
        }
    });

    // Color Selectors
    document.querySelectorAll('.color-circle').forEach((circle, index) => {
        circle.addEventListener('click', (e) => {
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentColor = ['dark', 'gray', 'light'][index];
        });
    });

    // Actions
    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        addToCart(currentProductId, currentQty, currentSize, currentColor);
        closeModal();
    });

    document.getElementById('modal-add-to-wishlist').addEventListener('click', () => {
        toggleWishlist(currentProductId);
        updateModalWishlistBtn();
    });
};

export const openModal = (productId) => {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    currentQty = 1;
    currentSize = 'M';
    currentColor = 'dark';

    // Populate Data
    const imgEl = document.getElementById('modal-image');
    imgEl.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    imgEl.className = `m-img`; // Remove bg class if any

    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-rating').innerHTML = `★★★★★ ${product.reviews} reviews`;
    document.getElementById('modal-price').textContent = formatPrice(product.price);
    
    // Update description
    const descEl = document.querySelector('.m-desc');
    if(descEl) descEl.textContent = product.desc;
    
    // Reset selections
    document.getElementById('modal-qty-val').textContent = currentQty;
    document.querySelectorAll('.size-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.size === 'M');
    });
    document.querySelectorAll('.color-circle').forEach((c, i) => {
        c.classList.toggle('active', i === 0);
    });

    updateModalWishlistBtn();

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

export const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

const updateModalQty = (delta) => {
    if (currentQty + delta > 0) {
        currentQty += delta;
        document.getElementById('modal-qty-val').textContent = currentQty;
    }
};

const updateModalWishlistBtn = () => {
    const btn = document.getElementById('modal-add-to-wishlist');
    if (isInWishlist(currentProductId)) {
        btn.textContent = 'Remove from Wishlist';
    } else {
        btn.textContent = 'Add to Wishlist';
    }
};
