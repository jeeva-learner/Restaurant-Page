const buildaboutus = function(){
    const content = document.getElementById('content');
    const maintext = document.createElement('div');
    maintext.classList.add('text-area');
    const topheader = document.createElement('p')
    topheader.classList.add('Header');
    topheader.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus esse repudiandae voluptatum.  Veritatis incidunt voluptatum quia recusandae error atque inventore  fugiat eos optio, debitis sapiente aut.Libero, deserunt possimus";
    maintext.appendChild(topheader);
    content.appendChild(maintext);
};

export {buildaboutus as aboutus}