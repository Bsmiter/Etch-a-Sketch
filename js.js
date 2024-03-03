const container = document.querySelector('#container');
const btn = document.querySelector('button');
for (i = 0; i < 64; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute("id", 'divs')
    container.appendChild(gridDiv);
    for (j = 0; j < 64; j++) {
        const miniDiv = document.createElement('div');
        miniDiv.setAttribute("id", 'miniDiv')
        gridDiv.appendChild(miniDiv);
        miniDiv.addEventListener("click", function (event) {
            miniDiv.style.backgroundColor = 'red';
        });
        var isMousedown = false;
        miniDiv.addEventListener("mousedown", function (event) {
            isMousedown = true;
        })
        miniDiv.addEventListener("mouseup", function (event) {
            isMousedown = false;
        });
        miniDiv.addEventListener("mousemove", function (event) {
            if (isMousedown) {
                miniDiv.style.backgroundColor = 'red';
            }
        });
        btn.addEventListener('click', (e) => { miniDiv.style.backgroundColor = ''; })



    }
}