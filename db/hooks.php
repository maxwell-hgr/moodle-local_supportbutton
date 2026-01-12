<?php
defined('MOODLE_INTERNAL') || die();

$callbacks = [
    [
        'hook' => \core\hook\output\before_footer_html_generation::class,
        'callback' => [local_supportbutton\hook_callbacks::class, 'inject_support_button'],
        'priority' => 100,
    ],
];