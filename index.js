console.log('conectado a index.js');

$(document).ready(function() {
    tablaUsuarios = $('#mostrarPrduct').DataTable({  
        "ajax":{            
            "url": "dataBase/GetProduct.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":""
        },
        "columns":[
            {"defaultContent": "  <p> <div class='form-check'> <input class='form-check-input' type='checkbox' value='' name='checkTip' id=''><label class='form-check-label' for='selectAll'> </label> </div></p> "},
            {"data": "id_producto"},
            {"data": "descripcion"},
            {"data": "precio"},
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"},
        ],
        
        //CADA VEZ QUE SE PINTE, AGREGA UN ID
        "fnCreatedRow": function( nRow, aData, iDataIndex ) {
            $('button:eq(0)', nRow).attr('data-id', aData.id_producto);
            $('button:eq(1)', nRow).attr('data-id', aData.id_producto);
            $('input:eq(0)', nRow).val(aData.id_producto);

        },

    });     
     
    var fila;
    $(document).on('click', '.btnBorrar' , function(){
        fila = $(this);
        const id =  $(this).attr('data-id');
        $.ajax({
            url: "dataBase/DeleteProduct.php",
            type: "POST",
            datatype:"json",    
            data:  {'checked': id},    
            success: function(res) {
                console.log(res);
                tablaUsuarios.row(fila.parents('tr')).remove().draw();                  
             }
          });	
    });

    $(document).on('click', '.btnEditar' , function(){
        fila = $(this);
        const id =  $(this).attr('data-id');
        console.log(id);
        /* $.ajax({
            url: "dataBase/DeleteProduct.php",
            type: "POST",
            datatype:"json",    
            data:  {'checked': id},    
            success: function(res) {
                console.log(res);
                tablaUsuarios.row(fila.parents('tr')).remove().draw();                  
             }
        });	 */
    });
    
    
    //SELECT ALL LOS CHECK
    $("#selectAll").click(function() { 
        console.log('SELECIONAR TODO LOS CHECK');
        $("input[name='checkTip']").prop("checked", this.checked);
    }) 
    
    $( document ).on( "click", "input[name='checkTip']", function(){  
        console.log(' CHECK');
        if ($("input[name='checkTip']").length == $("input[name='checkTip']:checked").length) {
            $("#selectAll").prop("checked", true);
        } else {
            $("#selectAll").prop("checked", false);
        }   
    });
})
