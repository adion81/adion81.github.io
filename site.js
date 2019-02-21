var count = 0;
var lightingImages = ['IMG_0084.JPG','IMG_0166.JPG','IMG_3765.JPG','IMG_4516.JPG','IMG_4826.JPG','IMG_4870.JPG','IMG_4903.JPG','IMG_4930.JPG','IMG_4939.JPG','IMG_4941.JPG','IMG_4942.JPG','IMG_5081.JPG','IMG_5177.JPG','IMG_5673.JPG','IMG_5725.JPG','IMG_6413.JPG','IMG_6519.JPG','IMG_6582.JPG','IMG_6585.JPG','IMG_6589.JPG','IMG_6625.JPG','IMG_6631.JPG','IMG_6696.JPG','IMG_6869.JPG','IMG_6876.JPG','IMG_6880.JPG','IMG_7134.JPG','IMG_7135.JPG','IMG_7151.JPG','IMG_7158.JPG','IMG_7250.JPG','IMG_7269.JPG','IMG_7573.JPG'];
var i = 0;
function change(action){
    console.log(action);
    document.getElementById('current-picture').src = `./images/lighting/${lightingImages[i]}`;
    if(action === 'next'){
        if(i === lightingImages.length - 1){
            i = 0;
        }
        i++
    }
    if(action === 'prev'){
        if(i === 0){
            i = lightingImages.length - 1;
        }
        i--;
    }
}
change();


function hamburger(x) {
    x.classList.toggle('change');
    count ++;
    if(count % 2 === 0){
        document.getElementById('menu').style.visibility = 'hidden';
        document.getElementById('title').style.left = '-1000px';
    }
    else if(count % 2 === 1){
        document.getElementById('menu').style.visibility = 'visible';
        document.getElementById('title').style.left = '-.5%';
    }
    
}

function bookmark(address){
    var goTo = document.getElementById(address);
    if(address == 'footer'){
        goTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    goTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
var modalCount = 0
function movesix(id, partial){
    modalCount ++;
    id.classList.toggle('six');
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        console.log(partial);
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}

function movefive(id, partial){
    modalCount ++;
    console.log(modalCount);
    id.classList.toggle('five');
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movefour(id, partial){
    id.classList.toggle('four');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movethree(id, partial){
    id.classList.toggle('three');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movetwo(id, partial){
    id.classList.toggle('two');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function moveone(id, partial){
    id.classList.toggle('one');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function popup(id,partial){
    document.getElementById('work-modal').style.display = 'block';
    document.getElementById(`${partial}`).style.display = 'block';
}
function closeup(){
    document.getElementById('work-modal').style.display ='none';
    document.getElementById('work').style.display = 'none';
    document.getElementById('lighting').style.display = 'none';
    document.getElementById('education').style.display = 'none';

}
function popproject(id, partial){
    document.getElementById('project-modal').style.display = 'block';
    document.getElementById(`${partial}`).style.display = 'block';
}
function closeproject(){
    document.getElementById('project-modal').style.display ='none';
    document.getElementById('skillet').style.display = 'none';
    document.getElementById('roadtrip').style.display = 'none';
    document.getElementById('galleazza').style.display = 'none';
}