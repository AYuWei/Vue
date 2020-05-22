<template>
    <div>
        <calendar></calendar>
    </div>
</template>

<script>
    import Calendar from "./Calendar"
    export  default {
        data (){
            return {
                msg : "Hello World!"
            }
        },
        components : {
            Calendar
        }
    }
</script>

<style>
    div{
        color: #193f66;
        font-size:18px;
    }
</style>