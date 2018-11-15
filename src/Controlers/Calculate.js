function calcGrFromMl(ml, type){ 
  let gr
  switch(type){
    case 'pg':
    gr = ml * 103.6 / 100
      break
    case 'vg':
    gr = ml * 126.1 / 100
      break
    default:
    console.error('wrong type')
  }
  return parseFloat(gr.toFixed(2)) 
}


function calcMlFromPercent(total, percent){
  let ml = total * percent / 100
  return parseFloat(ml.toFixed(2))
}


function calcTotal(base){
  const total = base.reduce((total, el)=>{
    total.ml      += +el.ml
    total.gr      += +el.gr
    total.percent += +el.percent
    return total
  },{ml:0, gr:0, percent:0})

  total.ml      = +total.ml.toFixed(2)
  total.gr      = +total.gr.toFixed(2)
  total.percent = +total.percent.toFixed(2)
  return total
}


function calcIngredients(base, total){
  return base
    .map((base, idx) => {
      base.type = base.name === 'VG' ? 'vg' : 'pg'
      base.ml = calcMlFromPercent(total, base.percent)
      base.gr = calcGrFromMl(base.ml, base.type)
      return base
    })
}


function updateIngredients(total, base, flavour){
  return {
    base         : calcIngredients(base, total),
    flavour      : calcIngredients(flavour, total),
    baseTotal    : calcTotal(base),
    flavourTotal : calcTotal(flavour),
  }
}

function totalOfType(data, type){
  if(type !== 'vg' && type !== 'pg'){
    console.error(`type can by 'vg' or 'pg'. Inserted: [${type}]`)
  }
  function reducer(sum, el){
    if(el.type === type){
      sum += +(el.percent)
    }
    return sum
  }
  const base = data.base
    .reduce(reducer, 0)
  const flavour = data.flavour
    .reduce(reducer, 0)

  console.log(flavour)
  return +(base + flavour).toFixed(2)
}


export {
  calcGrFromMl,
  calcMlFromPercent,
  calcTotal,
  calcIngredients,
  updateIngredients,
  totalOfType
} 
