interface TimeZone {
  defaultHour: number;
  southAfricaHour: number;
  arabiaHour: number;
  australiaHour: number;
  brazilHour: number;
  canadaHour: number;
  chinaHour: number;
  ivoryCoastHour: number;
  ecuadorHour: number;
}

export const Times: TimeZone = {
  defaultHour: new Date().getUTCHours(),
  southAfricaHour: new Date().getUTCHours() + 2,
  arabiaHour: new Date().getUTCHours() + 3,
  australiaHour: new Date().getUTCHours() + 10,
  brazilHour: new Date().getUTCHours() - 3,
  canadaHour: new Date().getUTCHours() - 6,
  chinaHour: new Date().getUTCHours() + 8,
  ivoryCoastHour: new Date().getUTCHours() + 0,
  ecuadorHour: new Date().getUTCHours() - 5,
};
