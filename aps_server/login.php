<?php
 
    // Importa arquivo com as configurações do banco
    include 'connection.php';
    
    // Armazena o conteúdo JSON recebido
    $json = file_get_contents('php://input');
    
    // Decodifica o JSON recebido
    $user = json_decode($json, true);
    
    // Armazena email e senha pelas suas respectivas chaves do JSON decodificado
    $email = $user['email'];
    $password = $user['password'];

    // Cria query que verifica se email e senha estão corretos
    $query = "SELECT * FROM user_details WHERE email = '$email' AND PASSWORD = '$password' ";

    // Executa a query
    $result = mysqli_fetch_assoc(mysqli_query($con, $query));

    // Se a query retornou um resultado
    if(isset($result)){

        $name = $result['name'];
        // Mensagem enviada "OK"
        $success = "status=OK&name=$name";
        
        // Converte a mensagem em JSON
        $successJson = json_encode($success);
        
        // Envia a mensagem
        echo $successJson; 

    }
    
    else{
    
        // Caso contrário, mensagem de erro
        $fail = 'Usuário e Senha inválidos.' ;
        
        $failJson = json_encode($fail);

        echo $failJson ;
    
    }
    
    // Fecha conexão
    mysqli_close($con);
?>