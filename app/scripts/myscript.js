'use strict';

$(function() {
  var _ = window._;
  var firstTd = 'table tr td:first-child';
  //console.log($('.dash i.fa-certificate').length);
  $(firstTd + ' i.fa-file-o').each(function (index, element) {
    var url = $(element).parent().next().find('a').attr('href');
//    $(element).parent().next().find('a').attr('href', $(element).parent().next().find('a').attr('href') + '#submission');
    var user = $(element).parent().next().find('a b').text();
    $(element).html('<button class="btn btn-primary btn-xs" data-user="'+user+'" data-url="'+url+'">review</button>');
    $(element).find('button').click(function () {
      var self = $(this);
      $.get($(this).attr('data-url'), function (data) {
        var title = $(data).find('.header:first');
        var userFullname = self.attr('data-user');
        var contentData = $(data).find('tab_pane[title=Submission] .checkpoint-action-content');
        $(contentData).prepend(title);
        $(contentData).prepend(userFullname);
        var content = $(contentData).html();
        var submitButtonAction = $(contentData).find('form').attr('action');
        var submitButtonText = $(contentData).find('form .btn').attr('value');

        $('.modal').modal('show');
        $('.modal-content').html(content);
        $('.modal-content').find('.btn').replaceWith('<button class="btn btn-submit">'+submitButtonText+'</button>');
        console.log($('.modal-content').html());
        $('.modal').on('hide.bs.modal', function () {
          $('.modal-content').html('');
        });
        $('.modal-content .btn-submit').click(function () {
          $.post(submitButtonAction, $('#new_technical_assessment').serialize(), function () {
            $('.modal').modal('hide');
            $($(element).parents('tr')[0]).hide();
            $('.default-js-flash-container').html('<div class="alert full_page_alert success"><div class="alert-container">'+userFullname+' "'+$(title).text()+'" accepted!</div></div>');
          }).fail(function () {
            //USING ALERT MESSAGE UNTIL CAN MAKE A LITTLE CLEANER
            window.alert('Please make sure all required fields are filled in.');
          });
          return false;

        });
      });

    });
    //console.log($(element).parent().next().find('a').attr('href').split('/'));
    //console.log(id);
  });

  $('body').append('<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"></div></div></div>');

  $.get('/api/v1/notifications', function (result) {
    //BEGIN ASSESSMENTS
    var assessments = _.where(result, {type: 'assessment'});
    console.log(assessments);

    var appendAssessment = function (content) {
      var functionalAssessment = $(content).find('.functional-assessment');
      var form = $(functionalAssessment).find('form');
      var submitButtonText = $(form).find('.btn').attr('value');
      var submitButtonAction = $(form).attr('action');
      $(functionalAssessment).find('.btn').replaceWith('<button class="btn btn-submit">'+submitButtonText+'</button>');
      $(functionalAssessment).append('<hr>');
      $(functionalAssessment).find('.btn-submit').click(function () {
 //       alert(submitButtonAction);

          $.post(submitButtonAction, JSON.stringify(form), function () {
            $(functionalAssessment).hide();
            if ($('.functional-assessment:visible').size() === 0) {
              $('.modal').modal('hide');
              $('.default-js-flash-container').html('<div class="alert full_page_alert success"><div class="alert-container">Functional Assessments Complete!  For now mwaaahhhahhhahhhaaa.</div></div>');
            }
            return false;
          }, 'json').fail(function () {
            //USING ALERT MESSAGE UNTIL CAN MAKE A LITTLE CLEANER
            window.alert('Please make sure all required fields are filled in.');
          });
          return false;
      });
      $('.modal-content').append(functionalAssessment);
      //$('.modal-content').append(submitButtonText);
      //$('.modal-content').append(' - ');
      //$('.modal-content').append(submitButtonAction);
      //$('.modal-content').append('<hr>');
    };

    var getAssessment = function (assessment) {
      $.get(assessment.path, appendAssessment);
    };

    _.each(assessments, getAssessment);
    //END ASSESSMENTS

    $('.modal').modal('show');
  });
});
