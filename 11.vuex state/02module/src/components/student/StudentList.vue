<template>
    <div class="list">
        <div>学生列表：</div>
        <ul>
            <li
                v-for="student in studentList"
                :key="student.id"
            >
                姓名：{{ student.name }}
                年龄：{{ student.age }}
            </li>
        </ul>
        <hr/>
        <ul>
            <li
                v-for="item in newStudentList"
                :key="item"
            >{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
    computed : {
        ...mapState(['studentList']),
        ...mapGetters(['newStudentList'])
    }
}
</script>
<style scoped>
    .list div{
        text-align: left;
    }
    .list li{
        padding: 5px;
        text-align: left;
    }
</style>