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
    let dataTable = document.getElementById("tbody")


    for (let i = 0; i < data.length; i++) {
        const dua = data[i]
        let tr = document.createElement('tr')
        let td = document.createElement('td');
        let th = document.createElement('th');
        let p = document.createElement('p')

        th.innerHTML = dua.title
        p.innerHTML = dua.dua
        td.innerHTML = dua.significance


        dataTable.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(p)
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
    table = document.getElementById("table");
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