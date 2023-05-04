<template>
  <el-container>
    <el-aside width="210px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#343744"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div class="main-logo">
          <img class="img-logo" src="../assets/logo.png">
        </div>
        <el-submenu v-for="(item, i) in menuList" :index="i + 1 + ''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="(children, j) in item.children" @click="changeRouter(children.router, children.name)" :index="(i + 1) + '-' + (j + 1)">
            <span slot="title">{{children.name}}</span>
          </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="navbar">
          <div class="head-lable">
              <span v-if="true" class="goBack" @click="goBack()">
                <img src="../assets/btn_back@2x.png" alt="" />
              </span>
              <span>{{name}}</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <!-- 操作区域 -->
        <router-view style="width: 100%; height: 100%;"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          icon: "el-icon-s-marketing",
          title: "风控管理",
          children: [
            {
              name: "风控试算",
              router: "/Risk"
            },
            {
              name: "风控管理2",
              router: "/Tabl2"
            }
          ]
        },
        {
          icon: "el-icon-s-promotion",
          title: "指令管理",
          children: [
            {
              name: "指令管理1",
              router: "/Table"
            },
            {
              name: "指令管理2",
              router: "/Tabl2"
            }
          ]
        },
        {
          icon: "el-icon-s-check",
          title: "委托管理",
          children: [
            {
              name: "委托管理1",
              router: "/Table"
            },
            {
              name: "委托管理2",
              router: "/Table2"
            }
          ]
        }
      ],
      name: ''
    }
  },
  methods: {
    //菜单跳转的方法
    routerView(url) {
      this.$router.push(url);
    },
    //注销的方法
    logout() {
      //删除当前的令牌
      localStorage.removeItem("userToken");
      //跳转到登录页
      this.$router.push("/");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeRouter(url, name) {
      console.log(url);
      this.$router.push(url);
      this.name = name;
    }
  },
  mounted() {
  }
}
</script>

<style scoped="scoped">
.el-container {
  height: 100%;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-aside {
  background-color: #343744;
}
.el-submenu__title {
  width: 100%;
}

.img-logo {
  width: auto;
  height: auto;
  max-width: 70%;
  max-height: 70%;
}
.main-logo {
  margin: auto;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navbar {
  height: 60px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-header {
  width: 100%;
  margin: 0;
  padding: 0;
}
.head-lable {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-weight: bold;
}
.head-lable .goBack {
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.head-lable img {
  width: auto;
  height: auto;
  max-width: 40%;
  max-height: 40%;
}
.el-main {
  background-color: #f3f4f7;
  padding: 10px;
}

</style>
