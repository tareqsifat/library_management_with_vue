<template>
    <div class="page-sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
            <div>
                <img class="img-50 rounded-circle" src="/assets/images/user/1.jpg" alt="#" />
            </div>
            <h6 class="mt-3 f-12">Johan Deo</h6>
        </div>
        <ul class="sidebar-menu">
            <li>
                <div class="sidebar-title">General</div>
                <a href="javascript:void(0)" class="sidebar-header">
                    <i class="icon-desktop"></i><span>Dashboard</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <a href="index.html"><i class="fa fa-angle-right"></i>Default</a>
                    </li>
                    <li>
                        <a href="ecommerce.html"><i class="fa fa-angle-right"></i>E-commerce</a>
                    </li>
                    <li>
                        <a href="business.html"><i class="fa fa-angle-right"></i>Business<span class="badge badge-secondary ms-3">Tour</span></a>
                    </li>
                    <li>
                        <a href="crm.html"><i class="fa fa-angle-right"></i>CRM</a>
                    </li>
                </ul>
            </li>
                <router-link :to= "{ path: 'admin' }">Admin</router-link> |
                <router-link :to= "{ path: 'manegement' }">Manegement</router-link> |
                <router-link :to= "{ path: 'user' }">user</router-link> 

            
        </ul>
        <div class="sidebar-widget text-center">
            <div class="sidebar-widget-top">
                <h6 class="mb-2 fs-14">Need Help</h6>
                <i class="icon-bell"></i>
            </div>
            <div class="sidebar-widget-bottom p-20 m-20">
                <p>
                    +1 234 567 899 <br />
                    help@pixelstrap.com <br />
                    <a href="#">Visit FAQ</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    created: function(){
        this.inpage_jquery();
    },
    methods:{
        inpage_jquery:function(){
            $(function(){
                "use strict";
                setTimeout(() => {
                    $.sidebarMenu = function(menu) {
                        var animationSpeed = 300,
                        subMenuSelector = '.sidebar-submenu';
                        $(menu).on('click', 'li a', function() {
                            var $this = $(this);
                            var checkElement = $this.next();
                            if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                                checkElement.slideUp(animationSpeed, function() {
                                checkElement.removeClass('menu-open');
                            });
                            checkElement.parent("li").removeClass("active");
                            }
                            else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                                var parent = $this.parents('ul').first();
                                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                                ul.removeClass('menu-open');
                                var parent_li = $this.parent("li");
                                checkElement.slideDown(animationSpeed, function() {
                                checkElement.addClass('menu-open');
                                parent.find('li.active').removeClass('active');
                                parent_li.addClass('active');
                                });
                            }
                        });
                    }
                    $(".mobile-sidebar .switch-state").click(function(){
                        $(".page-body-wrapper").toggleClass("sidebar-close");   
                    });
                    $.sidebarMenu($('.sidebar-menu'));
                }, 350);
            });
        }
    }
}
</script>

<style>

</style>