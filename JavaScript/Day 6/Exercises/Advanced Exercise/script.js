// if you use fetch you have to handle the data immediately. you cant store data from fetch
fetch('./list.json')
    .then(function (response) {
        return response.json()
    }).then(function (result) {
        for (let val of result.booklist.data // to specify where the data should come from
        ) {
            document.getElementById("result").innerHTML += `<div>
            <div class="card" style="width: 18rem;">
            <img src="${val.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${val.title}</h5>
              <p class="card-text">${val.author}</p>
              <p class="card-text">Read book: ${val.read}</p>
              <a href="#details" class="btn btn-primary mybtn">Show details</a>
            </div>
          </div></div>
            `;

            let btns = document.querySelectorAll(".mybtn");
            btns.forEach((element, i) => {
                element.addEventListener("click", function () {
                    document.getElementById(
                        "details"
                    ).innerHTML = `
                    <div id="decr-body" class="card">
                        <img src="${val.img}" class="card-img-top" id="desc-img">
                        <div class="card-body">
                        <h5 class="card-title">${val.title}</h5>
                        <p class="card-text">${val.author}</p>
                        <a href="${val.buy}" class="btn btn-primary btnRemoveDetails">Go and buy it!</a>
                        </a>
                    </button>
                        </div>
                    </div>;`
                })
            })
        };
    });




