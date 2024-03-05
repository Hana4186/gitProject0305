<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">中獎專區</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.id">
                <!-- 
                  v-for：vue的迴圈 
                  每一筆資料用item代表，也可以取名為abc
                  key：唯一值，這邊設id為唯一值
                  @click：on-click的意思
                -->
                <a
                  href="#"
                  :class="id == item.id ? 'active' : ''"
                  @click="getPrize(item.id, item.num, item.content, item.pic)"
                  >{{ item.title }}</a
                >
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <h3 class="sub-title">{{ content }}，共{{ num }}名</h3>
          <img :src="url + 'images/prize/' + pic" alt="pic" />
          <!--w-100-->

          <!-- 文字編輯器 start-->
          <div class="editor_box">
            <div class="table-responsive">
              <div id="showMsg"></div>
            </div>
          </div>
          <!-- 文字編輯器 end-->
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Prize from "@/service/Prize";

//所有要呈現在網頁的東西都要寫在export default{}中
export default {
  name: "prize",
  // 所有與網頁互動或要將資料呈現在網頁中，都要寫在data()中，data()名稱不可改
  data() {
    return {
      dataList: [],
      id: "",
      content: "",
      photo: "",
      num: "",
      url: this.$url,
      // 這個變數名稱可自己設定，不一定要使用dataList
      // []:因為從後端取回的資料可能有多筆，所以要用陣列方式儲存(1筆以上的資料都用陣列)
      // datalist: "", (呈上，確定資料只有1筆，可改寫為這個)
      //url: this.$url,圖檔路徑
    };
  },

  // mounted():當網頁都載入時，要啟動或執行的事項，可寫在這裡
  mounted() {
    this.getList();
    //呼叫methods中的getList()方法
    // this:這個物件，這裡指的是methods中的function名稱
  },

  // methods:所有要執行的function都寫在這裡
  methods: {
    // async與await搭配，非同步到後端取資料(效能較高，不用逐行而是分支出去同時執行)--若有分支取不到資料，也不會影響網頁載入
    async getList() {
      const res = await axios.get(this.$base + Prize.getList);
      // 這裡的Prize是「import Prize from "";」的Prize
      // 將自後端取回的資料暫時存放在res中(名稱可自訂，不一定要res)
      //後端取回的資料會寫在data中
      //取回資料後，存回dataList,this.dataList為data()中的dataList
      // 預知道res是否成功要看狀態碼，狀態碼200:表示呼叫成功
      //後端的路徑不用加api(給別人呼叫的)但前端要
      //$base是main.js裡面的變數
      //   console.log(res);
      if (res.status == 200) {
        // 成功的時候才寫入資料
        this.dataList = res.data;
        this.id = res.data[0].id;
        this.content = res.data[0].content;
        this.num = res.data[0].num;
        this.pic = res.data[0].pic;
      }
    },

    // @click="getPrize(item.id, item.num, item.content, item.pic)"
    // 注意：不是用名稱對應，而是對應位置!!!(案例參照Product.vue)
    getPrize(id, num, content, pic) {
      if (id != "") {
        this.id = id;
        this.num = num;
        this.content = content;
        this.pic = pic;

        /*
        方法2:從dataList中尋找所選取的資料(用id來尋找)
        ids:所選取的id(也就是選取的那個獎項)
        如果dataList中發現id與所選取的id相同，將獎項資料存在prize變數中
        箭頭函式(數)：例如，function test() ==> test() ==>()

        getPrize(ids, num, content, pic) {
        if (id != "") {
        this.id = ids;
        this.num = num;
        this.content = content;
        this.pic = pic;

        const prize = this.dataList.find(({id})=>id ==ids);
        this.id = prize.id;
        this.num = prize.num;
        this.content = prize.content;
        this.pic = prize.pic;
        */
      }
    },
  },
};
</script>
