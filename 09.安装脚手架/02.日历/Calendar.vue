<template>
    <div class="calendar">
        <div class="date-header">
            <div class="prev-month" @click="handleprev"></div>
            <div class="show-date">{{ year }}年{{ month }}月{{ day }}日</div>
            <div class="next-month" @click="handlenext"></div>
        </div>
        <div class="date-content">
            <div class="week-header">
                <div 
                    class="week"
                    v-for="item in ['日','一','二','三','四','五','六']"
                    :key="item"
                    >{{ item }}</div>
            </div>
            <div class="week-day">
                <div v-for="item in 42" :key="item">
                    <div class="day" 
                         v-if="item - beginDay > 0 && item - beginDay <= curdays"
                         :class="{
                             'now-day' :`${year}-${month}-${item -beginDay}` === curDate,
                             'active-day' : `${year}-${month}-${item -beginDay}` === `${year}-${month}-${day}`
                         }"
                         @click="handle(item-beginDay)"
                         >{{ item -beginDay }}</div>
                    <!-- 上一月 -->
                    <div class="day show" v-else-if="item - beginDay <=0">{{ item -beginDay + prevDays}}</div>
                    <!-- 下一月 -->
                    <div class="day show" v-if="item - beginDay > curdays">{{ item - curdays - beginDay }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                year : null,
                month : null,
                day : null,
            }
        },
        created() {
            this.getInitTime();
        },
        
        methods: {
            getInitTime(){
                const date = new Date();
                this.year = date.getFullYear();
                this.month = date.getMonth() + 1;
                this.day = date.getDate();
                this.curDate = `${this.year}-${this.month}-${this.day}`
            },
            handle(day){
               this.day = day;
            },
            handleprev(){
                if(this.month === 1){
                    this.month = 12;
                    this.year --;
                }else{
                    this.month --;
                }
                this.computedDay();
            },
            handlenext(){
                if(this.month === 12){
                    this.month = 1;
                    this.year ++;
                }else {
                    this.month ++;
                }
                this.computedDay();
            },
            computedDay(){
                const allDay = new Date(this.year, this.month, 0).getDate();
                if(this.day > allDay){
                    this.day = allDay;
                }
            }
        },
        
        computed: {
            // 这个月的一号星期几
           beginDay(){
                return new Date(this.year, this.month - 1, 1).getDay(); // 获取这个月的一号
           } ,
            // 得到这个月的天数。
            curdays (){
                return new Date(this.year , this.month, 0).getDate();
            },
            // 上个月的天数
            prevDays(){
                return new Date(this.year, this.month -1 , 0).getDate();
            }
        },
    }

</script>

<style>
    .calendar{
        width: 350px;
        border: 1px solid #999;
        text-align: center;
        box-sizing: border-box;
    }
    .calendar .date-header{
        position: relative;
        width: 350px;
        height: 30px;
        line-height: 30px;
        background-color: #abcdef;
    }
    .prev-month,
    .next-month{
        position: absolute;
        width: 0px;
        height: 0px;
        border: 15px solid transparent;
    }
    .prev-month{
        border-right-color: rgb(167, 5, 126)
    }
    .next-month{
        top: 0px;
        right: 0px;
        border-left-color: rgb(167, 5, 126);
    }
    .calendar .date-content .week-header{
        width: 350px;
        display: flex;
        line-height: 50px;
        background : #956bb1;
    }
    .week{
        /* background-color: #f40; */
        height: 50px;
        /* border: 1px solid #999; */
        width: 50px;
        box-sizing: border-box;
    }
    .week-day {
        /* display: flex; */
        width: 350px;
        height: 300px;
        line-height: 50px;
    }
    .week-day .day{
        width: 50px;
        height : 50px;
        float: left;
        border: 1px solid #999;
        box-sizing: border-box;
        cursor: pointer;
    }
     .week-day .day.show{
       color: rgb(197, 197, 197);
    }
     .week-day .day.now-day{
       border: 1px solid rgb(71, 145, 3);
       background-color: rgb(71, 145, 3);
       color: #fff;
    }
    .week-day .day.active-day{
       border: 2px solid rgb(71, 145, 3);
    }
</style>