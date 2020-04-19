document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('go').addEventListener('click', function () {
        const first = document.getElementById('firstComand').value;
        const second = document.getElementById('secondComand').value;
        const command = document.getElementById('comand').value;

        switch (command) {
            case 'MOV':
                document.getElementById(`span${second}`).innerHTML = document.getElementById(`span${first}`).innerText;
                break;
            case 'SWAP':
                const fv = document.getElementById(`span${first}`).innerText;
                const sv = document.getElementById(`span${second}`).innerText;
                document.getElementById(`span${second}`).innerText = fv;
                document.getElementById(`span${first}`).innerText = sv;
                break;
        }
    });

    const ids = ['ax', 'bx', 'cx', 'dx'];

    document.getElementById('firstComand').addEventListener('change', function () {
        const fv = document.getElementById('firstComand').value;
        ids.forEach(element => {
            document.getElementById(`s${element}`).style.display = 'block';
        });
        document.getElementById(`s${fv}`).style.display = 'none';
    });

    document.getElementById('secondComand').addEventListener('change', function () {
        const sv = document.getElementById('secondComand').value;
        ids.forEach(element => {
            document.getElementById(`f${element}`).style.display = 'block';
        });
        document.getElementById(`f${sv}`).style.display = 'none';
    });

    ids.forEach(element => {
        document.getElementById(element).addEventListener('blur', function () {
            document.getElementById(element).parentElement.children[1].style.display = 'none';
            document.getElementById(element).parentElement.children[2].innerHTML = `#${Number(this.value).toString(16)}`;
            document.getElementById(element).parentElement.children[2].style.display = 'inline-block';
        });
    });

    ids.forEach(element => {
        document.getElementById(element).addEventListener('input', function () {
            console.log(this.value);
            console.log((isNaN(this.value)))
            if (isNaN(this.value)) this.value = this.value.slice(0, this.value.length - 1)
        });
    });

    ids.forEach(element => {
        document.getElementById(`span${element}`).addEventListener('click', function () {
            document.getElementById(element).parentElement.children[1].style.display = 'inline-block';
            document.getElementById(element).parentElement.children[1].focus();
            document.getElementById(element).parentElement.children[2].style.display = 'none';
        });
    });
});