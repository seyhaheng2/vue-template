<template>
<div class="container" id="wrapper_masonry">
    <div class="w-12 grid-sidebar">
        <div class="post_loop_wrapper">
            <div class="wrapper_cat">
                <div class="content_masonry" style="margin-left: -15px;" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-throttle-delay="500">
                    <div class="box" v-for="post in posts" style="margin-bottom: 2rem;" data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-out-back">
                        <div class="post_grid_content_wrapper">
                            <div class="image-post-thumb">
                                <a href="http://jellywp.com/theme/disto/demo/round-white-dining-table-on-brown-hardwood/" class="link_image featured-thumbnail" title="Round white dining table on brown hardwood">
                                    <img width="780" height="450" src="http://jellywp.com/theme/disto/demo/wp-content/uploads/2019/03/daniel-korpai-1296140-unsplash-780x450.jpg" class="attachment-disto_large_feature_image size-disto_large_feature_image wp-post-image" alt="">                
                                    <div class="background_over_image"></div>
                                </a>
                                <span class="meta-category-small"><a class="post-category-color-text" style="background:#36c942" href="http://jellywp.com/theme/disto/demo/category/sports/">Sports</a></span>
                            </div>
                            <div class="post-entry-content">
                                <div class="post-entry-content-wrapper">
                                    <div class="large_post_content">
                                        <h3 class="image-post-title">
                                            <a href="http://jellywp.com/theme/disto/demo/round-white-dining-table-on-brown-hardwood/">{{post.title}}</a>
                                        </h3>
                                        <span class="post_meta">
                                        <span class="jl_author_img_w">
                                            <img src="http://jellywp.com/theme/disto/demo/wp-content/uploads/2018/11/post6-1-1-100x100.jpg" width="30" height="30" alt="Anna Nikova" class="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo">
                                            <a href="http://jellywp.com/theme/disto/demo/author/greedt/" title="Posts by Anna Nikova" rel="author">Anna Nikova</a>
                                        </span>
                                        <span class="post-date"><img src="../src/assets/img/icons8-clock_8.png" alt=""></span>
                                        <p>Mar 10, 2019</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex center css_loader" style="margin-bottom: 40px;">
            <!-- <div class="loader">Loading...</div> -->
            <infinite-loading></infinite-loading>
        </div>
    </div>
</div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="../node_modules/vue-infinite-scroll/vue-infinite-scroll.js"></script>
<script src="https://unpkg.com/vue-infinite-loading@^2/dist/vue-infinite-loading.js"></script>

<script>
import axios from 'axios'
import AOS from 'aos'
import '../src/assets/css/homepage.css'
import '../src/assets/css/loader.scss'
import InfiniteLoading from 'vue-infinite-loading';

export default {
    data() {
        return {
            posts: [],
            limit: 12,
            busy: false

        }
    },
    components: {
        InfiniteLoading,
    },
    methods: {
        loadMore() {
            this.busy = true;
            axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                const append = response.data.slice(
                    this.posts.length,
                    this.posts.length + this.limit
                );
                this.posts = this.posts.concat(append);
                this.busy = false;
            });
        }
    },
    created() {
        this.loadMore();
    }
};
AOS.init();
</script>

<style>
@import "https://unpkg.com/aos@2.3.1/dist/aos.css";
</style>
