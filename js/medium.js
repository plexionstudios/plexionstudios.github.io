$(function () {
    var mediumPromise = new Promise(function (resolve) {
    var $content = $('#medium');
    var data = {
        rss: 'https://medium.com/feed/@plexion'
    };
    $.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40plexion', data, function (response) {
        if (response.status == 'ok') {
            $("#medium-icon").append(`<img src="${response.feed["image"]}">`)
            var display = '';
            $.each(response.items, function (k, item) {
                var src = item["thumbnail"]; // use thumbnail url
                display += `<section class="alt left big bg dark header" style="background-image: url(${item["thumbnail"]});">`
                display += `<span class="text no-flex big can-full">`
                display += `<h1 class="heavy-font text-64">${item.title}</h1>`;
                var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
                var maxLength = 120; // maximum number of characters to extract
                //trim the string to the maximum length
                var trimmedString = yourString.substr(0, maxLength);
                //re-trim if we are in the middle of a word
                trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                display += `<p class="text-20">${trimmedString}...</p></span>`;
                display += `<span class="bg-filter"></span>`
                
                display += '</section>';
                return k < 0;
            });

            resolve($content.html(display));
        }
    });
    });

mediumPromise.then(function()
    {
        //Pagination
        pageSize = 6;

        var pageCount = $(".medium-card").length / pageSize;

        for (var i = 0; i < pageCount; i++) {
            $("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
        }
        $("#pagin li:nth-child(1)").addClass("medium-active");
        showPage = function (page) {
            $(".medium-card").hide();
            $(".medium-card").each(function (n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        }

        showPage(1);

        $("#pagin li").click(function () {
            $("#pagin li").removeClass("active");
            $(this).addClass("active");
            showPage(parseInt($(this).text()))
            return false;
        });
    });
});