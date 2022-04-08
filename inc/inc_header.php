<?php $sSiteTitle = "UTIPULP" ?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>
      <?php if( $sPageTitle != null ) {
        echo $sPageTitle . " - " . $sSiteTitle;
      } else {
        echo $sSiteTitle;
      } ?>
    </title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css" />
  </head>

  <body>
    
  <div class="header container">
    <div class="content">
      <div class="menu-toggle">
        <span></span>
        <span>MENU</span>
        <span></span>
      </div>
      <p class="logo">UTIPULP</p>
      <div class="baseline">The Group of European Market wood pulp users</div>
    </div>
  </div>

  <nav class="nav container">
    <ul>
      <li><a href="presentation.php" <?php if( basename($_SERVER['PHP_SELF']) == "presentation.php" ) { echo 'class="active"'; } ?>>Presentation</a></li>
      <li><a href="definitions.php" <?php if( basename($_SERVER['PHP_SELF']) == "definitions.php" ) { echo 'class="active"'; } ?>>Definitions</a></li>
      <li><a href="statistics.php" <?php if( basename($_SERVER['PHP_SELF']) == "statistics.php" ) { echo 'class="active"'; } ?>>Statistics</a></li>
      <li><a href="associations.php" <?php if( basename($_SERVER['PHP_SELF']) == "associations.php" ) { echo 'class="active"'; } ?>>Associations</a></li>
      <li class="members"><a href="#">Members' access</a></li>
    </ul>
  </nav>