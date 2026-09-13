document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href');
    if (id && id.length > 1) history.replaceState(null, '', id);
  });
});
