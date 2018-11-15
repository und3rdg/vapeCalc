import {
  compressor,
} from './api' 

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
}
const fOut = {"base": [{"name": "Nicotine", "percent": 7}, {"name": "PG", "percent": 23}, {"name": "VG", "percent": 60.002}], "flavour": [{"name": "Apple Fuji (FA)", "percent": 10}], "ml": 100, "percent": 5, "total": 100}


describe('Compress data: compressor(data)', ()=>{
  const fOrig = JSON.parse(JSON.stringify(f))
  it('should be equal',()=>{
    expect(compressor(f)).toEqual(fOut)
  })
  it('should be Object',()=>{
    expect(typeof compressor(f)).toBe("object")
  })
  it('should by not mutate orig',()=>{
    compressor(f)
    expect(f.base).toEqual(fOrig.base)
  })
})
