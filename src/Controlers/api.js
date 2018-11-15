function sendToApi(data, type, compression){
  let apiData = { ...data }
  apiData = compression ? compressor(apiData) : apiData

  switch(type){
    case 'php': 
      php(apiData)
      break
    default: console.error("Kill bug's! They eating 'api type'")
  }
}

function compressor(data){
  let compressData = JSON.parse(JSON.stringify(data))
  delete compressData.theadTitles
  delete compressData.baseTotal
  delete compressData.flavourTotal
  function compressing(el){
    delete el.ml
    delete el.gr
    delete el.type
    return el
  }
  compressData.base    = compressData.base.map(compressing)
  compressData.flavour = compressData.flavour.map(compressing)
  return compressData
}

function php(data){
  console.log(data)
  const url = 'http://vapeapi/save.php'
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "payload": data
    })
  })
}



export {sendToApi}
