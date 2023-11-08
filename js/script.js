


$(document).ready(function () {










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
        'Серебро',                     // название
        'Ag',      // формула
        '1',                                 // валентность
        'metally',                           //  группа веществ
        'ag',                            // идентификатор 
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





 material.push(
    [
        'Барий',                     // название
        'Ba',      // формула
        '2',                                 // валентность
        'metally',                           //  группа веществ
        'ba',                            // идентификатор 
        ''                                  // название 2
    ]
 );


 material.push(
    [
        'Бром',                     // название
        'Br<sub>2</sub>',      // формула
        '1',                                 // валентность
        'nemetally',                           //  группа веществ
        'br2',                            // идентификатор 
        ''                                  // название 2
    ]
 );


 material.push(
    [
        'Углерод',                     // название
        'C',      // формула
        '4',                                 // валентность
        'nemetally',                           //  группа веществ
        'c',                            // идентификатор 
        ''                                  // название 2
    ]
 );



 material.push(
    [
        'Кальций',                     // название
        'Ca',      // формула
        '2',                                 // валентность
        'nemetally',                           //  группа веществ
        'ca',                            // идентификатор 
        ''                                  // название 2
    ]
 );


 material.push(
    [
        'Хлор',               // название
        'Cl<sub>2</sub>',                 // формула
        '1',                    // валентность
        'nemetally',                // группа веществ
        'cl2',               // идентификатор
        ''                    // название 2
    ]
 );


 material.push(
    [
        'Медь',                     // название
        'Cu',      // формула
        '1',                                 // валентность
        'metally',                           //  группа веществ
        'cu',                            // идентификатор 
        ''                                  // название 2
    ]
 );



 material.push(
    [
        'Фтор',                     // название
        'F',      // формула
        '1',                                 // валентность
        'nemetally',                           //  группа веществ
        'f',                            // идентификатор 
        ''                                  // название 2
    ]
 );




 
material.push(
    [
        'Железо',             // название
        'Fe',     // формула
        '2, 3',                    // валентность
        'metally',            // группа веществ
        'fe',             // идентификатор
        ''                    // название 2
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
        'Водород',                     // название
        'H<sub>2</sub>',      // формула
        '2',                                 // валентность
        'nemetally',                           //  группа веществ
        'h2',                            // идентификатор 
        ''                                  // название 2
    ]
 );




 material.push(
    [
        'Ртуть',                     // название
        'Hg',      // формула
        '1',                                 // валентность
        'metally',                           //  группа веществ
        'hg',                            // идентификатор 
        ''                                  // название 2
    ]
 );




 material.push(
    [
        'Йод',                     // название
        'I<sub>2</sub>',              // формула
        '1',                                 // валентность
        'nenemetally',                           //  группа веществ
        'i2',                            // идентификатор 
        ''                                  // название 2
    ]
 );




 material.push(
    [
        'Калий',                     // название
        'K',      // формула
        '1',                                 // валентность
        'netally',                           //  группа веществ
        'k',                            // идентификатор 
        ''                                  // название 2
    ]
 );



 material.push(
    [
        'Магний',                     // название
        'Mg',      // формула
        '2',                                 // валентность
        'nemetally',                           //  группа веществ
        'mg',                            // идентификатор 
        ''                                  // название 2
    ]
 );





 material.push(
    [
        'Азот',                     // название
        'N<sub>2</sub>',      // формула
        '1, 2, 3, 4, 5',                                 // валентность
        'nemetally',                           //  группа веществ
        'n2',                            // идентификатор 
        ''                                  // название 2
    ]
 );



 material.push(
    [
        'Натрий',                     // название
        'Na',      // формула
        '1',                                 // валентность
        'metally',                           //  группа веществ
        'na',                            // идентификатор 
        ''                                  // название 2
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
        'Фосфор',                     // название
        'P',              // формула
        '1',                                 // валентность
        'nenemetally',                           //  группа веществ
        'p',                            // идентификатор 
        ''                                  // название 2
    ]
 );




 material.push(
    [
        'Свинец',                     // название
        'Pb',      // формула
        '4',                                 // валентность
        'metally',                           //  группа веществ
        'br',                            // идентификатор 
        ''                                  // название 2
    ]
 );





 material.push(
    [
        'Сера',                     // название
        'S',      // формула
        '2',                                 // валентность
        'nemetally',                           //  группа веществ
        's',                            // идентификатор 
        ''                                  // название 2
    ]
 );








 material.push(
    [
        'Сурьма',                     // название
        'Sb',      // формула
        '3',                                 // валентность
        'nemetally',                           //  группа веществ
        'sb',                            // идентификатор 
        ''                                  // название 2
    ]
 );


/// 30.11.2022





 material.push(
    [
        'Кремний',                     // название
        'Si',      // формула
        '4',                                 // валентность
        'nemetally',                           //  группа веществ
        'si',                            // идентификатор 
        ''                                  // название 2
    ]
 );












 material.push(
    [
        'Цинк',                     // название
        'Zn',      // формула
        '2',                                 // валентность
        'metally',                           //  группа веществ
        'zn',                            // идентификатор 
        ''                                  // название 2
    ]
 );








////////////////  ВЕЩЕСТВА ////////////////////////////////////////


















////////////////  УРАВНЕНИЯ  ////////////////////////////////////////

var arr = new Map([
    ['o2fe', '2Fe + O<sub>2</sub>  = 2FeO - <i>оксид железа 2</i> <br>4Fe + 3O<sub>2</sub>  = 2Fe<sub>2</sub>O<sub>3</sub> - <i>оксид железа 3</i>'],

    ['h2cl2', 'H<sub>2</sub> + Cl<sub>2</sub>  = 2HCl - соляная кислота (хлороводород)'],
    ['nacl2', '2Na + Cl<sub>2</sub>  = 2NaCl - хлорид натрия'],
    ['cl2sb', 'Cl<sub>2</sub> + 2Sb  = 2SbCl<sub>3</sub>'],
    ['cl2fe3', 'Cl<sub>2</sub> + 2Fe  = 2FeCl<sub>3</sub> - хлорид железа'],

// Алюминий

    ['o2al', '4Al + 3O<sub>2</sub>  = 2Al<sub>2</sub>O<sub>3</sub>  - <i>оксид алюминия</i>'],
    ['als', '2Al + 3S  = Al<sub>2</sub>S<sub>3</sub>  - <i>сульфид алюминия</i>'],
    ['aln2', '2Al + N<sub>2</sub>  = 2AlN  - <i>нитрид алюминия</i>'],
    ['alс', '4Al + 3С  = Al<sub>4</sub>С<sub>3</sub> - <i>карбид алюминия</i>'],
    ['alсl', '4Al + 3Сl  = 2AlСl<sub>3</sub> - <i>хорид алюминия</i>'],


 // водород
 
    ['h2o2', '2H<sub>2</sub> + O<sub>2</sub>  = 2H<sub>2</sub>O - <i>вода</i>'],
    ['h2s', 'H<sub>2</sub> + S  = H<sub>2</sub>S - <i>сероводород</i>'],    
    ['h2br2', 'H<sub>2</sub> + Br<sub>2</sub>  = 2HBr - <i>бромоводород</i>'],    
    ['h2i2', 'H<sub>2</sub> + I<sub>2</sub>  = 2HI - <i>йодоводород</i>'], 
    ['h2na', '2Na + H<sub>2</sub>  = 2NaH - <i>гидрид натрия</i>'], 
    ['h2f', 'H<sub>2</sub> + F<sub>2</sub>  = 2HF - <i>фтороводород</i>'], 


// кислород


    ['ko2', 'K + O<sub>2</sub>  = K<sub>2</sub>O - <i>оксид калия</i>'], 
    ['bao2', '2Ba + O<sub>2</sub>  = 2BaO - <i>оксид бария</i>'], 
    ['bao2', '2Ba + O<sub>2</sub>  = 2BaO - <i>оксид бария</i>'], 
    ['n2o2', '2N<sub>2</sub> + O<sub>2</sub>  = 2N<sub>2</sub>O - <i>оксид азота 1</i> <br>N<sub>2</sub> + O<sub>2</sub>  = 2NO - <i>оксид азота 2</i> <br>2N<sub>2</sub> + 5O<sub>2</sub>  = 2N<sub>2</sub>O<sub>5</sub> - <i>оксид азота 5</i> '], 
    ['co2', 'C + O<sub>2</sub>  = CO<sub>2</sub> - <i>углекислый газ, оксид углерода 4</i>'], 
    ['so2', 'S + O<sub>2</sub>  = SO<sub>2</sub> - <i>оксид серы, сернистый газ</i>'], 
    ['sio2', 'Si + O<sub>2</sub>  = SiO<sub>2</sub> - <i>оксид кремния, песок</i>'], 
    ['cao2', 'Ca + O<sub>2</sub>  = 2CaO - <i>оксид кальция, негашенная известь</i>'], 
    ['po2', '4P + 5O<sub>2</sub>  = 2P<sub>2</sub>O<sub>5</sub> - <i>оксид фосфора</i>'], 


// магний


    ['mgsi', '2Mg + Si  = Mg<sub>2</sub>Si - <i>силицид магния</i>'], 
    ['can2', '3Ca + N<sub>2</sub>  = Ca<sub>3</sub>N<sub>2</sub> - <i>нитрид кальция</i>'], 
    ['cap', '3Ca + 2P  = Ca<sub>3</sub>P<sub>2</sub> - <i>фосфид кальция</i>'], 
    ['mgs', 'Mg + S  = MgS - <i>сульфид магния</i>'], 
    ['bas', 'Ba + S  = BaS - <i>сульфид бария</i>'], 




// сера


['zns', 'Zn + S  = ZnS - <i>сфалерит, цинковая обманка</i>'], 
['pbs', 'Zn + S  = PbS - <i>галенит, свинцовый блеск</i>'], 
['pbs', 'Hg + S  = HgS - <i>сульфид ртути</i>'], 
['cus', '2Cu + S  = Cu<sub>2</sub>S - <i>сульфид меди</i>'], 
['ags', '2Ag + S  = Ag<sub>2</sub>S - <i>сульфид серебра</i>'], 





  ]);  

// alert(arr.get('key3'));

////////////////  УРАВНЕНИЯ  ////////////////////////////////////////















////////////////////// ПЛИТКА С ВЕЩЕСТВАМИ///////////////////////////////////////////////



    var col1 = document.querySelector('#material1>.material');
    var col2 = document.querySelector('#material2>.material');





    for (var i = 0; i <material.length; i++) {
            var nazv =  material[i][0];
            var formula =  material[i][1];
            var ident =  material[i][4];
            var gruppa =  material[i][3];


           


            var elem1 = '<input type="radio" name="material1" id="' + ident + 1 + '"  class="' + ident  + '">' +
                        '<label for="' + ident + 1 + '" class="'+gruppa+'">'+
                            '<div class="formula">' + 
                                    formula + 
                            '</div>'+
                            '<div class="name">' + 
                                    nazv + 
                            '</div>'+
                        '</label>'; 
            col1.innerHTML += elem1;                            







            var elem2 = '<input type="radio" name="material2" id="' + ident + 2 + '"  class="' + ident  + '">' +
                            '<label for="' + ident + 2 + '" class="'+gruppa+'">'+
                            '<div class="formula">' + 
                                    formula + 
                            '</div>'+
                            '<div class="name">' + 
                                    nazv + 
                            '</div>'+
                        '</label>';
            col2.innerHTML += elem2;

            
           
    }





////////////////////// ПЛИТКА С ВЕЩЕСТВАМИ///////////////////////////////////////////////











//////////////// ФОРМИРУЕМ УРАВНЕНИЕ ///////////////////////////////////////////




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








//////////////// ФОРМИРУЕМ УРАВНЕНИЕ ///////////////////////////////////////////












//////////////// SELECT С ГРУПАМИ ВЕЩЕСТВ ///////////////////////////////////////////









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
            let m2 = $("#gruppa_2_selected").val();
            plitka2(m2);



        });









//////////////// SELECT С ГРУПАМИ ВЕЩЕСТВ ///////////////////////////////////////////















////////////////////// ПЛИТКА С ИЗБРАННЫМИ ВЕЩЕСТВАМИ///////////////////////////////////////////////



function plitka1(m1){
    var col1_sel = document.querySelectorAll('#material1>.material>label');
    for (var i = 0; i <col1_sel.length; i++) {

         elem=col1_sel[i];
         $(elem).removeClass('hidden');
        
         nm=$(elem).attr('class');


         if(m1!=nm){
            $(elem).addClass('hidden');
         }

           
    }


}





function plitka2(m2){
    var col2_sel = document.querySelectorAll('#material2>.material>label');
    for (var i = 0; i <col2_sel.length; i++) {

         elem=col2_sel[i];
         $(elem).removeClass('hidden');
        
         nm=$(elem).attr('class');


         if(m2!=nm){
            $(elem).addClass('hidden');
         }

           
    }


}














////////////////////// ПЛИТКА С ИЗБРАННЫМИ ВЕЩЕСТВАМИ///////////////////////////////////////////////




























































});










