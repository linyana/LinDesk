<script setup>
// components
import Nav from "./components/Nav.vue";
import Search from "./pages/Search.vue";

// css
import css from "./style/responsive/App/app.css";
import theme from "./style/theme/dark.css";
</script>


<template>
    <div id="App">
        <div class="nav">
            <Nav></Nav>
        </div>
        <div class="page">
            <Search />
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
/* 标准pc */
#App {
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 30px;
    overflow: hidden;
}

.nav {
    position: absolute;
    left: 0;
    top: 0;
}

.page {
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 230px);
    height: 100%;
}
</style>