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
                background-color: #008041; color: white; border: none;
                border-radius: 50px; padding: 12px 20px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: pointer;
                display: flex; align-items: center; gap: 8px; font-weight: bold;
            }
            .support-wrapper {
                position: fixed; bottom: 85px; right: 20px; z-index: 10000;
                width: 320px;
            }
            .zammad-chat { z-index: 10001 !important; }
        </style>";

        $modal_html = $OUTPUT->render_from_template('local_supportbutton/support_modal', []);

        $button = "
        <div class='support-container'>
            <div id='support-cards-container'>$modal_html</div>
            <button class='floating-support-btn' id='btn-support-trigger'>
                <i class='fa fa-commenting'></i> Suporte Online
            </button>
        </div>";

        echo $css . $button;

        $PAGE->requires->js_call_amd('local_supportbutton/support', 'init');
    }
}