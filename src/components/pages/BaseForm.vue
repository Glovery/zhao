<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-date"></i>表单
      </el-breadcrumb-item>
      <el-breadcrumb-item>基本表单</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="baseForm">
      <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
        <el-form-item label="表单名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="选择器" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="步步高" value="bbg"></el-option>
            <el-option label="小天才" value="xtc"></el-option>
            <el-option label="imoo" value="imoo"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期选择" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="line">---</el-col>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-time-picker
                type="fixed-time"
                placeholder="选择时间"
                v-model="ruleForm.time"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="选择开关" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="多选框" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="步步高" name="type"></el-checkbox>
            <el-checkbox label="小天才" name="type"></el-checkbox>
            <el-checkbox label="imoo" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="步步高"></el-radio>
            <el-radio label="小天才"></el-radio>
            <el-radio label="imoo"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')" size="mini">提交</el-button>
          <el-button size="mini" @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date: "",
        time: "",
        delivery: true,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        region: [{ required: true, message: "请选择", trigger: "blur" }],
        date: [{ required: true, message: "请选择日期", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一项",
            trigger: "blur"
          }
        ],
        resource: [{ required: true, message: "请选择一项", trigger: "blur" }],
        desc: [{ required: true, message: "请填写信息", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          alert("submit successful");
        } else {
          alert("submit error");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.baseForm {
  margin-top: 15px;
  width: 600px;
  .line {
    text-align: center;
  }
}
</style>

