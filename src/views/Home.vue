<template>

  <div>

    <introduction />

    <my-body />

    <things-to-consider />


    <additional-resources />

    <references />

</div>

</template>

<script>

    import {
        stripTags, titleCase
    } from '@/utilities'

    import Introduction from '@/components/Introduction'
    import MyBody from '@/components/Body'
    import ThingsToConsider from '@/components/ThingsToConsider'
    import AdditionalResources from '@/components/AdditionalResources'
    import References from '@/components/References'
    import metaInfo from '@/meta'
    // import moment from 'moment'


    const description = `There are currently an estimated 2.3 million individuals in U.S. prisons and jails, with 1.5 million meeting DSM-IV medical criteria for addiction. Further, approximately 70 percent of state and 64 percent of federal inmates reported regular drug use prior to imprisonment; about 25 percent of violent offenders in state prisons committed their offenses under the influence of drugs`
    const title = titleCase("REDUCING SUBSTANCE USE DISORDERS AND RELATED OFFENDING")


    export default {
        name: 'Home',
        metaInfo,
        mounted() {
          $(function() {


// var $window = $(window),
//     win_height_padded = $window.height() * 1.1,
//     isTouch = Modernizr.touch;
//
// if (isTouch) {
//     $('.revealOnScroll').addClass('animated');
// }
//
// $window.on('scroll', revealOnScroll);
//
// function revealOnScroll() {
//     var scrolled = $window.scrollTop(),
//         win_height_padded = $window.height() * 1.1;
//
//     // Show
//     $(".revealOnScroll:not(.animated)").each(function() {
//         var $this = $(this),
//             offsetTop = $this.offset().top -20;
//
//         if (scrolled + win_height_padded > offsetTop) {
//             if ($this.data('timeout')) {
//                 window.setTimeout(function() {
//                     $this.addClass('animated ' + $this.data('animation'));
//                 }, parseInt($this.data('timeout'), 10));
//             } else {
//                 $this.addClass('animated ' + $this.data('animation'));
//             }
//         }
//     });
//     // Hide
//     $(".revealOnScroll.animated").each(function(index) {
//         var $this = $(this),
//             offsetTop = $this.offset().top;
//         if (scrolled + win_height_padded < offsetTop) {
//             $(this).removeClass('animated fadeInLeftBig fadeInRightBig')
//         }
//     });
// }
//
// revealOnScroll();



$('.webui-popover-trigger-main').webuiPopover({
    title: 'REFERENCE',
    animation: 'pop',
    content: function getFootnote() {
        var el = $(this).attr('href')
        return $(el).html()
    }
});

// Vertical timeline Cody House: https://codyhouse.co/gem/vertical-timeline/
var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.78;

//hide timeline blocks which are outside the viewport
hideBlocks(timelineBlocks, offset);

//on scolling, show/animate timeline blocks when enter the viewport
$(window).on('scroll', function() {

    (!window.requestAnimationFrame) ?
    setTimeout(function() {
        showBlocks(timelineBlocks, offset);

    }, 100): window.requestAnimationFrame(function() {
        showBlocks(timelineBlocks, offset);
    });
});

function hideBlocks(blocks, offset) {

    blocks.each(function() {

        ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('animated').removeClass('fadeIn');
    });
}

function showBlocks(blocks, offset) {
    blocks.each(function() {
        ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in') &&
            $(this).find('.cd-timeline-content > h2').addClass('animated').addClass('fadeIn') &&
            $(this).find('.cd-timeline-content > p').addClass('animated').addClass('fadeIn');
    });
}
});


        },


        components: {

            Introduction,
            MyBody,
            ThingsToConsider,
            AdditionalResources,
            References

        },
        data() {
            return {
                title,


            }
        },
        methods: {

        },
    }

</script>

<style>

  .btn {
      color: #fff !important
  }
  a:hover {
      cursor: pointer;
  }

  strong {font-weight: 900 !important}

  em {
      font-style: italic;
      font-weight: 400 !important;
  }

  em.muted {color: #888}

  .footnotes {padding-left: 20px; padding-right: 20px;}


</style>
