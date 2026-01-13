define(['jquery'], function($) {
    var loaded = false;

    return {
        init: function() {
            var self = this;

            $('#btn-support-trigger').on('click', function(e) {
                e.preventDefault();

                if (!loaded) {
                    self.carregarZammad();
                } else {
                    $('#cardAtendimentoPergunta').toggle();
                }
            });

            $(document).on('click', '.noZammadButton, .closeButtonFirst, .noZammadButtonForm, .closeButtonForm', function() {
                $('#cardAtendimentoPergunta, #cardFormulario').hide();
            });

            $(document).on('click', '.try-zammad-chat', function() {
                $('#cardAtendimentoPergunta').hide();
                $('.open-zammad-chat').click();

                setTimeout(function() {
                    if (!$('.js-chat-open').length) {
                        $('#cardFormulario').show();
                    }
                }, 600);
            });

            $(document).on('click', '#feedback-form-try', function() {
                $('#cardFormulario').hide();
                $('#feedback-form').click();
            });
        },

        carregarZammad: function() {
            window.jQuery = window.$ = $;

            if (!document.getElementById('zammad_form_script')) {
                var ghostScript = document.createElement('script');
                ghostScript.id = 'zammad_form_script';
                ghostScript.src = "https://atendimento.cead.unb.br/assets/form/form.js";
                document.head.appendChild(ghostScript);
            }

            $.getScript("https://atendimento.cead.unb.br/assets/form/form.js")
                .done(function() {
                    $.getScript("https://atendimento.cead.unb.br/assets/chat/chat.min.js")
                        .done(function() {


                            $('#feedback-form').ZammadForm({
                                messageTitle: 'Formulário de suporte',
                                messageSubmit: 'Enviar',
                                messageThankYou: 'Obrigado! Responderemos em breve!',
                                modal: true
                            });

                            new ZammadChat({
                                background: '#008041',
                                chatId: 3,
                                show: false
                            });

                            loaded = true;
                            $('#cardAtendimentoPergunta').fadeIn();
                        });
                });
        }
    };
});