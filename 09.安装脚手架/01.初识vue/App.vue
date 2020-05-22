<template>
    <div>this is component {{ msg }}</div>
</template>

<script>
    export  default {
        data (){
            return {
                msg : "Hello World!"
            }
        }
    }
</script>

<style>
    div{
        color: #abcdef;
        font-size:18px;
    }
</style>