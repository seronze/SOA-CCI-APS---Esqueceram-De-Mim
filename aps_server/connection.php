<?php
 
    // Host do servidor, nesse caso criei o banco no localhost
    $server = "localhost";
    
    // Nome de usuário do banco
    $user = "root";
    
    // Senha do banco
    $pw = "";
    
    // Nome do banco de dados
    $db = "teste";

    // Cria conexão com o banco
    $con = mysqli_connect($server, $user, $pw, $db);

?>