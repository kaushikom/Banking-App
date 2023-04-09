// Deposit
function UpdateBalance() {
    let depMoney = document.getElementById("text_deposit").value;
    depMoney = parseInt(depMoney)
    if(depMoney > 100 &&  depMoney <1000000 ){
        let balance = document.getElementById("balance").innerText;
        balance = parseInt(balance)
        let updated = (depMoney + balance);
        document.getElementById("balance").innerText = updated;
    }
    else {
        alert("Cannot Deposit. Minimum deposit is 100 and Maximum deposit is 1000000.")
    }
    document.getElementById("text_deposit").value = null;
}
// Name
function UpdateName() {
    let textName = document.getElementById("text_edit").value;
    function containsNumber(str) {
        return /\d/.test(str);
      }
      if(containsNumber(textName)){
        alert("Name cannot cointain numbers. Please enter valid again.")

      }
    else if(textName == ""){
        alert("Please enter valid name.")
    }
    else{
        document.getElementById("user-name").innerHTML =  textName.toUpperCase();
    }

    document.getElementById("text_edit").value = null;
} 
// Withdraw
function UpdateWithdraw() {
    let wdMoney = document.getElementById("text_withdraw").value;
    wdMoney = parseInt(wdMoney)
    let balance = document.getElementById("balance").innerText;
    balance = parseInt(balance)
    let updated = (balance - wdMoney);
    if( balance <= 1000|| updated < 1000){
        alert("Cannot withdraw because minimum balance should be 1000. Minimum withdraw is 100 and Maximum withdraw is 1000000.")
    }
    else if(wdMoney > 100 &&  wdMoney <1000000 && balance > 1000){
        document.getElementById("balance").innerText = updated;
    }
    document.getElementById("text_withdraw").value = null;
}
