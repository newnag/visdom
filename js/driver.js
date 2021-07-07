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

// กราฟ
const graph = ()=>{
  let data_val = {
    val:[10,20,20,10,23],
    amount:[34,22,43,22,12],
    mock1:[37,12,4,2,6],
    mock2:[23,4,14,30,26],
    date:['2020-10-10','2020-10-11','2020-10-12','2020-10-13','2020-10-14']
  }

  let options = {
    series: [{
      name: "STOCK ABC",
      data: data_val.val
    },{
      name: "Amount",
      data: data_val.amount
    },{
      name: "Mock1",
      data: data_val.mock1
    },{
      name: "Mock2",
      data: data_val.mock2
    }],
    chart: {
      type: 'area',
      height: 400,
      stacked: false,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    labels: data_val.date,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    theme:{
      mode: 'dark', 
    }
  };

  let chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

// ฟังก์ชั่นเลือกดูกราฟหรือตาราง
function select_graph_table(event){
  const Eid = event.target.getAttribute('id')

  if(Eid == 'graph'){
    document.querySelector('#graph').classList.add('active')
    document.querySelector('#table').classList.remove('active')

    document.querySelector('.grid-card').classList.add('show')
    document.querySelector('.graph').classList.add('show')
    document.querySelector('.table').classList.remove('show')
  }
  else if(Eid == 'table'){
    document.querySelector('#graph').classList.remove('active')
    document.querySelector('#table').classList.add('active')

    document.querySelector('.grid-card').classList.remove('show')
    document.querySelector('.graph').classList.remove('show')
    document.querySelector('.table').classList.add('show')
  }
  else{
    console.error("Missing Parameter!")
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