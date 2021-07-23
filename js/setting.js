const selectlang = ()=>{
  const myOptions = [
    {
      label: "ไทย",
      value: "TH",
    },
    {
      label: "English",
      value: "EN",
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