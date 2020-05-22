// 模板
const template = `
   <div class="wrapper">
        <h1>{{title}}</h1>
        <span>名称：</span><input type="text" v-model="name"/>
        <span>库存：</span><input type="number" v-model="stock" />
        <button @click="add">添加商品</button>
        <ul>
            <li v-for="(item,index) in props">
            {{item.title}}
            <button @click="changeStock(item, item.stock - 1)">-</button>
            <i style="color:red" v-if="item.stock > 0"> {{item.stock}} </i>
            <i style="color:#abcdef" v-else>售罄</i>
            <input type="number" v-model="item.stock"></input>
            <button @click="changeStock(item, item.stock + 1)">+</button>
            <button @click="remove(index)">删除</button>
            </li>
            
        </ul>
   </div>
`;

// 配置对象
const config = {
    data: {
        title: "商品和库存管理！",
        name : "",
        stock : null,
        props: [{
            title: "华为手机",
            stock : 10
        }, {
            title: "小米手机",
            stock : 8
        }, {
            title: "iphone",
            stock : 5
        }]
    },
    template: template,
    methods: {
        changeStock(item , stock){
           if(stock < 0){
                stock = 0;
           }
           item.stock = stock;
        },
        remove(val){
            this.props.splice(val,1)
        },
        add(){
            const obj = {
                title : this.name,
                stock : +this.stock
            }
            this.props.push(obj);
            this.name = '';
            this.stock = null;
        }
    },
}

const vue = new Vue(config);
vue.$mount("#app"); // 挂载对象。