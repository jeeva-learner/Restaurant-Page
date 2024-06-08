const buildmenu = function(){
    const content   = document.getElementById('content');
    const items = document.createElement('div');
    items.classList.add('items')
    items.innerHTML = `<div class="lineitem">
                            <p>Dosa</p>
                            <p>60rs</p>
                        </div>
                        <div class="lineitem">
                            <p>Idli</p>
                            <p>10rs</p>
                        </div>
                        <div class="lineitem">
                            <p>vada</p>
                            <p>15rs</p>
                        </div>
                        <div class="lineitem">
                            <p>sambar</p>
                            <p>20rs</p>
                        </div>
                        <div class="lineitem">
                            <p>chutney</p>
                            <p>15rs</p>
                        </div>`
    content.appendChild(items)
}

export{buildmenu as menu}