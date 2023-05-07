<template>
  <div class="risk">
    <div class="risk-top">
      <div class="top-content">指令</div>
      <div class="risk-form">
        <div class="risk-row">
          <div class="risk-box">
            <div class="risk-text">基金</div>
            <div class="risk-input">
              <el-select v-model="formInline.region" placeholder="基金">
                <el-option label="基金一" value="shanghai"></el-option>
                <el-option label="基金二" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">投资组合</div>
            <div class="risk-input">
              <el-select v-model="formInline.region" placeholder="投资组合">
                <el-option label="投资组合一" value="shanghai"></el-option>
                <el-option label="投资组合二" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">市场</div>
            <div class="risk-input">
              <el-select v-model="formInline.region" placeholder="市场">
                <el-option label="市场一" value="shanghai"></el-option>
                <el-option label="市场二" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="risk-row">
          <div class="risk-box">
            <div class="risk-text">证券代码</div>
            <div class="risk-input">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">委托方向</div>
            <div class="risk-input">
              <el-select v-model="formInline.region" placeholder="委托方向">
                <el-option label="委托方向一" value="shanghai"></el-option>
                <el-option label="委托方向二" value="beijing"></el-option>
              </el-select>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">清算速度</div>
            <div class="risk-input">
              <el-radio v-model="radio" label="1">T+0</el-radio>
              <el-radio v-model="radio" label="2">T+1</el-radio>
            </div>
          </div>
        </div>
        <div class="risk-row">
          <div class="risk-box">
            <div class="risk-text">数量</div>
            <div class="risk-input">
              <el-input v-model="input" placeholder="请输入数量"></el-input>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">价格</div>
            <div class="risk-input">
              <el-input v-model="input" placeholder=""></el-input>
            </div>
          </div>
          <div class="risk-box">
            <div class="risk-text">到期结算日</div>
            <div class="risk-input">
              <el-input v-model="input" placeholder=""></el-input>
            </div>
          </div>
        </div>

        <!--        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="基金">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="基金一" value="shanghai"></el-option>
                      <el-option label="基金二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="投资组合">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="投资组合一" value="shanghai"></el-option>
                      <el-option label="投资组合二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="市场">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="市场一" value="shanghai"></el-option>
                      <el-option label="市场二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>

                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="证券代码">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="基金一" value="shanghai"></el-option>
                      <el-option label="基金二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="委托方向">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="委托方向一" value="shanghai"></el-option>
                      <el-option label="委托方向二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="清算速度">
                    <el-radio v-model="radio" label="1">T+0</el-radio>
                    <el-radio v-model="radio" label="2">T+1</el-radio>
                  </el-form-item>
                </el-form>

                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="数量">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="基金一" value="shanghai"></el-option>
                      <el-option label="基金二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="价格">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="委托方向一" value="shanghai"></el-option>
                      <el-option label="委托方向二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="到期结算日">
                    <el-select v-model="formInline.region" placeholder="投资组合">
                      <el-option label="市场一" value="shanghai"></el-option>
                      <el-option label="市场二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>-->
      </div>
      <div class="top-button">
        <el-button type="primary">风控试算</el-button>
      </div>
    </div>
    <div class="risk-main">
      <div class="main-left">
        <div class="main-left-top">
          <div>风控结果</div>
        </div>
        <div class="main-left-content">
          <div class="left-table">
            <el-table
              :data="tableData"
              height="96%"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="main-right-top">
          <div>风控因子值</div>
        </div>
        <div class="main-right-content">
          <div class="right-table">
            <el-table
              :data="tableData"
              height="96%"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      radio: '1',
      input: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style scoped="scoped">
.risk {
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.risk-top {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  border: 0.5px solid #c1c1c1;
  margin-bottom: 5px;
}

.risk-form {
  width: 80%;
  height: 80%;
  margin-top: 30px;
  margin-left: 20px;
  min-width: 520px;
}

.risk-main {
  width: 100%;
  height: 70%;
  border: 0.5px solid #c1c1c1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.el-form-item {
  margin-right: 60px;
}

.el-form-item__label {
  width: 80px;
}

.risk-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
}

.risk-text {
  width: 85px;
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.risk-input {
  width: 250px;
  text-align: left;
}

.risk-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.el-select {
  width: 250px;
}

.top-content {
  width: 80px;
  margin-top: 10px;
  font-weight: bold;
}

.top-button {
  margin-top: 200px;
}

.main-left {
  width: 50%;
  height: 100%;
}

.main-right {
  width: 50%;
  height: 100%;
}

.main-left-top, .main-right-top {
  height: 8%;
  width: 100%;
  text-align: start;
}

.main-left-top div,.main-right-top div {
  margin-left: 20px;
  padding-top: 10px;
  font-weight: bold;
}

.main-left-content,.main-right-content {
  height: 92%;
  width: 100%;
}

.left-table,.right-table {
  height: 100%;
  margin-left: 20px;
  margin-right: 10px;
}
.el-table {
  height: 300px;
}
</style>
