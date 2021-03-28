<?php
function commonCharacterCount($s1, $s2) {
    $a1 = array_count_values(str_split($s1));
    $a2 = array_count_values(str_split($s2));

	$i1 = array_intersect_key($a1, $a2);
	$i2 = array_intersect_key($a2, $a1);

	$keys = array_keys($i1);

	$result = 0;
	for ($i=0; $i < count($i1); $i++)
	{
		$result += min($i1[$keys[$i]] , $i2[$keys[$i]]);
	}
	return $result;
}
$s1 = "aa";
$s2 = "aaaa";

commonCharacterCount($s1, $s2);
