<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-md-3">

                <p class="text-danger">{{errors_msg.msg}}</p>

                <form @submit.prevent="register">
                    <div class="card mt-5">
                        <div class="card-body">

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="form.name">
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="form.email">
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>  

                            <div class="mb-3">
                                <label for="c_password" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="c_password" v-model="form.c_password">
                            </div>  

                            <div class="mb-3">                            
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>  

                        </div><!--End card-body-->
                    </div><!--End card-->
                </form>
            </div><!--End col-->
        </div><!--End Row -->
    </div>
</template>

<script>

import { reactive } from 'vue';
import axios from 'axios';

export default {
    setup() {
        let form = reactive({
            'name' : '',
            'email': '',
            'password': '',
            'c_password': '',
        });

         let errors_msg = reactive({
            'msg': ''
        });
        const register = async() => {
            await axios.post('/api/register', form).then(res => {
                if(res.data.success){
                    localStorage.setItem('Token', res.data.token)
                    console.log("Register")
                }elseif(res.data.success == false){
                    errors_msg.msg = res.message
                    console.log('Error')
                    console.log(res)
                }
            })
        }

        return {
            form,
            register,
            errors_msg,
        }
    },
}
</script>