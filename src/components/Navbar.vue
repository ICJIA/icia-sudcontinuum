<template lang="html">




  <div>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand" href="http://www.icjia.state.il.us"><img src="/static/logos/icjia1.png" height="25" style="margin-top: -2px; float: left" /></a>&nbsp;&nbsp;&nbsp;<a class="navbar-brand"><span class="hidden-xs">REDUCING SUBSTANCE USE DISORDERS<span class="hidden-xs hidden-sm"> AND RELATED OFFENDING</span></span></a>
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">


          </ul>

          <ul class="nav navbar-nav navbar-right">

            <li class="dropdown" style="margin-right: 20px">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="text-transform: uppercase;">Contents<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#page-top" class="scroll">Introduction</a></li>
                <li><a href="#section-1" class="scroll">Intercepts</a></li>
                <li><a href="#section-things-to-consider" class="scroll">Things to Consider</a></li>
                <li><a href="#section-additional-resources" class="scroll">Additional Resources</a></li>
                <li><a href="#section-references" class="scroll">References</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="http://www.icjia.state.il.us" target="_blank" style="color: #888">ICJIA Website&nbsp;&nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></a></li>
              </ul>
            </li>

            <!-- <li class="hidden-md hidden-lg"><a href="javascript:history.go(0)"><i class="fa fa-refresh" aria-hidden="true"></i></a></li> -->

          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>



  </div>



</template>

<script>
export default {

  mounted() {

      $(function() {


        $(".navbar-brand").click(function() {
          window.location.reload();
        });
        // Select all links with hashes
$('a.scroll')
  // Remove links that don't actually link to anything
  // .not('[href="#"]')
  // .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1');
          //   $target.focus();
          // };
        });
      }
    }
  });
      })




  }
}
</script>

<style lang="css" scoped>

.navbar-toggler-right {

    bottom: 5px;
}

.navbar-brand {text-transform: uppercase;}
a.navbar-brand {color: #fff !important}

.dropdown-menu li a {text-transform: uppercase; font-weight: 700 !important}
</style>
