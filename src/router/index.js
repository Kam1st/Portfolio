import {createRouter, createWebHistory} from "vue-router"
import mainPage from "@/components/mainPage";
import skillsPage from "@/components/skillsPage";
import contactPage from "@/components/contactPage";
import educationPage from "@/components/educationPage";
import projectPage from "@/components/projectPage";
import extracurPage from "@/components/extracurPage";

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
        path: "/contact",
        name: "Contact",
        component: contactPage
    },
    {
        path: "/education",
        name: "Education",
        component: educationPage
    },
    {
        path: "/projects",
        name: "Projects",
        component: projectPage
    },
    {
        path: "/extracurriculars",
        name: "Extracurriculars",
        component: extracurPage
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;