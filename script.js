var devices = $("#devices");
var devices_header = $("#devices header");
var list_items = $("#devices li");
var device_title_val;


devices.removeClass("devices_opened");
$("#transition").css("animation", "");
$("#device_title").css("animation", "");
// devices.addClass("devices_opened");


devices.click(function () {
    devices.addClass("devices_opened");
});

// $.each(list_items, function (index, val) {

//     item.click(function () {
//         alert(index, val)

//     })
// })

list_items.each(function () {
    list_items.click(function (index) {
        $("#transition").css("animation", "d 1s forwards");
        device_title_val = $(this).text();
        $("#device_title").text(device_title_val);
        setTimeout(function () {
            $("#device_title").css("animation", "e 1s forwards");

        }, 800)
        console.log($(this).text());
    })
});



