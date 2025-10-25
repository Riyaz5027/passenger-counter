//document.getElementById("count-el").innerText=5050;
//let count=30;
//console.log(count);


let counter=0
//let countEl=document.getElementById("count-el")
//console.log(countEl)
function increment()
{
    counter=counter+1
    document.getElementById("count-el").innerText=counter;
}
function save()
{
    document.getElementById("ent").textContent+=counter+" - "
    console.log(counter)
    counter=0
    document.getElementById("count-el").textContent=counter;
} 