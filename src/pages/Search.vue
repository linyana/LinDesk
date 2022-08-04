<template>
    <div id="Search" @click="CloseCard">
        <br />
        <div class="input">
            <input type="text" @keydown.enter="Search()" v-model="search_content" />
        </div>
        <div class="select_boxes">
            <div class="select_box" :style="height1">
                <div class="select_box_input" @click.stop="OpenCard('height1','open')">
                    <div class="results">
                        <img :src="getImageUrl(img1)" class="select_box_card_img" />
                        <div class="select_box_card_text">{{text1}}</div>
                    </div>
                </div>
                <div class="select_box_cards">
                    <div
                        class="select_box_card"
                        v-for="item in options1"
                        :key="item.value"
                        @click="GetValue1(item)"
                    >
                        <img :src="getImageUrl(item.img)" class="select_box_card_img" />
                        <div class="select_box_card_text">{{item.label}}</div>
                    </div>
                </div>
            </div>
            <div class="select_box" :style="height2">
                <div class="select_box_input" @click.stop="OpenCard('height2','open')">
                    <div class="results">
                        <img :src="getImageUrl(img2)" class="select_box_card_img" />
                        <div class="select_box_card_text">{{text2}}</div>
                    </div>
                </div>
                <div class="select_box_cards">
                    <div
                        class="select_box_card"
                        v-for="item in options2"
                        :key="item.value"
                        @click="GetValue2(item)"
                    >
                        <img :src="getImageUrl(item.img)" class="select_box_card_img" />
                        <div class="select_box_card_text">{{item.label}}</div>
                    </div>
                </div>
            </div>
            <div class="select_box" :style="height3">
                <div class="select_box_input" @click.stop="OpenCard('height3','open')">
                    <div class="results">
                        <div class="select_box_card_text">内容待定</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: "#Search",
    data() {
        return {
            target: "",
            search_content: "",
            value1: "https://www.baidu.com/s?wd=",
            value2: "chrome",
            value3: "https://www.baidu.com/s?wd=",
            height1: "height: 70px;",
            height2: "height: 70px;",
            height3: "height: 70px;",
            img1: "baidu.png",
            img2: "chrome.png",
            img3: "/src/assets/images/baidu.png",
            text1: "百度",
            text2: "chrome",
            text3: "百度",
            music: "",
            options1: [
                {
                    label: "百度",
                    value: "https://www.baidu.com/s?wd=",
                    img: "baidu.png",
                },
                {
                    label: "bilibili",
                    value: "https://search.bilibili.com/all?keyword=",
                    img: "bilibili.png",
                },
                {
                    label: "github",
                    value: "https://github.com/search?q=",
                    img: "github.png",
                },
            ],
            options2: [
                {
                    value: "edge",
                    label: "edge",
                    img: "edge.png",
                },
                {
                    value: "chrome",
                    label: "chrome",
                    img: "chrome.png",
                },
                {
                    value: "firefox",
                    label: "firefox",
                    logo: new URL(`../assets/svg/xxx.svg`, import.meta.url)
                        .href,
                    img: "firefox.png",
                },
            ],
            options3: [
                {
                    value: "https://www.baidu.com/s?wd=",
                    label: "百度",
                },
                {
                    value: "https://search.bilibili.com/all?keyword=",
                    label: "bilibili",
                },
                {
                    value: "https://github.com/search?q=",
                    label: "github",
                },
            ],
        };
    },
    watch: {
        search_content: {
            handler() {
                this.target = this.value1 + this.search_content;
            },
        },
    },
    methods: {
        getImageUrl(name) {
            return new URL(`/src/assets/images/${name}`, import.meta.url).href;
        },
        Search() {
            window.open(this.target);
            this.search_content = "";
        },
        CloseCard() {
            this.height1 = "height: 70px;";
            this.height2 = "height: 70px;";
            this.height3 = "height: 70px;";
        },
        // 拉开下拉框
        OpenCard(index, flag) {
            if (index === "height1") {
                this.height1 = "height: 220px";
            }
            if (index === "height2") {
                this.height2 = "height: 220px";
            }
            if (index === "height3") {
                this.height3 = "height: 220px";
            }
        },
        // select框一选中
        GetValue1(item) {
            this.value1 = item.value;
            this.img1 = item.img;
            this.text1 = item.label;
        },
        // select框二选中
        GetValue2(item) {
            this.value2 = item.value;
            this.img2 = item.img;
            this.text2 = item.label;
        },
    },
};
</script>

<style scoped>
#Search {
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;
}

.input {
    width: 600px;
    height: 40px;
    margin: 100px auto;
    margin-top: 150px;
}

input {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    outline: none;
    border: none;
    text-indent: 1em;
    background-color: rgba(218, 222, 230, 0.5);
    color: rgb(184, 184, 184);
    font-size: 19px;
}

select {
    margin: 20px;
    outline: none;
}

.search_background {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background-image: url(../assets/images/search_background.png);
    background-size: 100% 100%;
}

.select_boxes {
    width: 60%;
    margin: 100px auto;
    justify-content: space-between;
    display: flex;
}

.select_box {
    border-radius: 20px;
    width: 200px;
    height: 220px;
    background-color: #343943;
    transition: all 0.8s;
    overflow: hidden;
}

.select_box_input {
    width: 100%;
    height: 40px;
    margin-top: 15px;
}

.select_box_cards {
    margin-top: 10px;
}

.select_box_card {
    cursor: pointer;
    position: relative;
    width: 80%;
    margin-left: 10%;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
}

.select_box_card:hover {
    background-color: #2b3039;
}

.select_box_card_img {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 20px;
}

.select_box_card_text {
    line-height: 40px;
    color: rgb(184, 184, 184);
}

.results {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 80%;
    height: 100%;
    border-radius: 15px;
    outline: none;
    border: none;
    background-color: rgba(218, 222, 230, 0.5);
    color: rgb(184, 184, 184);
    font-size: 16px;
    background-color: #2b3039;
}
</style>