<template lang="html">
  <div>
  <section id="section-1">
	<div class="text-center">
		<div class="section-title">
			Intercepts
		</div>
		<div style="margin-bottom: 50px;"><i class="fa fa-chevron-down fa-3x" style="color: #ccc; margin-top: 10px;" aria-hidden="true"></i></div>
	</div>
	<div id="cd-timeline-1" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 0: Prevention</strong></h2>

<p>This intercept involves community partnerships, prevention, and behavioral health services. The goal is to provide the earliest intervention effort to prevent criminal justice involvement.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal0">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 1: Law Enforcement</strong></h2>

<p>This intercept involves first contact with the criminal justice system, including dispatch, law enforcement, and emergency services or crisis response teams.

</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div>

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 2: Initial Detention/Initial Court Hearings </strong></h2>

<p>This intercept involves post-arrest, initial detention, or initial court hearings. This includes pre-trial programs and public defender or prosecution programs.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal2">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div>

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 3: Courts and Jails </strong></h2>

<p>This intercept involves the jail or court and includes specialty court dockets and jail-based services.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal3">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div>

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 4: Institutions and Reentry </strong></h2>

<p>This intercept involves prison or reentry from prison or jail. This includes prison-based services for reentry and coordination of community-based services.

</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal4">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->


    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-child">
				<i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
			</div>

			<div class="cd-timeline-content">
        <h2 id="section-1i0"><strong>Intercept 5: Community Corrections </strong></h2>

<p>This intercept involves probation and parole programs and services. This includes connecting individuals to appropriate community-based services and resources.</p>

<button type="button" class="btn btn-primary btn-modal cd-container-read-more" data-toggle="modal" data-target="#modal5">
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
