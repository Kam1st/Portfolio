<template>
  <particles-bg type="cobweb" :bg="true" />
  <nav>
    <a @click="redirectHomePage">Home</a>&nbsp;
    <a @click="redirectSkillsPage">Skills</a> &nbsp;
    <a @click="redirectEducationPage">Education</a> &nbsp;
    <a @click="redirectProjectsPage">Projects</a> &nbsp;
    <a @click="redirectExtraPage">Extracurriculars</a> &nbsp;
    <a @click="redirectContactPage">Contact</a> &nbsp;
  </nav>

  <router-view/>

  <br>
  <br>
  <footer style="color:#e0c56e; text-align: center; font-style: italic; padding : 1em; font-size : 1em;"> Copyright &copy; 2023. Created by Kamilah Hatteea. </footer>


</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'App',
  components: {
    ParticlesBg
  },
  methods: {
    redirectHomePage(){
      this.$router.push(`/`);
    },
    redirectSkillsPage(){
      this.$router.push(`/skills`);
    },
    redirectEducationPage(){
      this.$router.push(`/education`);
    },
    redirectProjectsPage(){
      this.$router.push(`/projects`);
    },
    redirectContactPage(){
      this.$router.push(`/contact`);
    },
    redirectExtraPage(){
      this.$router.push(`/extracurriculars`);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d4af37;
  margin-top: 60px;
  margin-bottom: 0px;
}
nav a:hover {
  color: #A38A00;
}

</style>
