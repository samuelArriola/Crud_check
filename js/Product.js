console.log('conectado a Product.js');
let ListaDinamica = document.getElementById('mostrarPrduct');
let templateFruta = document.getElementById('templatePrduct').content;
const fragment = document.createDocumentFragment();

const ejecutarAjax = (url, datos, success) => {
    $.ajax({
        url: url,
        data: JSON.stringify(datos),
        // dataType: "html",
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: success,
        error: function (result) {
            //console.log("ERROR " + result.status + ' ' + result.statusText);
            console.log(result);
        }
    });
}

const ejecutarAjax2 = (url, datos, success) => {
    $.ajax({
        type: "POST",
        url: url,
        data: datos,
        dataType: "html",
        success: success
    })
}
//Get Product 
function GetProduc() {
    ejecutarAjax("dataBase/GetProduct.php", {}, resGetProduc)
}

function resGetProduc( res ) {
    ListaDinamica.innerHTML = '';
    res.forEach((item) => {
        templateFruta.querySelector('th').textContent = item.id_producto;
        templateFruta.querySelectorAll('td')[0].textContent = item.descripcion;
        templateFruta.querySelectorAll('td')[1].textContent = item.precio;
        templateFruta.querySelector('.filled-in').value = item.id_producto;
        
        // templateFruta.querySelector('.btn-info').dataset.id = item.IdProducto;
        // templateFruta.querySelector('.btn-danger').dataset.id = item.IdProducto;
        const clone = templateFruta.cloneNode(true);
        fragment.appendChild(clone);

    });

    ListaDinamica.appendChild(fragment);
}


ListaDinamica.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        data = { id: e.target.dataset.id }
        ejecutarAjax("Producto.aspx/DeleteProducto", data, guardado);
    }

    if (e.target.classList.contains("btn-info")) {
        data = { id: e.target.dataset.id }
        ejecutarAjax("Producto.aspx/GetProductoEdi", data, PintarPreducto);
    }
})

$('#someDelete').on('click', () => {
    var checked = [];
        $("input[name='checkTip']:checked").each(function() {
            checked.push(($(this).attr("value")));
        });

        $.ajax({
            type: "POST",
            url: "dataBase/DeleteProduct.php",
            data: { 'checked': checked.join(',')  },
            success: function(response) {
                GetProduc()
                // M.toast({ html: response });
                
            }
        })

        // ejecutarAjax("dataBase/DeleteProduct.php", { checked }, res => console.log(res) )
        
})

//SELECT ALL
$("#selectAll").click(function() { 
    $("input[name='checkTip']").prop("checked", this.checked);
}) 

$( document ).on( "click", "input[name='checkTip']", function(){  
    if ($("input[name='checkTip']").length == $("input[name='checkTip']:checked").length) {
        $("#selectAll").prop("checked", true);
    } else {
        $("#selectAll").prop("checked", false);
    }   
});