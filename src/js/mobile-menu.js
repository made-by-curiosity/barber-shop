const refs = {
  mobileMenuOpenBtn: document.querySelector('.js-open-menu'),
  mobileMenuCloseBtn: document.querySelector('.js-close-menu'),
  backdrop: document.querySelector('.js-backdrop'),
  mobileMenuContainer: document.querySelector('.js-mobile-menu'),
};

refs.mobileMenuOpenBtn.addEventListener('click', toggleMobileMenu);
refs.mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);

// Close the mobile menu on wider screens if the device orientation changes
window
  .matchMedia('(min-width: 768px)')
  .addEventListener('change', onWindowSizeChange);

function toggleMobileMenu() {
  refs.backdrop.classList.toggle('is-hidden');
  refs.mobileMenuContainer.classList.toggle('is-closed');

  if (
    !refs.backdrop.classList.contains('is-hidden') &&
    !refs.mobileMenuContainer.classList.contains('is-closed')
  ) {
    refs.backdrop.addEventListener('click', onBackdropClick);
    document.body.style.overflow = 'hidden';
  } else {
    refs.backdrop.removeEventListener('click', onBackdropClick);
    document.body.style.overflow = 'auto';
  }
}

function onWindowSizeChange(e) {
  if (!e.matches) return;
  refs.backdrop.classList.add('is-hidden');
  refs.mobileMenuContainer.classList.add('is-closed');
}

function onBackdropClick(e) {
  const isBackdrop = e.target.classList.contains('backdrop');
  if (isBackdrop) {
    toggleMobileMenu();
  }
}
