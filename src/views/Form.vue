<template>
    <div class="mt-5">
            <h1> Formulario </h1>
        <form action="">
            <b-col md="6">
            <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
            <p> Minimo 3 caracteres</p>
            <p> Texto: {{texto}}</p>
            </b-col>

            <b-col md="6">
                <b-form-select v-model="Selected" :options="options"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ Selected }}</strong></div>
            </b-col>
        </form>

    </div>

</template>
<script>
export default {
    name: 'Form',
    data(){
        return{
            texto:'',
            Selected : null,
            options:[
                {value: null, text: 'Seleccionar un animal'},
                {value: 'Perro', text: 'Cachorro'},
                {value: 'Gato', text: 'Miau'},
                {value: 'Delfin', text: 'Hiii'},
                {value: 'Sapo', text: 'Guarap'},
                
            ]

        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }

    }
    
}
</script>