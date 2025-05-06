    function listfunc(){
        event.preventDefault();
        let name=document.getElementById("name");
        let address=document.getElementById("address");
        let phone=document.getElementById("phone");
        let order_quantity=document.getElementById("order_quantity");
        let payment_option=document.getElementById("payment_option");

        let table=document.getElementById("table");
        
        var row=table.insertRow(-1);

        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);

        cell1.textContent=name.value;
        cell2.textContent=address.value;
        cell3.textContent=phone.value;
        cell4.textContent=order_quantity.value;
        cell5.textContent=payment_option.value;
    }
    function toggleMode() {
    document.body.classList.toggle("dark-mode");
    }