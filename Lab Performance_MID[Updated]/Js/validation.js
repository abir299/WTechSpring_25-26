const unitPrice=1000;
const quantityy=document.getElementById("quantity");
const totalprice=document.getElementById("Totalprice");

function calc()
{
    let quantity= parseInt(quantityy.value)||0;

    if(quantity<0)
    {
        alert("Quantity can not be a negative value, resetting this into 0");
        quantity=0;
        quantityy.value=0;
        
    }
    let total=quantity*unitPrice*30;

    totalprice.value=total;
    if(total>1000)
    {
        alert("Congratulation! You are eligible for a gift coupon.");
    }


}

quantityy.addEventListener("input",calc);