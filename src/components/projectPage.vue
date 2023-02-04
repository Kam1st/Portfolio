<template>
  <br>
  <aos-vue animation="fade-up">
  <div>
    <h2 style="color: blue">Universal Marketing Inventory System</h2>
    <br>
<p style="color: blue" >  Universal Marketing Co. Ltd (UMCL) is a wholesale supplier for plumbing equipment to  retail  businesses  and  professionals.
  <br>Currently,  the  company  uses  an  external Business Management service to store and retrieve data for all transactions,
  called MYOB (Mind Your Own Business). Transactions include: <br>

  <br>Placing orders
  <br>Restocking inventory
  <br>Producing invoices
  Tracking client activity.
</p>
    <p style="color: blue;">They wish to have their own service to store their data and carry out these transactions. <br> This project was built
    using Java and Sprint Boot as well as Vue.js</p>
  </div> 

  <div>
    <img src="@/assets/projects/um.png" width="1000" height="500"/>
  </div>
  </aos-vue>

  <aos-vue animation="fade-right" :delay="50">
  <div>
    <img src="@/assets/projects/game_level1.png" width="1000" height="500"/>
  </div>
  </aos-vue>

  <aos-vue animation="fade-left" :delay="50">
  <div>
    <img src="@/assets/projects/game_ending.png" width="1000" height="500"/>
  </div>
  </aos-vue>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
export default {
  name: "projectPage",
}
</script>

<style scoped>

img {
  box-shadow: 4px 4px 15px 1px black;
}
</style>