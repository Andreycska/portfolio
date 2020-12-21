$(function(){

    // WORKS FILTER

    let filter = $("[data-filter]"); //В переменную фильтр сохраняем все сылки с атрибутом data-filter
    let showMore = $(".show-more-btn"); //В переменную showMore сохраняем сылку на кнопку show-more-btn

    filter.on("click", function(event){  //При клики на сылку
        event.preventDefault();          //убираем стандартное поведение ссылки  
        let cat = $(this).data("filter"); //выбираем конкретную ссылку

        if (cat == "all") { //если cat равно all то у всех убираем класс hide
            $("[data-cat]").removeClass("hide");
            $(showMore).css("display", "none"); // убираем кнопку
        } else {
            $("[data-cat]").each(function() { //проходимся по всем элементам у которых есть data-cat

                let workCat = $(this).data("cat"); //сохраняем текушие значение каждого блока data-cat
    
                if (workCat != cat) {  //Если значение сылки не равно значению блока, то скрываем блок
    
                    $(this).addClass("hide");
    
                }else { //иначе мы показываем этот блок
                    $(this).removeClass("hide");
                    $(showMore).css("display", "inline-block"); //показываем кнопку
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
        $('[data-slider="slick"]').slick("setPosition"); // зыываем слик слайдер

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

    // SLIDER: https://kenwheeler.github.io/slick/

    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    // SLIDER ARROWS

    $(".slickPrev").on("click", function(event) { //При нажатии на кнопку Previus
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]'); // Ищем у родителя дата атрибут и запоминаем его

        currentSlider.slick("slickPrev"); // Вызывваем метод слайдера slickPrev
    });

    $(".slickNext").on("click", function(event) { //При нажатии на кнопку Next
        event.preventDefault();

        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]'); // Ищем у родителя дата атрибут и запоминаем его

        currentSlider.slick("slickNext"); // Вызывваем метод слайдера slickNext
    });

    // PRINT BUTTON

    const tableToPrint = document.getElementById('printMe');

    function printData(tableToPrint) {
        Popup($(tableToPrint).html());
    }

    function Popup(data) {
        const mywindow = window.open('', 'printMe', 'height=600, width=1000');
        mywindow.document.write('<link rel="stylesheet" href="css/style.css" type="text/css" />');
        mywindow.document.write(tableToPrint.outerHTML);
        mywindow.document.close(); // для IE >= 10 
        mywindow.focus();          // для IE >= 10 
        mywindow.print();
        mywindow.close();
        return true;
    }

    $('#printTable').on('click', function (event) {
        event.preventDefault()
        printData();
        return false;
    });

    // BUTTON SHOW MORE

    showMore.on("click", function(event){  //При клики на сылку
        event.preventDefault();          //убираем стандартное поведение ссылки  
        $("[data-cat]").removeClass("hide"); // показываем все оставшиеся блоки
        $(showMore).css("display", "none"); // Убираем кнопку
    });

});