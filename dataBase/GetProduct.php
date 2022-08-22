<?php 
    include("../config/conexion.php"); 

    $tabla="";
    $sql="SELECT * FROM producto";
    $resul = mysqli_query($con, $sql);
    while( $row = mysqli_fetch_array($resul) ) {
        $data[] = array(
            'id_producto' => $row['id_producto'],
            'descripcion' => $row['descripcion'],
            'precio' => $row['precio'],
        );
    }; 
    if(!isset($data))
    {
        $data=[];
    }
 
    echo json_encode($data);
?>