<!DOCTYPE html>
<html>
    <head>
        <title>%APP% - DEBUG</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        
        <!-- SOFTWARE DEVELOPMENT KIT -->
        <script src="../lib/rune.js"></script>
        
        <!-- APPLICATION SOURCE CODE -->
        <script src="./../src/scope/Manifest.js"></script>
        <script src="./../src/data/resource/Requests.js"></script>
        <script src="./../src/scene/game/Game.js"></script>
        <script src="./../src/system/Main.js"></script>
        <script src="./../src/scope/Alias.js"></script>
        
        <!-- BOOTSTRAP -->
        <script>
            window.onload = function() {
                %APP%.bootstrap();
            };
        </script>
    </head>
</html>