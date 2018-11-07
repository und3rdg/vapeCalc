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
  return gr.toFixed(2) 
}

function calcMlFromPercent(total, percent){
  let ml = total * percent / 100
  return ml.toFixed(2)
}

export {calcGrFromMl, calcMlFromPercent} 
