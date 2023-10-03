/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/content.jsx ***!
  \*************************/
console.log("content script is running. ");
var body = document.getElementsByTagName("html");
console.log("body", body);
if (body[0].baseURI === "https://example.com/") {
  body[0].innerHTML = "<html><body><div><center><h1>Tavlav World</h1></center></div></body></html>";
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztBQUcxQyxJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDO0FBQ2xESixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVDLElBQUksQ0FBQztBQUV6QixJQUFHQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNHLE9BQU8sS0FBSyxzQkFBc0IsRUFBQztFQUMzQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxTQUFTLEdBQUcsNkVBQTZFO0FBQ3BHLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0MC4wMS8uL3NyYy9jb250ZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImNvbnRlbnQgc2NyaXB0IGlzIHJ1bm5pbmcuIFwiKVxuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilcbmNvbnNvbGUubG9nKFwiYm9keVwiLCBib2R5KVxuXG5pZihib2R5WzBdLmJhc2VVUkkgPT09IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9cIil7XG4gICBib2R5WzBdLmlubmVySFRNTCA9IFwiPGh0bWw+PGJvZHk+PGRpdj48Y2VudGVyPjxoMT5UYXZsYXYgV29ybGQ8L2gxPjwvY2VudGVyPjwvZGl2PjwvYm9keT48L2h0bWw+XCJcbn1cblxuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImJhc2VVUkkiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9