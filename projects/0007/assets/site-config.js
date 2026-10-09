/**
 * 現場設定（岐阜県多治見市）
 * 気象観測＋警報。ロゴなし。
 * アメダス多治見（52606）に気温・降水・風・湿度・最高最低・瞬間風速がある。
 * 気圧は最寄りの名古屋（51106）で補完する。
 * WBGT は環境省の多治見（52606）。無いときは名古屋（51106）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '多治見市',
      address: '岐阜県多治見市',
      locationLabel: '多治見市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '52606',
      fallbackPoint: '51106',
      pointName: '多治見',
      alertArea: '岐阜県',
      region: '05',
      prefecture: '52'
    },
    jma: {
      amedasPoint: '52606',
      amedasSupplementPoint: '51106',
      forecastArea: '210000',
      forecastLabel: '多治見市',
      warnArea: '210000',
      warnCity: '2120400',
      warnCityLabel: '多治見市'
    },
    /* アメダス多治見（北緯35度20.8分・東経137度6.5分） */
    geo: { lat: 35.3467, lon: 137.1083 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '多治見市',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
