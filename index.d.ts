export interface IConfig {
  // Optional. You can customize the ID of the <div> that Orejime will create when starting up.
  // The generated <div> will be inserted at the beginning of the <body>.
  // If there is already a DOM element with this id, Orejime will use it instead of creating a new element.
  // defaults to "orejime".
  elementID?: string;

  // Optional. For accessibility's sake, the Orejime modal must know what is the element
  // containing your app or website. Orejime should *not* be in this element.
  // The idea is your DOM could look like this after Orejime is initialized:
  // <body>
  //      <div id="orejime">...</div>
  //      <div id="app">your actual website</div>
  // </body>
  //
  // It is highly recommended to set this option, even though it's not required.
  // defaults to undefined.
  appElement?: string;

  // Optional. You can customize the name of the cookie that Orejime uses for storing
  // user consent decisions.
  // defaults to "orejime".
  cookieName?: string;

  // Optional. You can set a custom expiration time for the Orejime cookie, in days.
  // defaults to 365.
  cookieExpiresAfterDays?: number;

  // Optional. You can provide a custom function to serialize the cookie contents.
  stringifyCookie?: unknown;

  // Optional. You can provide a custom function to unserialize the cookie contents.
  parseCookie?: unknown;

  // You must provide a link to your privacy policy page
  privacyPolicy: string;

  // Optional. Applications configured below will be ON by default if default=true.
  // defaults to true
  default?: boolean;

  // Optional. If "mustConsent" is set to true, Orejime will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declined the use of third-party apps.
  // defaults to false
  mustConsent?: boolean;

  // Optional. If "mustNotice" is set to true, Orejime will display the consent
  // notice and not allow the user to close it before having actively
  // consented or declined the use of third-party apps.
  // Has no effect if mustConsent is set to true.
  // defaults to false
  mustNotice?: boolean;

  // Optional. If "implicitConsent" is set to true, Orejime will automatically accept
  // cookies if the user continues his navigation on the website after the
  // first page. If you enable this, you must warn the user
  // of this behavior in the notice window. You can do that easily by overriding
  // translation strings (see below).
  // defaults to false
  implicitConsent?: boolean;

  // Optional. You can define the UI language directly here. If undefined, Orejime will
  // use the value given in the global "lang" variable, or fallback to the value
  // in the <html> lang attribute, or fallback to "en".
  lang?: string;

  // Optional. You can pass an image url to show in the notice.
  // If the image is not exclusively decorative, you can pass an object
  // with the image src and alt attributes: `logo: {src: '...', alt: '...'}`
  // defaults to false
  logo?: boolean;

  // Optional. Set Orejime in debug mode to have a few stuff
  // logged in the console, like warning about missing translations.
  // defaults to false
  debug?: boolean;

  // You can overwrite existing translations and add translations for your
  // app descriptions and purposes. See `src/translations.yml` for a full
  // list of translations that can be overwritten
  translations: {[key: string]: {
      consentModal: {description: string};
      inlineTracker: {description: string};
      externalTracker: {description: string};
      purposes: {analytics: string; security: string};
    };};

  // The list of third-party apps that Orejime will manage for you.
  // The apps will appear in the modal in the same order as defined here.
  apps: {
    name: string;
    title: string;
    cookies: (string|string[])[];
    purposes?: string[];
    callback?: unknown;
    required?: boolean;
    optOut?: boolean;
    default?: boolean;
    onlyOnce?: boolean;
  }[];
}

export declare function init(conf: IConfig): {
  show: unknown;
  internals: {
    react: unknown;
    manager: string;
    config: IConfig;
  };
};

export declare const defaultConfig: {
  elementID: string;
  appElement: undefined;
  stylePrefix: string;
  cookieName: string;
  cookieExpiresAfterDays: number;
  stringifyCookie: unknown;
  parseCookie: unknown;
  privacyPolicy: string;
  default: boolean;
  mustConsent: boolean;
  mustNotice: boolean;
  implicitConsent: boolean;
  logo: boolean;
  lang: unknown;
  translations: {};
  apps: {};
  debug: boolean;
};
