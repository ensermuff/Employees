<template>
  <h1 style="text-align: center; margin-top: 50px; margin-bottom: 50px">New Employee</h1>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="employee.name"
            name="name"
        />
      </div>
      <div class="form-group">
        <label for="dob">Date of birth</label>
        <input
            class="form-control"
            id="dob"
            required
            v-model="employee.dob"
            name="dob"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone number</label>
        <input
            class="form-control"
            id="phoneNumber"
            required
            v-model="employee.phoneNumber"
            name="phoneNumber"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
            class="form-control"
            id="address"
            required
            v-model="employee.address"
            name="address"
        />
      </div>
      <br>
      <button @click="saveEmployee" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newEmployee">Add</button>
    </div>
  </div>
</template>
<script>
import EmployeeDataService from "../../services/EmployeeDataService";
export default {
  name: "add-employee",
  data() {
    return {
      employee: {
        PK: "",
        name: "",
        dob: "",
        phoneNumber: "",
        address: ""
      },
      submitted: false
    }
  },
  methods: {
    saveEmployee() {
      var data = {
        name: this.employee.name,
        dob: this.employee.dob,
        phoneNumber: this.employee.phoneNumber,
        address: this.employee.address
      }
      EmployeeDataService.create(data)
          .then(response => {
            this.employee.id = response.data.employees.id
            console.log(response.data())
            this.submitted = true
          }).catch(e => {
             console.log(e)
          })
      alert("You created a new employee!")
    },
    newEmployee() {
      this.submitted = false
      this.employee = {}
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>