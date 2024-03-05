<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">產品介紹</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.pId">
                <!-- 
                  v-for：vue的迴圈 
                  每一筆資料用item代表，也可以取名為abc
                  key：唯一值，這邊設id為唯一值
                  @click：on-click的意思
                -->
                <a
                  href="#"
                  :class="pId == item.pId ? 'active' : ''"
                  @click="getProduct(item.pId, item.pTitle, item.pPic)"
                  >{{ item.pTitle }}</a
                >
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <h3 class="sub-title">{{ testTitle }}</h3>
          <img :src="url + 'images/product/' + testPic" />
          <!--img-wrap-->
        </div>
        <!--col-->
      </div>
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Product from "@/service/Product";

export default {
  name: "product",
  // 所有與網頁互動或要將資料呈現在網頁中，都要寫在data()中，data()名稱不可改
  data() {
    return {
      dataList: [],
      testId: "",
      testTitle: "",
      testPic: "",
      url: this.$url,
    };
  },

  // mounted():當網頁都載入時，要啟動或執行的事項，可寫在這裡
  mounted() {
    this.getList();
  },

  // methods:所有要執行的function都寫在這裡
  methods: {
    //進網頁後的畫面
    async getList() {
      // 這裡的Product是「import Product from "";」的Product
      const res = await axios.get(this.$base + Product.getList);

      //進網頁後的預設畫面(尚未click)
      if (res.status == 200) {
        // 成功的時候才寫入資料
        this.dataList = res.data;
        this.testId = res.data[0].pId;
        this.testTitle = res.data[0].pTitle;
        this.testPic = res.data[0].pPic;
      }
    },

    // @click="getProduct(item.pId, item.pTitle, item.pPic)"
    // 注意：不是用名稱對應，而是對應位置!!!
    getProduct(id, title, pic) {
      if (id != "") {
        this.testId = id;
        this.testTitle = title;
        this.testPic = pic;
      }
    },
  },
};
</script>
