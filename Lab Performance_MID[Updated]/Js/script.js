const unitPrice=1000;
const quantity=document.getElementById("Quantity");
const totalprice=document.getElementById("totalPrice");

function calc()
{
    let Quantity= parseInt(quantity.value)||0;

    if(Quantity<0)
    {
        alert("Quantity can not be a negetive value, resetting this into 0");
        Quantity=0;
        quantity.value=0;
    }
    let total=Quantity*unitPrice*30;

    totalprice.value=total;
    if(total>1000)
    {
        alert("Congratulation! You are eligible for a gift coupon.");
    }


}

Quantity.addEventListener("input",calc);