<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>Skills</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row class="mx-0 mt-7 skill-title">Frontend -</v-row>
    <v-row class="mx-0">
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/react.png')" class="skill-image">
        <span class="skill-info">React JS</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/vue.png')" class="skill-image">
        <span class="skill-info">Vue JS</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/react-native.png')" class="skill-image">
        <span class="skill-info">React Native</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/nodejs.png')" class="skill-image">
        <span class="skill-info">Node JS</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/graphql.png')" class="skill-image">
        <span class="skill-info">GraphQL</span>
      </div>
    </v-row>
    <v-row class="mx-0 mt-10 skill-title">Backend -</v-row>
    <v-row class="mx-0">
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/django.jpg')" class="skill-image">
        <span class="skill-info">Django</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/django-rest.png')" class="skill-image">
        <span class="skill-info">Django REST framework</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/laravel.png')" class="skill-image">
        <span class="skill-info">Laravel</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/featherjs.jpeg')" class="skill-image">
        <span class="skill-info">Feather JS</span>
      </div>
    </v-row>
    <v-row class="mx-0 mt-10 skill-title">Database -</v-row>
    <v-row class="mx-0 mb-2">
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/postgres.png')" class="skill-image">
        <span class="skill-info">Postgres</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/mongo.jpg')" class="skill-image">
        <span class="skill-info">Mongo</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/firebase.png')" class="skill-image">
        <span class="skill-info">Firebase</span>
      </div>
      <div class="skill-box text-14">
        <img :src="require('@/assets/images/oracle.jpg')" class="skill-image">
        <span class="skill-info">Oracle</span>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.skill-title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 5px;
}

.skill-box {
  width: 120px;
  margin-right: 10px;
}

.skill-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.skill-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
</style>