document.addEventListener("DOMContentLoaded", function(event) {

    /*** Components Example ***/

    // Agarramos todos los modulos ".component-example"
    let exampleModules = document.querySelectorAll('.component-example');

    // Para cada uno de los ".component-example"
    exampleModules.forEach(el => {   

        let moduleTabs = el.querySelectorAll('.tabs li span');
        let moduleTabsContent = el.querySelectorAll('.component-example-content');

        // Para cada Tab
        moduleTabs.forEach(tab => {
            
            // Handle Click
            tab.addEventListener('click', function (event) {
    
                // Si es la tab activa, no se hace nada
                if(event.target.matches('.active')){
                    return;
                }else{
                    
                    // Removemos la clase activa de todas las tabs
                    moduleTabs.forEach(child => {
                        child.classList.remove('active');
                    });

                    // Removemos la clase activa de todas los contenidos
                    moduleTabsContent.forEach(child => {
                        child.classList.remove('active');
                    });
                    
                    // Agregamos clase activa a la tab actual
                    tab.classList.add('active');

                    // Obtenemos el contenido a activar
                    let contentToSelect = tab.getAttribute('data-select');

                    // Activamos el contenido de la tab seleccionada
                    el.querySelector(`[data-content="${contentToSelect}"]`).classList.add('active');

                    if(contentToSelect == 'code'){

                        /*** Convert HTML tags to literal code to show ***/
                        let result = el.querySelector('[data-content="result"]')
                        let code = el.querySelector('[data-content="code"]')
                        let codeMirrorInitialized = code.getElementsByClassName('CodeMirror');
                        if( codeMirrorInitialized.length == 0 ){
                            CodeMirror(code, {
                                value: result.innerHTML.trim().replaceAll(' <br><br>', ''),
                                lineNumbers: true,
                                lineWrapping: true,
                                //readOnly: "nocursor",
                                singleCursorHeightPerLine: false,
                                mode: "xml",
                                theme: "wormhole"
                            });
                        }
                    }

                }
            
            }, false);

        });

    });

});