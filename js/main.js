

//  expense list & total expense

function expenseTotal(){
    const food =document.getElementById('food').value;
     const foodCost = parseFloat(food);
     if (isNaN(foodCost) || foodCost < 0) {
        food.value = ''
        return alert('Please input valid amount of money in food amount box')
      }
     const rent =document.getElementById('rent').value;
     const rentCost =parseFloat(rent);
     if (isNaN(rentCost) || rentCost < 0) {
        rent.value = ''
        return alert('Please input valid amount of money in rent amount box')
      }
     const clothes =document.getElementById('clothes').value;
     const clothCost = parseFloat(clothes);
     if (isNaN(clothCost) || clothCost < 0) {
        clothes.value = ''
        return alert('Please input valid amount of money in clothes amount box')
      }
     const totalExpense = foodCost + rentCost +clothCost;
     document.getElementById('total-expense').innerText =totalExpense;
     return totalExpense}



//  income & total balance 

    function balanceTotal()
    {const totalExpense=expenseTotal();
    
       const incomeInput = document.getElementById('income').value;
       const income = parseFloat(incomeInput);
       if (isNaN(income) || income < 0) {
        incomeInput.value = ''
        return alert('Please input valid amount of money in income amount box')
      }
     
      if (isNaN(income) || income < totalExpense) {
       
        return alert('Please enter your correct expense')
      }  
       const balance = income - totalExpense;
       document.getElementById('balance').innerText= balance;
       return income, balance;
}



// total save 
 function saveTotal(){
     const saveInput = document.getElementById('save').value;
     const save = parseFloat(saveInput);
     if (isNaN(save) || save < 0) {
        saveInput.value = ''
        return alert('Please input valid amount of money in save amount box')
      }
     const incomeTotal =income.value;
     const saveRatefirst = save/100;
     const saveRate = parseFloat(saveRatefirst)
     const balanceTotal =balance.innerText;
     const saveAmount =incomeTotal * saveRate;
     if (isNaN(balanceTotal) || balanceTotal < saveAmount) {
       
      return alert('Please enter your correct saving amount')
    }  
    
     const remainingBalance = balanceTotal - saveAmount 
     document.getElementById('saving-amount').innerText=saveAmount;
     
      document.getElementById('remaining-balance').innerText = remainingBalance;
      console.log(remainingBalance);
    } 


//  calculate button    
document.getElementById('calculate').addEventListener('click', function(){
 balanceTotal();

});


// save button 

document.getElementById('save-btn').addEventListener('click', function(){
    saveTotal();
});