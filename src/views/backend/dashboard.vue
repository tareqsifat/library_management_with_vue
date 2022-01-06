<template>
    <div>
        <!--page-wrapper Start-->
        <div class="page-wrapper">
            <!--Page Header Start-->
            <pageheader></pageheader>
            <!--Page Header Ends-->

            <!--Page Body Start-->
            <div class="page-body-wrapper">
                <!--Page Sidebar Start-->
                <sidebar></sidebar>
                <!--Page Sidebar Ends-->

                <div class="page-body">
                    <!-- Container-fluid starts -->
                    <div class="container-fluid">
                        <div class="page-header">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h3>
                                        Sample Page
                                        <small>Universal Admin panel</small>
                                    </h3>
                                </div>
                                <div class="col-lg-6">
                                    <ol class="breadcrumb pull-right">
                                        <li><i class="fa fa-home"></i>/</li>
                                        <li class="breadcrumb-item active">{{ $route.name }}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Container-fluid Ends -->

                    <!-- Container-fluid starts -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                    <!-- Container-fluid starts -->
                </div>
            </div>
            <!--Page Body Ends-->
        </div>
        <!--page-wrapper Ends-->
    </div>
</template>

<script>
import pageheader from '../../components/pageheader.vue'
import Sidebar from '../../components/sidebar.vue'
export default {
  components: { pageheader, Sidebar },

}
</script>

<style>

</style>