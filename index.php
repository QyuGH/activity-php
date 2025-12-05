<?php  
    $current_page = isset($_GET['page']) ? $_GET['page'] : 'home';

    $page_title = ucfirst($current_page);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forest Bean</title>
        <link href="styles/main.css" rel="stylesheet">
        <link href="styles/header.css" rel="stylesheet">
        <link href="styles/footer.css" rel="stylesheet">
    </head>
    <body>
        <?php require_once 'header.php'; ?>
        <main class="main-container">
            <?php require_once "pages/{$current_page}.php"; ?>
        </main>
        <?php require_once 'footer.php'; ?>
        </div>
    </body>
</html>
