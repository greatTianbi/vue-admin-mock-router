<template>
    <el-row>
        <el-col
            :offset="8"
            :span="8"
            class="login_border"
        >
            <el-form
                :model="ruleForm2"
                :rules="rules2"
                ref="ruleForm2"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-row>
                    <el-col :span="24" class="login_title">
                        系统登录
                    </el-col>
                </el-row>
                <el-row>
                    <el-col
                        :span="24"
                    >
                        <el-form-item
                            label="用户名："
                            prop="user"
                        >
                            <el-input
                                type="text"
                                v-model="ruleForm2.user"
                                auto-complete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col
                        :span="24"
                    >
                        <el-form-item
                            label="密码："
                            prop="pass"
                        >
                            <el-input
                                type="password"
                                v-model="ruleForm2.pass"
                                auto-complete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col
                        :span="24"
                    >
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
        </el-col>
    </el-row>
</template>

<script type="text/ecmascript-6">
import { requestLogin } from '../../api/api'

  export default {
    data() {
      return {
        ruleForm2: {
            user:'admin',
            pass: '123456',
        },
        rules2: {
          user: [
            { validator: this.validate, trigger: 'change' }
          ],
          pass: [
            { validator: this.validate, trigger: 'change' }
          ]
        }
      };
    },
    mounted(){
      this.$ajax({
        url:"/api/accounts",
        method:'GET'
      }).then(function(res){
        console.log('res11:',res);
      })
    },
    methods: {
      submitForm(formName) {
          let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
              let oData = {
                  username: this.ruleForm2.user,
                  password: this.ruleForm2.pass
                };

            requestLogin(oData, this).then(data =>{
                console.log('data:',data)
              if(data[1].code === 200){
                this.$message({
                  message:data[1].msg,
                  type:'success'
                })

                sessionStorage.setItem('user', JSON.stringify(data[1].user));
                this.$router.push({ path: '/' });
              }else{
                this.$message({
                  message:data[1].msg,
                  type:'error'
                })
              }
            })
          } else {
            return false;
          }
        });
      },
      validate(rule, value, callback){
        switch (rule.field){
          case "user":{
            if (value === '') {
              callback(new Error('请输入用户名'));
            }else{
              callback()
            }
            break;
          }
          case "pass":{
            if (value === '') {
              callback(new Error('请输入密码'));
            }else{
              callback()
            }
            break;
          }
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scoped>
    .login_border{
        border: 1px solid #ccc;
        margin-top: 150px;
        padding: 50px 40px 50px 10px;
        box-shadow: 0px 0px 40px 2px #ccc;
    }
    .login_title{
        margin:20px;
        font-weight:700;
    }
</style>
