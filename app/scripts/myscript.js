//alert('testing');
$(function() {
  var firstTd = 'table tr td:first-child';

  $(firstTd + ' i.fa-file-o').each(function (index, element) {
    var url = $(element).parent().next().find('a').attr('href');
    var splitUrl = url.split('/');
    var id = splitUrl.pop();
    //var id = splitUrl[(splitUrl.length - 1)];
    $(element).html('<button class="btn btn-primary btn-xs" data-url="'+url+'">review</button>');
    $(element).find('button').click(function () {
      $.get($(this).attr('data-url'), function (data) {
        var authenticity_token = $('meta[name=csrf-token]').attr('content');
        var contentData = $(data).find('tab_pane[title=Submission] .checkpoint-action-content');
        var button = contentData.find('.btn');
        button.attr('type','button');
        $(button).click(function () {
          console.log('POSTED');
          //$.post(button.parent('form').attr('action'), function () {
          //  $('.modal').modal('hide');
          //  $(element).parent('tr').hide();
          //});

        });

        var content = contentData.html();


        //contentData.find('.btn').attr('type','').click(function () {
        //  $.post(button.parent('form').attr('action'));
        //  $('.modal').modal('hide');
        //  $(element).parent('tr').hide();

        //});

        $('.modal').modal('show');
        $('.modal-content').html(content);
        $('.modal').on('hide.bs.modal', function (e) {
          $('.modal-content').html('');
        });
      });

    })
    //console.log($(element).parent().next().find('a').attr('href').split('/'));
    //console.log(id);
  });

  $('body').append(
    '<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"></div></div></div>'
  );
});
