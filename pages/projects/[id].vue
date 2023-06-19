<template>

  <div class="text-center">
    <iframe v-if="project" width="965" height="543" :src="project.URL" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
  </div>

  <div style="width: 900px; height: 100px; margin-left: auto; margin-right: auto" >
    <p>customer: <a :href="project.customer_link" target="_blank">{{project.customer}}</a></p>
    <p>Services: {{ project.services }}</p>
  </div>
</template>

<script setup lang="ts">

import projects from "public/projects.json"
import IProjectInfo from "~/pages/projects/IProjectInfo";

const wagou_projects: IProjectInfo[] = projects
const route = useRoute()

let project = wagou_projects.find(project => project.project_name === route.params.id);

definePageMeta({
  layout: "default"
})


</script>

<style scoped>

</style>