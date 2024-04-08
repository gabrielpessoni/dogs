<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'ho)`XU<z>rH`@SiP7=jW{l?WrXy>N5=(XM P_X2uY=P v5e45lv.4:2Q]%WmP9Bg' );
define( 'SECURE_AUTH_KEY',   'EfS7Kh`^XOwGQz&U^9u7m6,,p$K9N&o]MK9g RlKKng6UG{+yu( ?0>&5+KK~#mg' );
define( 'LOGGED_IN_KEY',     'Ts$f&YW-Y%Mi;O)O3=nNpNg:lP{wq$u?DJV@r.ttQaO.]uaQpkk,rHluaSGOWTI>' );
define( 'NONCE_KEY',         '1-gjf,io~_UT0~~ypri7T!|C0OLNbTkPMk,y ^iIW~m6`h@<2)BkDVql/%PBX !F' );
define( 'AUTH_SALT',         '] x3&My;?5BJSq,J-M=5;0ow0FyA.N.M8A.]1TyK}vF)Q&$`j,-`B/rES{V:czp3' );
define( 'SECURE_AUTH_SALT',  '36}<rDRE8){Tm{oS``g|+$6RoJ+kFV;Qc&?/dE!(Zs_L;C T}5M%dKa|bT&OPYE:' );
define( 'LOGGED_IN_SALT',    'Da%*njf|O4/8D(wcphp3Kb1{`kCEX^*Q+`oi6N:ri!HBci1cT)r{btn<Wdg:)[k5' );
define( 'NONCE_SALT',        '$:f )mmteH8^y(Nfl;D2[bLVR<k7)71xH.cy;~GH..xBE>vL%}2 &^`*l?+bbz`c' );
define( 'WP_CACHE_KEY_SALT', 'th8RtrU..aiBB-5%(7u$bMdys`7XK/QLTlqIPB]uxt]9amhr^Q,qG2+s&z}$gSo$' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define('JWT_AUTH_SECRET_KEY', 'QowKW1E49qP+[x^J~2xMcM8=b#Z^-=<LAv/WU@ULC>OswRJ?Xj6tk+]}=:HRf=9r');
define('JWT_AUTH_CORS_ENABLE', true);



/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
