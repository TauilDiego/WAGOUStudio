<template>
  <section style="width: 100%; height: auto; min-height: 100vh">
    <div v-for="(project, i) in wagou_projects" :key="i" class="flex flex-row">
      <nuxt-link :to="{path: `/projects/${project.project_name}`}">
        <img width="320" height="180" src="~/assets/images/NFT_project.png">
      </nuxt-link>
      <div>
        <span>{{ project.project_name }}</span>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

import IProjectInfo from "./IProjectInfo";
import projects from "public/projects.json"

const wagou_projects: IProjectInfo[] = projects

onMounted(() => {
  console.log(projects)
})

</script>

<style scoped>

</style>