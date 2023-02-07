<template>
  <br>
  <br>
  <br>
  <nav>
    <a @click="redirectHomePage">Home</a>&nbsp;
    <a @click="redirectSkillsPage">Skills</a> &nbsp;
    <a @click="redirectEducationPage">Education</a> &nbsp;
    <a @click="redirectProjectsPage">Projects</a> &nbsp;
    <a @click="redirectExtraPage">Extracurriculars</a> &nbsp;
<!--    <a @click="redirectContactPage">Contact</a> &nbsp;-->

    <div style="float: right">
      <a href="https://linktr.ee/kamilah27">
        <img src="@/assets/contact/l.svg" width="25" height="25"/>
      </a>
    </div>
    <div style="float: right">
      <a href="https://github.com/Kam1st">
        <img src="@/assets/contact/g.png" width="25" height="25"/>
      </a>
    </div>
    <div style="float: right">
      <a href="https://www.linkedin.com/in/kamilah-hatteea/">
        <img src="@/assets/contact/lin.png" width="25" height="25"/>
      </a>
    </div>
    <div style="float: right">
      <a href="mailto:kam.hatteea@hotmail.com">
        <img src="@/assets/contact/e.png" width="25" height="25"/>
      </a>
    </div>
  </nav>


  <router-view/>


<div id="bg">
  <footer> Copyright &copy; 2023. Kamilah Hatteea.</footer>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    redirectHomePage(){
      this.$router.push(`../public/index.html`);
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
  margin-top: 0px;
  margin-bottom: 0px;
}

#bg, body{
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
}

#bg {
  background-color: black;
}

nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  z-index: 500;
  background-color: #FAF9F6;
  padding: 12px;
}

nav a {
  float: left;
  padding: 0px 10px;
  text-decoration: none;
}

nav a:hover {
  color:  #A38A00;
}

footer {
  background-color: #FAF9F6;
  color:#e0c56e;
  text-align: center;
  font-style: italic;
  padding : 1.2em;
  font-size : 1em;
}

img {
  max-width: 100%;
  max-height: 90%;
}


</style>
