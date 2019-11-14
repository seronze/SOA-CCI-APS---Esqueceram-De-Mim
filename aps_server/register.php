<?php
    
    // Importa arquivo com as configurações do banco
    include 'connection.php';

    // Armazena o conteúdo JSON recebido
    $json = file_get_contents('php://input');

    // Decodifica o JSON recebido
    $user = json_decode($json, true);
    
    // Armazena email e senha pelas suas respectivas chaves do JSON decodificado
    $name = $user['name'];
    $sobrenome = $user['sobrenome'];
    $telefone = $user['telefone'];
    $email = $user['email'];
    $password = $user['password'];

    $endereco = $user['endereco'];
    $numero = $user['numero'];
    $bairro = $user['bairro'];
    $cidade = $user['cidade'];
    $estado = $user['estado'];

    
    // Cria query para verificar se email já está cadastrado
    $query = "SELECT * FROM user_details WHERE email='$email'";
    
    // Executa a query
    $result = mysqli_fetch_array(mysqli_query($con, $query));
    
    // Verifica se a query retornou resultado
    if(isset($result)){
        $msg = 'Email já cadastrado.';
        
        // Converte mensagem em JSON
        $msgJson = json_encode($msg);
        
        // Envia mensagem
        echo $msgJson ; 
    }
    else{
        // Cria query para inserir novo usuário
        $query = "INSERT INTO user_details (name,sobrenome,email, password,telefone,endereco,numero,bairro,cidade,estado) VALUES
 ('$name','$sobrenome', '$email', '$password','$telefone','$endereco','$numero','$bairro','$cidade','$estado')";
        
        if(mysqli_query($con, $query)){
        
            // Se a inserção foi realizada com sucesso
            $msg = 'Usuario cadastrado com sucesso' ;
            
            // Converte mensagem em JSON
            $msgJson = json_encode($msg);
            
            // Envia mensagem
            echo $msgJson;
        }
        else{
            echo 'Erro ao cadastrar';
        }
    }
    
    // Fecha conexão
    mysqli_close($con);
?>