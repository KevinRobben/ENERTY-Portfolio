function isValidEmail(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (trimmed.length === 0) return false;
  // Simple, robust email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return emailRegex.test(trimmed);
}

function isValidPhone(value) {
  if (value == null || value === '') return true; // optional
  const trimmed = String(value).trim();
  // Allow digits, spaces, parentheses, dashes, leading +; min length 6
  const phoneRegex = /^\+?[0-9\s()\-]{6,}$/;
  return phoneRegex.test(trimmed);
}

function showError(element, message) {
  const errorId = element.getAttribute('aria-describedby');
  if (!errorId) return;
  const errorEl = document.getElementById(errorId);
  if (!errorEl) return;
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
  element.setAttribute('aria-invalid', 'true');
}

function clearError(element) {
  const errorId = element.getAttribute('aria-describedby');
  if (!errorId) return;
  const errorEl = document.getElementById(errorId);
  if (!errorEl) return;
  errorEl.textContent = '';
  errorEl.classList.add('hidden');
  element.removeAttribute('aria-invalid');
}

function attachValidation() {
  const form = document.querySelector('#subscribe form');
  if (!form) return;

  const emailInput = document.getElementById('subscribe-email');
  const phoneInput = document.getElementById('subscribe-phone');
  const formError = document.getElementById('subscribe-form-error');

  function validateEmail() {
    if (!emailInput) return true;
    const value = emailInput.value;
    if (!isValidEmail(value)) {
      showError(emailInput, 'Vul een geldig e‑mailadres in.');
      return false;
    }
    clearError(emailInput);
    return true;
  }

  function validatePhone() {
    if (!phoneInput) return true;
    const value = phoneInput.value;
    if (!isValidPhone(value)) {
      showError(phoneInput, 'Gebruik alleen cijfers, spaties, +, ( ) of -.');
      return false;
    }
    clearError(phoneInput);
    return true;
  }

  // Debounce helper
  function debounce(fn, delayMs) {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delayMs);
    };
  }

  const debouncedValidateEmail = debounce(validateEmail, 1000);
  const debouncedValidatePhone = debounce(validatePhone, 1000);

  // Validate only after user stops typing for 1s
  emailInput && emailInput.addEventListener('input', debouncedValidateEmail);
  phoneInput && phoneInput.addEventListener('input', debouncedValidatePhone);

  // Hide errors immediately when user types again
  emailInput && emailInput.addEventListener('input', () => {
    clearError(emailInput);
    if (formError) formError.classList.add('hidden');
  });
  phoneInput && phoneInput.addEventListener('input', () => {
    clearError(phoneInput);
    if (formError) formError.classList.add('hidden');
  });

  // But validate immediately on blur
  emailInput && emailInput.addEventListener('blur', validateEmail);
  phoneInput && phoneInput.addEventListener('blur', validatePhone);

  form.addEventListener('submit', (event) => {
    const okEmail = validateEmail();
    const okPhone = validatePhone();
    if (!okEmail || !okPhone) {
      event.preventDefault();
      if (formError) formError.classList.remove('hidden');
      // Focus first invalid input
      if (!okEmail && emailInput) emailInput.focus();
      else if (!okPhone && phoneInput) phoneInput.focus();
    }
    else {
      if (formError) formError.classList.add('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachValidation);
} else {
  attachValidation();
}

export { attachValidation };


