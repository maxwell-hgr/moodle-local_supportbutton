<?php
defined('MOODLE_INTERNAL') || die();

if ($hassiteconfig) {
    $settings = new admin_settingpage('local_supportbutton', get_string('pluginname', 'local_supportbutton'));

    $settings->add(new admin_setting_configtext(
        'local_supportbutton/chatid',
        'ID do Chat Zammad',
        'O ID numérico do chat configurado no seu Zammad.',
        '3',
        PARAM_INT
    ));

    $settings->add(new admin_setting_configcolourpicker(
        'local_supportbutton/background',
        'Cor de Fundo',
        'Cor de fundo do botão flutuante e do cabeçalho do atendimento.',
        '#008041'
    ));

    $ADMIN->add('localplugins', $settings);
}