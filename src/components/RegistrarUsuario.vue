<template>
    <div class="registro_usuario">
        <div class="contenido_registro_usuario">
            <form class="formulario" v-on:submit.prevent="registroUsuario">
                <input type="text" v-model="usuario.nombre" placeholder="Nombre"><br>
                <input type="text" v-model="usuario.apellido" placeholder="Apellido"><br>
                <input type="text" v-model="usuario.cedula" placeholder="Cedula"><br>
                <input type="text" v-model="usuario.direccion" placeholder="Direccion"><br>
                <input type="text" v-model="usuario.telefono" placeholder="Telefono"><br>
                <input type="text" v-model="usuario.correo" placeholder="Correo"><br>
                <input type="text" v-model="usuario.user_name" placeholder="Username"><br>
                <input type="password" v-model="usuario.password" placeholder="Password"><br>
                <select v-model="usuario.id_rol" class="selector_rol" placeholder="Seleccione el rol del Usuario...">
                    <option value="1">Administrador</option>
                    <option value="2">Auxiliar</option>
                    <option value="3">Paciente</option>
                    <option value="4">Enfermero</option>
                    <option value="5">Familiar</option>
                    <option value="6">Medico</option>
                </select><br><br>
                <button type="submit">Registrarse</button>
            </form>
            
        </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    name: 'registrarUsuario',

    data: function () {
        return {
            usuario: {
                nombre: "",
                apellido: "",
                cedula: "",
                direccion: "",
                telefono: "",
                correo: "",
                user_name: "",
                password: ""
            }
        }
    },

    methods: {
        registroUsuario: function (event) {
            const url = "http://127.0.0.1:8000/user/";
            axios.post(url, this.usuario)
                .then((result) => {
                    alert("Registro Exitoso: " + result.status);
                    event.target.reset();
                })
                .catch((error) => {
                    alert("ERROR: Fallo en el registro: " + error);
                });
        }
    },

    created: function () {
    }
}
</script>


<style>
body {
    margin: 0 0 0 0;
}

.registro_usuario {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenido_registro_usuario {
    border: 3px solid #283747;
    padding: 10px;
    border-radius: 20px;
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
}

.formulario {
    width: 60%;
}


.contenido_registro_usuario button {
    width: 100%;
    color: #E5E7E9;
    background: #2B63A0;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
}

.contenido_registro_usuario button:hover {
    color: white;
    border: 3px solid #E5E7E9;
}

.contenido_registro_usuario input,
.selector_rol {
    width: 100%;
}
</style>