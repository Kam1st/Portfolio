<template>
  <nav>
    <div style="float: right; margin-right: 690px">
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
    <div style="float: right">
      <a href=" https://docs.google.com/document/d/1qJ5o1m2DlN1reJYWk5grOpVZvzUyXkJ_/edit?usp=sharing&ouid=112658307649551179071&rtpof=true&sd=true">
        CV
      </a>
    </div>
  </nav>

  <MqResponsive target="xs">
  </MqResponsive>
  <MqResponsive target="sm">
  </MqResponsive>
  <MqResponsive target="md">
  </MqResponsive>
  <MqResponsive target="lg">
  </MqResponsive>
  <MqResponsive target="xl">
  </MqResponsive>
  <MqResponsive target="xxl">
  </MqResponsive>
  <router-view/>


<div id="bg">
  <footer> Copyright &copy; 2023. Kamilah Hatteea.</footer>
</div>
</template>

<script>
export default {
  name: 'App',
  // methods: {
  //   redirectHomePage(){
  //     this.$router.push(`/`);
  //   },
  //   redirectSkillsPage(){
  //     this.$router.push(`/skills`);
  //   },
  //   redirectEducationPage(){
  //     this.$router.push(`/education`);
  //   },
  //   redirectProjectsPage(){
  //     this.$router.push(`/projects`);
  //   },
  //   redirectContactPage(){
  //     this.$router.push(`/contact`);
  //   },
  //   redirectExtraPage(){
  //     this.$router.push(`/extracurriculars`);
  //   },
  // }
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
  color: #d4af37;
}

nav a:hover {
  color:  #A38A00;
}

a {
  color:  #A38A00;
}


a:visited {
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
