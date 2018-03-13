<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf8cbefe946cfa16aca47e8d3c38f229a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf8cbefe946cfa16aca47e8d3c38f229a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf8cbefe946cfa16aca47e8d3c38f229a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
