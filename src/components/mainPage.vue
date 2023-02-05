<template>
  <particles-bg type="circle" color="#000000" :bg="true"/>
  <div>
    <br>
    <h1>Kamilah Hatteea</h1>
    <br>
    <aos-vue animation="fade">
    <img src="@/assets/Kam.jpeg" width="300" height="400"/>
    <p style="font-size: 20px"> Welcome to my life! <br> On this portfolio you will see who I am as a person,
    my projects and skills, and much more! <br> So don't be shy to check out every aspect of it :)<br>
    </p>
    </aos-vue>
    <br>
    <br>

  </div>


</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'mainPage',
  components: {
    ParticlesBg
  },
};
</script>

<style>
</style>