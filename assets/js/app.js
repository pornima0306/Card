var cl = console.log;
var MyCard = document.getElementById("MyCard");

let cardsData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
]
/* <div class="row">
            <div class="col-sm-4 offset-2">
                <div class="card">
                    <div class="card-body">
                        <figure class="myCard">
                            <img src="https://via.placeholder.com/600/92c952" alt="Image" class="img-fluid">
                            <figcaption>
                                <p class="title">
                                    <span>accusamus beatae ad facilis cum similique qui sunt </span>
                                </p>
                                <span class="id">Id:1</span>
                                <span class="albumId">AlbumId:1</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div> 
        </div> */

var result ="";
cardsData.forEach(element => {
    result+= `<div class="col-sm-4 mb-2">
                    <div class="card">
                         <div class="card-body">
                             <figure class="myCard">
                                <img src=${element.url} alt="Image" class="img-fluid">
                                <figcaption>
                                 <p class="title">
                                <span>${element.title}</span>
                                 </p>
                                <span class="id">ID: ${element.id}</span>
                                <span class="albumId">AlbumID: ${element.albumId}</span>
                                </figcaption>
                            </figure>
                         </div>
                    </div>
            </div> `
    
});
MyCard.innerHTML = result;

