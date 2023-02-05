<template>
  <div class="row">
    <aos-vue animation="fade">
    <div class="column">
      <img src="@/assets/skills/agile.png" width="100" height="100">
      <img src="@/assets/skills/aut.jpg" width="100" height="100">
      <img src="@/assets/skills/bi.png" width="100" height="100">
      <img src="@/assets/skills/comm.png" width="100" height="100">
      <pre>      Agile methodology/SCRUM                 Autonomous           Perfectly Bilingual: French and English     Good communication           </pre>
    </div>
  </aos-vue>
    <br>
    <br>
    <aos-vue animation="fade" :delay="400">
    <div class="column">
      <img src="@/assets/skills/ct.png" width="90" height="90">
      <img src="@/assets/skills/hw.svg" width="90" height="90">
      <img src="@/assets/skills/ps.png" width="90" height="90">
      <img src="@/assets/skills/tp.svg" width="90" height="90">
      <pre>       Critical Thinking                  Hardworking                 Problem-Solving Ability             Team Player                </pre>
    </div>
    </aos-vue>
  </div>

  <div>


    <p style="text-align: left; color: indigo">Technical Skills</p>

    <ul style="text-align: left; color: indigo">
    <li>	Ease with computer related programs (Such as Word, Excel, PowerPoint, MS Project, etc.)</li>
    <li>	Experience with programming languages such as Java, JavaScript, C#, PHP, Python, Swift</li>
    <li>	Used a variety of frameworks such as HTML, Spring Boot, Azure ASP.Net, SwiftUI</li>
    <li>	High knowledge of Windows, some with Linux</li>
    <li>	Mobile development using Android and familiar with MacOS</li>
    <li>	Experience with Data Management using MySQL, ORACLE, and MongoDB</li>
    <li>	Knowledge of development software such as Jira and Figma</li>
    <li>	Experience with integration tool of Docker and control system of Git/GitHub</li>
    </ul>

  </div>



</template>

<script>
export default {
  name: "skillPage",
}
</script>

<style scoped>
img {
  margin: 90px 85px 30px 50px;
}


</style>