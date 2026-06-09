/* Percucello — idioma (ES/EN), nav móvil, reveal on scroll */
(function(){
  // ---------- Idioma ----------
  function setLang(lang){
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-es]').forEach(function(el){
      var val = el.getAttribute('data-' + lang);
      if(val === null) return;
      // Atributos traducibles: placeholder, aria-label, content
      if(el.hasAttribute('data-attr')){
        el.setAttribute(el.getAttribute('data-attr') || 'placeholder', val);
      } else {
        el.innerHTML = val;
      }
    });
    document.querySelectorAll('.lang button').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    try{ localStorage.setItem('percucello_lang', lang); }catch(e){}
  }
  window.PERCU_setLang = setLang;

  document.addEventListener('click', function(e){
    var b = e.target.closest('.lang button');
    if(b){ setLang(b.dataset.lang); }
  });

  var saved = 'es';
  try{ saved = localStorage.getItem('percucello_lang') || 'es'; }catch(e){}

  // ---------- Nav móvil ----------
  document.addEventListener('click', function(e){
    var burger = e.target.closest('.nav__burger');
    var links = document.querySelector('.nav__links');
    if(burger && links){ links.classList.toggle('open'); return; }
    if(e.target.closest('.nav__links a')){
      var l = document.querySelector('.nav__links');
      if(l) l.classList.remove('open');
    }
  });

  // ---------- Reveal ----------
  function initReveal(){
    var els = document.querySelectorAll('.reveal');
    function showAll(){ els.forEach(function(el){ el.classList.add('in'); }); }
    if(!('IntersectionObserver' in window)){ showAll(); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function(el){ io.observe(el); });
    // Red de seguridad: si el observer no dispara (iframe/preview sin scroll),
    // el estado final visible queda garantizado igualmente.
    setTimeout(showAll, 1400);
  }

  document.addEventListener('DOMContentLoaded', function(){
    setLang(saved);
    initReveal();
  });
})();
