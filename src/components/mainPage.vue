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
    <br>
    <br>
    <div class="row">
      <h1>Skills</h1>
      <aos-vue animation="fade" :delay="200">
        <div class="column">
          <img src="@/assets/skills/agile.png" width="100" height="100" style="padding-right: 130px">
          <img src="@/assets/skills/aut.jpg" width="100" height="100" style="padding-right: 170px; padding-left: 20px">
          <img src="@/assets/skills/bi.png" width="100" height="100" style="padding-left: 10px; padding-right: 40px" >
          <img src="@/assets/skills/comm.png" width="100" height="100" style="padding-left: 100px">
          <pre>      Agile methodology/SCRUM                 Autonomous           Perfectly Bilingual: French and English     Good communication           </pre>
        </div>
        <br>
        <br>
        <br>
        <div class="column">
          <img src="@/assets/skills/ct.png" width="90" height="90"  style="padding-right: 130px">
          <img src="@/assets/skills/hw.svg" width="90" height="90" style="padding-right: 170px; padding-left: 10px">
          <img src="@/assets/skills/ps.png" width="90" height="90" style="padding-left: 10px; padding-right: 70px" >
          <img src="@/assets/skills/tp.svg" width="90" height="90" style="padding-left: 40px; padding-right: 80px">
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
    <br>

    <div style="background-color: black">
      <br>
<h1>Education And Projects</h1>
      <br>
    <aos-vue animation="fade" data-aos-duration="600">
      <h2 >Champlain College Saint-Lambert</h2>
      <div>
        <img src="@/assets/edu/champ.jpg" width="800" height="450" style="border-radius: 5%;"/>
      </div>
      <div style="background-color: #383630; margin-right: 350px; margin-left: 350px; border-radius: 3%; margin-top: 0px;">
        <h3>(2020-2023)</h3>
        <p>At Champlain College, I am on my way to complete a 3-year Computer Science technical DEC. <br>
          This program taught me a lot about the world of computers and software programming <br> (and is the reason I can code this
          wonderful website all by myself:)).
        </p>
          <a href="https://www.champlainsaintlambert.ca/">Visit the college's site</a>
      </div>
    </aos-vue>

    <br>
    <br>
    <aos-vue animation="fade-down">
      <div>
        <h2>Universal Marketing Inventory System</h2>
        <br>
      </div>

      <div>
        <img src="@/assets/projects/um.png" width="800" height="500" style="border-radius: 5%;"/>
        <div style="background-color: #383630; margin-right: 350px; margin-left: 350px; border-radius: 3%; margin-top: 0px">
          <p>  Universal Marketing Co. Ltd (UMCL) is a wholesale supplier for plumbing equipment to  retail  businesses  and  professionals.
            <br>Currently,  the  company  uses  an  external Business Management service to store and retrieve data for all transactions,
            called MYOB (Mind Your Own Business). Transactions include: <br>

            <br>Placing orders
            <br>Restocking inventory
            <br>Producing invoices
            Tracking client activity.
          </p>
          <p>They wish to have their own service to store their data and carry out these transactions. <br> This project was built
            using Java and Sprint Boot as well as Vue.js</p>
        </div>
        <br>
        <p> Check out the complete project at
          <a href="https://github.com/Kam1st/um_inventory_frontend">https://github.com/Kam1st/um_inventory_frontend </a> and <br>
          <a href="https://github.com/Kam1st/um_inventory">https://github.com/Kam1st/um_inventory </a>
        </p>
        <br>
      </div>


    </aos-vue>

    <br>

    <aos-vue animation="fade-right" :delay="50">
      <h2>Adventure Coin</h2>
        <div class="row1">
          <div class="column">
        <img src="@/assets/projects/game_level1.png" width="800" height="500" style="border-radius: 5%;"/>
        </div>
          <div class="column">
        <img src="@/assets/projects/game_ending.png" width="800" height="500" style="border-radius: 5%;"/>
          </div>
        </div>
        <div style="background-color: #383630; margin-right: 350px; margin-left: 350px; border-radius: 3%; margin-top: 0px; padding-top: 5px; padding-bottom: 5px">
          <p>Adventure Coin is a 2D platformer made with the Unity plateform and coded in C#. <br> This project was made for my
            Game Development class with Unity and the goal was to use <br> everything learnt in class in a final game. Things
            like parallax, assets, scripts <br> and much more helped create the finished product.
          </p>
        </div>
        <br>
        <p>Check out the complete project at <a href="https://github.com/Kam1st/adventure_coin">https://github.com/Kam1st/adventure_coin </a></p>
        <br>
    </aos-vue>

    </div>
    </div>


  </div>

</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'mainPage',
  components: {
    ParticlesBg,
  },
};
</script>

<style>

.row1 {
  display: flex;
}

.column {
  flex: 50%;
  padding: 6px;
}

img {
  box-shadow: 2px 2px 8px white, 1px 1px 6px white;
}

</style>