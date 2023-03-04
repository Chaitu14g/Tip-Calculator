let bill_amount = document.getElementById("billAmount");
let percentage_Tip = document.getElementById("percentageTip");
let tip_Amount = document.getElementById("tipAmount");
let total_Amount = document.getElementById("totalAmount");

function calculateButton() {
    if (bill_amount.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else if (percentage_Tip.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else {
        tip_Amount.value = (parseInt(percentage_Tip.value) / parseInt(100)) * parseInt(bill_amount.value);
        total_Amount.value = parseInt(bill_amount.value) + parseInt(tip_Amount.value);
        document.getElementById("errorMessage").textContent = "";
    }
}