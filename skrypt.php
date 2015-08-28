<!DOCTYPE html>
<html lang="pl-PL">
<head>
	<title>Cherry Dots e-mail</title>
	<meta charset="UTF-8">
	<meta http-equiv="content-type">
	<link rel="stylesheet" type="text/css" href="css/style_php.css">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<link href='http://fonts.googleapis.com/css?family=Josefin+Sans:300&subset=latin-ext' rel='stylesheet' type='text/css'>
	<meta name="viewport" content="width=device-width initial-scale=1.0">

	<!-- <style type="text/css">
		body {
			width: 100vw;
			height: 100vh;
			margin: 0 0;
			background-image: url(../images/background_czb_2.jpg);
			-webkit-background-size: cover;
			background-size: cover;
		}

		p {
			display: inline-block;
			color: #7c0042;
			font-family: 'Josefin Sans', 'verdana', sans-serif;
			font-size: 30px;
			font-weight: 300;
			text-align: center;
			text-transform: uppercase;
			line-height: 50px;
			position: relative;
		}

		p a {
			text-transform: uppercase;
			color: grey;
		}

		p a:hover {
			color: #7c0042;
		}
	</style> -->

</head>

<body>

 
<?PHP

if (!empty($_POST['email'] ) ){

	$adresat = 'katarzyna.walenko@gmail.com'; 	// pod ten adres zostanie wysłana 							// wiadomosc
	@$email = $_POST['email'];
	@$content = $_POST['content'];
	$header = 	"From: ktos@serwer.pl \nContent-Type:".
			' text/plain;charset="UTF-8"'.
			"\nContent-Transfer-Encoding: 8bit";
	$header = $_POST['email'] .
			' text/plain;charset="UTF-8"'.
			"\nContent-Transfer-Encoding: 8bit";

	if (mail($adresat, 'Kontakt z www.cherrydots.pl', $content, $header))
		echo '<p>Dziękuję za przesłanie wiadomości<br> <a href="../#tab-1">Powrót</a></p>';
	else 
		echo '<p>Twoja wiadomość nie została wysłana <br> <a href="../#tab-1">Powrót</a></p>';

}
?>
</body>
</html>
