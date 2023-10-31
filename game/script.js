function run(){
    let num =Math.floor((Math.random()*10));
    let div =document.getElementsByClassName('i')[num];
    div.style.backgroundImage="url('https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg')";
    setTimeout(()=>{
        div.style.backgroundImage="none";
    },1000);
};

let i=2000;
let t=setInterval(run,i);
function speed(){
    clearInterval(t);
    i=i-300;
    t=setInterval(run,i);
}

function stop(){
    clearInterval(t);
}