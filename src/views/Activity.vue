<template>
  <article class="gw pos-r">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-4">
      <h2 class="title text-center">活動說明</h2>
      <div class="row justify-content-center mb-5 pb-4">
        <div class="col-xxl-10 col-xl-11 col-lg-12 col-xs-12 pt-4">
          <ul class="custom-list">
            <li v-for="item in act" :key="item.id">
              {{ item.title }}：{{ item.content }}
              <!-- 這邊的v-for="item in act"是下面data的act: [], -->
            </li>
          </ul>
        </div>
        <!--col-->
      </div>
      <!--row-->
      <h2 class="title text-center mb-0 pt-lg-5">獎項介紹</h2>
      <div class="row justify-content-center mb-5 pb-4">
        <div class="col-xl-11 col-lg-12 col-xs-12 pt-4">
          <div
            class="row justify-content-lg-center justify-content-xs-center filter-shadow mx-0"
          >
            <div
              v-for="item in prize"
              :key="item.id"
              class="col-md-4 col-sm-6 col-xs-6 mb-4 img-wrap px-xl-4 px-xs-2"
            >
              <!-- v-if 判斷 -->
              <img
                v-if="item.pic != null"
                :src="url + 'images/prize/' + item.pic"
                alt=""
              />
            </div>
          </div>

          <div class="row justify-content-center mb-5 pb-4 mx-0">
            <div class="col-xxl-8 col-xl-9 col-md-10 col-xs-12 pt-4">
              <ul class="custom-list">
                <li v-for="item in prize" :key="item.id">
                  {{ item.title }}：{{ item.content }}，共<small>{{
                    item.num
                  }}</small
                  >名
                </li>
              </ul>
              <p class="content-text"></p>
            </div>
          </div>
          <!--row-->
        </div>
        <!--col-->
      </div>
      <!--row-->

      <h2 class="title text-center mb-0">活動方式</h2>
      <div class="row justify-content-center mb-5 pb-4">
        <div class="col-xxl-10 col-xl-11 col-lg-12 col-xs-12 pt-4">
          <div class="row justify-content-lg-center justify-content-xs-center">
            <div class="col-lg-12 d-lg-inline-block d-xs-none img-wrap">
              <img src="images/pogre.png" alt="" />
            </div>
            <div
              class="col-lg-0 col-md-9 col-sm-10 col-xs-12 d-lg-none d-xs-inline-block img-wrap"
            >
              <img src="images/pogre-mb.png" alt="" />
            </div>
          </div>
          <!--row-->

          <div class="row justify-content-center mb-5 pb-4 mx-0">
            <div
              class="col-xs-12 pt-5 px-xs-2"
              v-for="(item, index) in layer1"
              :key="index"
            >
              <h2 class="sub-title mb-2">
                <span class="text-danger fw-bold">Step{{ index + 1 }}</span>
                {{ item.title }}
              </h2>
              <ul class="custom-list">
                <span v-for="(data, index2) in layer" :key="index2">
                  <li v-if="data.id == item.id">
                    {{ data.content }}
                  </li>
                </span>
              </ul>
            </div>

            <!--col-->
          </div>
          <!--row-->
        </div>
        <!--col-->
      </div>
      <!--row-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Prize from "@/service/Prize";
import Act from "@/service/Activity";

//所有要輸出到網頁就要寫在export default裡面
export default {
  name: "activity",
  data() {
    return {
      //活動說明
      act: [],
      //獎項
      prize: [],
      //活動方式
      layer: [],
      //活動方式第一層資料
      layer1: [],
      //後端圖檔路徑
      url: this.$url,
    };
  },
  mounted() {
    //取得活動說明
    this.getAct();
    //取得獎項
    this.getPrize();
    //取得活動方式
    this.getLayer();
  },
  methods: {
    //取得獎項
    async getPrize() {
      // 這裡的Prize是「import Prize from "";」的Prize
      const res = await axios.get(this.$base + Prize.getList);
      if (res.status == 200) {
        this.prize = res.data;
        this.id = res.data[0].id;
        this.content = res.data[0].content;
        this.pic = res.data[0].pic;
      }
    },

    async getLayer() {
      const res = await axios.get(this.$base + Act.getLayer2);
      if (res.status == 200) {
        //這裡的.status狀態碼 F12console看的到.status會等於200
        this.layer = res.data;
        //由後端取回來的每一筆資料用item代表
        this.layer.forEach((item) => {
          //在layer1陣列中搜尋(findIndex:搜尋結果的索引值)
          //若有搜尋到,findIndex會>=0；若搜尋不到,則<0
          if (this.layer1.findIndex((x) => x.id === item.id) < 0) {
            //當layer1[]中沒有該筆資料時，加入layer1[]中
            this.layer1.push({
              id: item.id,
              title: item.title,
            });
          }
        });
      }
    },

    //取得活動說明
    async getAct() {
      // 這裡的Act是「import Act from "";」的Act
      const res = await axios.get(this.$base + Act.getList);
      if (res.status == 200) {
        this.act = res.data;
      }
    },

    //取得活動方式
    async getLayer1() {
      // 這裡的Prize是「import Act from "";」的Act
      const res = await axios.get(this.$base + Act.getLayer1);
      if (res.status == 200) {
        this.layer1 = res.data;
      }
    },
  },
};
</script>
