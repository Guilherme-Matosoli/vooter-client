export const fallbackLng = "en";
export const languages = ["pt", fallbackLng];
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns: string) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: ns,
    defaultNS: ns,
    ns
  };
};
