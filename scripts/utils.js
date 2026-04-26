export const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const showToast = (message) => {
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

export const animateIcon = (iconId) => {
    const icon = document.getElementById(iconId);
    if (!icon) return;
    
    icon.classList.remove('bounce');
    void icon.offsetWidth; // Trigger reflow
    icon.classList.add('bounce');
};
