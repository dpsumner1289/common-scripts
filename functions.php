<?php

// 	Basic Google Maps Placemarks - initialize map and add size parameters function


// ## Initialize Map (place in functions.php file)

add_filter( 'bgmp_map-shortcode-called', '__return_true' );

// ## Override Default Settings (place in functions.php file)
   ## Set mapWidth and mapHeight to desired dimensions

add_filter( 'bgmp_clean-map-shortcode-arguments-return', 'overide_BGMP_arguments', 100 );

 function overide_BGMP_arguments( $params ) {

  if( $params['mapWidth'] == '100' ) {
    $params['mapWidth'] = "100%";
  }
  if( $params['mapHeight'] == '500' ) {
    $params['mapHeight'] = "50vh";
  }
  return $params;
 }

 // Map band - matches the styles provided in style.css

if( get_row_layout() == 'wysiwyg_band' ): ?>
	<div class="content-main map-sect">
		<div class="container-fluid" style="padding:0;">
			<div class="section-6" style="padding:0;">
				<div class="container-fluid" style="padding:0;">
					<!--  wysiwyg section
					================================================== -->
					<?php the_sub_field('wysiwyg_body'); ?>
					<!-- ENDS -->
				</div>
			</div>
		</div>
	</div>
<?php endif;

// Add new image sizes
## crop param can be array( x_crop_position, y_crop_position ), true (hard crop) or false (soft crop)

if( function_exists('add_image_size') ){
  add_image_size('3m-custom-image-size', 200, 200, true);
}

add_filter( 'image_size_names_choose', 'my_custom_sizes' );
 
function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        '3m-custom-image-size' => __( '3Media Custom Image Size' ),
    ) );
}

// Set variables to display the image

$image = get_sub_field('image');
$custom_image_id = $image['id'];
$custom_image_size = '3m-custom-image-size';
$resized_img = wp_get_attachment_image( $custom_image_id, $custom_image_size );

// Display the image

echo $resized_img;


// =================================================
//	:: Create SEO-friendly slug ::
// -------------------------------------------------

function make_anchor($str){
	
	$anchor = strtolower($str);
	$anchor = preg_replace("/[^a-z0-9_\s-]/", "", $anchor);
	$anchor = preg_replace("/[\s-]+/", " ", $anchor);
	$anchor = preg_replace("/[\s_]/", "-", $anchor);

	echo '<p style="margin:0; padding:0;"><a name="'. $anchor .'" class="anchorpad" style="margin:0; padding:0;"></a></p>';
}