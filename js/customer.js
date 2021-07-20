function toggle_active(that){
  that.querySelector('.circle').classList.toggle('close')

  if(that.querySelector('.circle').classList.contains('close')){
    that.closest('.toggle').querySelector('label').innerHTML = "Inactive"
  }
  else{
    that.closest('.toggle').querySelector('label').innerHTML = "Active"
  }
}

function toggle_active_add(that){
  that.querySelector('.circle').classList.toggle('close')

  if(that.querySelector('.circle').classList.contains('close')){
    that.closest('.toggle-status').querySelector('label').innerHTML = "Inactive"
  }
  else{
    that.closest('.toggle-status').querySelector('label').innerHTML = "Active"
  }
}

// กดเพื่อดูรายละเอียดเพิ่มเติมลูกค้า
function more_detail(that){
  that.closest('.box-item').querySelector('.more').classList.toggle('show')
}

// เปิดหน้าเพิ่มลูกค้า
function open_addCustomer(){
  document.querySelector('.modal-add-member').classList.add('show')
}
// ปิดหน้าเพิ่มลูกค้า
function close_addCustomer(){
  document.querySelector('.modal-add-member').classList.remove('show')
}

// เปิดหน้านำข้อมูลเข้า
function open_import(){
  document.querySelector('.modal-import').classList.add('show')
}
// ปิดหน้านำข้อมูลเข้า
function close_import(){
  document.querySelector('.modal-import').classList.remove('show')
}

// ปุ่ม toggle สถานะประเภทลูกค้า
function toggle_status(that){
  that.querySelector('.circle').classList.toggle('disable')

  if(that.querySelector('.circle').classList.contains('disable')){
    that.nextElementSibling.innerHTML = "Disable"
  }
  else{
    that.nextElementSibling.innerHTML = "Enable"
  }
}

// ปุ่มเปิดข้อมูลเพิ่มเติมหน้า สถานที่รับส่ง
function more_destination(that){
  that.closest('.tr').querySelector('.more').classList.toggle('show')
}