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
  const base = data.base.reduce(reducer, 0)
  const flavour = data.flavour.reduce(reducer, 0)
  function reducer(sum, el){
    if(el.type === type){
      sum += el.percent
    }
    return sum
  }

  return +(base + flavour).toFixed(2)
}


function baseFromRatio(state){
  const totalVg = totalOfType(state, "vg") 
  const totalPg = totalOfType(state, "pg") 
  const pg = state.ratio.pg - totalPg + state.base[1].percent
  const vg = state.ratio.vg - totalVg + state.base[2].percent
  state.base[1].percent = +pg.toFixed(2)
  state.base[2].percent = +vg.toFixed(2)
  return state.base 
}


function ratioFromBase(state){
  const totalVg = totalOfType(state, "vg") 
  const totalPg = totalOfType(state, "pg") 
  const pg = 100 - totalVg
  const vg = 100 - totalPg
  state.ratio.pg = +pg.toFixed()
  state.ratio.vg = +vg.toFixed()
  return state.ratio 
}


export {
  calcGrFromMl,
  calcMlFromPercent,
  calcTotal,
  calcIngredients,
  updateIngredients,
  totalOfType,
  baseFromRatio,
  ratioFromBase,
} 
