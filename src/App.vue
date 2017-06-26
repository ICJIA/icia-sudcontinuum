<template>

<div>

    <div id="outdated"></div>


<!-- 
<transition name="fade">
                      <router-view class="view"></router-view>
                      </transition>

<my-footer /> -->


             <router-view class="view"></router-view>


<my-footer />



</div>
</template>

<script>

import MyFooter from '@/components/Footer'


export default {

    name: 'app',
    created: function() {
        //console.log(this.$route.path)
    },

    mounted: function() {



        $(function() {


            /////////////////////////////////////////////////////////
            // Outdated browser plugin. Thumbs down on anything less than IE11.
            /////////////////////////////////////////////////////////
            outdatedBrowser({
                bgColor: '#f25648',
                color: '#ffffff',
                lowerThan: 'borderImage',
                languagePath: '/static/outdated-browser/outdatedbrowser/lang/en.html'
            })
        });




    },
    components: {

        MyFooter,
    }
}
</script>

<style lang="scss">

// @import "./scss/base";

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.btn-modal {z-index: 10000}



</style>
