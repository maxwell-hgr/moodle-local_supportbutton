<?php
namespace local_supportbutton;

defined('MOODLE_INTERNAL') || die();

class hook_callbacks {
    public static function inject_support_button(\core\hook\output\before_footer_html_generation $hook): void {
        global $OUTPUT, $PAGE;

        $css = "
        <style>
            .floating-support-btn {
                position: fixed; bottom: 20px; right: 20px; z-index: 9999;
                background-color: #007bff; color: white; border: none;
                border-radius: 50px; padding: 15px 25px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3); cursor: pointer;
                font-weight: bold; display: flex; align-items: center; gap: 8px;
            }
            .floating-support-btn:hover { background-color: #0056b3; color: white; }
        </style>";

        $button = "
        <button class='floating-support-btn' id='btn-support-trigger'>
            <i class='fa fa-comments'></i> Suporte
        </button>";

        // Injeta o CSS e o Botão
        echo $css . $button;

        // Inicializa o módulo AMD
        // Mude de 'local_supportbutton/support.js' para apenas 'local_supportbutton/support'
        $PAGE->requires->js_call_amd('local_supportbutton/support', 'init');
    }
}