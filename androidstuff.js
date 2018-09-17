console.log("a;dsklfj");

var dict = {
    "version": "5.5",
    "link": "http://www.google.com",
    "devNotes": "First Commit"
};

var dictstring = JSON.stringify(dict);

console.log(dictstring);

function myFunc(msg) {
    console.log(msg)
}

$(function () {

    $('#upload_file').on('click', function (e) {
        window.location = '/androidfun/app-debug.apk';
    })

    $('#generate_json').on('click', function (e) {

        //your awesome code here
        var dict = {
            "version": document.getElementById("version_num").value,
            "link": "http://forusnerds.unaux.com/app-debug.apk",
            "devNotes": document.getElementById("devnote").value
        };

        var dictstring = JSON.stringify(dict);

        console.log(dictstring);

        // // hope the server sets Content-Disposition: attachment!
        $.ajax({
            url: "update.php",
            method: "post",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {
                data: dictstring
            },
            success: function (response) {
                // .. do something
                console.log(response)
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage); // Optional
            }
        });

        // $.ajax({
        //     url: "testphp.php",
        //     method: "post",
        //     data: {
        //         data: dictstring
        //     },
        //     success: function(response) {
        //         // .. do something
        //         console.log(response)
        //     },
        //     error: function(jqXHR, textStatus, errorMessage) {
        //         console.log(errorMessage); // Optional
        //     }
        // });

    })

});