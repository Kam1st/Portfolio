<template>
  <particles-bg type="circle" color="#000000" :bg="true"/>
  <div>
    <br>
    <h1>Kamilah Hatteea</h1>
    <br>
    <aos-vue animation="fade">
    <img src="@/assets/Kam.jpeg" width="300" height="400"/>
    </aos-vue>
    <br>
    <br>

    <div style="background-color: black">
      <aos-vue animation="fade">
      <br>
      <br>
      <p style="font-size: 20px"> Hello! My name is Kamilah (but you can call me Kam).
        <br>
        <br> On this portfolio you will see who I am as a person, my projects and skills, and much more.
        <br>
        <br> So don't be shy to check out every aspect of it.
        <br>
        <br> You can always reach me by email or on social media, just click on the links at the top:)
        <br>
        <br>Welcome to my life!
      </p>
      <br>
      <br>
      </aos-vue>
    </div>

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