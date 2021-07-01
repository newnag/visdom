function toggle_active(that){
  that.querySelector('.circle').classList.toggle('close')

  if(that.querySelector('.circle').classList.contains('close')){
    that.closest('.status').querySelector('label').innerHTML = "Unverified"
  }
  else{
    that.closest('.status').querySelector('label').innerHTML = "Verified"
  }
}

// กดเพื่อดูรายละเอียดเพิ่มเติมลูกค้า
function more_detail(that){
  that.closest('.box-item').querySelector('.more').classList.toggle('show')
}

// เปิดหน้าข้อมูลเพิ่มเติม
function open_info(event){ 
  if(event.target.classList.contains('list')){
    document.querySelector('.detail-more').classList.add('show')
  }
}
// ปิดหน้าข้อมูลเพิ่มเติม
function close_info(){
  document.querySelector('.detail-more').classList.remove('show')
}

// เปิด Modal เพิ่มงาน
function open_addJob(){
  document.querySelector('.modal-add-member').classList.add('show')
}
// ปิด Modal เพิ่มงาน
function close_addJob(){
  document.querySelector('.modal-add-member').classList.remove('show')
}

// เปิดหน้าเพิ่ม
function open_addCode(){
  document.querySelector('.modal-add-type').classList.add('show')
}
function close_addCode(){
  document.querySelector('.modal-add-type').classList.remove('show')
}

// เปิดปิดสถานะ
function toggle_status(that){
  that.querySelector('.circle').classList.toggle('disable')

  if(that.querySelector('.circle').classList.contains('disable')){
    that.nextElementSibling.innerHTML = "Disable"
  }
  else{
    that.nextElementSibling.innerHTML = "Enable"
  }
}