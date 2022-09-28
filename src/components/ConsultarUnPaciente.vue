<template>
    <div class="consultar_paciente">
        <div class="contenido_consultar_paciente">
            <form class="formulario_consultar_paciente" v-on:submit.prevent="consultarUnPaciente">
                <input v-model="registro.id" type="text" placeholder="ID de Usuario">
                <button type="submit">Consultar</button>
            </form><br><br>
            <label>Nombre: </label><input type="text" v-model="registro.nombre"><br>
            <label>Apellido: </label><input type="text" v-model="registro.apellido"><br>
            <label>Direccion: </label><input type="text" v-model="registro.direccion"><br>
            <label>Correo: </label><input type="text" v-model="registro.correo"><br>
            <label>Nombre Usuario: </label><input type="text" v-model="registro.user_name"><br>
            <label>ID ROL: </label><input type="text" v-model="registro.id_rol"><br>
        </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    name: 'ConsultaPaciente',
    data: function () {
        return {
            registro: {
                id: "",
                nombre: "",
                apellido: "",
                direccion: "",
                correo: "",
                create_date: "",
                user_name: "",
                id_rol: "",
            },
            consulta_paciente: false,
        }
    },
    methods: {
        consultarUnPaciente: function () {
            const url = "http://127.0.0.1:8000/usuario/" + this.registro.id + "/";
            axios.get(url)
            .then((result) => {
                this.registro.id = "";
                this.registro.id_rol = result.data.id_rol;
                if (this.registro.id_rol == "2") {
                    this.registro.nombre = result.data.nombre;
                    this.registro.apellido = result.data.apellido;
                    this.registro.direccion = result.data.direccion;
                    this.registro.correo = result.data.correo;
                    this.registro.create_date = result.data.create_date;
                    this.registro.user_name = result.data.user_name;
                    this.paciente = true;
                } else {
                    this.registro.nombre = "";
                    this.registro.apellido = "";
                    this.registro.direccion = "";
                    this.registro.correo = "";
                    this.registro.create_date = "";
                    this.registro.id_rol = "";
                    this.registro.user_name = "";
                    this.paciente = false;
                    alert("ERROR: El ID ingresado no corresponde a un Paciente ");
                }
                this.consulta_paciente = true;
            })
                .catch((error) => {
                    alert("ERROR: Paciente no registrado " + error);
                });
        },
        Link_Consultar_Registrado: function () {
            this.$router.push('/user/consultaregistro')
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
    height: 45%;
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

.contenido_consultar_paciente input {
    width: 60%;

}
</style>