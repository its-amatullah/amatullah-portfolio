/* ============================================================
   FORM — Contact form validation and submit handler
   ============================================================ */

export function initForm() {
  const form       = document.getElementById('contact-form');
  const successEl  = document.getElementById('form-success');
  if (!form) return;

  // Validate on blur
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-group').classList.contains('has-error')) {
        validateField(field);
      }
    });
  });

  // Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      if (!validateField(field)) valid = false;
    });

    if (!valid) return;

    const submitBtn = form.querySelector('.form-submit');
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    // Simulate async submit (replace with real endpoint later)
    await new Promise(resolve => setTimeout(resolve, 1200));

    submitBtn.classList.remove('is-loading');
    form.style.opacity = '0';
    form.style.transform = 'translateY(10px)';
    form.style.transition = 'opacity 300ms, transform 300ms';

    setTimeout(() => {
      form.style.display = 'none';
      successEl.classList.add('is-visible');
      successEl.setAttribute('aria-live', 'assertive');
    }, 300);
  });
}

function validateField(field) {
  const group = field.closest('.form-group');
  const error = group?.querySelector('.form-error');
  const value = field.value.trim();
  let message = '';

  if (!value) {
    message = 'This field is required.';
  } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = 'Please enter a valid email address.';
  } else if (field.tagName === 'TEXTAREA' && value.length < 20) {
    message = 'Please write at least 20 characters.';
  }

  if (message) {
    group.classList.add('has-error');
    if (error) error.textContent = message;
    return false;
  } else {
    group.classList.remove('has-error');
    return true;
  }
}
