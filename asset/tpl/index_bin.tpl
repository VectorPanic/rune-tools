<!DOCTYPE html>
<html>
    <head>
        <title>%APP%</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        
        <!-- APPLICATION BUNDLE -->
        <script src="../dist/%APP%.js"></script>
        
        <!-- BOOTSTRAP -->
        <script>
            window.onload = function() {
                %APP%.bootstrap();
            };
        </script>
    </head>
</html>