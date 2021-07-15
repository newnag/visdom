// ย่อขยายเมนูซ้าย
function collap_aside(){
  document.querySelector('aside').classList.toggle('collap')
  document.querySelector('main').classList.toggle('collap')
  document.querySelector('main header').classList.toggle('collap')
  
  const pre_modal = document.querySelector('main')

  if(pre_modal.querySelector('.modal-add-type')){
    pre_modal.querySelector('.modal-add-type').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-add-device')){
    pre_modal.querySelector('.modal-add-device').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-add-member')){
    pre_modal.querySelector('.modal-add-member').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-import')){
    pre_modal.querySelector('.modal-import').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-add-drive')){
    pre_modal.querySelector('.modal-add-drive').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-add-product')){
    pre_modal.querySelector('.modal-add-product').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-add-vehicle')){
    pre_modal.querySelector('.modal-add-vehicle').classList.toggle('collap')
  }
  else if(pre_modal.querySelector('.modal-edit-vehicle')){
    pre_modal.querySelector('.modal-edit-vehicle').classList.toggle('collap')
  }
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