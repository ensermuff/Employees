<template>
  <div class="list row" style="margin: auto">
    <h1>Employee Details</h1>

    <table className="table table-hover">
      <thead>
      <tr>
        <td>PK</td>
        <td>Name</td>
        <td>Date of Birth</td>
        <td>Phone Number</td>
        <td>Address</td>
      </tr>
      </thead>

      <tbody>
      <tr>
<!--      <tr v-for="employee in currentEmployee" v-bind:key="currentEmployee.PK">-->
        <td>{{ currentEmployee.PK }}</td>
        <td>{{ currentEmployee.name }}</td>
        <td>{{ currentEmployee.dob }}</td>
        <td>{{ currentEmployee.phoneNumber }}</td>
        <td>{{ currentEmployee.address }}</td>
        <td>
          <router-link to="{name: 'Details', params: { PK: ${{currentEmployee.PK}}}}" className="btn btn-primary" style="background: red"
                       @click="deleteEmployee">Delete
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <!--        <td><router-link to="`/employee/${{employee.PK}}`" class="btn btn-warning">Delete</router-link> </td>-->
  <div v-if="currentEmployee" class="edit-form" style="margin-top: 100px; margin-bottom: 100px">
    <h4>Update Employee</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required
               v-model="currentEmployee.name"
        />
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input type="text" class="form-control" id="dob" required
               v-model="currentEmployee.dob"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input type="text" class="form-control" id="phoneNumber" required
               v-model="currentEmployee.phoneNumber"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" required
               v-model="currentEmployee.address"
        />
      </div>
    </form>
    <br>

    <button type="submit" class="btn btn-primary" style="background: green"
            @click="updateEmployee"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Employee...</p>
  </div>
</template>
<script>
import EmployeeDataService from "../../services/EmployeeDataService";
export default {
  name: "EmployeeDetail",
  data() {
    return {
      currentEmployee: [],
      message: ''
    };
  },
  methods: {
    // retrieveEmployees() {
    //   const vm = this;
    //   EmployeeDataService.getAll()
    //       .then(response => {
    //         vm.currentEmployee = response.data.currentEmployee;
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    // },
    getEmployee(id) {
      const vm = this
      EmployeeDataService.get(id)
          .then(response => {
            vm.currentEmployee = response.data.employees[0];
            // console.log(vm.currentEmployee.employees[0].PK)
            console.log(vm.currentEmployee.PK)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteEmployee() {
      EmployeeDataService.delete(this.currentEmployee.PK)
          .then(response => {
            console.log(response.data);
            this.currentEmployee = null
            this.$router.push({ name: "ListEmployees" });
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateEmployee() {
      EmployeeDataService.update(this.currentEmployee.PK, this.currentEmployee)
          .then(response => {
            console.log(response.data);
            this.message = 'The employee was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    console.log(this.$route.params.id)
    // this.retrieveEmployees();
    this.getEmployee(this.$route.params.id);
    console.log('Components mounted.')

  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>