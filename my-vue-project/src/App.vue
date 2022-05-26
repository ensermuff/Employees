<template>
    <div id="app">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand" style="margin-left: 10px">Firaol's Employees </router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/api/employee" class="nav-link">Employee list</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/api/employee/:id" class="nav-link">Employee detail</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/api/employee/add" class="nav-link">Create a new employee</router-link>
          </li>
        </div>
      </nav>
    </div>
    <div class="container mt-3">
      <router-view />
    </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<!--<style scoped>-->
<!--@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');-->
<!--* {-->
<!--  box-sizing: border-box;-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--#login {-->
<!--  width: 500px;-->
<!--  border: 1px solid #CCCCCC;-->
<!--  background-color: #FFFFFF;-->
<!--  margin: auto;-->
<!--  margin-top: 200px;-->
<!--  padding: 20px;-->
<!--}-->
<!--/*h1{*/-->
<!--/*  text-align: center;*/-->
<!--/*}*/-->
<!--.nav > li,-->
<!--.nav > li > a {-->
<!--  display: inline-block;-->
<!--  zoom: 1;-->
<!--}-->

<!--.inline-items li {-->
<!--  margin-left: 0;-->
<!--  border-left: 1px ;-->
<!--  padding-left: 10px;-->
<!--  padding-right: 10px;-->
<!--}-->
<!--p{-->
<!--  font-weight: bold;-->
<!--}-->
<!--input{-->
<!--  text-align: center;-->
<!--}-->
<!--body {-->
<!--  font-family: 'Poppins', sans-serif;-->
<!--}-->
<!--.wrapper{-->
<!--  alignment: center;-->
<!--}-->
<!--.container {-->
<!--  max-width: 500px;-->
<!--  margin: 30px auto;-->
<!--  overflow: auto;-->
<!--  min-height: 300px;-->
<!--  border: 1px solid steelblue;-->
<!--  padding: 30px;-->
<!--  border-radius: 5px;-->
<!--  text-align: center;-->
<!--}-->

<!--.btn {-->
<!--  display: inline-block;-->
<!--  background: #000;-->
<!--  color: #fff;-->
<!--  border: none;-->
<!--  padding: 10px 20px;-->
<!--  margin: 5px;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  text-decoration: none;-->
<!--  font-size: 15px;-->
<!--  font-family: inherit;-->
<!--}-->
<!--.btn:focus {-->
<!--  outline: none;-->
<!--}-->
<!--.btn:active {-->
<!--  transform: scale(0.98);-->
<!--}-->
<!--.btn-block {-->
<!--  display: block;-->
<!--  width: 100%;-->
<!--}-->

<!--</style>-->
