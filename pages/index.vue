<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h2">OneGo</div>
      <p class='q-mt-sm text-grey-8'>
        게시판, 캘린더 등등 관리 할수 있는 프로젝트입니다.
      </p>
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for='{courseSlug, title, subtitle, thumbnail, path} in courses' :key='courseSlug'
        class='col-12 col-md-4 col-sm-6'>
        <NuxtLink v-slot="{navigate}" custom :to="path">
          <CourseCard :title="title" :subTitle='subtitle' 
          :thumbnail='thumbnail' @click='navigate'>
          </CourseCard>
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
                
const { courses } = useCourses();
</script>

<style scoped>

</style>