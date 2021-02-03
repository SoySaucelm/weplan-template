<template>
  <div class="page_head">
    <div class="page_head_r">
      <!--    <div class="center flex-center"></div>-->
      <div class="user-avator" :style="{ backgroundImage: 'url(' + require('@src/assets/images/logo.jpg') +
            ')', 'background-size': '100% 100%'
          }"></div>
      <div class="page_head_r_con">
        <!--            <div class="avatar" :style="{ backgroundImage: 'url(' + require('@src/assets/images/header.gif') + ')' }"></div>-->

        <div class="page_he_r_box01 font-clz">您好，{{ loginData.nickname || loginData.username }}</div>
        <!--      <div class="nickname"></div>-->
        <div class="page_he_r_box01">
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" src="@src/assets/images/ico04.png"><span>菜单</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu  slot="dropdown" class="user-dropdown">
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <a class="inlineBlock" href="http://www.baidu.com/" target="_blank">
                <el-dropdown-item>
                  单点登录
                </el-dropdown-item>
              </a>
              <el-dropdown-item divided>
                <span  style="display:block;" @click="logout">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!--            <div class="exit" @click="on_exit">-->
        <!--                <div class="box"></div>-->
        <!--            </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  created() {
  },
  methods: {
    logout() {
      this.$Basil.reset();
      this.$router.replace('/login');
    }
  }
};
</script>

<style lang="scss">
.user-avator {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  top: 0;
  width: 90px;
  height: 60px;
  /* background: url(~@/assets/images/user.jpg) no-repeat center center; */
  background-size: cover;
  float: left;
  margin: 0px 5px 0 0;
}

.font-clz {
  font-style: oblique;
  font-family: SimSun;
  font-weight: bold;
}

.page_head_r_con {
  position: relative;
  overflow: hidden;
  top: 30px;
}

.page_he_r_box01 {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  float: left;
  vertical-align: middle;
  margin: 0px 25px 0 0;
}

.page_head_r {
  overflow: hidden;
  float: right;
  position: relative;
  height: 68px;
}

//.left {
//  font-size: large;
//  width: 60px;
//  //height: 10px;
//  //padding: 50px 50px 50px 58px;
//  color: #007eff;
//  font-style: unset;
//}

.page_he_r_box01 img {
  float: left;
  display: inline-block;
}

.page_he_r_box01 span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  margin-left: 3px;
}

.user-avator {
  display: flex;
  top: 0;
  width: 150px;
  height: 65px;
  /*background: url(~@/assets/images/3b1aaec.png) no-repeat center center;*/
  background-size: cover;
  float: left;
  margin: 0px 5px 0 0;
}

.page_head {
  position: fixed;
  z-index: 10000;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 68px;
  background: #ffffff url(@src/assets/images/logo1.jpg) 20px center no-repeat;
  background-position: 1px 1px;
  background-size: 200px 68px;
  /* background: #ffffff; */
  border-bottom: 1px solid #d2dcea;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 10px #D2DCEA;
  box-shadow: 0px 0px 10px #D2DCEA;
}

.layout-header {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: $layout-header-height;
  background-color: $layout-header-background-color;
  box-shadow: 0px 3px 6px #1f1e1e;
  z-index: 9;
  padding: 0 10px;

  .left {
    display: flex;
    align-items: center;
    font-size: 18px;
    flex: 0 0 $layout-header-height;
    padding: 5px;
    word-break: keep-all;
    white-space: nowrap;
    color: #fff;
  }

  .center {
    flex: 1 1 100%;
    font-size: 18px;
  }

  .right {
    display: flex;
    align-items: center;
    color: #fff;
    flex: 0 0 $layout-header-height;

    .avatar {
      height: $layout-header-height - 20px;
      width: $layout-header-height - 10px;
      border-radius: 6px;
      margin-right: 10px;
    }

    .nickname {
      margin-right: 10px;
      min-width: $layout-header-height - 5px;
    }

    .exit {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f1f0f0;
      height: 24px;
      width: 24px;
      border: 2px solid #5aaaff;
      cursor: pointer;
      border-radius: 50%;

      .box {
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background-color: #e86666;
      }
    }
  }
}
</style>
