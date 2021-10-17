// const appKey = "27095699";

// $(window).on('load', function () {
//   $.ajax({
//     url: `https://www.omdbapi.com/?apikey=${appKey}&s=avengers`,
//     method: 'GET',
//     success: function (data) {
//       $.each(data.Search, function (key, data) {
//         let html = ` <div class="col-xl-3 col-md-3 col-sm-12">
//                 <div class="product-card text-left">
//                     <img class="img-responsive" src=${data.Poster}>
//                     <div class="product-image-caption">
//                         <div class="product-image-txt">
//                            <h3>${data.Title}</h3>
//                             <p class="decription-1">${data.Year}</p>
//                             <a href="#" onclick="movieSelected('${data.imdbID}')"  class="btn btn-primary  my-3">Read More</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//         $('#movies-cards').append(html);

//       });
//     },
//     error: function (error) {
//       console.log(error);
//     }

//   });

// });

$('#search').keyup(function (event) {
  $('#movies-cards').html('');
  event.preventDefault();
  user = $("#search").val();
  $.ajax({
    url: `https://api.github.com/users/${user}`,
    method: 'GET',
    success: function (data) {
      $.ajax({
        url: `https://api.github.com/users/${user}/repos`,
        method: 'GET',
        data: {
          sort: 'created:asc'
        },
        success: function (data) {
          $.each(data, function (key, value) {
            let html = `<div class="col-lg-12 col-sm-12 my-2">
                <div class = "product-card repos w-100 h-auto text-left m-0" >
                    <div class = "product-image-caption p-0">
                        <div class = "product-image-txt d-flex justify-content-between align-items-center px-2" >
                          <h4>${value.name}</h4>
                          <div class = "repo-content " >
                          <span class="decription-1 badge badge-warning">Forks: ${value.forks_count}</span>
                          <span class="decription-1 badge badge-success">Stargazers: ${value.stargazers_count}</span>
                          <span class="decription-1 badge badge-danger">watchers: ${value.watchers_count}</span>
                          <a href=${value.html_url} target="_blank" class="btn btn-primary  my-3">View Repo</a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>`
            $('#repo').append(html);
          })
        },
        error: function (error) {
          console.log(error);
        }

      });
      let html = ` <div class="row">
      <div class="col-xl-4 col-md-4 col-sm-12">
                <div class = "product-card py-4 text-left" >
                    <img class="img-responsive" src=${data.avatar_url}>
                    <div class="product-image-caption">
                        <div class="product-image-txt">
                           <h3>${data.name}</h3>
                           <h2>Public Repos: ${data.public_repos}</h2>
                           <h2>Public Gits: ${data.public_gists}</h2>
                            <p class="decription-1">Company: ${data.company}</p>
                            <p class="decription-1">Followers: ${data.followers}</p>
                            <p class="decription-1">Following: ${data.following}</p>
                            <p class="decription-1">Bio:${data.bio}</p>
                            <a href=${data.html_url} target="_blank" class="btn btn-primary  my-3">View Proflie</a>
                        </div>
                    </div>
                </div>
                </div>
                <div class="repos">
                <h2 class = "py-4" > Latest Repos </h2>
                <div class="row" id="repo">
                </div>
                </div>
                </div>
                `
      $('#movies-cards').append(html);

    },
    error: function (error) {
      console.log(error);
    }

  });
});