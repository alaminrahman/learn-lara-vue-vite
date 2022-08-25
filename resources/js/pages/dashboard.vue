<template>
    <div>
        <h2>Dashboard : </h2>
        <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

export default ({
    
    setup() {
        const router = useRouter();
        const store = useStore();

        function logout(){
            localStorage.removeItem('token');
            router.push({name:'Dashboard'})

            store.dispatch('removeToken')
        }

        return {
            logout
        }
    },
})
</script>
