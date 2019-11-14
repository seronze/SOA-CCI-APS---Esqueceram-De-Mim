<?php
 
    // Importa arquivo com as configurações do banco
    include 'connection.php';
    
    // Armazena o conteúdo JSON recebido
    $json = file_get_contents('php://input');
    
    // Decodifica o JSON recebido
    $user = json_decode($json, true);
    
    // Armazena o id do raspberry e senha pelas suas respectivas chaves do JSON decodificado
    $rasp = $user['rasp'];
    $email = $user['email'];

    // Query que verifica se email e raspberry já estão vinculados
    $query = "SELECT * FROM rasp_location WHERE user_email = '$email' AND rasp_id = '$rasp'";

    $result = mysqli_fetch_assoc(mysqli_query($con, $query));

    if(isset($result)) {
        $msg = "Dispositivo e e-mail já estão vinculados";
        
    } else {

        $query = "INSERT INTO rasp_location (latitude, longitude, user_email, rasp_id,allowed) VALUES (0, 0, '$email', '$rasp', 1)";

        if(mysqli_query($con, $query)){
        
            // Se a inserção foi realizada com sucesso
            $msg = "Usuário vinculado ao dispositivo '$rasp'" ; 
        }
        else{
            echo 'Erro ao vincular';
        }
    }

    // Converte mensagem em JSON
    $msgJson = json_encode($msg);
            
    // Envia mensagem
    echo $msgJson;

    // Fecha conexão
    mysqli_close($con);
?>