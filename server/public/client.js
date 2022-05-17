console.log('look ma, ima client')

$(readyNow)

function readyNow() {
    $('button').on('click', angryYes)
    $('body').on('click', '.okay', okayFine)
}
function angryYes() {
    let answer = $(this).attr('id')
    if (answer === 'yes') {
        $('body').empty();
        $('body').append('<h1>NO<h1>')
        $('h1').addClass('big-red')
        $('body').append('<button class="okay">Okay,No.</button>')

    }

    else {
        $('body').empty();
        $('body').append('<h1>YES<h1>')
        $('h1').addClass('big-red')
        $('body').append('<button class="okay">Okay,Yes.</button>')

    }
}

function okayFine(){
    alert('Thank You');
    reload();
    location.reload($(document));

}

