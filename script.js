var endPrice0 = 0;
var endPrice1 = 0;
var endPrice2 = 0;

function buyItem(index){
    switch (index) {
        case 0:
            var quantity0 = document.getElementById("quantity0").value;
            if (quantity0 >= 10) {
                if (quantity0 >= 30) {
                    endPrice0 = quantity0 * 1000 * 2350;

                    document.getElementById("price0").style.color = "Green";
                    document.getElementById("price0").innerHTML = "SELAMAT ANDA MENDAPATKAN DISKON Rp. 50/kg !!! <br>TOTAL HARGA : Rp. " + endPrice0.toLocaleString();
                    //showTotal(0, endPrice0);
                } else {
                    endPrice0 = quantity0 * 1000 * 2400;

                    document.getElementById("price0").style.color = "Green";
                    document.getElementById("price0").innerHTML = "TOTAL HARGA : Rp. " + endPrice0.toLocaleString();
                    //showTotal(0, endPrice0);
                }
                
            } else {
                document.getElementById("price0").style.color = "Red";
                document.getElementById("price0").innerHTML = "Minimum pembelian adalah 10";
            }
            
            break;

        case 1:            
            var quantity1 = document.getElementById("quantity1").value;
            if (quantity1 > 0) {
                if (quantity1 >= 80) {
                    endPrice1 = quantity1 * 75000;

                    document.getElementById("price1").style.color = "Green";
                    document.getElementById("price1").innerHTML = "SELAMAT ANDA MENDAPATKAN DISKON Rp. 5000/ball !!! <br>TOTAL HARGA : Rp. " + endPrice1.toLocaleString();
                    //showTotal(1, endPrice1);
                } else {
                    endPrice1 = quantity1 * 80000;

                    document.getElementById("price1").style.color = "Green";
                    document.getElementById("price1").innerHTML = "TOTAL HARGA : Rp. " + endPrice1.toLocaleString();
                    //showTotal(1, endPrice1);
                }
                
            } else {
                document.getElementById("price1").style.color = "Red";
                document.getElementById("price1").innerHTML = "Minimum pembelian adalah 1";
            }
            break;

        case 2:
            var quantity2 = document.getElementById("quantity2").value;
            if (quantity2 > 0) {
                if (quantity2 >= 500) {
                    endPrice2 = quantity2 * 1600;

                    document.getElementById("price2").style.color = "Green";
                    document.getElementById("price2").innerHTML = "SELAMAT ANDA MENDAPATKAN DISKON Rp. 200/kg !!! <br>TOTAL HARGA : Rp. " + endPrice2.toLocaleString();
                    //showTotal(2, endPrice2);
                } else {
                    endPrice2 = quantity2 * 80000;

                    document.getElementById("price2").style.color = "Green";
                    document.getElementById("price2").innerHTML = "TOTAL HARGA : Rp. " + endPrice2.toLocaleString();
                    //showTotal(2, endPrice2);
                }
                
            } else {
                document.getElementById("price2").style.color = "Red";
                document.getElementById("price2").innerHTML = "Minimum pembelian adalah 1";
            }
            break;
    
        default:
            break;
    }   

    var grandTotal = endPrice0 + endPrice1 + endPrice2;    
    document.getElementById("grandTotal").innerHTML = "Grand Total: " + endPrice0.toLocaleString() + " + " + endPrice1.toLocaleString() + " + " + endPrice2.toLocaleString() + " = Rp. " + grandTotal.toLocaleString();
    showTotalBox();
}



function showTotalBox(){ 
    document.getElementById("totalBox").style.display = "block"    ;
}