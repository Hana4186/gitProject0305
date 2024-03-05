<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-2">
      <h2 class="text-center title mb-5 mt-lg-5">活動Q&A</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 px-xl-3 mx-auto">
        <div class="w-100 accordion collapse-set mb-lg-5" id="accordion">
          <div class="accordion-item" v-for="item in dataList" :key="item.id">
            <!-- v-for="(item, index) in dataList" :key="index" 以索引的方式設定唯一值
            若修改，則下方的${item.id}要改成${index}
            -->
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${item.id}`"
                aria-expanded="false"
                :aria-controls="`collapse-${item.id}`"
              >
                Q{{ item.id }}.{{ item.title }}
                <!-- 改Q{{ index +1 }}.{{ item.title }} -->
                <!-- 索引值從0開始，所以 index + 1-->
              </button>
            </h2>
            <div
              :id="`collapse-${item.id}`"
              class="accordion-collapse collapse"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <ul class="custom-list">
                  <li v-html="item.content"></li>
                  <!-- 內容有html語法就要用v-html="" -->
                </ul>
              </div>
            </div>
          </div>
          <!--accordion-item-->
        </div>
        <!--#accordion-->
        <p class="text-center sm-title px-lg-0 px-xs-3">
          若您有任何疑問， 請直接來電至服務專線： 0800-000000，謝謝！<br />(服務時間：週一至週五，正常上班時間上午9:00至下午5:00)
        </p>
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Qa from "@/service/Qa";

export default {
  //所有要呈現在網頁的東西都要寫在export default{}中
  name: "Qa",
  // 所有與網頁互動或要將資料呈現在網頁中，都要寫在data()中，data()名稱不可改
  data() {
    return {
      dataList: [],
      // 這個變數名稱可自己設定，不一定要使用dataList
      // []:因為從後端取回的資料可能有多筆，所以要用陣列方式儲存(1筆以上的資料都用陣列)
      // datalist: "", (呈上，確定資料只有1筆，可改寫為這個)
    };
  },
  // mounted():當網頁都載入時，要啟動或執行的事項，可寫在這裡
  mounted() {
    this.getList(); //呼叫methods中的getList()方法
    // this:這個物件，這裡指的是methods中的function名稱
  },
  // methods:所有要執行的function都寫在這裡
  methods: {
    // async與await搭配，非同步到後端取資料(效能較高，不用逐行而是分支出去同時執行)--若有分支取不到資料，也不會影響網頁載入
    async getList() {
      const res = await axios("http://localhost:8000/api/" + Qa.getList);
      // 將自後端取回的資料暫時存放在res中(名稱可自訂，不一定要res)
      //後端取回的資料會寫在data中
      //取回資料後，存回dataList,this.dataList為data()中的dataList
      // 預知道res是否成功要看狀態碼，狀態碼200:表示呼叫成功
      //後端的路徑不用加api(給別人呼叫的)但前端要
      console.log(res);
      if (res.status == 200) {
        this.dataList = res.data;
        // 成功的時候才寫入資料
      }
    },
  },
};
</script>
