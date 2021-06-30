// ปุ่ม toggle สถานะ
function toggle_status(that){
  that.querySelector('.circle').classList.toggle('disable')

  if(that.querySelector('.circle').classList.contains('disable')){
    that.nextElementSibling.innerHTML = "Disable"
  }
  else{
    that.nextElementSibling.innerHTML = "Enable"
  }
}