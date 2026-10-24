//hi9275's preferences
/* needs adding:
*
*/
user_pref("browser.aboutConfig.showWarning", false);

//disable AI, from betterfox
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

//Disable "Fix Major Site Issues" and minor site issues for enhanced tracking protection
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", false);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false);

//Enable GPC. already deviated from arkenfox so why not
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.pbmode.enabled", true); // Optional: also enables it in Private Browsing

//gfx web render
user_pref("gfx.webrender.all", true);

//Disable WebGL which can break certain websites that use it like wplace.live
user_pref("webgl.disabled", true);

//Disable WebGPU (more low level than WebGL)
user_pref("dom.webgpu.enabled", false);

//max touch points EFF set to 0 to disable idk if #2 is best but it doesn't work
user_pref("dom.w3c_touch_events.enabled", 0);
//user_pref("dom.maxtouchpoints.testing.value", 0);

//Remove "Offer to translate" popup
user_pref("browser.translations.automaticallyPopup", false);

//Better font rendering
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);

//Parallel downloads
user_pref("network.http.max-persistent-connections-per-server", 12);

//Reduce motion
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("ui.prefersReducedMotion", 1);

//Disable WebRTC which prevents real time communication like telehealth or zoom meetings via browser. Also breaks Tor Snowflake if you use that.
user_pref("media.peerconnection.enabled", false);

//[SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes | Settings ***/
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/* 4501: enable RFP
 * [NOTE] pbmode applies if true and the original pref is false
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a canvas site exception via the urlbar.
 * RFP also has a few side effects: mainly that timezone is GMT, and websites will prefer light theme ***/
user_pref("privacy.resistFingerprinting", true); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]

//Stuff from browserleaks.com to randomize Canvas Fingerprint
user_pref("privacy.resistFingerprinting.randomization.canvas.use_siphash", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);

//Letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

/** SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS ***/
/* 2815: set "Cookies" and "Site Data" to clear on shutdown (if 2810 is true) [SETUP-CHROME] [FF128+]
 * [NOTE] Exceptions: For cross-domain logins, add exceptions for both sites
 * e.g. https://www.youtube.com (site) + https://accounts.google.com (single sign on)
 * [WARNING] Be selective with what sites you "Allow", as they also disable partitioning (1767271)
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Cookies>Allow (when on the website in question)
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings ***/
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);

/** SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS ***/




/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811+), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 1);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Firefox Home (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:home");
/* 0104: set NEWTAB page
 * true=Firefox Home (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
user_pref("browser.newtabpage.enabled", true);

/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);

/* 5010: disable location bar suggestion types
 * [SETTING] Search>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
// user_pref("browser.urlbar.autoFill", false);
user_pref("signon.rememberSignons", false);

/* 5013: disable browsing and download history
* [NOTE] We also clear history and downloads on exit (2811+)
* [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
user_pref("places.history.enabled", false);

/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]

/* 5019: disable page thumbnail collection ***/
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]

/* 5020: disable Windows native notifications and use app notications instead [FF111+] [WINDOWS] ***/
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);

 /* 5508: disable all DRM content (EME: Encryption Media Extension)
  * Optionally hide the UI setting which also disables the DRM prompt
  * [SETTING] General>DRM Content>Play DRM-controlled content
  * [TEST] https://bitmovin.com/demos/drm
  * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
user_pref("media.eme.enabled", false);

 /* 0710: enable DNS-over-HTTPS (DoH) [FF60+]
  * 0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
  * see "doh-rollout.home-region": USA 2019, Canada 2021, Russia/Ukraine 2022 [3]
  * [SETTING] Privacy & Security>DNS over HTTPS
  * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
  * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
  * [3] https://support.mozilla.org/kb/firefox-dns-over-https
  * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 3);
 /* 0712: set DoH provider
  * The custom uri is the value shown when you "Choose provider>Custom>"
  * [NOTE] If you USE custom then "network.trr.uri" should be set the same
  * [SETTING] Privacy & Security>DNS over HTTPS>Increased/Max>Choose provider ***/
user_pref("network.trr.uri", "https://freedns.controld.com/x-hagezi-proplus");
user_pref("network.trr.custom_uri", "https://freedns.controld.com/x-hagezi-proplus");

/*** [SECTION 0400]: SAFE BROWSING (SB)
 S B has taken many steps to preserve privacy. If required, *a full url is never sent
 to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes.
 Firefox takes measures such as stripping out identifying parameters and since SBv4 (FF57+)
 doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)

 [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
 [2] https://wiki.mozilla.org/Security/Safe_Browsing
 [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
 [4] https://educatedguesswork.org/posts/safe-browsing-privacy/
 ***/
user_pref("_user.js.parrot", "0400 syntax error: the parrot's passed on!");
/* 0401: disable SB (Safe Browsing)
 * [WARNING] Do this at your own risk! These are the master switches
 * [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content ***/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
/* 0402: disable SB checks for downloads (both local lookups + remote)
 * This is the master switch for the safebrowsing.downloads* prefs (0403, 0404)
 * [SETTING] Privacy & Security>Security>... "Block dangerous downloads" ***/
user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0403: disable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
/* 0404: disable SB checks for unwanted software
 * [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software" ***/
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
/* 0405: disable "ignore this warning" on SB warnings [FF45+]
 * If clicked, it bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
 * [1] https://bugzilla.mozilla.org/1226490 ***/
user_pref("browser.safebrowsing.allowOverride", false);

/* 0815: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Search>Address Bar>When using the address bar, suggest>Search engines ***/
user_pref("browser.urlbar.suggest.engines", false);

//user_pref("network.cookie.allowlist", "*.google.com, *.x.com, *.ppy.sh, *.oregonstate.edu, *.reddit.com, *.linkedin.com, *.deepseek.com, *.ente.io, *.duckduckgo.com, *.bitwarden.com, *.apple.com, *.duosecurity.com, *.live.com, *.microsoft.com, *.epicgames.com, *.canvaslms.com, *.archive.org, *.grammarly.com, *.instagram.com, *.starrezhousing.com, *.icloud.com, *.chess.com, *.lichess.org, *.sporcle.com, *.jetpunk.com, *.outlook.com, *.youtube.com, *.questdiagnostics.com, *.roblox.com, *.tophat.com, *.gradescope.com, *.steampowered.com, *.microsoftonline.com, *.sharepoint.com, *.spotify.com, *.stats.fm, *.gmail.com, *.discord.com, *.discord.gg, *.twitch.tv, *.kick.com", *.hltv.org, *.x.com, *.twitter.com, *.yahoo.com );



