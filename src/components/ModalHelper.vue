<template lang="html">
<div class="modalHelper">


  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span style="font-weight: 900" aria-hidden="true" >X</span></button>
        <h4 class="modal-title" style="padding: 5px"><slot name="title"></slot></h4>
      </div>
      <div class="modal-body" style="padding-top: 5px; padding-left: 45px; padding-right: 45px;">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
          <!-- <a class="btn btn-primary" :href="pdf" :download="parseFilename(pdf)"><i class="fa fa-file-pdf-o" aria-hidden="true">&nbsp;&nbsp;</i>Download PDF</a> -->
        <button type="button" class="btn btn-default btn-modal" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



</div>
</template>

<script>
export default {

  methods: {

    parseFilename (pdf) {
      // strip path -- leave filename for PDF download
      return pdf.split('\\').pop().split('/').pop();
    }
  },

  mounted() {

    $(function() {
      $('.webui-popover-trigger-i0,.webui-popover-trigger-i1,.webui-popover-trigger-i2,.webui-popover-trigger-i30,.webui-popover-trigger-i4,.webui-popover-trigger-i5, .webui-popover-trigger').webuiPopover(
        {title:'REFERENCE', animation:'pop', content:function getFootnote() {
          var el = $(this).attr('href')
          return $(el).html()
        }});

});


  },



  props: ['id','pdf'],


}
</script>

<style lang="css">
button.close {color: #000 !important}
.modal-header {background: #aaa; color: #fff}
.modal-title {font-family: 'Lato', sans-serif; font-weight: 700; text-transform: uppercase;}
button.btn:hover {cursor: pointer; cursor: hand;}
.btn-default {color: #000 !important; font-weight: 900; text-transform: uppercase}

</style>
