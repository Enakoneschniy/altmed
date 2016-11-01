$(function(){
    'use strict';
    $('.forma_question form').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serializeArray();
        var sendData = {};
        formData.forEach(function (item) {
            sendData[item.name] = item.value;
        });
        console.log(sendData);
        $.ajax({
            url: '/question',
            method: 'post',
            dataType: 'json',
            data: sendData,
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});