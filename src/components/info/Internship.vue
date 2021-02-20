<template>
  <div class="card-content">
    <v-row class="info-card-title" no-gutters>Internships and Courses</v-row>
    <v-row no-gutters><span class="info-card-underline"></span></v-row>
    <v-row class="mx-0 mt-7 info-title">Internships -</v-row>
    <div class="course-box mt-2 text-14">
      <span class="timeline-title pt-2"
        >1) Rashtriya Chemicals and Fertilizers, Mumbai
        <span class="sub-title">(June 2018 - July 2018)</span>
      </span>
      <span class="timeline-detail"
        >Website for managing ‘Employee Provident Fund System’ using C#,
        ASP.NET, and Oracle database.</span
      >
      <span class="timeline-detail">
        Link to view certificate and report -
        <a
          href="https://drive.google.com/file/d/1LziDTmoIkAVq9Te0wLB6WzRYD9kt4sYb/view?usp=sharing"
          target="blank"
          >click here</a
        >
      </span>
    </div>
    <div class="course-box mt-2 text-14">
      <span class="timeline-title pt-2"
        >2) Rashtriya Chemicals and Fertilizers, Mumbai
        <span class="sub-title">(June 2017)</span>
      </span>
      <span class="timeline-detail"
        >Report Generation using SAP Enterprise Software.</span
      >
      <span class="timeline-detail">
        Link to view certificate and report -
        <a
          href="https://drive.google.com/file/d/1LziDTmoIkAVq9Te0wLB6WzRYD9kt4sYb/view?usp=sharing"
          target="blank"
          >click here</a
        >
      </span>
    </div>
    <v-row class="mx-0 mt-7 info-title">Courses -</v-row>
    <div class="course-box mt-2 text-14">
      <span class="timeline-title pt-2"
        >1) Deep Learning A-Z: Hands-On Artificial Networks
        <span class="sub-title">(Udemy)</span>
      </span>
      <span class="timeline-detail"
        >Detailed lectures on Machine Learning and Deep Learning filled with
        intuition tutorials, practical exercises and real-World case
        studies.</span
      >
      <!-- <span class="timeline-detail"> Link to view certificate - </span> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info-title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 5px;
}

.timeline-title {
  font-size: 1.1em;
  font-weight: 600;
}

.sub-title {
  font-size: 0.8em;
  font-weight: 400;
  margin-left: 5px;
}

.timeline-detail {
  margin-left: 18px;
  margin-top: 5px;
}

.course-box {
  display: flex;
  flex-direction: column;
}
</style>