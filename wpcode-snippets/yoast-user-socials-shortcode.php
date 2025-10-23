<?php
// partly referenced from https://newpulselabs.com/yoast-social-profile-links-website/
$author_id = get_the_author_meta('ID');
$social_link = get_the_author_meta($social, $author_id);
$social_name = '';
if ($social == 'url') {
	$social_name = 'Website';
} else if ($social == 'twitter') {
	$social_name = 'X';
} else {
	$social_name = ucfirst($social);
}

if ($social_link) {
	// If the social is twitter, prepend the URL with the domain
	if ($social == 'twitter') {
		$social_link = 'https://x.com/' . $social_link;
	}
	echo '<a href="' . esc_url($social_link) . '">' . $social_name . '</a>';
}
