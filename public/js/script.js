$(function(){
    'use strict';
    var modal = null;
    $('.forma_question form').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serializeArray();
        var sendData = {};
        formData.forEach(function (item) {
            sendData[item.name] = item.value;
        });
        var that = this;
        var url = $(this).attr('action');
        console.log(sendData);
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: sendData,
            success: function (response) {
                console.log(response);
                $('.modal_ask').arcticmodal('close');
            },
            error: function (errors) {
                $(that).find('li').each(function(){
                    $(this).removeClass('active message_error').addClass('active message_ok');
                });
            
                console.log(errors.responseJSON);
                var errorsJSON = errors.responseJSON;
                var errorsCount = 0;
                for(let key in errorsJSON){
                    errorsCount++;
                    $(that).find(`li.${key}_input`).removeClass('active message_ok').addClass('active message_error');                
                }
                if(errorsCount == 0){
                    if(url.indexOf('review') !== -1){
                        $('.modal_ask_succes').arcticmodal({
                            closeOnOverlayClick: true,
                            closeOnEsc:true
                        });

                        $('.modal_ask').arcticmodal('close');
                        
                    }else{
                        $('.modal_askk_succes').arcticmodal({
                            closeOnOverlayClick: true,
                            closeOnEsc:true
                        });
                        $('.modal_ask_doctor').arcticmodal('close');
                    }
                    $('.forma_question form li').each(function(){
                       $(this).removeClass('active message_error').removeClass('active message_ok'); 
                    });
                    $('.forma_question form').trigger( 'reset' );
                }
            }
        });
    });
    $('body').on('click', '.add_reviews', function(e){
        e.preventDefault();
        $('.modal_ask').arcticmodal({
            closeOnOverlayClick: true,
            closeOnEsc:true
        });
    });
    $('body').on('click', '.question-doctor', function(e){
        e.preventDefault();
        $('.modal_ask_doctor').arcticmodal({
            closeOnOverlayClick: true,
            closeOnEsc:true
        });
    });

    $('body').on('click', '.news_more', function(e){
        e.preventDefault();
        var currentPage = $(this).data('current');
        var totalPage = $(this).data('total');
        var that = this;
        if(currentPage < totalPage){
            $.ajax({
                url:`?page=${++currentPage}`,
                dataType: 'html',
                success: function (data) {
                    $('.magnet').append(data);
                    //console.log(data);
                    $(that).data('current', currentPage);
                    $('.tab_filters').magnet('append', data);
                    if(currentPage == totalPage){
                        $(that).remove();
                    }
                }
            });
        }
    });

    $('body').on('click', '.more-reviews', function(e){
        e.preventDefault();
        var currentPage = $(this).data('current');
        var totalPage = $(this).data('total');
        var that = this;
        
        if(currentPage < totalPage){
            $.ajax({
                url:`?page=${++currentPage}`,
                dataType: 'html',
                success: function (data) {
                    $('.reviews-list').append(data);
                    //console.log(data);
                    $(that).data('current', currentPage);
                    if(currentPage == totalPage){
                        $(that).remove();
                    }
                }
            });
        }
    });
    $('body').on('click', 'ul.cnsult_list li', function(e){
        var showClass = $(this).data('tabs');
        //alert(showClass);
        $(`.tabs.tabs_consult li`).hide();
        $(`.tabs.tabs_consult li.${showClass}`).show();
        $(`.tabs.tabs_consult li.${showClass} a:first`).trigger('click');
    });
});