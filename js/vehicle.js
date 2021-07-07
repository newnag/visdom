// multiselect
const multiselect = ()=>{
  const myOptions = [
    {
      label: "New York",
      value: "NY",
    },
    {
      label: "Washington",
      value: "WA",
    },
    {
      label: "California",
      value: "CA",
    },
    {
      label: "New Jersey",
      value: "NJ",
    },
    {
      label: "North Carolina",
      value: "NC",
    },
  
    
  ]
  
  let instance = new SelectPure(".multiselect", {
    options: myOptions,
    icon: "fa fa-times",
    inlineIcon: false,
    multiple: true,
    classNames: {
      select: "select-pure__select",
      dropdownShown: "select-pure__select--opened",
      multiselect: "select-pure__select--multiple",
      label: "select-pure__label",
      placeholder: "select-pure__placeholder",
      dropdown: "select-pure__options",
      option: "select-pure__option",
      autocompleteInput: "select-pure__autocomplete",
      selectedLabel: "select-pure__selected-label",
      selectedOption: "select-pure__option--selected",
      placeholderHidden: "select-pure__placeholder--hidden",
      optionHidden: "select-pure__option--hidden",
    },
    
  });
}

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

// กดเพื่อดูรายละเอียดเพิ่มเติม
function more_detail(that){
  that.closest('.box-item').querySelector('.more').classList.toggle('show')
}