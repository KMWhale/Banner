/* ============================================================
   GERAL.JS — Scripts compartilhados
   ============================================================ */

/* ----- Portfolio: filtro de categorias ----- */
function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });
}
