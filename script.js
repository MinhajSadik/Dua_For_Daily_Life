// let filePath = './dua.json'
// let arrayImport;
// (async () => {
//     arrayImport = await import(filePath, {
//         assert: { type: "json" },
//     });
// })();

// const inputArray = arrayImport.default;


fetch('./dua.json')
    .then((res) => res.json())
    .then((data) => appendData(data))
    .catch((error) =>
        console.error('error:', error.message)
    );

function appendData(data) {
    table = document.getElementById("myTable");
    let tr = document.createElement('tr')


    for (let i = 0; i < data.length; i++) {
        const dua = data[i]
        let td = document.createElement('td');
        let p = document.createElement('p')

        // td.innerHTML = dua.title
        // td.innerHTML = dua.dua


        // table.appendChild(tr)
        // tr.appendChild(td)
        // tr.appendChild(p)
    }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scroll() };
function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}