<?php
    include 'connection.php';

    // 
    $rid = "A1A1A1";

    // Cria query que verifica se o ID do raspberry já existe
    $query = "SELECT latitude, longitude FROM rasp_location WHERE rasp_id = '$rid' AND allowed = 1";

    // Executa a query
    $result = mysqli_fetch_assoc(mysqli_query($con, $query));

    if(isset($result)){

        $lat = $result['latitude'];
        $lon = $result['longitude'];

        echo "{$lat}&{$lon}";
        //echo json_encode($result);

    }
    
    else{
    
        // Caso contrário, mensagem de erro
        $fail = 'Não foi possível retornar as coordenadas.' ;
        
        $failJson = json_encode($fail);

        echo $failJson ;
    
    }
    
    // Fecha conexão
    mysqli_close($con);
?>