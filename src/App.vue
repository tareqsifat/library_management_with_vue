<template>
    <!-- // <-- <div id="nav">
        //   <router-link to="/">Home</router-link> |
        //   <router-link to="/about">About</router-link>
        // </div>
        // <router-view/>--> 
    <div>
        <!-- <router-link :to="{ path: 'dashboard'}">Home</router-link> -->
        <div v-if="check_auth">auth part
            <div id="nav">
                <dashboard></dashboard>
            </div>
        </div>
        <div v-else>
            <div id="nav">
                
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import dashboard from './views/backend/dashboard.vue';
export default {
  components: { dashboard },
    data:function(){
    return {
        check_auth:true
        }
    },

    created:function(){
        if(this.check_auth){
            this.$router.replace({name:'admin'});
        }else{
            this.$router.replace({name:'login'});
        }
    }
}
</script>
