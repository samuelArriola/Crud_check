<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Produtc</title>
</head>
<body>
    <a href="tabla.php">Tabla</a>
    <div class="container  section">
        <table class="container responsive-table  ">
            <thead >
                <tr class="pink lighten-4">
                    
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>	
                    <th class=" center">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" id="selectAll" />
                                <span>
                                </span>
                            </label>
                        </p>
                    </th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                    <th></th>	
                    <th class=" center">
                        <p>
                            <label>
                              
                                <span>
                                <button id="someDelete" type="buttom" style="background: none; border:none" class="hoverable red-text"><i class=" material-icons " >delete</i></button>

                                </span>
                            </label>
                        </p>
                    </th>
                </tr>
             </thead>
            <tbody id="mostrarPrduct">
                <th></th>
                <th></th>
                <th>
                </th>
                <th class=" center">
                    <button id="someDelete" type="buttom" style="background: none; border:none" class="hoverable red-text"><i class=" material-icons " >delete</i></button>  
                </th>

                <template id="templatePrduct">
                    <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <th class=" center">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" name="checkTip" />
                                <span></span>
                            </label>
                        </p>
                    </th>
                    </tr> 
                </template>
            </tbody>
        </table>	 
    </div>    


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<script>document.addEventListener('DOMContentLoaded', function() { M.AutoInit();  GetProduc();});</script>
	<script src="js/Product.js"></script> 
</body>
</html>