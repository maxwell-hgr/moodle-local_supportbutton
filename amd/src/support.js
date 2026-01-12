define(['jquery', 'core/modal_factory', 'core/templates'], function($, ModalFactory, Templates) {
    return {
        init: function() {
            $('#btn-support-trigger').on('click', function(e) {
                e.preventDefault();

                alert('Iniciando suporte Zammad...');

                ModalFactory.create({
                    title: 'Suporte Técnico',
                    body: Templates.render('local_supportbutton/support_modal', {}),
                    footer: 'Equipe de Suporte',
                }).done(function(modal) {
                    modal.show();
                });
            });
        }
    };
});