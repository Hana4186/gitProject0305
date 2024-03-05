<template>
  <div class="loading-window" style="background-image: url('/images/map.svg')">
    <img src="/images/load-icon.svg" alt="" />
    <div class="jump-dots">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <!--loading-->
  <div id="page" class="bg-linear-primary pos-r container-fluid px-0">
    <div
      class="pos-ab w-100 pos-ab-b pos-ab-t pos-ab-l bg-cover bgpos-x-center bgpos-y-right"
      style="background-image: url('/images/map.png')"
    ></div>
    <!--pos-ab-->
    <div
      class="pos-ab w-100 pos-ab-b pos-ab-t pos-ab-l pos-ab-y-e"
      style="background-image: url('/images/world-view.png')"
    ></div>
    <!--pos-ab-->
    <div
      class="pos-ab w-100 h-100 pos-ab-t pos-ab-l pos-ab-y-s"
      style="background-image: url('/images/idx-bg-top.png')"
    ></div>
    <!--pos-ab-->
    <input type="checkbox" id="m-ctrl" hidden />
    <header class="">
      <div class="container-max-1920 px-xl-3 px-xs-2">
        <div class="row justify-content-xs-between align-items-center mx-0">
          <h1><a href="index.html" class="logo"></a></h1>
          <label for="m-ctrl"></label>
          <div class="menu">
            <ul class="">
              <li class="nav_btn"><a href="/index">活動首頁</a></li>
              <li class="nav_btn"><a href="/activity">活動說明</a></li>
              <li class="nav_btn"><a href="/notice">注意事項</a></li>
              <li class="nav_btn"><a href="/qa">活動Q&A</a></li>
              <li class="nav_btn"><a href="/product">產品介紹</a></li>
              <li class="nav_btn"><a href="/prize">中獎專區</a></li>
            </ul>
          </div>
        </div>
        <!--row-->
      </div>
      <!--container-->
    </header>
    <main class="gw pt-lg-0 remove-bg">
      <!-- 指變更中間的內容 -->
      <router-view />
    </main>
  </div>
</template>
