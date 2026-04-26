import { formatPrice, showToast, animateIcon } from './utils.js';
import { productsData } from './data.js';

let cart = [];
const FREE_SHIPPING_THRESHOLD = 150;
const PROMO_CODES = {
    'SAVE10': 0.10,
    'NEWDROP': 0.15
};
let appliedPromo = null;

// DOM Elements
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartTotalCount = document.getElementById('cart-total-count');
const navCartBadge = document.getElementById('nav-cart-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
const shippingNotice = document.getElementById('shipping-notice');
const promoInput = document.getElementById('promo-input');

export const initCart = () => {
    // Event Listeners
    document.getElementById('nav-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('continue-shopping').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    document.getElementById('apply-promo-btn').addEventListener('click', applyPromoCode);
    
    // Add event delegation for cart items (remove, + , -)
    cartItemsContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.cart-item-remove');
        const decBtn = e.target.closest('.btn-dec');
        const incBtn = e.target.closest('.btn-inc');

        if (removeBtn) {
            removeFromCart(removeBtn.dataset.id, removeBtn.dataset.size, removeBtn.dataset.color);
        } else if (decBtn) {
            updateQty(decBtn.dataset.id, decBtn.dataset.size, decBtn.dataset.color, -1);
        } else if (incBtn) {
            updateQty(incBtn.dataset.id, incBtn.dataset.size, incBtn.dataset.color, 1);
        }
    });

    renderCart();
};

export const addToCart = (productId, qty = 1, size = 'M', color = 'dark') => {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItemIndex = cart.findIndex(
        item => item.id === productId && item.size === size && item.color === color
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += qty;
    } else {
        cart.push({ ...product, qty, size, color });
    }

    animateIcon('nav-cart-btn');
    showToast('Added to cart ✓');
    updateCartUI();
};

const removeFromCart = (id, size, color) => {
    cart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
    updateCartUI();
};

const updateQty = (id, size, color, delta) => {
    const item = cart.find(item => item.id === id && item.size === size && item.color === color);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id, size, color);
        } else {
            updateCartUI();
        }
    }
};

const updateCartUI = () => {
    renderCart();
    
    // Update Badges
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    navCartBadge.textContent = totalItems;
    cartTotalCount.textContent = totalItems;
    navCartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
};

const renderCart = () => {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-muted); margin-top: 2rem;">Your bag is empty</p>';
        cartSubtotalPrice.textContent = '$0.00';
        shippingNotice.textContent = "Add items to your cart";
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        const price = item.price; // Use sale price if applicable in full app
        subtotal += price * item.qty;

        const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</div>
                    <div class="cart-item-meta" style="color: var(--color-black); font-weight: 500;">${formatPrice(price)}</div>
                    <div class="cart-item-actions">
                        <div class="qty-stepper">
                            <button class="btn-dec" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">&minus;</button>
                            <span style="font-size: 0.875rem; width: 16px; text-align: center;">${item.qty}</span>
                            <button class="btn-inc" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">&plus;</button>
                        </div>
                        <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">Remove</button>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    if (appliedPromo && PROMO_CODES[appliedPromo]) {
        subtotal = subtotal * (1 - PROMO_CODES[appliedPromo]);
    }

    cartSubtotalPrice.textContent = formatPrice(subtotal);

    // Shipping logic
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingNotice.innerHTML = `You've unlocked <strong>Free Shipping!</strong> 🎉`;
    } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        shippingNotice.innerHTML = `You're <strong>${formatPrice(remaining)}</strong> away from free shipping`;
    }
};

const applyPromoCode = () => {
    const code = promoInput.value.trim().toUpperCase();
    if (PROMO_CODES[code]) {
        appliedPromo = code;
        showToast('Promo code applied!');
        renderCart();
    } else if (code) {
        showToast('Invalid promo code.');
        appliedPromo = null;
        renderCart();
    }
};

export const openCart = () => {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
};

export const closeCart = () => {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
};
