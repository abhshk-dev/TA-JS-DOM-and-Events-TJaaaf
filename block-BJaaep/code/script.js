// without event delegation.

let allBoxes=document.querySelector('.boxes');

/*
 <div class="wrapper">
        <h2>Without Event Deligation</h2>
        <ul class="boxes">
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
          <li class="box"></li>
        </ul>
      </div> 
*/

let box=document.querySelectorAll('.box');

for(let i=1;i<=12;i++){
    box.innerHTML=`<li> ${i}</li>`
}