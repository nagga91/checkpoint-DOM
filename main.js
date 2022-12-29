var quantity=document.getElementById('quantity').textContent
var total=document.getElementById('total').textContent
var price=document.getElementById('price').textContent
function addition(){
    quantity++
    document.getElementById('quantity').textContent=quantity
    totalprice()
}
function subs(){
   if(quantity>1){ quantity--}
   else{quantity=1}
    document.getElementById('quantity').textContent=quantity
    totalprice()
}
function totalprice(){
    total=quantity*price
    document.getElementById('total').textContent=total
}
function shopcard(){
    var image=document.getElementById("pc").src
    var object
    object={
        price:total,
        quantity:quantity,
        img:image
    }
     sessionStorage.setItem('data',JSON.stringify(object))
    
}
function getdata(){
    var object=JSON.parse(sessionStorage.getItem('data'))
    document.getElementById('pc').src=object.img
    document.getElementById('quantity').textContent=object.quantity
    document.getElementById('price').textContent=object.price
}
var heart=document.getElementById('heart')
heart.addEventListener('click',function favourite(){
  if(this.click) {heart.style.color= 'red'}
   else {heart.style.color= 'black'} 
})
