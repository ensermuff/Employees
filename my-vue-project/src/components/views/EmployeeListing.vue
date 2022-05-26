<template>
  <div class="list row">
    <h1>Employees</h1>

    <table className="table table-hover">
      <thead>
      <tr>
        <td>PK</td>
        <td>Name</td>
<!--        <td>Date of Birth</td>-->
<!--        <td>Phone Number</td>-->
<!--        <td>Address</td>-->
      </tr>
      </thead>

      <tbody>
      <tr v-for="employee in employees" v-bind:key="employee.PK">
        <td>{{ employee.PK }}</td>
        <td>{{ employee.name }}</td>
<!--        <td>{{ employee.dob }}</td>-->
<!--        <td>{{ employee.phoneNumber }}</td>-->
<!--        <td>{{ employee.address }}</td>-->
        <td>
          <router-link to="{name: 'Details', params: { PK: employee.PK}}" className="btn btn-primary">Details
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import EmployeeDataService from "../../services/EmployeeDataService";

export default {
  name: "ListEmployees",
  data() {
    return {
      employees: []
    }
  },
  methods: {
    retrieveEmployees() {
      const vm = this;
      EmployeeDataService.getAll()
          .then(response => {
            vm.employees = response.data.employees;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  created() {
    this.retrieveEmployees()
  },
  mounted() {
    console.log('Component mounted.')
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
list row {
  align-content: center;
}
</style>