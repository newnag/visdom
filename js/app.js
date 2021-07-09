// ย่อขยายเมนูซ้าย
function collap_aside(){
  document.querySelector('aside').classList.toggle('collap')
  document.querySelector('main').classList.toggle('collap')
  document.querySelector('main header').classList.toggle('collap')
}

// ค้นหาบน header
function header_search(){
  document.querySelector('.search-icon .input-search').classList.toggle('show')
}

// ภาษา
function header_lang(){
  document.querySelector('.lang .lang-menu').classList.toggle('show')
}

function submenu(that){
  that.closest('.menu').querySelector('.submenu').classList.toggle('hide')
}