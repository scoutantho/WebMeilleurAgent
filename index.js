

function Display(id)
{
  document.write(id);
  console.log(id);
  console.log(document.getElementById(id));
   if (document.getElementById(id).style.visibility == "hidden")
   {
       
        document.getElementById(id).style.visibility = "visible";

       
    }
    else
   {
       
        document.getElementById(id).style.visibility = "hidden";
        
    }

    
}
