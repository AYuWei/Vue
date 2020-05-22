<template>
    <div class="login">
        <button @click="handleClick">登陆</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick(){
            // 存储900天
            const expires = 900 * 24 * 60 * 60 * 1000;
            const date = new Date(+new Date() + expires);
            document.cookie = `login=true;expires=${date.toUTCString(expires)}`; // 需要转换为字符串
        }
    },
}
</script>