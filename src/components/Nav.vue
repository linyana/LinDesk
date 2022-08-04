<script setup>
// css
import css from "../style/responsive/Nav/nav.css";
import theme from "../style/theme/dark.css";
</script>

<template>
    <div id="Nav">
        <div class="menu">
            <div class="logo"></div>
            <div class="menu_line">
                <img src="../assets/images/nav/1.png" alt />
                <div class="menu_line_text">搜索</div>
            </div>
            <div class="menu_line">
                <img src="../assets/images/nav/4.png" alt />
                <div class="menu_line_text">音乐</div>
            </div>
            <div class="menu_line">
                <img src="../assets/images/nav/3.png" alt />
                <div class="menu_line_text">视频</div>
            </div>
            <div class="menu_line">
                <img src="../assets/images/nav/2.png" alt />
                <div class="menu_line_text">友链</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
#Nav {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #2d3647;
}

.logo {
    margin-left: 15%;
    width: 70%;
    height: 100px;
    background-image: url(../assets/images/logo.png);
    background-size: 100% 100%;
    margin-bottom: 30px;
}

.menu {
    padding-top: 30px;
}

.menu_line {
    cursor: pointer;
    position: relative;
    height: 60px;
    margin: 10px 20px;
    border-radius: 20px;
}

.menu_line:hover {
    background-color: #292e38;
}

img {
    position: absolute;
    left: 40px;
    top: 17px;
    width: 26px;
}

.menu_line_text {
    color: rgb(184, 184, 184, 0.5);
    position: absolute;
    left: 90px;
    line-height: 60px;
    font-size: 25px;
}
</style>