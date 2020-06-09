<template>
    <div>
    <h1> Galeria de fotos </h1>

    <router-link :to="{ name: 'Fotos', params: {id : item} }" 
    v-for="(item, index) of fotosArray" :key="index"
    >
        <button> foto {{item}}</button>
    </router-link>
    <Foto  />
    <button @click="Home"> Home </button>
    <button @click="Regresar"> Regresar </button>
    <button @click="Siguiente"> Siguiente </button>
    </div>
</template>

<script>
import  Foto  from "@/components/Fotografia.vue"

export default {
    components:{
        Foto
    },
    data(){
        return{
            fotosArray:[1,2,3]
        }
    },
    methods:{
        Home(){
            this.$router.push('/')
        },
        Regresar(){
            this.$router.go(-1)
        },
        Siguiente(){
            this.$router.go(+1)
        }
    }
}
</script>