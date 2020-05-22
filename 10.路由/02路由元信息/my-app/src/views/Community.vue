<template>
    <div class="learn">
        <ul class="nav">
            <router-link tag="li" to="/Community/Academic">学术讨论</router-link>
            <router-link tag="li" to="/Community/Download">资源下载</router-link>
            <!-- 这个没写路径它会返回上一层去找，不可以加/ -->
            <router-link tag="li" to="Personal">个人中心</router-link>
        </ul>
        <router-view class="router-view"/>
    </div>
</template>

<style scoped>
    .nav{
        /* list-style: none; */
        padding: 0px 0px 0px 0px;
        display: flex;
    }
    .nav li{
        padding: 10px 20px 10px 20px;
        color: rgb(27, 27, 27);
        cursor: pointer;
    }
    .nav li.active{
        background: cadetblue;
        color: #fff;
    }
    .router-view{
        text-align: left;
        padding-top: 30px; 
        padding-left: 30px;
    }
</style>