// If not using the default content editor, grab the content of an ACF WYSIWYG field within a flexible content loop

<?php
		if ($post->post_content=="" ) { 
			if( have_rows('content_rows', $post->ID) ):
				while( have_rows('content_rows', $post->ID) ): the_row();
					if( get_row_layout() == 'my_flexible_layout' ):
						$search_results_content = get_sub_field('content', $post->ID);
						echo substr(strip_tags($search_results_content), 0, 150);
					endif;
				endwhile;
			endif;
			?>
			<a href="<?php the_permalink(); ?>">Read More</a>
			<?php
		}else{
			the_excerpt();
		}
	?>
