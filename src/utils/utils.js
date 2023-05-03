import Qs from 'qs'
import Vue from 'vue'

/*
$.ajax({
  type: "POST",
  url: "/user/list",
  data: {
    key: value,
    key2: value2
  },
  success: function(data) {

  }
});

{
      method: param.type ? param.type : "GET",
      url: "http://localhost:8080" + param.url,
      //GET
      params: param.data

      //POST
      transformRequest: [function (data) {
        return Qs.stringify(data)
      }],
      data: param.data
    }
*/
export default {
  ajax(param) {
    //设置axios的请求参数
    var axiosParam = {};
    //设置method的属性
    axiosParam.method = param.type ? param.type : "GET";
    //设置url属性
    axiosParam.url = "http://localhost:9300" + param.url;
    //设置参数的属性
    if (param.data) {
      if (param.type && param.type == "POST") {
        //发送post请求
        axiosParam.transformRequest = [function (data) {
          return Qs.stringify(data)
        }];
        axiosParam.data = param.data;
      } else {
        //发送get请求
        axiosParam.params = param.data;
      }
    }

    Vue.axios(axiosParam).then((result) => {
      console.log("请求成功！", result.data);
      if (param.success) {
        //调用success方法
        param.success(result.data, result.data.page);
      }
    }).catch((result) => {
      console.log("请求失败！", result.response.data);

      if (result.response.data.code == 406) {
        //强制跳转到登录页面
        // Vue.$router.push("/");
      }

      if (result.response.data.msg) {
        //弹窗将错误信息弹出
        Vue.prototype.$message.error(result.response.data.msg + (result.response.data.data ? result.response.data.data : ""));
      } else {
        Vue.prototype.$message.error("服务器繁忙，请稍后再试！");
      }
    });
  }
}
