






//////////////// ГРУППЫ ВЕЩЕСТВ ///////////////////////////////////////////




let gruppy = [

];

gruppy.push(
    [
        'Металлы',      // название
        'metally',      // идентификатор
    ]
 );

 gruppy.push(
    [
        'Неметаллы',      // название
        'nemetally',      // идентификатор
    ]
 );

gruppy.push(
    [
        'Оксиды',      // название
        'oksidy',      // идентификатор
    ]
 );


gruppy.push(
    [
        'Соли',      // название
        'soli',      // идентификатор
    ]
 );


 gruppy.push(
    [
        'Кислоты',      // название
        'kisloty',      // идентификатор
    ]
 );

 gruppy.push(
    [
        'Основания',      // название
        'osnovaniya',      // идентификатор
    ]
 );







//////////////// ГРУППЫ ВЕЩЕСТВ ///////////////////////////////////////////























////////////////  ВЕЩЕСТВА ////////////////////////////////////////


let material = [

];



material.push(
    [
        'Железо',             // название
        'Fe<sub>3</sub>',     // формула
        3,                    // валентность
        'metally',            // группа веществ
        'fe3',             // идентификатор
        ''                    // название 2
    ]
 );




material.push(
    [
        'Хлор',               // название
        'Cl',                 // формула
        1,                    // валентность
        'gazy',                // группа веществ
        'hlor',               // идентификатор
        ''                    // название 2
    ]
 );




material.push(
    [
        'Хлорид натрия',      // название
        'NaCl',               // формула
        '',                    // валентность
        'soli',                // группа веществ
        'nacl',               // идентификатор
        'Поваренная соль'     // название 2
    ]
 );



material.push(
    [
        'Оксид железа',                     // название
        'Fe<sub>2</sub>O<sub>3</sub>',      // формула
        '',                                 // валентность
        'oksidy',                           //  группа веществ
        'fe2o3',                            // идентификатор 
        ''                                  // название 2
    ]
 );


 material.push(
    [
        'Кислород',                     // название
        'O<sub>2</sub>',      // формула
        '2',                                 // валентность
        'nemetally',                           //  группа веществ
        'o2',                            // идентификатор 
        ''                                  // название 2
    ]
 );



 material.push(
    [
        'Алюминий',                     // название
        'Al',      // формула
        '3',                                 // валентность
        'metally',                           //  группа веществ
        'al',                            // идентификатор 
        ''                                  // название 2
    ]
 );









////////////////  ВЕЩЕСТВА ////////////////////////////////////////


















////////////////  УРАВНЕНИЯ  ////////////////////////////////////////

var arr = new Map([
    ['o2fe3', '4Fe + 3O<sub>2</sub>  = 2Fe<sub>2</sub>O<sub>3</sub>'],
    ['o2al', '4Al + 3O<sub>2</sub>  = 2Al<sub>2</sub>O<sub>3</sub>'],

  ]);  

// alert(arr.get('key3'));

////////////////  УРАВНЕНИЯ  ////////////////////////////////////////













































////////////////////// ПЛИТКА С ВЕЩЕСТВАМИ///////////////////////////////////////////////



function plitka(){
        var col1 = document.querySelector('#material1>.material');
        var col2 = document.querySelector('#material2>.material');





        for (var i = 0; i <material.length; i++) {
                var nazv =  material[i][0];
                var formula =  material[i][1];
                var ident =  material[i][4];
                var gruppa =  material[i][3];

   
               


                var elem1 = '<label for="' + ident + 1 + '" class="elem">'+
                                '<input type="radio" name="material1" id="' + ident + 1 + '"  class="' + ident  + '">' +
                                '<div class="formula">' + 
                                        formula + 
                                '</div>'+
                                '<div class="name">' + 
                                        nazv + 
                                '</div>'+
                            '</label>'; 
                col1.innerHTML += elem1;                            







                var elem2 = '<label for="' + ident + 2 + '" class="elem">'+
                                '<input type="radio" name="material2" id="' + ident + 2 + '"  class="' + ident  + '">' +
                                '<div class="formula">' + 
                                        formula + 
                                '</div>'+
                                '<div class="name">' + 
                                        nazv + 
                                '</div>'+
                            '</label>';
                col2.innerHTML += elem2;

                
               
        }

}


plitka();




////////////////////// ПЛИТКА С ВЕЩЕСТВАМИ///////////////////////////////////////////////






















////////////////////// ПЛИТКА С ИЗБРАННЫМИ ВЕЩЕСТВАМИ///////////////////////////////////////////////



function plitka1(m1){
    var col1 = document.querySelector('#material1>.material');
    var col2 = document.querySelector('#material2>.material');





    for (var i = 0; i <material.length; i++) {
            var nazv =  material[i][0];
            var formula =  material[i][1];
            var ident =  material[i][4];
            var gruppa =  material[i][3];


           


            var elem1 = '<label for="' + ident + 1 + '" class="elem">'+
                            '<input type="radio" name="material1" id="' + ident + 1 + '"  class="' + ident  + '">' +
                            '<div class="formula">' + 
                                    formula + 
                            '</div>'+
                            '<div class="name">' + 
                                    nazv + 
                            '</div>'+
                        '</label>'; 
            col1.innerHTML += elem1;                            







            // var elem2 = '<label for="' + ident + 2 + '" class="elem">'+
            //                 '<input type="radio" name="material2" id="' + ident + 2 + '"  class="' + ident  + '">' +
            //                 '<div class="formula">' + 
            //                         formula + 
            //                 '</div>'+
            //                 '<div class="name">' + 
            //                         nazv + 
            //                 '</div>'+
            //             '</label>';
            // col2.innerHTML += elem2;

            
           
    }


}


// plitka();




////////////////////// ПЛИТКА С ИЗБРАННЫМИ ВЕЩЕСТВАМИ///////////////////////////////////////////////





















































        // // генерируются радиокнопки с группами веществ
        // var gr1 = document.querySelector('#material1>.gruppa');
        // var gr2 = document.querySelector('#material2>.gruppa');

        // for (var i = 0; i <gruppy.length; i++) {
        //         var nazv =  gruppy[i][0];
        //         var ident =  gruppy[i][1];
        //         var elem1 = '<label for="' + ident+ 1 + '"><input type="radio" name="gruppa1" id="' + ident + 1 + '">' + nazv+ '</label>';
        //         var elem2 = '<label for="' + ident+ 2 + '"><input type="radio" name="gruppa2" id="' + ident + 2 + '">' + nazv+ '</label>';

        //         gr1.innerHTML += elem1;
        //         gr2.innerHTML += elem2;
        // }


        // $(document).ready(function () {
        //     $("#material1 input").change(function () {

        //         var gr1_label = document.querySelectorAll('#material1>.gruppa>label');
        //         var gr2_label = document.querySelectorAll('#material2>.gruppa>label');
        //         var gr1_input = document.querySelectorAll('#material1>.gruppa>label>input');
        //         var gr2_input = document.querySelectorAll('#material2>.gruppa>label>input');

                
                


            

        //         for (var i = 0; i <gruppy.length; i++) {
                
        //             // $(gr1_label[i]).css("border", "solid thin red");
        //             var id1 = $(this).attr("id");
        //             id1 = id1.slice(0,-1);
        //             var id2 = $(gr2_input[i]).attr("id");
        //             id2 = id2.slice(0,-1);
                   
        //             //var hid_group = $(gr2_label[i]);
        //             if (id1=id2){
        //                 // $(gr2_label[i]).addClass("hidden");
        //                 // alert(id1 + '   ' + id2);
        //             }


                    

        //         } 

        //     });
        // });
        








////////////////////////////////////////////////////////////////////////////////////////////////
















//////////////// SELECT С ГРУПАМИ ВЕЩЕСТВ ///////////////////////////////////////////




$(document).ready(function () {


    function gruppy_select(){

        // заполняем первый select названиями групп элементов
        select1=' <option value="item0" disabled selected>Выберите группу веществ</option>';
        for (var i = 0; i <gruppy.length; i++) {
            var nazv =  gruppy[i][0];
            var ident =  gruppy[i][1];
            var select1 = select1 + '<option value="' + ident + '">' + nazv+ '</option>';
        }
        $("#substance1").html(select1);
        



        $("#substance1").change(function () {
            var val = $(this).val();
            select2=' <option value="item0" disabled selected>Выберите вторую группу веществ</option>'; 
            for (var i = 0; i <gruppy.length; i++) {
                var nazv =  gruppy[i][0];
                var ident =  gruppy[i][1];
                        
                if (val!=ident){
                    var select2 = select2 + '<option value="' + ident + '">'+ nazv+ '</option>';
                }
            }
            $("#substance2").html(select2);
            $("#gruppa_1_selected").val(val);
            let m1 = $("#gruppa_1_selected").val();

            plitka1(m1);
            
        });

        $("#substance2").change(function () {
            var val2 = $(this).val();
            $("#gruppa_2_selected").val(val2);
            // let m1 = $("#gruppa_1_selected").val();
            // let m2 = $("#gruppa_2_selected").val();
            // plitka_param();



        });
        // function plitka_param(){
        //     let m1 = $("#gruppa_1_selected").val();
        //     let m2 = $("#gruppa_2_selected").val();
        //     if (m1 && m2 ){
        //        plitka(m1,m2);
        //     }  
        //     else if(m1 && !m2){
        //         plitka(m1,false);   
        //     }
        //     else if(!m1 && m2){
        //         plitka(false,m2);   
        //     }    
        //     else{
        //         plitka(false,false); 
        //     }        

        // }



    }

    gruppy_select();


});



//////////////// SELECT С ГРУПАМИ ВЕЩЕСТВ ///////////////////////////////////////////















































//////////////// ФОРМИРУЕМ УРАВНЕНИЕ ///////////////////////////////////////////
$(document).ready(function () {

    function get_ur(){

    let uravnenie_help1=document.querySelector('#uravnenie_help1');
    let uravnenie_help2=document.querySelector('#uravnenie_help2');

    $("#material1  input").change(function () {
        selmat1=$(this).attr('class');
        $(uravnenie_help1).val(selmat1);
        selmat2= $(uravnenie_help2).val();
        if((selmat1!='') && (selmat2!='')){
            uravnenie(selmat1,selmat2);
        }
        
    });


    $("#material2  input").change(function () {
        selmat2=$(this).attr('class');
        $(uravnenie_help2).val(selmat2);
        selmat1= $(uravnenie_help1).val();
        if((selmat1!='') && (selmat2!='')){
            uravnenie(selmat1,selmat2);
        }
    });


    function uravnenie(m1,m2){
        // alert(selmat1 + ' ' +selmat2)
        // alert(arr.get('key3'));
        // arr.has('key2');
        ur_key1=m1+m2;
        ur_key2=m2+m1;
        // alert(ur_key1 + ' ' +ur_key2);
        if(arr.has(ur_key1)){
            $("#uravnenie").html(arr.get(ur_key1));
        }
        else if(arr.has(ur_key2)){
            $("#uravnenie").html(arr.get(ur_key2));
        }
        else{
            $("#uravnenie").html("Эти вешества не вступают в реакцию");
        }
        
        // alert(arr.get(ur_key1));
    }


    }



});


//////////////// ФОРМИРУЕМ УРАВНЕНИЕ ///////////////////////////////////////////
































