/*

Custom script

This file will not be overwritten by the updater

*/
// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}
/* Hàm sắp xếp tăng dần */
function sortByOrder(games) {
    return games.sort((a, b) => b.order - a.order);
}

/* Lấy thông tin về game hot trong file data hiển thị */
function loadHotGame(dataJson, category){
    fetch(dataJson,{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGames = sortByOrder(data);
        /* Tìm kiếm chính xác */
        // const eminemRapper = listGames.find((listGame) => listGame.slug === 'duck-life-2-world-champion');
        /* Tìm kiếm theo category */
        const dataListHotGames = listGames.filter((listGame) => listGame.cat.includes(category) && listGame.status === 1);
        const listHotGames = _.sampleSize(dataListHotGames, 2); /* Hàm lấy 2 phần tử ngẫu nhiên từ mảng */
        for (var j=listHotGames.length-1; j>=0; j--) {
            var item = listHotGames[j];
            var img = "/images/icon/"+item.img;
            var slug = "/play/" + item.slug + ".html";
            var title = item.title;
            const htmlItem = `
                <div class="col-lg-12 col-md-4 col-6 list-grid">
                    <a  title="Drift Boss" href="${slug}">
                        <div class="list-game">
                            <div class="list-thumbnail"><img src="${img}" data-src="https://burgerbounty.github.io/img/drift-boss.png" class="small-thumb img-rounded lazyload" alt="${title}"></div>
                            <div style="color: white;"><strong>${title}</strong></div>
                        </div>
                    </a>
                </div>
            `;
            const e = document.createElement('div');
            e.className  = "vex_x";
            e.innerHTML = htmlItem;
            document.getElementById('load_hot_games').appendChild(e);
            const br = document.createElement('br');
            document.getElementById('load_hot_games').appendChild(br);
            const hr = document.createElement('hr');
            document.getElementById('load_hot_games').appendChild(hr);
        }
    });
}

/* Lấy thông tin về new game trong file data hiển thị */
function loadNewGame(dataJson, category){
    fetch(dataJson,{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGames = sortByOrder(data);
        /* Tìm kiếm theo category */
        const dataListNewGames = listGames.filter((listGame) => listGame.cat.includes(category) && listGame.status === 1);
        const listDataGames = _.sampleSize(dataListNewGames, 30); /* Hàm lấy 2 phần tử ngẫu nhiên từ mảng */
        for (var j=listDataGames.length-1; j>=0; j--) {
            var item = listDataGames[j];
            var img = "/images/icon/"+item.img;
            var slug = "/play/" + item.slug + ".html";
            var title = item.title;
            const htmlItem = `
                <a href="${slug}">
                    <div class="game-item">
                        <div class="list-game">
                            <div class="list-thumbnail"><img src="${img}" class="lazyload" alt="${title}" title="${title}">
                                <div class="list-title" style="text-align:center;">${title}</div>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            const e = document.createElement('div');
            e.className  = "col-lg-2 col-md-4 col-6 grid-3";
            e.innerHTML = htmlItem;
            document.getElementById('load_new_games').appendChild(e);
        }
    });
}

/* Lấy thông tin về popular game trong file data hiển thị */
function loadPopularGame(dataJson, category){
    fetch(dataJson,{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGames = sortByOrder(data);
        /* Tìm kiếm theo category */
        const dataListNewGames = listGames.filter((listGame) => listGame.cat.includes(category) && listGame.status === 1);
        const listDataGames = _.sampleSize(dataListNewGames, 30); /* Hàm lấy 2 phần tử ngẫu nhiên từ mảng */
        for (var j=listDataGames.length-1; j>=0; j--) {
            var item = listDataGames[j];
            var img = "/images/icon/"+item.img;
            var slug = "/play/" + item.slug + ".html";
            var title = item.title;
            const htmlItem = `
                <a href="${slug}">
                    <div class="game-item">
                        <div class="list-game">
                            <div class="list-thumbnail"><img src="${img}" data-src="${img}" class="small-thumb img-rounded lazyload" alt="${title}"></div>
                            <div class="list-info">
                                <div class="list-title">${title}</div>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            const e = document.createElement('div');
            e.className  = "col-lg-4 col-md-6 grid-2";
            e.innerHTML = htmlItem;
            document.getElementById('load_popular_games').appendChild(e);
        }
    });
}

/* Lấy thông tin về you may like game trong file data hiển thị */
function loadYouLikeGame(dataJson){
    fetch(dataJson,{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGames = sortByOrder(data);
        /* Tìm kiếm theo category */
        const dataListNewGames = listGames.filter((listGame) => listGame.status === 1);
        const listDataGames = _.sampleSize(dataListNewGames, 30); /* Hàm lấy 2 phần tử ngẫu nhiên từ mảng */
        for (var j=listDataGames.length-1; j>=0; j--) {
            var item = listDataGames[j];
            var img = "/images/icon/"+item.img;
            var slug = "/play/" + item.slug + ".html";
            var title = item.title;
            const htmlItem = `
                <a href="${slug}">
                    <div class="game-item">
                        <div class="list-game">
                            <div class="list-thumbnail"><img src="${img}" data-src="${img}" class="small-thumb img-rounded lazyload" alt="${title}"></div>
                            <div class="list-info">
                                <div class="list-title">${title}</div>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            const e = document.createElement('div');
            e.className  = "col-lg-2 col-md-4 col-6 grid-3";
            e.innerHTML = htmlItem;
            document.getElementById('load_random_games').appendChild(e);
        }
    });
}

function getSlug() {
    var currentPathname = window.location.pathname;
    const parts = currentPathname.split("/");
    const slug = parts[2].replace(".html", "")
    return slug;
}

window.addEventListener('load', function() {
    /* Load file Navigation dùng chung */
    $("#mainNav").load("/layout/navbar.html");
    /* Load file footer dùng chung */
    $("#load_footer").load("/layout/footer.html");
    loadHotGame("/data/all-game.json", "Hot");
    loadNewGame("/data/all-game.json", "New");
    loadPopularGame("/data/all-game.json", "Popular");
    loadYouLikeGame("/data/all-game.json");
});