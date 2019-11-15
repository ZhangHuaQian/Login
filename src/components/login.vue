<template>

    <div class="login_container" >
        <div class="login_box" >
            <div class="acatar_box" >
                <img src="../../static/icon.jpg" alt="" class="" >
            </div>

            
            <div class="login_form"  >
                <el-form  :model="loginform" :rules="loginFormrules" ref="loginFormRef"  :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                    <el-form-item prop="user_name">
                        <el-input prefix-icon="el-icon-user" placeholder="请输入账号" v-model="loginform.user_name" ></el-input>
                    </el-form-item >
                    <el-form-item prop="user_password">
                        <el-input  prefix-icon="el-icon-lock"  placeholder="请输入密码" v-model="loginform.user_password" type="password" ></el-input>
                    </el-form-item>

                     <el-form-item class="btns">
                        <el-button   type="success" plain @click="login">登录</el-button>
                        <el-button   type="info" plain @click="reset_form">重置</el-button>
                    </el-form-item>
                   
                </el-form>
            </div>
        
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                loginform:{
                    user_name:'',
                    user_password:''
                },
                 loginFormrules: {
                     user_name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 4, max: 9, message: '长度在 4 到 9 个字符', trigger: 'blur' }
                     ],
                     user_password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                     ],
                 },
                 loginToken:{
                     token:'gxydlcg',
                     },
            };
        },
        methods:{
            login(){
                // console.log(this.loginform.user_name+'-----'+this.loginform.user_password)
                // this.$refs.loginFormRef.validate(async valid=>{
                //     console.log(valid);
                //     if(!valid) return;
                //     const {data,res}=await this.$http.post('login',this.loginform);
                //     if(res.meta.status !==200) return this.$message.error('登录失败')
                //     this.$message.success('登录成功');


                //     window.sessionStorage.setItem('token',res.data.token);
                //     this.$router.push('/home')
                // })
                if(this.loginform.user_name==='ZHQuser'&&this.loginform.user_password==='ZHQ123456789'){
                    this.$message.success('登录成功');
                    window.sessionStorage.setItem('token',this.loginToken.token);
                    this.$router.push('/home')
                }
                else{
                    this.$message.error('登录失败');
                }
            },
            reset_form(){
                this.$refs.loginFormRef.resetFields();
        }
    }
    }

</script>
<style scoped lang="scss">
    html,body{
        margin: 0;
        padding: 0;
    }
    .login_container {
        background: #2b4b6b;
        height: 100vh;
        width: 100%;
        .login_box {

            // width: 450px;
            height: 300px;
            width: 60vw;
        
            position:absolute;
            top:50%;
            left: 50%;
            transform:translate(-50%,-50%);
            background-color: #666;
            border-radius: 3px;
            .acatar_box {
                height: 130px;
                width: 130px;
                border: 1px solid #eee;
                border-radius:50% ;
                padding: 10px;
                box-shadow: 0 0 10px #ddd;
                position: absolute;
                left: 50%;
                transform: translate(-50%,-50%);
                background-color: #fff;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #eee;
                }
            }
            .login_form{
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .btns {
                display: flex;
                justify-content: flex-end;
            }
        }

    }

</style>

