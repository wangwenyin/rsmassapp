<template>
  <div class="app">
    <div class="content">
      <imp-step style="width: 80%;margin: 0 auto"></imp-step>
      <div class="choose-section">
        <div class="item">
          <h3>选择导入源</h3>
          <el-select v-model="fileType" @change="handleTypeValueChange" placeholder="请选择文件类型" size="small">
            <el-option
              v-for="item in fileTypeList"
              :key="item"
              :value="item">
            </el-option>
          </el-select>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
            accept="*.csv, *.xlsx, *.access"
            :on-change="handleChange"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :auto-upload="false"
            :show-file-list="false">
            <el-button size="small" type="primary">选择本地文件</el-button>
          </el-upload>
        </div>
        <div class="item" style="float: right">
          <h3>选择导入目标</h3>
          <el-select v-model="type" @change="handleTypeValueChange" placeholder="请选择导入目标" size="small">
            <el-option
              v-for="item in typeList"
              :key="item"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="target" @change="handleTypeValueChange" placeholder="请选择类型" size="small">
            <el-option
              v-for="item in targetList"
              :key="item"
              :value="item">
            </el-option>  
          </el-select>
          <div class="temp-download"><span>数据模板下载</span></div>
        </div>
        <svg-icon icon-class="next_step"></svg-icon>
      </div>
      <div v-if="!isStartImp">
        <el-table 
          :data="tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="aldm"
            label="案例代码">
          </el-table-column>
          <el-table-column
            prop="fdclx"
            label="房地产类型">
          </el-table-column>
          <el-table-column
            prop="fdcmc"
            label="房地产名称">
          </el-table-column>
          <el-table-column
            prop="mj"
            label="建筑面积">
          </el-table-column>
          <el-table-column
            prop="yt"
            label="用途">
          </el-table-column>
          <el-table-column
            prop="cx"
            label="朝向">
          </el-table-column>
          <el-table-column
            prop="hx"
            label="户型">
          </el-table-column>
          <el-table-column
            prop="ldzcs"
            label="楼栋总层数">
          </el-table-column>
          <el-table-column
            prop="szc"
            label="楼层">
          </el-table-column>
          <el-table-column
            prop="dj"
            label="单价">
          </el-table-column>
          <el-table-column
            prop="zj"
            label="总价">
          </el-table-column>
          <el-table-column
            prop="js"
            label="案例时间">
          </el-table-column>
          <el-table-column
            prop="ally"
            label="案例来源">
          </el-table-column>
          <el-table-column
            prop="mmqk"
            label="买卖情况">
          </el-table-column>
          <el-table-column
            prop="sfcdf"
            label="税费承担方">
          </el-table-column>
          <el-table-column
            prop="fklx"
            label="付款类型">
          </el-table-column>
        </el-table>
        <el-pagination
          size="small"
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page="currentPage1"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pageSize1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
      <div class="logs" v-if="isStartImp">
        <div class="log" v-for="log in logs" :key="log.aldm">
          <div class="log-success" v-if="log.isSuccess">{{log.fdcmc}}导入成功！</div>
          <div class="log-fail" v-else>{{log.fdcmc}}导入失败！楼层“一层”无法转换为数字</div>
        </div>
        <div>.......</div>
        <div class="complete" style="margin-top: 50px">
          <p>导入完成！</p>
          <p>本次共导入案例892384条，成功234232条，失败234条！您可点击“下载导入失败的数据”按钮下载查看。</p>
        </div>
      </div>
      <el-row>
        <el-col :span="2" style="float: left">
          <el-popover
            placement="right"
            width="1000"
            trigger="click">
            <el-table :data="historyList">
              <el-table-column property="username" label="用户"></el-table-column>
              <el-table-column property="filename" label="文件名称"></el-table-column>
              <el-table-column property="ally" label="案例来源"></el-table-column>
              <el-table-column property="allx" label="案例类型"></el-table-column>
              <el-table-column property="sj" label="时间"></el-table-column>
              <el-table-column property="total" label="待导入总量"></el-table-column>
              <el-table-column property="succNum" label="导入量"></el-table-column>
              <el-table-column property="failNum" label="失败量"></el-table-column>
            </el-table>
            <el-pagination 
              size="small"
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
              :current-page="currentpage2"
              :page-sizes="[5, 10, 20]"
              :page-size="pagesize2"
              layout="total, prev, pager, next"
              :total="historyList.length">
            </el-pagination>
            <el-button size="small" type="plain" slot="reference">历史记录</el-button>
          </el-popover>
        </el-col>
        <el-col :span="1">
          <el-button size="small" type="plain">取消</el-button>
        </el-col>
        <el-col :span="2">
          <el-button size="small" type="primary" @click="onStartBtnClick">开始导入</el-button>
        </el-col>
        <el-col :span="5">
          <el-button size="small" type="plain">下载导入失败的数据</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import XLSX from 'xlsx'
  import ImpStep from '@/views/casemanage/components/Step'

  export default {
    components: { ImpStep },
    data() {
      return {
        fileType: '',
        fileTypeList: ['csv', 'excel', 'access'],
        fileList: [],
        target: '',
        targetList: ['交易案例', '挂牌案例', '估价案例', '调查案例'],
        type: '',
        typeList: ['价格', '租金'],
        tableData: [],
        currentPage1: 1,
        pageSize1: 10,
        logs: [
          { aldm: '007', fdclx: '房产', fdcmc: '后海花园', dj: 70000, sj: '2017-8-9', ally: '链家', isSuccess: false },
          { aldm: '008', fdclx: '房产', fdcmc: '半岛花园', dj: 70000, sj: '2017-8-9', ally: '链家', isSuccess: true }
        ],
        historyList: [
          { username: '胡彦斌', filename: 'data.csv', ally: '链家', allx: '价格', sj: '2017-10-01 12：00', total: 3215, succNum: 2477, failNum: 662 },
          { username: '胡彦斌', filename: 'data.csv', ally: '链家', allx: '价格', sj: '2017-10-01 12：00', total: 3215, succNum: 2477, failNum: 662 },
          { username: '胡彦斌', filename: 'data.csv', ally: '链家', allx: '价格', sj: '2017-10-01 12：00', total: 3215, succNum: 2477, failNum: 662 },
          { username: '胡彦斌', filename: 'data.csv', ally: '链家', allx: '价格', sj: '2017-10-01 12：00', total: 3215, succNum: 2477, failNum: 662 },
          { username: '胡彦斌', filename: 'data.csv', ally: '链家', allx: '价格', sj: '2017-10-01 12：00', total: 3215, succNum: 2477, failNum: 662 }
        ],
        isStartImp: false
      }
    },
    methods: {
      onStartBtnClick() {
        this.isStartImp = true
      },
      // 导入目标改变
      handleTypeValueChange(value) {
        if (value === '价格') {
          this.targetList = ['交易', '挂牌', '估价', '调查']
        } else {
          this.targetList = ['交易', '挂牌', '调查']
        }
        this.getDataByZoom()
      },
      handleChange(file, fileList) {
        console.log(file, fileList)
        const name = file.name
        const reader = new FileReader()
        reader.readAsBinaryString(file.raw)
        reader.onload = e => {
          console.log(e)
          const data = e.target.result
          const wb = XLSX.read(data, { type: 'binary' })
          console.log(name)
          let fromTo = ''
          let json = []
          // 遍历每张表读取
          for (const sheet in wb.Sheets) {
            if (wb.Sheets.hasOwnProperty(sheet)) {
              fromTo = wb.Sheets[sheet]['!ref']
              console.log(fromTo)
              json = json.concat(XLSX.utils.sheet_to_json(wb.Sheets[sheet]))
              break // 如果有多张表，可注释这行
            }
          }
          this.tableData = json
          console.log(this.tableData)
        }
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    padding: 20px;
    .choose-section {
      position: relative;
      width: 100%;
      overflow: hidden;
      .svg-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 20px;
        height: 20px;
      }
      .item {
        float: left;
        width: 45%;
        padding: 10px 4%;
        text-align: center;
        background: #ebf5ff;
        border-radius: 10px;
        h3 {
          margin: 10px 0;
          color: #333;
        }
        .el-select {
          width: 100%;
          margin: 0 auto 20px;
        } 
        .temp-download {
          overflow: hidden;
          span {
            float: right;
            color: #409EFF;
            cursor: pointer;
          }
        }
      }
    }
    .el-table {
      margin-top: 10px
    }
    .logs {
      width: 100%;
      height: 300px;
      padding: 20px;
      .log {
        .log-success {
          color: lightgreen
        }
        .log-fail {
          color: red
        }
      }
    }
    .el-row {
      margin-top: 20px;
      .el-col {
        float: right;
      }
    }
  }
  .el-pagination {
      margin-top: 10px;
      text-align: center
    }
</style>

<style rel="stylesheet/scss" lang="scss">
  .choose-section {
    .el-upload {
      width: 100%;
      height: 50px;
      margin: 0 auto 20px;
      .el-button {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>


