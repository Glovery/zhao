<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-date"></i>表格
      </el-breadcrumb-item>
      <el-breadcrumb-item>基本表格</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tableTool">
      <el-row>
        <el-col :span="2">
          <el-button
            type="primary"
            icon="el-icon-delete"
            class="delBtn"
            @click="delAll"
            size="medium"
          >删除</el-button>
        </el-col>
        <el-col :span="2">
          <el-select v-model="value" placeholder="筛选省份" class="dropSelect" clearable>
            <el-option
              v-for="(item,index) in selectOptions"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="keywords" placeholder="筛选关键词" class="searchBox"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="medium" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      ref="multipleTable"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="time" label="日期" width="150" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑表格 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible" class="dialogForm">
      <el-form :model="dialogForm" ref="dialogForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="日期" label-width="60px">
              <el-date-picker v-model="dialogForm.time" type="date" placeholder="请选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" label-width="60px">
              <el-input v-model="dialogForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="地址" label-width="60px">
            <el-input v-model="dialogForm.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogFormVisible=false" type="primary">取消</el-button>
            <el-button @click="editData">确定</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  getData,
  getOneData,
  updateData,
  delOneData,
  deleteData
} from "../../api/api.js";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const ERR_OK = 0;
export default {
  data() {
    return {
      selectOptions: [
        {
          name: "广东省",
          id: "1"
        },
        {
          name: "湖南省",
          id: "2"
        }
      ], //省份
      keywords: "",
      tableData: [],
      value: "",
      multipleSelection: [],
      delList: [],
      dialogFormVisible: false,
      dialogForm: {}
    };
  },
  methods: {
    delAll() {
      let str = "";
      this.delList = this.multipleSelection;
      let paramData = [];
      this.delList.forEach(item => {
        paramData.push(item.id);
      });
      console.log(paramData);
      if (this.delList.length < 1) {
        this.$message.error("至少选择一个删除");
      } else {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          deleteData(paramData).then(res => {
            if (res.data.code === 200) {
              this._getData();
              this.$message("删除成功");
              console.log(paramData);
            }
          });
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    formatter(row, column) {
      return row.address;
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      let paramData = {
        id: index + 1
      };
      getOneData(paramData).then(res => {
        if (res.data.length > 0) {
          this.dialogForm = res.data[0];
          console.log(this.dialogForm);
        }
      });
      this.$message(`编辑第${index + 1}行`);
    },
    handleDelete(index, row) {
      console.log(index, row);
      let paramData = {
        id: row.id
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delOneData(paramData).then(res => {
          if (res.data.code === 200) {
            this.$message(res.data.msg);
            this._getData();
          }
        });
      });

      // this.tableData = this.tableData.filter(item => {
      //   if (item.name !== row.name) {
      //     return item;
      //   }
      // });
    },
    _getData() {
      getData().then(res => {
        this.tableData = res.data;
        this.tableData.forEach(item => {
          item.time = moment(item.time).format("YYYY-MM-DD");
        });
      });
    },
    // 点击确定
    editData() {
      this.dialogFormVisible = false;
      this.dialogForm.time = moment(this.dialogForm.time).format("YYYY-MM-DD");
      let paramData = this.dialogForm;
      console.log(this.dialogForm);
      updateData(paramData).then(res => {
        if (res.data.code === 200) {
          this.$message(res.data.msg);
          this._getData();
        }
      });
      this.$refs["dialogForm"].resetFields();
    }
  },
  mounted() {
    this._getData();
  }
};
</script>
<style lang="scss" scoped>
.tableTool {
  margin: 20px 0;
  .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  .el-col {
    margin-right: 5px;
  }
  .el-table td,
  .el-table th {
    padding: 7px 0;
  }
}
.dialogForm {
  width: 60%;
  margin: 0 auto;
}
</style>



