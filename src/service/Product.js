const Product = {
  getList: "product",
};

// getList: "product",這邊打什麼，在laravel > routes > api.php 路徑就要打什麼
// 如：Route::get("/product", [FrontProductController::class, "getList"]);
export default Product;
