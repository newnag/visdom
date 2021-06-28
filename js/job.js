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