import { showToast, animateIcon } from './utils.js';

let wishlist = new Set();
const navWishlistBadge = document.getElementById('nav-wishlist-badge');

export const initWishlist = () => {
    updateWishlistUI();
};

export const toggleWishlist = (productId) => {
    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        showToast('Removed from wishlist');
    } else {
        wishlist.add(productId);
        showToast('Added to wishlist');
        animateIcon('nav-wishlist-btn');
    }
    
    updateWishlistUI();
    return wishlist.has(productId);
};

export const isInWishlist = (productId) => {
    return wishlist.has(productId);
};

const updateWishlistUI = () => {
    const count = wishlist.size;
    navWishlistBadge.textContent = count;
    navWishlistBadge.style.display = count > 0 ? 'flex' : 'none';

    // Update all active heart icons on the page
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const id = btn.dataset.id;
        const isSelected = wishlist.has(id);
        
        if (isSelected) {
            btn.classList.add('active');
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
            // Trigger pop animation
            btn.classList.remove('pop');
            void btn.offsetWidth;
            btn.classList.add('pop');
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
        }
    });
};
