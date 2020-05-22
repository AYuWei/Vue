import { expect } from "chai"

it("测试判断{}中是否相等",()=>{
    expect( {a:1} ).to.be.deep.equal({a : 1})
})

it("测试判断否不等",()=>{
    expect( 2 ).to.be.not.equal(1)
})

it("测试判断是否大于",()=>{
    expect( 5 ).to.be.above(1);
    expect(  5 ).to.be.greaterThan(1) 
})

it("测试判断是否小于",()=>{
    expect( 2 ).to.be.below(5)
})

it("测试判断是否包含",()=>{
    expect( '宇威好帅' ).to.be.contain("宇威")
})