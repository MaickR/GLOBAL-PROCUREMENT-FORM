$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores ='';

        // Validado Nombre ==============================
        if( $('#nombre_proveedor').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
          $('#nombre_proveedor').css("border-bottom-color", "#F14B4B")  
            
        }else{
            $('#nombre_proveedor').css("border-bottom-color", "#d1d1d1") 
        }

         // Validado NIT ==============================
         if( $('#NIT').val() == '' ){
            errores += '<p>Escriba el NIT </p>';
          $('#NIT').css("border-bottom-color", "#F14B4B")
        }else{
            $('#NIT').css("border-bottom-color", "#d1d1d1")
        }

         // Validado #Contrato ==============================
         if( $('#numero_contrato').val() == '' ){
            errores += '<p>Escriba el numero de contrato</p>';
           $('#numero_contrato').css("border-bottom-color", "#F14B4B")
        }else{
            $('#numero_contrato').css("border-bottom-color", "#d1d1d1")
        }

         // Validado Objeto de contrato ==============================
         if( $('#objeto_contrato').val() == '' ){
            errores += '<p>Escriba el Objeto del contrato</p>';
          $('#objeto_contrato').css("border-bottom-color", "#F14B4B")
        }else{
            $('#objeto_contrato').css("border-bottom-color", "#d1d1d1")
        }

         // Validado valor ejecutado  ==============================
         if( $('#valor_ejecutado').val() == '' ){
            errores += '<p>Digite el valor EJECUTADO</p>';
          $('#valor_ejecutado').css("border-bottom-color", "#F14B4B")
        }else{
            $('#valor_ejecutado').css("border-bottom-color", "#d1d1d1")
        }

         // Validado fecha inicio ==============================
         if( $('#fecha_inicio').val() == '' ){
            errores += '<p>Escriba la fecha de inicio</p>';
            $('#fecha_inicio').css("border-bottom-color", "#F14B4B")
        }else{
            $('#fecha_inicio').css("border-bottom-color", "#d1d1d1")
        }

         // Validado fecha fin  ==============================
         if( $('#fecha_fin').val() == '' ){
            errores += '<p>Escriba la fecha de finalizacion</p>';
           $('#fecha_fin').css("border-bottom-color", "#F14B4B")
        }else{
            $('#fecha_fin').css("border-bottom-color", "#d1d1d1") 
        }

        //ENVIANDO MENSAJES
        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
            '<div class="mensaje_modal">'+
                '<h3>errores detectados</h3>'+
                errores+
                '<span id="btn_Close">Cerrar</span>'+
            '</div>'+
        '</div>'


            $('body').append(mensajeModal);                     

        }

            //CERRANDO CUADRO MODLA
            
            $('#btn_Close').click(function(){
                $('.modal_wrap').remove();
            });

        });            
    });        