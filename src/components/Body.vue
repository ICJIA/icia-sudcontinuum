<template lang="html">
  <div>
  <section id="section-1">
	<div class="text-center">
		<div class="section-title">
			The Intercepts
		</div>
		<div style="margin-bottom: 50px;"><i class="fa fa-chevron-down fa-3x" style="color: #ccc; margin-top: 10px;" aria-hidden="true"></i></div>
	</div>
	<div id="cd-timeline-1" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->





	</div> <!-- cd-timeline -->



  <!-- Iterate through modal objects -->


</section>






























<div v-for="item in modalMap">
  <modal-helper :id="item.id" :pdf="item.pdf">

    <div slot="title">
      {{item.title}}
    </div>

    <div slot="body" v-html="item.body"></div>

  </modal-helper>
</div>




</div>
</template>

<script>
import { modalMap } from '@/modals'
import ModalHelper from '@/components/ModalHelper'

export default {
  components: {
      ModalHelper,


  },
  data() {
      return {
          modalMap,
      }
  },
}
</script>

<style lang="css">
</style>
