<template>
  <div class="list row">
    <h1>Employee</h1>

    <table class="table table-hover">
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
      <tr v-for="employee in currentEmployee" v-bind:key="employee.PK">
        <td>{{ employee.PK }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.dob }}</td>
        <td>{{ employee.phoneNumber }}</td>
        <td>{{ employee.address }}</td>
<!--        <td><router-link to="`/employee/${{employee.PK}}`" class="btn btn-warning">Delete</router-link> </td>-->
      </tr>
      </tbody>
    </table>
  </div>
  <div v-if="currentEmployee" class="edit-form" style="margin-top: 100px">
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
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentEmployee.published ? "Published" : "Pending" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
            v-if="currentEmployee.published"
            @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2" style="background: cornflowerblue"
            @click="updatePublished(true)"
    >
      Publish
    </button>
    <button class="badge badge-danger mr-2" style="background: red"
            @click="deleteEmployee"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success" style="background: lawngreen"
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
      currentEmployee: null,
      message: ''
    };
  },
  methods: {
    getEmployee(id) {
      EmployeeDataService.get(id)
          .then(response => {
            this.currentEmployee = response.data.employees;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    updatePublished(status) {
      var data = {
        PK: this.currentEmployee.PK,
        name: this.currentEmployee.name,
        dob: this.currentEmployee.dob,
        phoneNumber: this.currentEmployee.phoneNumber,
        address: this.currentEmployee.address,
        published: status
      };
      EmployeeDataService.update(this.currentEmployee.id, data)
          .then(response => {
            console.log(response.data);
            this.currentEmployee.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateEmployee() {
      EmployeeDataService.update(this.currentEmployee.PK, this.currentEmployee)
          .then(response => {
            console.log(response.data.currentEmployee);
            this.message = 'The tutorial was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteEmployee() {
      EmployeeDataService.delete(this.currentEmployee.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "tutorials" });
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getEmployee(this.$route.params.PK);
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