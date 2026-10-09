/**
 * 現場設定（愛知県東海市）
 * 気象観測＋警報。ロゴなし。
 * 市内にアメダスが無いため、最寄りの大府（51216、約5km）を使う。
 * 気圧は名古屋（51106）で補完する。
 * WBGT は環境省の大府（51216）。無いときは名古屋（51106）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '東海市',
      address: '愛知県東海市',
      locationLabel: '東海市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '51216',
      fallbackPoint: '51106',
      pointName: '大府',
      alertArea: '愛知県',
      region: '05',
      prefecture: '51'
    },
    jma: {
      amedasPoint: '51216',
      amedasSupplementPoint: '51106',
      forecastArea: '230000',
      forecastLabel: '東海市',
      warnArea: '230000',
      warnCity: '2322200',
      warnCityLabel: '東海市'
    },
    /* アメダス大府（北緯34度59.7分・東経136度56.6分） */
    geo: { lat: 34.995, lon: 136.9433 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '東海市',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
