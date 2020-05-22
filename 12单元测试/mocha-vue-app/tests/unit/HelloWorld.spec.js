import HelloWorld from "@/components/HelloWorld"
import Vue from "vue"
import { expect } from "chai"  // 断言
import { mount } from "@vue/test-utils"  // 挂载

describe("HelloWorld.vue" , () => {
    it("测试msg属性，是否正常被渲染，原生", ()=>{
        const msg = "hello world";
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor({
            propsData : {
                msg 
            }
        }).$mount();
        const domInner = vm.$el.getElementsByTagName("h1")[0].innerHTML.trim();
        expect(domInner).to.be.equal(msg);
    });

    it("测试msg属性，是否正常被渲染, vue test util", () => {
        const msg = "hello world";
        // const wrapper = mount(HelloWorld,{
        //     propsData : { msg }
        // });
        const wrapper = mount(HelloWorld); // 挂载。wrapper为被挂载的元素
        wrapper.setProps({msg})
        const domInner = wrapper.find('h1').text();
        expect(domInner).to.be.include(msg)
    })
})