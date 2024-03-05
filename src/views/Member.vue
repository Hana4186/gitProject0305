<template>
  <div v-for="item in dataList" :key="item.id">
    {{ item.userID }} {{ item.userName }}
    <!-- 
      v-for：跑回圈
      item in dataList：用item代表dataList裡面的每一筆資料，item可以自己取名
      key="item.id"因為id不重複所以拿來當key
      呈上，
      <div v-for="(item, index) in dataList" :key="index">
      如果沒有唯一資料可以改用index索引的方式，就會有唯一值了
    -->
  </div>
</template>
<script>
import axios from "axios";
import Member from "@/service/Member.js";

//每一個vue網頁若要取用資料，都要用export default
export default {
  // name:"product", 每個vue網頁可以有個name，可用來做連結或網頁間傳遞資料
  name: "product",
  data() {
    //所有要與網頁互動或將後端取回的資料顯示在網頁上，都要寫在data()中
    return {
      dataList: [],
      //datalist: 變數名稱，苦已自行命名
      //因為後端取回的資料可能有很多筆，所以要用陣列([])
    };
  },
  mounted() {
    //mounted:網頁載入時
    this.getList();
    // 當網頁載入時，呼叫這個網頁的getList()方法
    // this:這個網頁的getList()方法
  },
  methods: {
    async getList() {
      //async:與await搭配，非同步到後端取資料
      const res = await axios.get("http://localhost/" + Member.search);
      //axios到後端要資料的方式有get, post等
      //get():要後端要資料的網址和路徑
      //res: 後端回傳資料的結果，名稱可以自行命名，不一定要用res
      //res: 為response的縮寫，後端回傳為response，到後端要資料為request
      console.log(res.data);
      this.dataList = res.data;
      // res.data: 後端傳回來的資料，會存在data中
      // this.dataList: 這個dataList為data()中的dataList，要後端回傳的資料存在data()中的dataList
    },
  },
};
</script>
