function collap_aside(){
  document.querySelector('aside').classList.toggle('collap')
  document.querySelector('main').classList.toggle('collap')
  document.querySelector('main header').classList.toggle('collap')
}

function header_search(){
  document.querySelector('.search-icon .input-search').classList.toggle('show')
}

function header_lang(){
  document.querySelector('.lang .lang-menu').classList.toggle('show')
}