import {createRouter, createWebHistory} from "vue-router"
import mainPage from "@/components/mainPage";
import skillsPage from "@/components/skillsPage";
import educationPage from "@/components/educationPage";
const routes = [
    {
        path: "/",
        name: "Main",
        component: mainPage
    },
    {
        path: "/skills",
        name: "Skills",
        component: skillsPage
    },
    {
        path: "/education",
        name: "Education",
        component: educationPage
    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;