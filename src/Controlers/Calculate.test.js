import {
  calcGrFromMl,
  calcMlFromPercent,
  total 
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
}

//---------------------------------
it('should calculate ml',()=>{
  expect(calcMlFromPercent(f.total, f.percent)).toBe(5.00)
})
it('should calculate ml',()=>{
  expect(typeof calcMlFromPercent(f.total, f.percent)).toBe('number')
})

//---------------------------------
it('should calculate gr for PG',()=>{
  expect(calcGrFromMl(f.ml,'pg')).toBe(103.60)
})
it('should calculate gr for VG',()=>{
  expect(calcGrFromMl(f.ml,'vg')).toBe(126.10)
})
it('should by a number',()=>{
  expect(typeof calcGrFromMl(f.ml,'vg')).toBe('number')
})

//---------------------------------
it('should return total of ml', ()=>{
  expect(total(f.base).ml).toBe(10.3)
})
it('should return total of gr', ()=>{
  expect(total(f.base).gr).toBe(31.11)
})
it('should return total of percent', ()=>{
  expect(total(f.base).percent).toBe(90)
})
it('should by object', ()=>{
  expect(typeof total(f.base)).toBe("object")
})
