<template>
   <div class="student">
        <add-student></add-student>
        <student-list></student-list>
   </div>
</template>

<script>
    // @自动到src路径下
 import  AddStudent  from "@/components/student/AddStudent";
 import  StudentList  from "@/components/student/StudentList";
export default {
   
    components : {
        AddStudent,
        StudentList
    }
}
</script>