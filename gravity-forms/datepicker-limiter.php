<?php 
function datepicker_limiter() {
	echo "<script>
		gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
		// Apply to field 4 only 
		if ( formId == 1 && fieldId == 4 ) {
		    optionsObj.minDate = 0;
		}
		return optionsObj;
		});
		</script>";
}

add_action('wp_footer', 'datepicker_limiter', 30);