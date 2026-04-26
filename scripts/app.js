
// --- scripts/utils.js ---
const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

const showToast = (message) => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 2.5s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Wait for transition
    }, 2500);
};

const animateIcon = (iconId) => {
    const icon = document.getElementById(iconId);
    if (!icon) return;
    
    icon.classList.remove('bounce');
    void icon.offsetWidth; // Trigger reflow
    icon.classList.add('bounce');
};

// --- scripts/data.js ---
const productsData = [
    {
        id: "p1",
        name: "Drift Low Sneaker",
        category: "Footwear",
        price: 148,
        rating: 4.8,
        reviews: 214,
        image: "img/product-1.jpg",
        badge: "New",
        bg: "bg-footwear",
        desc: "Engineered for maximum comfort and durability. The Drift Low features our proprietary sole technology for urban exploration and a minimalist aesthetic."
    },
    {
        id: "p2",
        name: "Cloud Parka",
        category: "Outerwear",
        price: 295,
        rating: 4.9,
        reviews: 87,
        image: "img/product-6.jpg",
        badge: null,
        bg: "bg-outerwear",
        desc: "A heavyweight piece built for unpredictable weather. Water-resistant outer shell with ethically sourced insulation for the ultimate winter protection."
    },
    {
        id: "p3",
        name: "Trail Pack 22L",
        category: "Accessories",
        price: 189,
        rating: 4.7,
        reviews: 156,
        image: "img/product-3.jpg",
        badge: null,
        bg: "bg-accessories",
        desc: "Designed for seamless transition from the commute to the trail. Features a weather-proof laptop compartment and tactical mounting points."
    },
    {
        id: "p4",
        name: "Merino Crew Tee",
        category: "Tops",
        price: 68,
        originalPrice: 89,
        rating: 4.6,
        reviews: 403,
        image: "img/product-4.jpg",
        badge: "Sale",
        bg: "bg-essentials",
        desc: "The ultimate base layer. Crafted from ultrafine merino wool for natural temperature regulation and a premium drape."
    },
    {
        id: "p5",
        name: "Slim Cargo Pants",
        category: "Tops",
        price: 178,
        rating: 4.5,
        reviews: 92,
        image: "img/product-5.jpg",
        badge: null,
        bg: "bg-essentials",
        desc: "Technical fabric combined with articulated patterning for unrestricted movement. Multiple low-profile pockets for utility without bulk."
    },
    {
        id: "p6",
        name: "Micro Fleece Zip",
        category: "Outerwear",
        price: 124,
        rating: 4.8,
        reviews: 311,
        image: "img/product-14.jpg",
        badge: "Low Stock",
        bg: "bg-outerwear",
        desc: "Lightweight warmth with a technical face. Perfect as a standalone piece for cool evenings or layered under a shell for harsh conditions."
    },
    {
        id: "p7",
        name: "Grip Slides",
        category: "Footwear",
        price: 85,
        rating: 4.4,
        reviews: 178,
        image: "img/product-7.jpg",
        badge: null,
        bg: "bg-footwear",
        desc: "Recovery footwear redefined. Features an aggressive tread pattern for indoor/outdoor use and a high-density foam footbed."
    },
    {
        id: "p8",
        name: "Urban Cap",
        category: "Accessories",
        price: 52,
        rating: 4.7,
        reviews: 629,
        image: "img/product-8.jpg",
        badge: null,
        bg: "bg-accessories",
        desc: "Classic 6-panel design updated with technical weather-resistant fabrics and an adjustable laser-cut strap."
    },
    {
        id: "p9",
        name: "Apex Shell Jacket",
        category: "Outerwear",
        price: 340,
        rating: 4.9,
        reviews: 124,
        image: "img/product-9.jpg",
        badge: "Pro",
        bg: "bg-outerwear",
        desc: "Our most advanced shell yet. 3-layer waterproof membrane with fully taped seams and laser-cut ventilation."
    },
    {
        id: "p10",
        name: "Core Heavy Hoodie",
        category: "Tops",
        price: 120,
        rating: 4.7,
        reviews: 512,
        image: "img/product-10.jpg",
        badge: "Best Seller",
        bg: "bg-essentials",
        desc: "A structural masterpiece. 500GSM heavyweight cotton fleece with a structured hood and oversized fit."
    },
    {
        id: "p11",
        name: "Versa Tote Bag",
        category: "Accessories",
        price: 95,
        rating: 4.5,
        reviews: 89,
        image: "img/product-11.jpg",
        badge: null,
        bg: "bg-accessories",
        desc: "Tactical utility meets everyday carry. Durable Cordura fabric with modular attachment points and magnetic closures."
    },
    {
        id: "p12",
        name: "Nova Runner",
        category: "Footwear",
        price: 165,
        rating: 4.8,
        reviews: 143,
        image: "img/product-12.jpg",
        badge: "New",
        bg: "bg-footwear",
        desc: "Hyper-responsive cushioning for high-intensity movement. Breathable mesh upper with reflective accents."
    },
    {
        id: "p13",
        name: "Technical Crew",
        category: "Tops",
        price: 75,
        rating: 4.6,
        reviews: 211,
        image: "img/product-13.jpg",
        badge: null,
        bg: "bg-essentials",
        desc: "Advanced moisture-wicking technology designed to keep you warm in sub-zero temperatures without sacrificing breathability."
    },
    {
        id: "p14",
        name: "Storm Vest",
        category: "Outerwear",
        price: 180,
        rating: 4.7,
        reviews: 64,
        image: "img/product-14.jpg",
        badge: null,
        bg: "bg-outerwear",
        desc: "The perfect mid-layer for erratic transitions. Windproof chest panels with a high-stretch breathable back."
    },
    {
        id: "p15",
        name: "Knit Beanie",
        category: "Accessories",
        price: 45,
        rating: 4.8,
        reviews: 842,
        image: "img/product-15.jpg",
        badge: "Essential",
        bg: "bg-accessories",
        desc: "Soft merino wool blend with a classic folded cuff. Designed to retain heat while remaining comfortable all day."
    },
    {
        id: "p17",
        name: "Grid Polo",
        category: "Tops",
        price: 85,
        rating: 4.6,
        reviews: 128,
        image: "img/product-17.jpg",
        badge: null,
        bg: "bg-essentials",
        desc: "Technical piqué fabric with a contemporary zipper placket. Minimalist branding for a clean, sharp aesthetic."
    }
];

// --- scripts/wishlist.js ---


let wishlist = new Set();
const navWishlistBadge = document.getElementById('nav-wishlist-badge');

const initWishlist = () => {
    updateWishlistUI();
};

const toggleWishlist = (productId) => {
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

const isInWishlist = (productId) => {
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

// --- scripts/cart.js ---



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

const initCart = () => {
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

const addToCart = (productId, qty = 1, size = 'M', color = 'dark') => {
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

const openCart = () => {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCart = () => {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
};

// --- scripts/modal.js ---





// DOM Elements
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('close-modal');
let currentProductId = null;
let currentSize = 'M';
let currentColor = 'dark';
let currentQty = 1;

const initModal = () => {
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

const openModal = (productId) => {
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

const closeModal = () => {
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

// --- scripts/products.js ---






let currentFilter = 'All';
let currentSort = 'newest';

const initProducts = () => {
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

const renderProducts = () => {
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

// --- scripts/ui.js ---
const initUI = () => {
    initScrollHandler();
    initMobileMenu();
    initNewsletter();
    initStatCounters();
};

const initScrollHandler = () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

const initMobileMenu = () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    const toggleMenu = () => {
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    navLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

const initNewsletter = () => {
    const form = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('newsletter-success');
    const input = document.getElementById('newsletter-email');
    const submitBtn = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            input.disabled = true;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            
            // Simulate network request
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, 500);
        }
    });
};

const initStatCounters = () => {
    const stats = document.querySelectorAll('.stat-num');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseFloat(target.dataset.target);
                const isDecimal = target.dataset.decimal === 'true';
                const duration = 2000; // ms
                const start = performance.now();
                
                const animate = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out expo
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentVal = endVal * easeProgress;
                    
                    if (isDecimal) {
                        target.textContent = currentVal.toFixed(1);
                    } else {
                        target.textContent = Math.floor(currentVal);
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        target.textContent = endVal;
                    }
                };
                
                requestAnimationFrame(animate);
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
};

// --- scripts/search.js ---




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

const initSearch = () => {
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

// --- scripts/main.js ---







window.addEventListener('load', () => {
    console.log('Page fully loaded. Initializing...');
    
    try { initCart(); } catch(e) { console.error('Cart error:', e); }
    try { initWishlist(); } catch(e) { console.error('Wishlist error:', e); }
    try { initProducts(); } catch(e) { console.error('Products error:', e); }
    try { initModal(); } catch(e) { console.error('Modal error:', e); }
    try { initUI(); } catch(e) { console.error('UI error:', e); }
    try { initSearch(); } catch(e) { console.error('Search error:', e); }
});

