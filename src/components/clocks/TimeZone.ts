export const OPTIONS = {
  START_INDEX: 11,
  END_INDEX: 19,
  DEFAULT_LOCALE: "pt-BR",
  SOUTH_AFRICA_TIMEZONE: "Africa/Johannesburg",
  SAUDI_ARABIA_TIMEZONE: "Asia/Riyadh",
  AUSTRALIA_TIMEZONE: "Australia/Sydney",
  BRAZIL_TIMEZONE: "America/Sao_Paulo",
  CANADA_TIMEZONE: "America/Toronto",
  CHINA_TIMEZONE: "Asia/Shanghai",
  IVORY_COAST_TIMEZONE: "Africa/Abidjan",
  ECUADOR_TIMEZONE: "America/Bogota",
  SPAIN_TIMEZONE: "Europe/Madrid",
  USA_TIMEZONE: "America/New_York",
  GREECE_TIMEZONE: "Europe/Athens",
  ICELAND_TIMEZONE: "Atlantic/Reykjavik",
  JAPAN_TIMEZONE: "Asia/Tokyo",
  NEW_ZELAND_TIMEZONE: "Pacific/Auckland",
  PORTUGAL_TIMEZONE: "Europe/Lisbon",
  RUSSIA_TIMEZONE: "Europe/Moscow",
};

export const specifyDate = (locale: string, TIMEZONE: string) =>
  new Date()
    .toLocaleString(locale, {
      timeZone: TIMEZONE,
    })
    .slice(OPTIONS.START_INDEX, OPTIONS.END_INDEX);
