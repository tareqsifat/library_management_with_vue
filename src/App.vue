<template>
    <!-- // <-- <div id="nav">
        //   <router-link to="/">Home</router-link> |
        //   <router-link to="/about">About</router-link>
        // </div>
        // <router-view/>--> 
    <div>
        <router-link :to="{ path: 'dashboard'}">Home</router-link>
        <div v-if="check_auth">auth part
            <div id="nav">
                <router-link :to= "{ path: 'admin' }">Admin</router-link> |
                <router-link :to= "{ path: 'manegement' }">Manegement</router-link> |
                <router-link :to= "{ path: 'user' }">user</router-link> 
            </div>
        </div>
        <div v-else> non auth part
            <div id="nav">
                <router-link :to= "{ path: 'login' }">login</router-link> |
                <router-link :to= "{ path: 'signup' }">signup</router-link> |
                <router-link :to= "{ path: 'portfolio' }">portfolio</router-link> 
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data:function(){
    return {
        check_auth:false
        }
    },

    created:function(){
        if(this.check_auth){
            this.$router.replace({name:'dashboard'});
        }else{
            this.$router.replace({name:'login'});
        }
    }
}
</script>
