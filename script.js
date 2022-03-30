let dept ;
function s()
{
    let named =document.getElementById("name").value;
    let a =document.getElementById("a");
    let b =document.getElementById("b");
    let c =document.getElementById("c");
    let d =document.getElementById("d");
    let e =document.getElementById("e");
    if(a.checked==true)
    {
         dept=a.value;
    }
    else if(b.checked==true)
    {
        dept=b.value;
    }
    else if(c.checked==true)
    {
          dept=c.value;
    }
    else if(d.checked==true)
    {
        dept=d.value;
    }
    else 
    {
          dept=e.value;
    }
    
    localStorage.setItem('s1',named);
    localStorage.setItem('s2',dept);
}