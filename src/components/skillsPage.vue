<template>
<br>
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



  <div class="row">
    <aos-vue animation="fade">
    <div class="column">
        <img src="@/assets/skills/micro.png" width="100" height="100" style="margin: 100px 750px 30px 50px;">
        <img src="@/assets/skills/lang.png" width="100" height="100">
      <pre>   Ease with computer related programs (Such as Word, Excel, PowerPoint, MS Project, etc.                            Experience with programming languages such as Java, JavaScript, C#, PHP, Python, Swift      </pre>
      </div>
    <div class="column">
        <img src="@/assets/skills/frameworks.png" width="90" height="90" style="margin: 100px 750px 30px 50px;">
        <img src="@/assets/skills/windows.png" width="90" height="90">
      <pre>   Used a variety of frameworks such as HTML, Spring Boot, Azure ASP.Net, SwiftUI.                                                       High knowledge of Windows, some with Linux                   </pre>
      </div>
    </aos-vue>


    <aos-vue animation="fade">
    <div class="column">
      <img src="@/assets/skills/mob.png" width="90" height="90" style="margin: 100px 750px 30px 50px;">
      <img src="@/assets/skills/data.png" width="90" height="90">
      <pre>    Mobile development using Android and familiar with MacOS.                                                          Experience with Data Management using MySQL, ORACLE, and MongoDB   </pre>
    </div>
    <div class="column">
      <img src="@/assets/skills/sodev.png" width="90" height="90" style="margin: 100px 750px 30px 50px;">
      <img src="@/assets/skills/github.png" width="120" height="120">
      <pre>        Knowledge of development software such as Jira and Figma.                                                    	Experience with integration tool of Docker and control system of Git/GitHub</pre>
    </div>
    </aos-vue>
  </div>
  </div>

</template>

<script>
export default {
  name: "skillPage"
}
</script>

<style scoped>
img {
  margin: 90px 85px 30px 50px;
}


</style>