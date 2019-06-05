<template>
<header class="header-wraper">
    <div class="header_top_bar_wrapper">
        <div class="container">
            <div class="w-12">
                <div class="navigation_wrapper">
                    <ul class="jl_main_menu">
                        <li class="menu-item-type-custom "><a href="http://jellywp.com/theme/disto/demo/">Home<span class="border-menu"></span></a></li>
                        <li class="menu-item-type-custom "><a href="#">Member<span class="border-menu"></span></a></li>
                        <li class="menu-item-type-custom "><a href="#">special offer<span class="border-menu"></span></a></li>
                        <li class="menu-item-type-custom "><a href="#">Info!!<span class="border-menu"></span></a></li>
                    </ul>
                </div>

                <div class="jl_top_bar_right" id="clock">
                    <span class="jl_current_title">Current Date:</span>
                    <!-- <span >27 May, 2019</span> -->
                    <span >{{date}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="menu_wrapper">
        <VueFixedHeader>
            <div class="nav-container">
                <div class="container">
                    <div class="w-12">
                        <div class="main_menu">
                            <div class="logo_small_wrapper_table">
                                <div class="logo_small_wrapper">
                                    <!-- begin logo -->
                                    <a class="logo_link" href="http://jellywp.com/theme/disto/demo/">
                                    <img src="http://jellywp.com/theme/disto/demo/wp-content/themes/disto/img/logo.png" alt="Just another WordPress site">
                                </a>
                                    <!-- end logo -->
                                </div>
                            </div>

                            <!-- main menu -->
                            <div class="navigation_wrapper">
                                <ul class="jl_main_menu flex middle">
                                    <li class="menu-item"><a href="http://jellywp.com/theme/disto/demo/category/gaming/">Gaming<span class="border-menu"></span></a></li>
                                    <li class="menu-item"><a href="http://jellywp.com/theme/disto/demo/category/active/">Active<span class="border-menu"></span></a></li>
                                </ul>
                            </div>

                            <!-- end main menu -->
                            <div class="search_header_menu">
                                <div class="float-right flex middle v-align">
                                    <div class="menu_mobile_share_wrapper">
                                        <ul class="social_icon_header_top">
                                            <li><a class="facebook" href="#" target="_blank"><img src="../assets/img/icons8-facebook_new.png" alt=""></a></li>
                                            <li><a class="youtube" href="#" target="_blank"><img src="../assets/img/icons8-youtube.png" alt=""></a></li>
                                            <!-- <li><a class="behance" href="#" target="_blank"><img src="../assets/img/icons8-instagram_new.svg" alt=""></a></li> -->
                                        </ul>
                                    </div>
                                    <div class="search_header_wrapper"><a href=""><img src="../assets/img/icons8-search.png" alt=""></a></div>
                                    <div class="menu_mobile_icons"><a href=""><img src="../assets/img/icons8-xbox_menu.png" alt=""></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VueFixedHeader>
    </div>

</header>
</template>

<script>
import '../assets/css/topbar.css'
import '../assets/css/flex.css'
import '../assets/css/fonts.css'
import VueFixedHeader from 'vue-fixed-header'

const createData = () => ({
  threshold: 74,
  headerClass: 'vue-fixed-header',
  fixedClass: 'vue-fixed-header--isFixed',
  hideScrollUp: false
})


export default {
    components: {
        VueFixedHeader,
    },
    data() {
        return {
            date: ''

        }
    }
}
</script>
