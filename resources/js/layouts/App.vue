<template>
    <div>

        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
                </li>
                
                <li class="nav-item">
                    <router-link :to="{name: 'Login'}" class="nav-link" v-if="$store.getters.getToken == 0">Login</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{name: 'Register'}" class="nav-link" v-if="$store.getters.getToken == 0">Register</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{name: 'Dashboard'}" class="nav-link" v-if="$store.getters.getToken != 0">Dashboard</router-link>
                </li>
          
           
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>