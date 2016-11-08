<?
$link = mysql_connect('222.35.136.215', 'gforce', 'ex_Gf0rce');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db("gforce");
$result = mysql_query("select * from gforce_sysconfig");
while($row=mysql_fetch_array($result)){
print_r($row);
}
echo 'Connected successfully';
mysql_close($link);

?>
