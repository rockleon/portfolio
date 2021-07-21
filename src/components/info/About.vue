<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>About Me</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row class="mx-0">
      <v-col md="8" sm="12" cols="12" class="pl-0 pt-5 text-14">
        <span
          >Hello! I am Amey, a software engineer based in Mumbai, India.</span
        >
        <p>
          I have 1.4 years of experience as a fullstack developer.<br />
          I am passionate about implementing things and solving problems.<br />
          I am diligent, well-organized, a quick learner and a good team player.
        </p>
        <v-row class="mx-0 mt-2">
          <v-col md="6" cols="12" class="pl-0 pt-0">Location: <span class="sub-info">Mumbai, India</span></v-col>
          <v-col md="6" cols="12" class="pl-0 pt-0">Email: <span class="sub-info">ameysgorde@gmail.com</span></v-col>
        </v-row>
        <v-row class="mx-0">
          <v-col md="6" cols="12" class="pl-0 pt-0">Works at: <span class="sub-info">-</span></v-col>
          <v-col md="6" cols="12" class="pt-0 pl-0 ma-0 sub-info">Open for freelance job offers!</v-col>
        </v-row>
      </v-col>
      <v-col md="4" sm="12" cols="12" class="py-0 about-image">
        <img :src="require('@/assets/images/id.jpg')" class="image" />
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

@media only screen and (max-width: 1150px) {
  .about-image {
    padding: 0px !important;
  }
}
</style>