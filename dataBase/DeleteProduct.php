<?php 
    include("../config/conexion.php"); 

    $checked = $_POST['checked'];
    echo  $checked;
    $sql="DELETE FROM producto WHERE id_producto IN ($checked)";
    $resul = mysqli_query($con, $sql);

    if(!$resul){
        echo 'no eliminado, CONTACTE A SU INGENIRO DE SISTEMAS';
    }else{
    echo('Usuario borrado exitosamente');
    } 
?>