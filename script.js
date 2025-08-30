let count = 0;
const increase = document.querySelector(".btn2") ;
const decrease = document.querySelector(".btn1") ;
const reset = document.querySelector(".btn-reset");
const value = document.querySelector(".main1 p"); 
increase.addEventListener("click",function(){
count ++;
value.textContent= count;
});
decrease.addEventListener("click",function(){
 if (count > 0) {  
    count--;
  }
  value.textContent= count;
});
reset.addEventListener("click", function(){
  count=0;
  value.textContent= count;
})
 
