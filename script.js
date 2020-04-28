
const wrapper = document.querySelector('.wrapper');
    console.log('wrapper', wrapper);

    function createCard(cardObj) {
        return `
    <div class="card">
        <div class="header">
            <img class="header-img" src="http://localhost:3000/Image/DSC_7072 copy.jpg">
                <div class="header-title">
                    ${cardObj.author}
                </div>
        </div>
        <div class="img-wrapper">
            <img class="img" src="${cardObj.download_url}" alt="">
        </div>
            <div class="content">
                Large selection of protective masks. Basic and design 
                solutions Handwork. The official online shop. RB production
            </div>
    </div>
    `;   
    }

fetch('https://picsum.photos/v2/list')
    .then(function(resp) {
        return resp.json();
    })
    .then((data) => {
        console.log('data', data);
        
        let cardList = '';

        data.forEach((cardObj) => {
           cardList = cardList + createCard(cardObj);
        });
        
        wrapper.innerHTML = cardList;
        
        let msnry;
        
        setTimeout(() => {
            msnry = new Masonry(wrapper);
            console.log('msnry', msnry);
        }, 1000)

        setTimeout(() => {
            msnry.reloadItems();
        }, 2000)

    });