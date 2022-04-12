<template>
    <header class="encabezado">
        <h1 class="titulo text-center" text-caption>{{texto}}</h1>
    </header>
</template>

<script>
export default {
    props:{
        texto: String
    }
}
</script>

<style scoped>
.titulo{
    color: #F6F6F6;
    letter-spacing: 2px;
}
.encabezado{
    background-color: #3E3E3E;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
    height: 70px;
}
</style>