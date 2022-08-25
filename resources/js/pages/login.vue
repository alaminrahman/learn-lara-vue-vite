<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-md-3">

                <h2>Login</h2>

                <p class="text-danger" v-if="error">{{ error }}</p>

                <form @submit.prevent="login">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="form.email">
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>  

                            <div class="mb-3">                            
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>  

                        </div><!--End card-body-->
                    </div><!--End card-->
                </form>
            </div><!--End col-->
        </div><!--End Row -->
    </div>
</template>

<script>
    import axios from 'axios';
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        setup() {
            const router = useRouter();
            
            let form = reactive({
                'email': '',
                'password': '',
            });

            let error = ref('');           

            const login = async() => {
                await axios.post('/api/login', form).then(res => {
                    if(res.data.success){
                        localStorage.setItem('token', res.data.data.token)
                        router.push({name:'Home'})
                        console.log(res)                        
                    }
                    else{
                        error.value = res.data.message;                    
                    }
                })
            }

            return {
                form,
                login,
                error,
            }
        }
 
    }
</script>
