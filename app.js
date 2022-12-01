// var pic1=document.getElementById('1');
// var pic2=document.getElementById('2');
// var pic3=document.getElementById('3');


var pic=document.getElementsByTagName('img');

// var picId=document.getElementById('0').id;
// picId=eval( picId+1);
// console.log(picId);
console.log(pic);

var num=0;



function next() 
{
   
   if (num==0) {
    document.getElementById(0).src='Pictures/wp1989203-land-rover-wallpapers.jpg';
    num=num+1

    
   } else if (num==1) {
    document.getElementById(0).src='Pictures/wp504779-land-rover-wallpapers.jpg';
    num=num+1
    
   } 
   else if (num==2) {
    document.getElementById(0).src='Pictures/wp1989249-land-rover-range-rover-wallpapers.jpg';
    
    num=num-2;
    
   } 
    
}

function prev() {
    // document.getElementById(0).src='Pictures/wp1989203-land-rover-wallpapers.jpg';
    if (num==2) {

        document.getElementById(0).src='Pictures/wp1989203-land-rover-wallpapers.jpg';
        num=num-1;
    
        
       } else if (num==1) {
        document.getElementById(0).src='Pictures/wp504779-land-rover-wallpapers.jpg';
        num=num-1
        // num=num-1
        
       } 
       else if (num==0) {
        document.getElementById(0).src='Pictures/wp1989249-land-rover-range-rover-wallpapers.jpg';
        num=num+2;
        // num=num+1;
       } 
    
}