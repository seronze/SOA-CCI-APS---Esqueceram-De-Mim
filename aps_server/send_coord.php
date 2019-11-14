<?php

    // Inclui arquivo de configuração do banco
    include 'connection.php';

    // if(isset($con)) {
    //     echo 'ok';
    // }

    //$name = $_POST['name'];

    // recebe o conteúdo do POST
    $json = file_get_contents('php://input');
    // formato recebido: key1=value&key2=value&key3=value
    
    $rasp = json_decode($json, true);
    
    // O conteúdo recebido veio de uma forma diferente, separada por '&' então é preciso separar a string removendo o '&'
    // $rasp = explode("&", $json);
    // // agora precisa separar chave e valor, explodindo no '='
    // $lat =  explode("=", $rasp[0])[1];
    // $lon =  explode("=", $rasp[1])[1];
    // //$email =  explode("=", $rasp[2])[1];
    // $rid =  explode("=", $rasp[2])[1];

    // echo $json; // imprime string do jeito que foi recebida
    // echo "\n";
    // echo var_dump($rasp); // imprime detalhadamente a string depois de ser explodida
    // echo "\n";
    // echo explode("=", $rasp[2])[1];
    // echo "\n";

    $lat =  $rasp['latitude'];
    $lon =  $rasp['longitude'];
    $rid =  $rasp['deviceId'];

    //echo $lat;

    // Cria query que verifica se o ID do raspberry já existe
    $query = "SELECT * FROM rasp_location WHERE rasp_id = '$rid'";

    // Executa a query
    $result = mysqli_fetch_assoc(mysqli_query($con, $query));

    //echo $result["id"];
    //echo json_encode($result);


    // Se o ID do rasp já esta no banco
    if(isset($result)) {

        // Apenas atualiza as informações existentes
        $query = "UPDATE rasp_location SET latitude = '$lat', longitude = '$lon' WHERE rasp_id = '$rid'";

        


        if(mysqli_query($con, $query)){

            $msg = 'Coordenadas atualizadas' ;
            
                //$msg2 = "{$lat}";
            $msgJson = json_encode($msg);
            echo $msgJson;


        }
        else{

            echo 'Erro ao atualizar';
        }
    }else {

        // Caso contrário, insira o novo rasp no banco
        $query = "INSERT INTO rasp_location (latitude, longitude, rasp_id) VALUES ('$lat', '$lon', '$rid')";
        if(mysqli_query($con, $query)){

            $msg = 'Coordenadas cadastradas' ;
            $msgJson = json_encode($msg);
            echo $msgJson;
        }
        else{

            echo 'Erro ao cadastrar';
        }
    }

    mysqli_close($con);

    // $file = fopen("/home/higor/Documents/python/sendCoordinates/test.txt", "w");
    // fwrite($file, $user['name']);
    // fclose($file);
?>