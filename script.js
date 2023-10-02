var form=document.getElementById("mycart")
var add=0;
form.addEventListener('submit',getdata)
function getdata(e){
   e.preventDefault(e);
   var price=e.target.detail.value;
   var notes=e.target.notes.value;
   var category=e.target.category.value;
   var obj={
      price,
      notes,
      category
   }
   localStorage.setItem(`${obj.notes}`,`${JSON.stringify(obj)}`);
   showonscreen(obj);
}
function showonscreen(e){
 document.getElementById('detail').value="";
   document.getElementById('notes').value="";
 


  

    var li=`<li id=${e.notes}>Expense Amount:${e.price}---Description:${e.notes}---Category:${e.category}
   <input type="button" onClick="editbtn('${e.price}','${e.notes}','${e.category}')" VALUE="edit" style="background-color: yellow;"> 
  <input type="button" onClick="deletebtn('${e.notes}','${e.price}')" value="X" style="background-color: yellow;"></li><br>`;
var add=document.getElementById('list');
 add.innerHTML+=li;

   }

   function deletescreen(e){
      var parent=document.getElementById('list');
      var child=document.getElementById(e);
      if(child){
         parent.removeChild(child);
      }
   }
   function deletebtn(e){
      localStorage.removeItem(e);
      deletescreen(e);
      
   }

   function editbtn(price,notes,category){
      document.getElementById('detail').value=price;
      document.getElementById('notes').value=notes;
      document.getElementById('category').value=category;

      deletebtn(notes,price);
   }
  
  window.addEventListener("DOMContentLoaded",()=>{
      console.log("success");
      var dom=localStorage;
      var domkey=Object.keys(dom);
      domkey.forEach((key)=>{
          var detailfordom=JSON.parse(dom.getItem(key));
          showonscreen(detailfordom);
      })
   })


