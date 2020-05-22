import TodoList from "@/components/TodoList.vue"
import { mount } from "@vue/test-utils" // 挂载
import { expect } from "chai" // 断言

describe("TodoList.vue",() => {
    it('初始化时，数据mask为"",输入框为""',()=>{
        const wrapper = mount(TodoList); //  wrapper为挂载对象
        const maskVal = wrapper.find("input").text(); // 获取输入框的值
        expect(maskVal).to.be.equal("");
        expect(wrapper.vm.mask).equal('');  // wrapper 为挂载对象，则通过vm可以拿到实例
    })
    it('数据mask跟随输入框内容改变',()=>{
        const wrapper = mount(TodoList);
        const Input = wrapper.find("input");
        // Input.element 拿到真正的元素
        Input.element.value = "宇威最帅！";
        Input.trigger("input"); //聚焦文本框
        expect(wrapper.vm.mask).to.be.equals("宇威最帅！")
    })
    it("添加任务",()=>{
        const wrapper = mount(TodoList);
        const oBtn = wrapper.find('button');
        const lengyh = wrapper.vm.maskList.length;
        oBtn.trigger("click");
        expect(wrapper.vm.maskList).lengthOf(length + 1);
        expect(wrapper.findAll("li")).lengthOf(length + 1);
        expect(wrapper.vm.mask).to.be.equal('');
    })
})