const expen*es =
JSON.parse(
localStorage.getI*em("expenses")
) || [];

function *upiah(value){

return "Rp " +
Numb*r(value)
.toLocaleString("id-ID");*
}

function saveData(){

const da*a = {

salary:
document.getElementById("salary").value,

bonus:
document.getElementById("bonus").value,

allowance:
document.getElementById("allowance").value,

overtime:
document.getElementById("overtime").value,

travelNormal:
document.getElementById("travelNormal").value,

travelWeekend:
document.getElementById("travelWeekend").value,

fieldAllowance:
document.getElementById("fieldAllowance").value

};

localStorage.setItem(
"incomeData",
JSON.stringify(data)
);

localStorage.setItem(
"expenses",
JSON.stringify(expenses)
);

}

function updateSummary(){

const income =

Number(document.getElementById("salary").value || 0) +

Number(document.getElementById("bonus").value || 0) +

Number(document.getElementById("allowance").value || 0) +

Number(document.getElementById("overtime").value || 0) +

Number(document.getElementById("travelNormal").value || 0) +

Number(document.getElementById("travelWeekend").value || 0) +

Number(document.getElementById("fieldAllowance").value || 0);

const outcome =
expenses.reduce(
(total,item)=>total+item.amount,
0
);

const balance =
income - outcome;

document.getElementById("totalIncome").innerText =
rupiah(income);

document.getElementById("totalOutcome").innerText =
rupiah(outcome);

document.getElementById("balance").innerText =
rupiah(balance);

document.getElementById("heroBalance").innerText =
rupiah(balance);

document.getElementById("heroIncome").innerText =
rupiah(income);

document.getElementById("heroOutcome").innerText =
rupiah(outcome);

saveData();

}

function renderExpenses(){

const list =
document.getElementById(
"expenseList"
);

list.innerHTML="";

expenses.forEach(
(item,index)=>{

list.innerHTML +=

`<div class="outcome-item">

<div>
<b>${item.name}</b><br>
${rupiah(item.amount)}
</div>

<button
class="delete-btn"
onclick="deleteExpense(${index})">
Hapus
</button>

</div>`;

});

updateSummary();

}

function addExpense(){

const name =
document.getElementById(
"expenseName"
).value;

const amount =
Number(
document.getElementById(
"expenseAmount"
).value
);

if(!name || amount<=0){

alert("Lengkapi data");

return;

}

expenses.push({
name,
amount
});

document.getElementById(
"expenseName"
).value="";

document.getElementById(
"expenseAmount"
).value="";

renderExpenses();

}

function deleteExpense(index){

expenses.splice(index,1);

renderExpenses();

}

function loadData(){

const data =
JSON.parse(
localStorage.getItem(
"incomeData"
)
) || {};

document.getElementById("salary").value =
data.salary || 0;

document.getElementById("bonus").value =
data.bonus || 0;

document.getElementById("allowance").value =
data.allowance || 0;

document.getElementById("overtime").value =
data.overtime || 0;

document.getElementById("travelNormal").value =
data.travelNormal || 0;

document.getElementById("travelWeekend").value =
data.travelWeekend || 0;

document.getElementById("fieldAllowance").value =
data.fieldAllowance || 0;

renderExpenses();

}

document
.querySelectorAll("input")
.forEach(input=>{

input.addEventListener(
"input",
updateSummary
);

});

document.getElementById(
"monthLabel"
).innerText =
new Date()
.toLocaleDateString(
"id-ID",
{
month:"long",
year:"numeric"
}
);

loadData();
updateSummary();
