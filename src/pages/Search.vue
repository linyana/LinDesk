<template>
    <div id="Search">
        <div class="search">
            <input type="text" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
    margin: auto;
    margin-top: 300px;
    width: 50%;
    max-width: 600px;
    height: 30px;
    background-color: var(--float-backgroundColor);
    box-shadow: 3px 3px 10px #00000050;
    backdrop-filter: blur(20px);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    transition: 0.25s;
    z-index: 5;
}

.search input {
    width: 100%;
    border: none;
    background-color: transparent;
    border-radius: 6px;
    height: 30px;
    font-size: 19px;
    font-weight: 700;
    outline: 0px;
    color: var(--color);
    line-height: 30px;
    text-align: center;
}
</style>