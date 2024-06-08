const buildhome = function(){
    const content = document.getElementById('content');
    const maintext = document.createElement('div');
    maintext.classList.add('Text-area')
    const text = document.createElement('p');
    text.innerHTML = "World's best in Class Dine in Hotel";
    maintext.appendChild(text);
    content.appendChild(maintext)
};
export {buildhome as home}