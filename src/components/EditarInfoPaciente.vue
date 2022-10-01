<template>
    <div class="consultar_paciente">
        <div class="contenido_consultar_paciente">
            <h3>Editar Informacion Paciente</h3>
            <form class="formulario_consultar_paciente" v-on:submit.prevent="consultarUnPaciente">
                <input id="campoId" v-model="registro.id" type="text" placeholder="ID de Usuario">
                <button type="submit">Consultar</button>
            </form><br><br>
            <label>Nombre: </label><input type="text" v-model="registro.nombre"><br>
            <label>Apellido: </label><input type="text" v-model="registro.apellido"><br>
            <label>Telefono: </label><input type="text" v-model="registro.telefono"><br>
            <label>Direccion: </label><input type="text" v-model="registro.direccion"><br>
            <label>Correo: </label><input type="text" v-model="registro.correo"><br>
            <label>Nombre Usuario: </label><input type="text" v-model="registro.user_name"><br>
            <label>Contraseña: </label><input type="password" v-model="registro.password"><br>
            
            <input id="botonEditar" class="boton-editar" type="button" value="Editar" v-on:click="editarPaciente"
                disabled>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'editarInfoPaciente',
    data: function () {
        return {
            registro: {
                id: "",
                nombre: "",
                apellido: "",
                cedula: this.id,
                telefono: "",
                direccion: "",
                correo: "",
                user_name: "",
                id_rol: "3",
                password: "",
            },
        }
    },

    methods: {
        editarPaciente: function () {
            const url = "http://127.0.0.1:8000/user/" + this.registro.id + "/";
            axios.put(url, this.registro)
                .then((result) => {
                    alert("Edicion exitosa: " + result.status);
                    this.resetForm();

                })
                .catch((error) => {
                    alert("ERROR: Fallo la actualiacion del registro: " + error);
                });
        },

        consultarUnPaciente: function () {
            const url = "http://127.0.0.1:8000/paciente/" + this.registro.id + "/";
            axios.get(url)
                .then((result) => {
                    this.registro.id_rol = result.data.id_rol;
                    this.registro.nombre = result.data.nombre;
                    this.registro.apellido = result.data.apellido;
                    this.registro.cedula = result.data.cedula;
                    this.registro.telefono = result.data.telefono;
                    this.registro.direccion = result.data.direccion;
                    this.registro.correo = result.data.correo;
                    this.registro.user_name = result.data.user_name;
                    this.registro.password = result.data.password;
                    document.getElementById("botonEditar").disabled = false;
                    document.getElementById("campoId").disabled = true;
                })
                .catch((error) => {
                    alert("ERROR: Paciente no registrado " + error);
                    this.resetForm();
                });
        },

        resetForm: function () {
            this.registro.id = "";
            this.registro.id_rol = "";
            this.registro.nombre = "";
            this.registro.apellido = "";
            this.registro.cedula = "";
            this.registro.telefono = "";
            this.registro.direccion = "";
            this.registro.correo = "";
            this.registro.create_date = "";
            this.registro.user_name = "";
            this.registro.password = "";
            document.getElementById("botonEditar").disabled = true;
            document.getElementById("campoId").disabled = false;
        },


    }
}
</script>


<style>
body {
    margin: 0 0 0 0;
}

.consultar_paciente {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenido_consultar_paciente {
    border: 3px solid #283747;
    border-radius: 20px;
    width: 40%;
    height: auto;
    padding: 10px;
    background: white;
}

.formulario_consultar_paciente {
    width: 100%;
    display: flex;
}

.contenido_consultar_paciente label {
    display: inline-block;
    width: 38%;
}

.contenido_consultar_paciente button {
    width: 50%;
    height: 30px;
    color: #E5E7E9;
    background: #2B63A0;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 0px 0px;
}

.contenido_consultar_paciente button:hover {
    color: white;
    border: 3px solid #E5E7E9;
}

.contenido_consultar_paciente input[type=button] {
    position: relative;
    margin: 10px;
    width: 95%;
    height: 30px;
    background: #2B63A0;
    color: #E5E7E9;
    border: 1px solid white;

}

.contenido_consultar_paciente input[type=button]:hover {
    border: 3px solid #E5E7E9;
    color: white;
}

.contenido_consultar_paciente input[type=text] {
    width: 60%;
}
</style>