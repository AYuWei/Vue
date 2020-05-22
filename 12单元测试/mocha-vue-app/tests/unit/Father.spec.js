import Father from '@/components/Father'
import Son from '@/components/Son'
import { shallowMount } from '@vue/test-utils'; // shallowMount不拿到子组件
import { expect } from 'chai'

describe("Father.vue",()=>{
    it("测试子组件触发show事件，显示信息", ()=>{
        const wrapper = shallowMount(Father); // 拿到父组件实例
        expect( wrapper.find(".info").exists() ).to.be.false; // 判断父组件是否存在info
        wrapper.find(Son).vm.$emit("show"); // 拿到子组件触发show方法。
        expect( wrapper.find(".info").exists() ).to.be.true;
    })

    it("执行changeAge函数，数据age改变", () => {
        const wrapper = shallowMount(Father);
        wrapper.vm.changeAge();
        expect( wrapper.vm.age ).to.be.equal(16)
    })
})