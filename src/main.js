//导入本地资源
import "./js/global.js"
import "./js/scroll.js"
import "./less/global.less"
import "./less/fix.less"
import "./less/body_a.less"
import "./less/body_b.less"
//导入插件
window.onresize = function () {
  //检查屏幕分辨率
  if (document.documentElement.clientHeight < 900 || document.documentElement.clientWidth < 1650) {
    alert("此设备分辨率可能不适合该网页");
  }
}
