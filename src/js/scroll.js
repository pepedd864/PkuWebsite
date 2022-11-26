$(function () {
  //处理滚动事件
  let old_scroll_top = 0;
  $(document).scroll(function () {
    let current_scroll_top = $(document).scrollTop();
    let scroll_delta = current_scroll_top - old_scroll_top;
    old_scroll_top = current_scroll_top;

    let dock = $(".dock1");
    let sc02Items = $(".section02 .block .list");
    let sc03Items = $(".section03 .block .part2");
    let sc04Items = $(".section04 .block ");
    let sc05Items = $(".section05 .block");
    let sc06Items = $(".section06 .block .list");

    if (scroll_delta > 0) {
      dock.css({ "height": 0 });
    }
    else if (current_scroll_top != 0) {
      dock.css({ "height": 45 });
    }
    if (current_scroll_top == 0) {

    }
    if (current_scroll_top < 750) {
      sc02Items.find(".item:odd").css({
        "opacity": 0,
        "transform": "translateY(50px)"
      });
      sc02Items.find(".item:even").css({
        "opacity": 0,
        "transform": "translateY(-50px)"
      });
    }
    if (current_scroll_top >= 750) {
      sc02Items.find(".item:odd").css({
        "opacity": 1,
        "transform": "none"
      });
      sc02Items.find(".item:even").css({
        "opacity": 1,
        "transform": "none"
      });
    }

    if (current_scroll_top < 2200) {
      sc03Items.find(".box1").css({
        "opacity": 0,
        "transform": "translateY(-80px)"
      })
      sc03Items.find(".box2").css({
        "opacity": 0,
        "transform": "translateY(80px)"
      })
    }
    if (current_scroll_top >= 2200) {
      sc03Items.find(".box1").css({
        "opacity": 1,
        "transform": "none"
      })
      sc03Items.find(".box2").css({
        "opacity": 1,
        "transform": "none"
      })
    }
    if (current_scroll_top < 3100) {
      sc04Items.find(".box1").css({
        "opacity": 0,
        "transform": "translateY(50px)",
      })
      sc04Items.find(".box2").find(".b").css({
        "opacity": 0,
        "transform": "translate(80px,80px)"
      })
      sc04Items.find(".box3").find(".b").css({
        "opacity": 0,
        "transform": "translate(80px,80px)"
      })
      sc04Items.find(".box4").css({
        "opacity": 0,
        "transform": "translate(50px, 0px)",
      })
    }
    if (current_scroll_top >= 3100) {
      sc04Items.find(".box1").css({
        "opacity": 1,
        "transform": "none",
      })
      sc04Items.find(".box2").find(".b").css({
        "opacity": 1,
        "transform": "none"
      })
      sc04Items.find(".box3").find(".b").css({
        "opacity": 1,
        "transform": "none"
      })
      sc04Items.find(".box4").css({
        "opacity": 1,
        "transform": "none"
      })
    }
    if (current_scroll_top < 4600) {
      sc05Items.find(".left").css({
        "opacity": 0,
        "transform": "translateX(-50px)"
      })
      sc05Items.find(".right").css({
        "opacity": 0,
        "transform": "translateX(50px)"
      })
    }
    if (current_scroll_top >= 4600) {
      sc05Items.find(".left").css({
        "opacity": 1,
        "transform": "none"
      })
      sc05Items.find(".right").css({
        "opacity": 1,
        "transform": "none"
      })
    }
    if (current_scroll_top < 5300) {
      sc06Items.find(".item").css({
        "opacity": 0,
        "transform": "translateX(-100px)"
      })
    }
    if (current_scroll_top >= 5300) {
      sc06Items.find(".item").css({
        "opacity": 1,
        "transform": "none"
      })
    }
    console.log(current_scroll_top);
  });
})