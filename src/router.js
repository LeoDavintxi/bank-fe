import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import RegistrarUsuario from './components/RegistrarUsuario.vue'
import Account from './components/Account.vue'
import ConsultarUnPaciente from './components/ConsultarUnPaciente.vue'
import ConsultarPacientes from './components/ConsultarPacientes.vue'
import EditarInfoPaciente from './components/EditarInfoPaciente.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/user/registrarusuario',
        name: "registrarUsuario",
        component: RegistrarUsuario
    },
    {
        path: '/user/consultarunpaciente',
        name: "consultarUnPaciente",
        component: ConsultarUnPaciente
    },
    {
        path: '/user/consultarpacientes',
        name: "consultarPacientes",
        component: ConsultarPacientes
    },
    {
        path: '/user/editarInfoPaciente',
        name: "editarInfoPaciente",
        component: EditarInfoPaciente
    },
    {
        path: '/user/account',
        name: "account",
        component: Account
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;