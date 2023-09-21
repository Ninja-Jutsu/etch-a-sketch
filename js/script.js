const container = document.getElementById('container');
const div1 = document.createElement('div');
const divList = []
for (i=0; i<16 ; i++){
    divList.push(`div${i}`)
}
console.log(divList);

for (i=0; i< divList.length ; i++){
    divList[i] = document.createElement('div');
    container.append(divList[i])
}





