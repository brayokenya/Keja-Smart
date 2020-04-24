function placeOrder() { //function for placing an order
    //get inputs from form
    var name = capitalize_inputs($("input#name").val());
    var twn = $("#town").val();
    var nai = $("#nairobi").val();
    var nak = $("#nak").val();
    var toppings = [];
    $.each($('input[name="toppings"]:checked'),
        function() {
            toppings.push($(this).val());
        });

    var naiCost;
    if (twn === "Nairobi" || twn === "Nakuru") {
        if (nai === "none") {
            naiCost = 0;
        } else if (nai === "Kilimani") {
            naiCost = 57, 000;
        } else if (nai === "Ronagi") {
            naiCost = 29, 000;
        } else if (nai === "Karen") {
            naiCost = 64, 000;
        }

    }
    var nakCost;
    if (nakuru === "none") {
        nakCost = 0;
    } else if (nakuru === "Kuresoi south") {
        nakCost = 25, 000;
    } else if (nakuru === "Bahati") {
        nakCost = 20, 000;
    } else if (nakur === "Subukia") {
        nakCost = 18, 000;


    }
}