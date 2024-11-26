// IIFE

(() => {
    console.log('Loaded index.js');

    // Acceder al HTML

    // Acceso secuencial

    console.dir(document);
    console.dir(document.body);
    console.dir(document.body.children[1]);
    console.dir(document.body.children[1].children[0]);

    // Acceso directo by get...()
    console.dir(document.getElementsByTagName('button')[0]);

    // Acceso directo by querySelector()
    const ButtonsList = document.querySelectorAll('button');
    const elementInput = document.querySelector('input');
    const elementOutput = document.querySelector('output');
    console.dir(ButtonsList);
    console.dir(elementOutput);

    // Definir respuesta a eventos

    elementInput.addEventListener('input', () => {
        console.log('Escribiste algo en el input', elementInput.value);
    });

    // const handleClick = () => {
    //     console.log('Hiciste click en el botón');
    // };

    // elementButton.addEventListener('click', handleClick);

    // elementButton.addEventListener('click', function () {
    //     console.log('Hiciste click en el botón');
    // });

    ButtonsList[0].addEventListener('click', () => {
        console.log('Hiciste click en el botón');

        elementOutput.textContent = `${elementInput.value}, hiciste click en el botón`;
    });
    ButtonsList[1].addEventListener('click', () => {
        console.log('Hiciste click en el botón borrar');
        elementOutput.textContent = '';
    });
})();
