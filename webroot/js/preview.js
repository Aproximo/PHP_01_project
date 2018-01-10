
function onClick() {

        var data = ['username', 'email', 'task', 'title'];
        Object.keys(data).map(function(x){
            document.getElementById("preview_" + data[x]).innerHTML = document.getElementById(data[x]).value;
        });
        show();
        hide();



}
function show_hide(){
    event.preventDefault();
    hide();
    show();
}
function hide(){
    let show = document.getElementsByClassName("show_preview");
    for (var i in show) {
        if (show.hasOwnProperty(i)) {
            show[i].className = 'hide_preview';
        }
    }

}
function show(){

    let hide = document.getElementsByClassName("hide_preview");

    for (var i in hide) {
        if (hide.hasOwnProperty(i)) {
            hide[i].className = 'show_preview';
        }
    }
}