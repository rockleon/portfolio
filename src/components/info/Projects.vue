<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>Projects</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row class="mx-0 my-5 text-14">
      <v-col md="8" cols="12" class="pl-0">
        <div class="timeline-title pt-2">
          <div class="number">1)</div>
          Bookit Webapp
        </div>
        <ul class="timeline-detail detail-ul">
          <li>Web app for booking tickets for events (like BookMyShow).</li>
          <li>
            We have created this web app using Vue js for the frontend and
            Django(REST) for the backend.
          </li>
          <li>
            This website has two parts; the first part for the customer to check
            events and book tickets, and the second part for admin to register
            events and check sales.
          </li>
          <li>
            To check the admin panel, click on the settings icon on the top
            right corner, <br />select 'login as admin', and log in with these
            credentials: <br />
            username - admin, password - admin1234
          </li>
        </ul>
        <div class="timeline-detail2">
          Website -
          <a href="http://bookit-webapp.surge.sh/" target="blank"
            >http://bookit-webapp.surge.sh/</a
          >
        </div>
        <div class="timeline-detail2 mt-1">
          Video -
          <a href="https://youtu.be/Hr85wIOqiqQ" target="blank"
            >https://youtu.be/Hr85wIOqiqQ</a
          >
        </div>
      </v-col>
      <v-col md="4" cols="12" class="image-center pr-0">
        <img :src="require('@/assets/images/bookit.jpg')" class="image" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mx-0 my-5 text-14">
      <v-col md="8" cols="12" class="pl-0">
        <div class="timeline-title pt-2">
          <div class="number">2)</div>
          Photovoltaic Module Monitoring System
        </div>
        <div class="timeline-detail">
          This project is developed as an aide for researching solar energy and
          solar cells situated in the Electrical Department of IIT Bombay. The
          project is developed using MongoDB, Apache Spark, Python, and PHP. The
          project can be summarised into 5 parts -
        </div>
        <ul class="timeline-detail detail-ul">
          <li>Data Retrieval from the solar cells and live monitoring.</li>
          <li>Error detection and Segregation of data as valid and invalid.</li>
          <li>Basic data analyzing tool for research purpose.</li>
          <li>
            Alerts/Notifications if data is incorrect or exceeds the generalized
            parameters.
          </li>
          <li>
            Maintain a log record about any changes made to different modules.
          </li>
        </ul>
        <div class="timeline-detail2">
          Video -
          <a href="https://youtu.be/J0BGa0tqPOU" target="blank"
            >https://youtu.be/J0BGa0tqPOU</a
          >
        </div>
      </v-col>
      <v-col md="4" cols="12" class="image-center pr-0">
        <img :src="require('@/assets/images/pvmms.png')" class="image" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mx-0 my-5 text-14">
      <v-col md="8" cols="12" class="pl-0">
        <div class="timeline-title pt-2">
          <div class="number">3)</div>
          Image Splash
        </div>
        <ul class="timeline-detail detail-ul">
          <li>A website for searching, viewing and downloading images.</li>
          <li>The images are fetched using the Unsplash image search api.</li>
          <li>This website is built using React.js.</li>
        </ul>
        <div class="timeline-detail2">
          Website -
          <a href="http://image-splash.surge.sh/" target="blank"
            >http://image-splash.surge.sh/</a
          >
        </div>
        <div class="timeline-detail2 mt-1">
          Codesandbox -
          <a
            href="https://codesandbox.io/s/wispy-resonance-vf8c6/"
            target="blank"
            >https://codesandbox.io/s/wispy-resonance-vf8c6/</a
          >
        </div>
      </v-col>
      <v-col md="4" cols="12" class="image-center pr-0">
        <img :src="require('@/assets/images/image-splash.jpg')" class="image" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mx-0 my-5 text-14">
      <v-col md="8" cols="12" class="pl-0">
        <div class="timeline-title pt-2">
          <div class="number">4)</div>
          Job Portal Website
        </div>
        <ul class="timeline-detail detail-ul">
          <li>A static website template for a job portal.</li>
          <li>This website is built using Vue.js.</li>
        </ul>
        <div class="timeline-detail2">
          Website -
          <a href="http://demo-job-portal.surge.sh/" target="blank"
            >http://demo-job-portal.surge.sh/</a
          >
        </div>
      </v-col>
      <v-col md="4" cols="12" class="image-center pr-0">
        <img :src="require('@/assets/images/dreamjob.jpg')" class="image" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mx-0 my-5 text-14">
      <v-col md="8" cols="12" class="pl-0">
        <div class="timeline-title pt-2">
          <div class="number">5)</div>
          Location Tracker App
        </div>
        <div class="timeline-detail">
          A simple android app for tracking live locations of your friends and
          family. This app uses GPS signals and Firebase cloud server for
          sending, storing and receiving live locations.
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timeline-title {
  display: flex;
  flex-direction: row;
  font-size: 1.1em;
  font-weight: 600;
}

.sub-title {
  font-size: 0.8em;
  font-weight: 400;
  margin-left: 5px;
}

.timeline-detail {
  margin-left: 25px;
  margin-top: 5px;
}
.timeline-detail2 {
  margin-left: 25px;
  margin-top: 15px;
}

.image {
  object-fit: contain;
  width: 100%;
  height: auto;
}

.image-center {
  display: flex;
  align-items: center;
}

.number {
  width: 25px;
}

@media only screen and (max-width: 600px) {
  .detail-ul {
    margin-left: 15px;
  }
}
</style>