<?php
// valid values for $font_format are bold, italic, and bolditalic
$style = '';
if ($font_format) {
	if ($font_format == 'bold') {
		$style = 'style="font-weight: bold;"';
	}

	if ($font_format == 'italic') {
		$style = 'style="font-style: italic;"';
	}

	if ($font_format == 'bolditalic') {
		$style = 'style="font-weight: bold; font-style: italic;"';
	}
}

echo '<p ' . $style . '>' . get_the_modified_date() . '</p>';
