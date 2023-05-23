
const news = document.querySelector(".news")
fetch('https://6469bba8183682d614455b66.mockapi.io/users')
.then(resp => resp.json())
.then(res => {
    res.forEach(i => {
        news.innerHTML += `
        <div class="news-item">
            <div class="pics" style="background-image: url('${i.image}');"></div>
            <p><b>${i.name}</b></p>
            <div class="date">posted by admin at <p>${i.date}</p></div>
            <span>${i.info}</span>
        </div>`
    });
})