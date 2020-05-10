// first we run a Self-invoking functions
(function() {
    //get the elements
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    //when we press enter thats know as sumbit event use this function
    form.addEventListener('submit', function(e) {
            //prevent the default of sumbit button
            e.preventDefault();
            // add  new item
            list.innerHTML += '<li>' + item.value + '</li>';
            store();
            item.value = "";
        })
        //when cliked to the list it shows a button to delete to remove your task from localstorage and ul
    list.addEventListener('click', function(e) {
            var t = e.target;
            //first make the list checked and when it done the check box checked it remove it
            if (t.classList.contains('checked')) {
                t.parentNode.removeChild(t);
            } else
            //else this it show as checked only
            {
                t.classList.add('checked');
            }
            store();
        })
        //save our list in local storage
    function store() {
        window.localStorage.tasks = list.innerHTML;
    }
    //show the local stroage wen we refresh the page
    function getValues() {
        var storedValues = window.localStorage.tasks;
        // if not values in local storage it show nothings
        if (!storedValues) {
            list.innerHTML = '';
        } else
        // else it will show the values stored in localStorage
        {
            list.innerHTML = storedValues;
        }
    }
    getValues();
})();