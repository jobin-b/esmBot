import { locales } from "./collections.js";

/**
 * @param {string} key
 * @param {string} locale
 */
export function getString(key, locale = process.env.LOCALE ?? "en-US") {
  const obj = locales.get(locale);
  const splitKey = key.split(".");
  return splitKey.reduce((prev, cur) => prev[cur], obj) || splitKey.reduce((prev, cur) => prev[cur], locales.get("en-US")) || key;
}

export function getAllLocalizations(key) {
  const obj = {};
  const splitKey = key.split(".");
  for (const [locale, data] of locales.entries()) {
    const str = splitKey.reduce((prev, cur) => prev[cur], data);
    if (!str) continue;
    obj[locale] = str;
  }
  return obj;
}