<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>Projects</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <div v-for="(project, index) in projects" :key="index">
      <v-row class="mx-0 my-5 text-14">
        <v-col md="8" cols="12" class="pl-0">
          <div class="timeline-title pt-2">
            <div class="number">{{ index + 1 }})</div>
            {{ project.title }}
          </div>
          <div
            class="timeline-detail"
            v-if="project.description && project.description.length"
            v-html="project.description"
          ></div>
          <ul class="timeline-detail detail-ul" v-if="project.points.length">
            <li
              v-for="(point, index) in project.points"
              :key="index"
              v-html="point"
            ></li>
          </ul>
          <div v-if="project.links.length">
            <div
              v-for="(link, index) in project.links"
              :key="index"
              class="timeline-detail2"
            >
              {{ link.title }} -
              <a :href="link.url" target="blank" rel="noopener noreferrer">{{
                link.url
              }}</a>
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="12" class="image-center pr-0">
          <img v-if="project.image" :src="project.image" class="image" />
        </v-col>
      </v-row>
      <v-divider v-if="index != projects.length - 1"></v-divider>
    </div>
  </div>
</template>

<script>
const bookitImage = require("@/assets/images/bookit.jpg");
const pvmmsImage = require("@/assets/images/pvmms.png");
const splashImage = require("@/assets/images/image-splash.jpg");
const jobImage = require("@/assets/images/dreamjob.jpg");
const visitsImage = require("@/assets/images/site-visits.jpg");
const camoImage = require("@/assets/images/camo.jpg");
const cloudImage = require("@/assets/images/cloud-framework.png");

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Photovoltaic Module Monitoring System",
          description: `This project is developed as an aide for researching solar energy and
          solar cells situated in the Electrical Department of IIT Bombay. The
          project is developed using MongoDB, Apache Spark, Python, and PHP. The
          project can be summarised into 5 parts -`,
          points: [
            `Data Retrieval from the solar cells and live monitoring.`,
            `Error detection and Segregation of data as valid and invalid.`,
            `Basic data analyzing tool for research purpose.`,
            `Alerts/Notifications if data is incorrect or exceeds the generalized parameters.`,
            `Maintain a log record about any changes made to different modules.`,
          ],
          links: [
            {
              title: "Video",
              url: "https://youtu.be/J0BGa0tqPOU/",
            },
          ],
          image: pvmmsImage,
        },
        {
          title: "Blockchain-based Secure Cloud Storage Framework",
          description: null,
          points: [
            `In this project, a security framework was implemented for accessing encrypted data stored in the cloud.`,
            `User authorization, and distribution of secret key and decipher text was handled using blockchain.`,
            `Security was ensured as only the owner can make changes in the blockchain, and all transactions made are transparent.`,
          ],
          links: [],
          image: cloudImage,
        },
        {
          title: "Camouflage With Škoda",
          description: `Camouflage with Škoda is a camouflage design contest organized by ŠKODA Inida, where participants can submit their camouflage designs and ideas to apply on new cars.`,
          points: [
            `Design, creation and deployment of the website.`,
            `Registration form for the participants to fill details and upload submissions.`,
            `API's and Database to save participant's information, and Dropbox for storing uploaded jpeg submissions.`,
            `Admin panel to view submitted information and with functionalities to search, filter, and shortlist canditates, and download data in csv format.`,
            `The website is built using Nuxt.js(vue), Django(REST) and Dropbox.`,
          ],
          links: [
            {
              title: "Website",
              url: "https://www.camowithskoda.com/",
            },
          ],
          image: camoImage,
        },
        {
          title: "Site-Visits",
          description: `Service to keep count of visits made to your website. View count of visits for all your websites at one place.`,
          points: [
            `Register/Login on the website and create a project. A unique key gets generated.`,
            `Import the npm package in your website and use the unique key`,
            `A user can create multiple projects and view their visit-count by logging in to the website.`,
            `The website is built using Vue.js and Django for backend.`,
          ],
          links: [
            {
              title: "NPM Package",
              url: "https://www.npmjs.com/package/@rockleon/site-visits/",
            },
            {
              title: "Website",
              url: "https://site-visits-rockleon.web.app/",
            },
          ],
          image: visitsImage,
        },
        {
          title: "Bookit Webapp",
          description: null,
          points: [
            `Web app for booking tickets for events (like BookMyShow).`,
            `We have created this web app using Vue js for the frontend and Django(REST) for the backend.`,
            `This website has two parts; the first part for the customer to check events and book tickets, and the second part for admin to register events and check sales.`,
            `To check the admin panel, click on the settings icon on the top right corner, <br />select 'login as admin', and log in with these credentials: <br /> username - admin, password - admin1234`,
            `This website is built using Vue.js.`,
          ],
          links: [
            {
              title: "Website",
              url: "http://bookit-webapp.surge.sh/",
            },
            {
              title: "Video",
              url: "https://youtu.be/Hr85wIOqiqQ/",
            },
          ],
          image: bookitImage,
        },
        {
          title: "Image Splash",
          description: null,
          points: [
            `A website for searching, viewing and downloading images.`,
            `The images are fetched using the Unsplash image search api.`,
            `This website is built using React.js.`,
          ],
          links: [
            {
              title: "Website",
              url: "http://image-splash.surge.sh/",
            },
            {
              title: "Codesandbox",
              url: "https://codesandbox.io/s/wispy-resonance-vf8c6/",
            },
          ],
          image: splashImage,
        },
        {
          title: "Job Portal",
          description: null,
          points: [
            `A static website template for a job portal.`,
            `This website is built using Vue.js.`,
          ],
          links: [
            {
              title: "Website",
              url: "http://demo-job-portal.surge.sh/",
            },
          ],
          image: jobImage,
        },
        {
          title: "Location Tracker App",
          description: `A simple android app for tracking live locations of your friends and
          family. This app uses GPS signals and Firebase cloud server for
          sending, storing and receiving live locations.`,
          points: [],
          links: [],
          image: null,
        },
      ],
    };
  },
};
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
  margin-top: 10px;
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