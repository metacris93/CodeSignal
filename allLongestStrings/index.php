function allLongestStrings($inputArray) {
	$arr = array_map("strlen", $inputArray);
	$maxValue = max($arr);
	return array_values(array_filter($inputArray, function ($var) use($maxValue) { return strlen($var) == $maxValue; }));
}
$numbers = ["aba", "aa", "ad", "vcd", "aba"];
$result = allLongestStrings($numbers);
print_r($result);
