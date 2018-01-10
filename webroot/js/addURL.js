function addOrUpdateUrlParam(name, value)
{

    var href = window.location.href.split("?")[0];
    var get = {};
    var url = "";

    if ( location.search.substr(1).length == 0){

        url = href + "?" + name + "=" + value;

        } else {
        location.search.substr(1).split("&").forEach(function (item, i) {
            console.log(i);
            var tmp = item.split("=");
            get[tmp[0]] = tmp[1];
        });
        var i = 0;
        get[name] = value;

        for (var key in get) {
            if (i === 0) {
                url = href + "?" + key + "=" + get[key];
                ++i;
            } else {
                url = url + "&" + key + "=" + get[key];
            }
        }
    }
    window.location.href = url;
}




