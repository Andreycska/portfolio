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
    
                if (workCat != cat) {  //Если значение сылки не равно значению блока, то скрываем блок
    
                    $(this).addClass("hide");
    
                }else { //иначе мы показываем этот блок
                    $(this).removeClass("hide");
                }
    
            });
        }

    });

    // MODAL-BLOCK

    const modalCall = $("[data-modal]"); //сохраняем все кнопки с атрибутом data-modal
    const modalClose = $("[data-close]"); //сохраняем все кнопки close с атрибутом data-close

    modalCall.on("click", function(event) { //Событие по клику на кнопку с атрибутом data-modal

        event.preventDefault();
        let $this = $(this); //Сохраняем конкрутную кнопку
        let modalId = $this.data("modal"); //Сохраняем конкретное значение data-modal

        $(modalId).addClass("show"); // показываем модальное окно
        $("body").addClass("no-scroll"); //убираем скролл у body

    });

    modalClose.on("click", function(event) { //Событие по клику на кнопку с атрибутом data-close

        event.preventDefault();
        let $this = $(this); //Сохраняем конкрутную кнопку close
        let modalParent = $this.parents(".modal"); //Ищем родителя с классом modal

        modalParent.removeClass("show"); // Убираем модальное окно
        $("body").removeClass("no-scroll"); //Добывляем скролл к body

    });

    $(".modal").on("click", function(event) { //Событие по клику на фон чтобы закрыть модальное окно

        $(this).removeClass("show"); // Убираем модальное окно
        $("body").removeClass("no-scroll"); //Добывляем скролл к body

    });

    $(".modal__dialog").on("click", function(event) { //Событие по клику на само содержимое модального окна

        event.stopPropagation(); //Отменяем событие клика по его радителю, тоесть на фоне закрывается окно, а на содержимом 

    });

});