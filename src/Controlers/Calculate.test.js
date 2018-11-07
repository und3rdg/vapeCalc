import {
  calcGrFromMl as calcGr,
  calcMlFromPercent as calcMl
} from './Calculate.js' 

it('should calculate ml',()=>{
  expect(calcMl(100, 5)).toBe("5.00")
})
it('should calculate gr for PG',()=>{
  expect(calcGr(100,'pg')).toBe("103.60")
})
it('should calculate gr for VG',()=>{
  expect(calcGr(100,'vg')).toBe("126.10")
})
