$(function(){

    // WORKS FILTER

    let filter = $("[data-filter]"); //В переменную фильтр сохраняем все сылки с атрибутом data-filter

    filter.on("click", function(event){  //При клики на сылку
        event.preventDefault();          //убираем стандартное поведение ссылки  
        let cat = $(this).data("filter"); //выбираем конкретную ссылку

        if (cat == "all") { //если cat равно all то у всех убираем класс hide
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() { //проходимся по всем элементам у которых есть data-cat

                let workCat = $(this).data("cat"); //сохраняем текушие значение каждого блока data-cat
    
                if (workCat != cat) {  //Усли значение сылки не равно значению блока, то скрываем блок
    
                    $(this).addClass("hide");
    
                }else { //иначе мы показываем этот блок
                    $(this).removeClass("hide");
                }
    
            });
        }

    });

});