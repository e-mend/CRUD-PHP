<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="js/script.js" defer></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">  
        
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <link rel="stylesheet" href="css/styles.css">

        <title>empresa</title>
    </head>
<body>
    

    <div class="lgn-container-main">

        <form action="login.php" method="POST">

        <div class="form__group field">
            <input type="text" class="form__field" name="user" id="user" placeholder="Login" required="">
            <label for="login" class="form__label">Login</label>
            <span></span>
        </div>
        

        <div class="form__group field">
            <input type="password" class="form__field" name="pass" id="pass" placeholder="Password" required="">
            <label for="pass" class="form__label">Password</label>
        <span>
                <ion-icon name="eye"></ion-icon>
            <ion-icon name="eye-off-outline"></ion-icon>
        </span>
        </div>

        <button type="submit">ENTRAR</button>
        <span></span>

        </form>
    </div>
    
</body>
</html>