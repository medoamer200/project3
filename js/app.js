


$(document).ready(function () {

    $('.home').animate({
        width: "100%",

    }, 2000, function () {
        $('.home').animate({
            height: "100vh",

        }, 2000, function () {

            $('.home h1').slideDown(1000, function () {

                $('.imn').eq(0).slideDown(1000, function () {
                    $('.imn').eq(1).slideDown(1000, function () {
                        $('.imn').eq(2).slideDown(1000)
                    })
                })
            })
        })
    })
});
