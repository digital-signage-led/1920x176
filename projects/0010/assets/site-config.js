/**
 * 現場設定（愛知県名古屋市 / 0010 三菱重工）
 * 気象観測＋警報。横スクロール末尾に三菱重工ロゴ1面。
 * 雨・気温・湿度・風・気圧は名古屋（51106）。
 * WBGT は環境省の名古屋（51106）。
 * 予報は愛知県西部。警報は名古屋市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '三菱重工',
      rental: '',
      label: '名古屋市',
      address: '愛知県名古屋市',
      locationLabel: '名古屋市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '51106',
      fallbackPoint: '',
      pointName: '名古屋',
      alertArea: '愛知県',
      region: '05',
      prefecture: '51'
    },
    jma: {
      amedasPoint: '51106',
      amedasSupplementPoint: '51106',
      forecastArea: '230000',
      forecastLabel: '名古屋市',
      warnArea: '230000',
      warnCity: '2310000',
      warnCityLabel: '名古屋市'
    },
    /* 名古屋市役所付近（北緯35度10.9分・東経136度54.4分） */
    geo: { lat: 35.181, lon: 136.906 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/mhi_logo.jpg?v=20261016',
    logoAlt: '三菱重工',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/mhi_logo.jpg?v=20261016',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
