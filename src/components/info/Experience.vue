<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>Education and Experience</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row no-gutters class="text-14">
      <v-timeline>
        <v-timeline-item right class="timeline-item">
          <span slot="opposite">July 2019 - Present</span>
          <v-row class="mx-0" align="center">
            <img :src="require('@/assets/images/zaya.png')" class="firm-logo" />
            <span class="timeline-title pt-2 ml-2">Zaya Learning Labs</span>
          </v-row>
          <v-row class="mx-0 mt-5"
            ><span class="timeline-detail"
              >Worked as a Full Stack Engineer, developed web applications
              and mobile applications using Vue, React, React Native and
              Django.</span
            ></v-row
          >
        </v-timeline-item>
        <v-timeline-item right class="timeline-itema">
          <span slot="opposite">August 2015 - May 2019</span>
          <v-row class="mx-0" align="center">
            <img :src="require('@/assets/images/dbit.png')" class="firm-logo" />
            <span class="timeline-title pt-2 ml-2"
              >Don Bosco Institute of Technology, Mumbai</span
            >
          </v-row>
          <v-row class="mx-0 mt-5"
            ><span class="timeline-detail"
              >BE in Computer Science.</span
            ></v-row
          >
        </v-timeline-item>
      </v-timeline>
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

.firm-logo {
  width: 50px;
  height: auto;
}

.timeline-item {
  margin-bottom: 100px;
}

.timeline-title {
  font-size: 1.1em;
  font-weight: 600;
}

.timeline-detail {
  margin-left: 58px;
  width: 150%;
}

.v-timeline {
  left: -250px;
  margin-top: 20px;
}
</style>