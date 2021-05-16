menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza" , 
                   "Veg Supreme Pizza" , "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza" , "Shahi Paneer Pizza" , "Tandoori Panner Pizza "];
            
                             
console.log(menu_list_array);
function getmenu(){
var htmldata;
htmldata = "<ol class = 'menu-list'>"
console.log(htmldata);
menu_list_array.sort();
console.log(menu_list_array);
for(var i =0;i<menu_list_array.length;i++){
htmldata = htmldata + '<li>' + menu_list_array[i]+ '</li>'
console.log(htmldata);
}
htmldata=htmldata + "</ol>"
console.log(htmldata);
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata = "<section class = 'cards'>"
for (var j = 0;i<menu_list_array.length;i++){
htmldata = htmldata + '<div class = "card">'
                    + '<img src = "images/pizzaImg.png">'
                    + menu_list_array[j]
                    + '<div>'
}
htmldata = htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
//Complete the code

}

function add_top(){
var item2 = document.getElementById("add_item").value;
console.log(item2);
menu_list_array.push(item2);
console.log(menu_list_array);
add_item();
}