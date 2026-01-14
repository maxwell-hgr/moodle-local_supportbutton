define(['jquery'], function($) {
    var loaded = false;
    var config = {};

    return {
        init: function(params) {
            var self = this;
            config = params;

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

                ghostScript.onload = function() {
                    $.getScript("https://atendimento.cead.unb.br/assets/chat/chat.min.js")
                        .done(function() {
                            /* global ZammadChat */
                            new ZammadChat({
                                host: 'wss://atendimento.cead.unb.br/ws',
                                background: config.background,
                                chatId: config.chatId,
                                show: false
                            });

                            $('#feedback-form').ZammadForm({
                                messageTitle: 'Formulário de suporte',
                                modal: true
                            });

                            loaded = true;
                            $('#cardAtendimentoPergunta').fadeIn();
                        });
                };
                document.head.appendChild(ghostScript);
            }
        }
    };
});