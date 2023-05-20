<template>
  <div class="top-header">
    <div class="nav-normal">
      <div class="dock1">
        <div class="inner">
          <div class="navbar">
            <div class="nav_l">
              <a href="#">学生</a>
              <i>|</i>
              <a href="#">教职工</a>
              <i>|</i>
              <a href="#">校友</a>
              <i>|</i>
              <a href="#">访客</a>
              <i>|</i>
              <a href="#">招聘</a>
              <i>|</i>
              <a href="#">捐赠</a>
            </div>
            <div class="nav_r">
              <a href="#">门户</a>
              <a href="#">网络</a>
              <a href="#">邮箱</a>
              <a href="#">燕云直播</a>
              <a href="#">图书馆</a>
              <a href="#">医学部</a>
              <a href="#">领导信箱</a>
            </div>
          </div>
        </div>
      </div>
      <div class="dock2">
        <div class="navbar">
          <div class="inner">
            <div class="logo">
              <img :src="logoSrc" alt=""/>
            </div>
            <div class="nav_main">
              <a v-for="(item,index) in navMainList" :href="item.url" :key="index">{{ item.name }}</a>
            </div>
            <div class="tools">
              <div class="search"></div>
              <div class="lang">EN</div>
            </div>
          </div>
          <div class="nav_child">
            <div v-for="item in navChildList" class="item" :key="item">
              <div class="nav_child_left">
                <div class="pic">
                  <img :src="item.img" alt=""/>
                </div>
                <div class="txt" v-html="item.txt">
                </div>
              </div>
              <div class="nav_child_right">
                <a v-for="i in item.right" :href="i.url" :key="i">{{ i.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-mobile">
      <div class="logo">
        <img :src="logoSrc" alt=""/>
      </div>
      <div class="tools">
        <div class="search"></div>
        <div class="lang">EN</div>
      </div>
      <span class="close"></span>
      <div class="nav_main"></div>
      <div class="nav_l"></div>
      <div class="nav_r"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const logoSrc = ref(require('@/assets/images/logo_a.png'))
const navMainList = ref([
  {
    name: '北大概况',
    url: '#',
  },
  {
    name: '招生',
    url: '#',
  },
  {
    name: '学部与院系',
    url: '#',
  },
  {
    name: '教育教学',
    url: '#',
  },
  {
    name: '科学研究',
    url: '#',
  },
  {
    name: '合作交流',
    url: '#',
  },
  {
    name: '校园生活',
    url: '#',
  },
])
const navChildList = ref([
  {
    img: require('@/assets/images/nav_child/ico_1.png'),
    txt: '北大是常为新的，<br/>改进的运动的先锋，<br/>要使中国向着好的，<br/>往上的道路走',
    right: [
      {
        name: '北大简介',
        url: '#',
      },
      {
        name: '现任领导',
        url: '#',
      },
      {
        name: '历任领导',
        url: '#',
      },
      {
        name: '组织机构',
        url: '#',
      },
      {
        name: '历史名人',
        url: '#',
      },
      {
        name: '信息公开',
        url: '#',
      },
      {
        name: '标识系统',
        url: '#',
      },
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_2.png'),
    txt: '燕园画卷美不胜收，<br/> 恰似你将要留在这里的<br/>青春年华。<br/>北京大学欢迎你！',
    right: [
      {
        name: '本科生',
        url: '#',
      },
      {
        name: '研究生',
        url: '#',
      },
      {
        name: '留学生',
        url: '#',
      },
      {
        name: '继续教育',
        url: '#',
      },
      {
        name: '学生奖助信息',
        url: '#',
      },
      {
        name: '暑期学校',
        url: '#',
      }
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_3.png'),
    txt: '勤奋、严谨、<br/>求实、创新。',
    right: [
      {
        name: '理学部',
        url: '#',
      },
      {
        name: '信息与工程科学部',
        url: '#',
      },
      {
        name: '人文学部',
        url: '#',
      },
      {
        name: '社会科学学部',
        url: '#',
      },
      {
        name: '经济与管理学部',
        url: '#',
      },
      {
        name: '医学部',
        url: '#',
      },
      {
        name: '跨学科类',
        url: '#',
      },
      {
        name: '深圳研究生院',
        url: '#',
      },
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_4.png'),
    txt: '思想自由、兼容并包。<br/><br/>教育应指导社会，<br/>而非追逐社会。',
    right: [
      {
        name: '师资队伍',
        url: '#',
      },
      {
        name: '管理部门',
        url: '#',
      },
      {
        name: '课程设置',
        url: '#',
      },
      {
        name: '海外学习',
        url: '#',
      },
      {
        name: '课表查询',
        url: '#',
      },
      {
        name: '华文慕课',
        url: '#',
      },
      {
        name: '教学网',
        url: '#',
      },
      {
        name: '证书验证',
        url: '#',
      },
      {
        name: '燕云直播',
        url: '#',
      },
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_5.jpg'),
    txt: '博学之，审问之，<br/>慎思之，明辨之，<br/>笃行之。',
    right: [
      {
        name: '科研成果',
        url: '#',
      },
      {
        name: '研究机构',
        url: '#',
      },
      {
        name: '学术期刊',
        url: '#',
      },
      {
        name: '管理部门',
        url: '#',
      }
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_6.jpg'),
    txt: ' 志于道，据于德，<br/> 依于仁，游于艺。',
    right: [
      {
        name: '国际交流',
        url: '#',
      },
      {
        name: '国内合作',
        url: '#',
      },
      {
        name: '教育基金会',
        url: '#',
      },
      {
        name: '港澳台交流',
        url: '#',
      },
      {
        name: '北京论坛',
        url: '#',
      },
      {
        name: '孔子学院',
        url: '#',
      }
    ]
  },
  {
    img: require('@/assets/images/nav_child/ico_7.png'),
    txt: '秋冬春夏，<br/>伴随着四时的运行，<br/>青春和燕园融为一体，<br/>北大成为永恒。',
    right: [
      {
        name: '菁菁校园',
        url: '#',
      },
      {
        name: '讲座演出',
        url: '#',
      },
      {
        name: '艺术生活',
        url: '#',
      },
      {
        name: '体育健康',
        url: '#',
      },
      {
        name: '社团活动',
        url: '#',
      },
      {
        name: '档案馆藏',
        url: '#',
      },
      {
        name: '管理服务',
        url: '#',
      },
      {
        name: '校历',
        url: '#',
      },
    ]
  },
])
onMounted(() => {
  let stoNav = null;
  $('.nav_main a').hover((e) => {
        clearTimeout(stoNav);
        const _this = e.target
        $(".nav_child .item").removeClass("show");
        $(".nav_main a").removeClass("hover");
        let c = $(_this).parents(".navbar").find(".nav_child").find(".item").eq($(_this).index());
        let ol = $(_this).parents(".navbar").offset().left;
        let al = $(_this).offset().left + $(_this).outerWidth() * 0.5;
        let fl = al - ol;
        let cl = fl - c.outerWidth() * 0.5;
        if (cl < 0) {
          c.css("left", 0);
        } else if (cl + c.outerWidth() > $(_this).parents(".navbar").outerWidth()) {
          c.css("right", 0);
        } else {
          c.css("left", cl);
        }
        $(_this).addClass("hover");
        c.addClass("show");
      },
      () => {
        stoNav = setTimeout(() => {
          $(".nav_child .item").removeClass("show");
          $(".nav_main a").removeClass("hover");
        }, 100);
      }
  )
  $(".nav_child .item").hover(
      () => {
        clearTimeout(stoNav);
      },
      () => {
        $(".nav_child .item").removeClass("show");
        $(".nav_main a").removeClass("hover");
      }
  );
})
</script>

<style lang="scss" scoped>
.top-header {
  @apply absolute w-full z-[9999] transition;
  .nav-normal {
    @apply lg: w-full bg-[var(--theme-color)];
    .dock1 {
      @apply relative 2xl:w-[var(--dock-width)] xl:w-full mx-auto xl:px-[20px] lg:px-[20px] bg-[var(--theme-color)] overflow-hidden transition;
      // Responsive
      .inner {
        @apply h-[45px] my-0;
        // Responsive
        .navbar {
          @apply flex h-full justify-between items-center;
          .nav_l,
          .nav_r {
            a {
              @apply inline-block text-[#d39797] leading-none;
              &:before {
                border-top: 2px solid #d39797;
                transition: all 0.1s ease-out 0s;
                @apply block content-[""] mb-1 transform scale-0;
              }

              &:hover::before {
                @apply border-white transform scale-100;
              }
            }

            i {
              @apply mx-4 text-[#d39797] text-xs;
            }
          }

          .nav_r {
            a {
              @apply mx-3;
            }
          }
        }
      }
    }

    .dock2 {
      transition: all 0.3s ease-out 0s;
      @apply absolute w-full h-[85px] bg-transparent bg-gradient-to-b from-gray-400 to-transparent;
      .navbar {
        @apply relative h-full mx-auto;
        // Responsive
        .inner {
          @apply flex 2xl:w-[var(--dock-width)] xl:w-full h-full justify-between items-center mx-auto px-[30px];

          .logo {
            @apply flex h-full justify-center items-center w-56;
            img {
              @apply max-h-36;
            }
          }

          .nav_main {
            @apply text-center text-white ;
            a {
              @apply relative inline-block 2xl:text-xl xl:text-lg mx-6;
              // Responsive
              &:after {
                border-bottom: 2px solid var(--theme-color);
                transition: all 0.2s ease-out 0s;
                @apply block content-[""] w-full mt-1 transform scale-x-0;
              }

              &:before {
                border-left: 2px solid var(--theme-color);
                transition: all 0.2s ease-out 0s;
                transform-origin: center top;
                @apply absolute content-[""] left-1/2 top-full h-[27px] transform scale-y-0;
              }
            }

            .hover:before {
              @apply transform-none
            }

            .hover:after {
              @apply transform-none
            }
          }
        }

        .tools {
          @apply flex;
          .search,
          .lang {
            border: 1px #fff solid;
            @apply relative w-[45px] leading-[45px] text-[20px] text-center text-white rounded-full cursor-pointer;
          }

          .search {
            @apply w-[45px] h-[45px] mr-[25px];
            &::before,
            &::after {
              @apply absolute content-[""];
            }

            &:before {
              border: 2px #fff solid;
              transform: translate(-55%, 43%);
              @apply w-[22px] h-[22px] rounded-full;
            }

            &::after {
              transform: translate(8px, 28px) rotateZ(-45deg);
              @apply w-[2px] h-[5px] bg-white rounded-[2px];
            }
          }
        }

        .nav_child {
          @apply absolute w-full left-0;
          .item {
            border-top: 2px solid var(--theme-color);
            background: #fff url(@/assets/images/nav_child/png96.png) center bottom no-repeat;
            @apply absolute flex top-full left-0 w-[820px] p-[20px] bg-contain z-[9999] invisible opacity-0;

            .nav_child_left {
              @apply flex w-1/2;
              .pic {
                @apply w-2/5;
                img {
                  @apply w-full h-auto;
                }
              }

              .txt {
                @apply flex-1 text-lg text-[var(--theme-color)] pl-10 leading-[2.2];
              }
            }

            .nav_child_right {
              a {
                @apply w-1/3 inline-block text-black text-lg mt-2;
                &:hover {
                  @apply text-[var(--theme-color)];
                }
              }
            }

          }

          .show {
            transition: opacity 0.2s ease-out 0s;
            @apply visible opacity-100;
          }
        }
      }
    }
  }
}
</style>
