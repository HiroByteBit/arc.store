import { initCart } from './cart.js';
import { initWishlist } from './wishlist.js';
import { initProducts } from './products.js';
import { initModal } from './modal.js';
import { initUI } from './ui.js';
import { initSearch } from './search.js';

window.addEventListener('load', () => {
    console.log('Page fully loaded. Initializing...');
    
    try { initCart(); } catch(e) { console.error('Cart error:', e); }
    try { initWishlist(); } catch(e) { console.error('Wishlist error:', e); }
    try { initProducts(); } catch(e) { console.error('Products error:', e); }
    try { initModal(); } catch(e) { console.error('Modal error:', e); }
    try { initUI(); } catch(e) { console.error('UI error:', e); }
    try { initSearch(); } catch(e) { console.error('Search error:', e); }
});
