<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>About Me</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row class="mx-0">
      <v-col cols="8" class="pl-0 pt-5 text-14">
        <span
          >Hello! I am Amey, a software engineer based in Mumbai, India.</span
        >
        <p>
          I have 1.4 years of experience as a fullstack developer.<br />
          I am passionate about implementing things and solving problems.<br />
          I am diligent, well-organized, a quick learner and a good team player.
        </p>
        <v-row class="mx-0 mt-2">
          <v-col cols="6" class="pl-0">Location: <span class="sub-info">Mumbai, India</span></v-col>
          <v-col cols="6">Email: <span class="sub-info">ameysgorde@gmail.com</span></v-col>
        </v-row>
        <v-row class="mx-0">
          <v-col cols="6" class="pl-0 pt-0">Works at: <span class="sub-info">-</span></v-col>
          <v-col cols="6" class="pt-0 ma-0 sub-info">Open for job offers!</v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pr-0 py-0">
        <img :src="require('@/assets/images/developer1.jpg')" class="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-content {
  display: flex;
  flex-direction: column;
}

.image {
  object-fit: contain;
  width: 100%;
  height: auto;
}

.sub-info {
  margin-left: 5px;
  font-weight: 600;
}
</style>