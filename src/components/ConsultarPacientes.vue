<template>
    <!--<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />-->
    <div class="derecha_3">
        <div class="marco_3">
            <form class="forma_3" v-on:submit.prevent="agregarlista">
                <div class="boton_lateral_3">
                    <div class="boton_consultar_pacientes_registrado">
                        <button type="submit">Consultar</button>
                    </div>
                </div>
            </form>
            <div class="consulta_registro">
                <table>
                    <tr>
                        <th><strong>Nombre</strong></th>
                        <th><strong>Apellido</strong></th>
                        <th><strong>Cedula</strong></th>
                        <th><strong>Direccion</strong></th>
                        <th><strong>Correo</strong></th>
                        <th><strong>Telefono</strong></th>
                        <th><strong>User Name</strong></th>
                        <th><strong>Fecha de creación</strong></th>
                        <th><strong>Estado</strong></th>
                        <th><strong>Rol</strong></th>
                    </tr>

                    <tr v-for="item in lista">
                        <td v-text="item.nombre"></td>
                        <td v-text="item.apellido"></td>
                        <td v-text="item.cedula"></td>
                        <td v-text="item.direccion"></td>
                        <td v-text="item.correo"></td>
                        <td v-text="item.telefono"></td>
                        <td v-text="item.user_name"></td>
                        <td v-text="item.fecha_registro"></td>
                        <td v-text="item.activo"></td>
                        <td v-text="item.id_rol"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'consultarPacientes',
    data: function () {
        return {
            lista: [{
                cedula: "",
                user_name: "",
                nombre: "",
                apellido: "",
                direccion: "",
                telefono: "",
                correo: "",
                fecha_registro: "",
                activo: "",
                id_rol: "",
            }],
        }
    },
    methods: {
        agregarlista: function () {
            const url = "http://127.0.0.1:8000/pacientes/";
            axios.get(url).then((result) => {
                this.lista = result.data;
            })
        },
        Link_Consultar_Paciente: function () {
            this.$router.push('/user/consultapaciente')
        },
    }
}
</script>


<style>
body {
    margin: 0 0 0 0;
    padding: 0;
}

.derecha_3 {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marco_3 {
    border: 3px solid #283747;
    padding: 10px;
    border-radius: 20px;
    width: 70%;
    height: auto;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.marco_3 button {
    width: 800px;
    height: 30px;
    border: 1px solid #283747;
    color: #E5E7E9;
    border-radius: 3px;
    background: #2B63A0;
}

.marco_3 button:hover {
    border: 3px solid white;
    background: #2B63A0;

}

.consulta_registro {
    height: auto;
    width: 810px;
    margin: 5px 5px;
}

.consulta_registro table {
    height: auto;
    width: 800px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border: 1px solid black;
    border-spacing: 0;
}

.consulta_registro table td {
    border: 1px solid black;
}

.consulta_registro table th {
    border: 1px solid black;
}
</style>