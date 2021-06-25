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

function more_detail(that){
  that.closest('.box-item').querySelector('.more').classList.toggle('show')
}