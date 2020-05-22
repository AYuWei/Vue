import { abs, add } from "@/count";
import { expect } from "chai";

// describe套件。
describe("abs函数", () => {
    it("测试给abs传入正数，期待返回值是相同", () => {
        expect(abs(1)).to.be.equal(1);  // 断言
    });

    it("测试该abs传入负数，期待返回值是相反", () => {
        expect(abs(-2)).to.be.equal(2);
    })
    it("测试该abs传入非数，期待返回值是NaN", () => {
        expect(abs('')).to.be.deep.equal(NaN);
        expect(abs([])).to.be.deep.equal(NaN);
        expect(abs({})).to.be.deep.equal(NaN);
        expect(abs(null)).to.be.deep.equal(NaN);
        expect(abs(undefined)).to.be.deep.equal(NaN);
        expect({}).to.be.deep.equal({});
    })
});
describe("add函数", () => {
    it("测试该add传入数据让其相加，期待返回的是相加的值", () => {
        expect(add(1, 2, 3, 4)).to.be.equal(10)
    })
})

// 测试用例 it
// it("测试给abs传入正数，期待返回值是相同", ()=>{
//     expect( abs(1) ).to.be.equal(1);  // 断言
// } );

// it("测试该abs传入负数，期待返回值是相反",() =>{
//     expect( abs(-2) ).to.be.equal(2);
// })
// it("测试该abs传入非数，期待返回值是NaN",() =>{
//     expect( abs('') ).to.be.deep.equal(NaN);
//     expect( abs([]) ).to.be.deep.equal(NaN);
//     expect( abs({}) ).to.be.deep.equal(NaN);
//     expect( abs(null) ).to.be.deep.equal(NaN);
//     expect( abs(undefined) ).to.be.deep.equal(NaN);
//     expect( {} ).to.be.deep.equal({});
// })

// it("测试该add传入数据让其相加，期待返回的是相加的值",()=>{
//     expect( add(1,2,3,4) ).to.be.equal(10)
// })