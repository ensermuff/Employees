import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/views/Home.vue'
import AddEmployeeComponent from '../components/views/AddEmployee.vue'
import EmployeeListingComponent from "../components/views/EmployeeListing.vue"
import EmployeeDetailComponent from '../components/views/EmployeeDetail.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeComponent
        },
        {
            path: '/api/employee/add',
            name: 'Add Employee',
            component: AddEmployeeComponent
        },
        {
            path: '/api/employee',
            name: 'Employee Listing',
            component: EmployeeListingComponent
        },
        {
            path: '/api/employee/:id',
            name: 'Employee detail',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: EmployeeDetailComponent
        }
    ]
})

export default router
