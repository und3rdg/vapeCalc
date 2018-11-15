import {
  calcGrFromMl,
  calcMlFromPercent,
  calcTotal,
  calcIngredients,
  updateIngredients,
  totalOfType,
} from './Calculate.js' 

// fake data
const f = {
  percent: 5,
  total: 100,
  ml: 100,
  base: [
    { name: 'Nicotine' , ml: 2.10,  gr: 11.00,  percent:  7.00 , type:''},
    { name: 'PG'       , ml: 3.10,  gr: 10.10,  percent: 23.00 , type:''},
    { name: 'VG'       , ml: 5.101, gr: 10.011, percent: 60.002, type:''}, //(it should round it)
  ],
  baseTotal: {ml:0, gr:0, percent:0},
  flavour: [
    { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
  ],
  flavourTotal: {ml:0, gr:0, percent:0},
  baseUpdated: [
    {"name": "Nicotine" , "ml": 7  , "gr": 7.25  , "percent": 7      , "type": "pg"} ,
    {"name": "PG"       , "ml": 23 , "gr": 23.83 , "percent": 23     , "type": "pg"} ,
    {"name": "VG"       , "ml": 60 , "gr": 75.66 , "percent": 60.002 , "type": "vg"}
  ],
}

describe('Calculate ml from total and percent', ()=>{
  it('should calculate ml',()=>{
    expect(calcMlFromPercent(f.total, f.percent)).toBe(5.00)
  })
  it('should calculate ml',()=>{
    expect(typeof calcMlFromPercent(f.total, f.percent)).toBe('number')
  })
})

describe('Calculate Gr from Ml', ()=>{
  it('should calculate gr for PG',()=>{
    expect(calcGrFromMl(f.ml,'pg')).toBe(103.60)
  })
  it('should calculate gr for VG',()=>{
    expect(calcGrFromMl(f.ml,'vg')).toBe(126.10)
  })
  it('should by a number',()=>{
    expect(typeof calcGrFromMl(f.ml,'vg')).toBe('number')
  })
})

describe('calcTotal()', ()=>{
  it('should return total of ml', ()=>{
    expect(calcTotal(f.base).ml).toBe(10.3)
  })
  it('should return total of gr', ()=>{
    expect(calcTotal(f.base).gr).toBe(31.11)
  })
  it('should return total of percent', ()=>{
    expect(calcTotal(f.base).percent).toBe(90)
  })
  it('should by object', ()=>{
    expect(typeof calcTotal(f.base)).toBe("object")
  })
})


describe('Wrapper calcIngredients()', ()=>{
  it('should return object', ()=>{
    expect(typeof calcIngredients(f.base, f.total)).toBe("object")
  })
  it('should by equal with another object', ()=>{
    expect(calcIngredients(f.base, f.total)).toEqual(f.baseUpdated)
  })
})


describe('updateIngredients()', ()=>{
  it('should return object', ()=>{
    expect(typeof updateIngredients(f.total, f.base, f.flavour)).toBe("object")
  })
  it('should by equal with another object', ()=>{
    expect( Object.keys(updateIngredients(f.total, f.base, f.flavour)) ).toEqual(["base", "flavour", "baseTotal", "flavourTotal"])
  })
})


describe('totalOfType', ()=>{
  it('should return number', ()=>{
    expect(typeof totalOfType(f, 'pg')).toBe("number")
  })
  it('should return number', ()=>{
    expect(typeof totalOfType(f, 'vg')).toBe("number")
  })
  it('should 40', ()=>{
    expect(totalOfType(f, 'pg')).toBe(40)
  })
  it('should 60', ()=>{
    expect(totalOfType(f, 'vg')).toBe(60)
  })
})
