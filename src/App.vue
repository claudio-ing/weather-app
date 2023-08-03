<template>
  <v-app>
    <v-container style="max-width:368px">
      <Suspense>
        <router-view />
      </Suspense>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
</script>
