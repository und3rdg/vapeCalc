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


function total(base){
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


const updateBase = (base, total) => {
  return base
    .map((base, idx) => {
      base.type = base.name === 'VG' ? 'vg' : 'pg'
      base.ml = calcMlFromPercent(total, base.percent)
      base.gr = calcGrFromMl(base.ml, base.type)
      return base
    })
}

export {
  calcGrFromMl,
  calcMlFromPercent,
  total,
  updateBase
} 
