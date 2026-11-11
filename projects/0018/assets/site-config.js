/**
 * 現場設定（愛知県東海市名和町5番割17-17 / 0018 塩浜工業・GLP名和物流倉庫）
 * 気象観測＋警報。横スクロール末尾に塩浜工業ロゴ1面。0008（東海市・塩浜）とは別案件。
 * 市内にアメダスが無いため、最寄りの大府（51216）を使う。
 * 気圧は名古屋（51106）で補完する。
 * 予報の天気は愛知県西部（230010）。週間の最高気温は名古屋（51106）。
 * WBGT は環境省の大府（51216）。無いときは名古屋（51106）。警報は東海市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '塩浜工業',
      rental: 'GLP名和物流倉庫',
      label: '東海市',
      address: '愛知県東海市名和町5番割17-17',
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
      forecastWeatherArea: '230010',
      forecastLabel: '東海市',
      warnArea: '230000',
      warnCity: '2322200',
      warnCityLabel: '東海市'
    },
    /* 名和町の代表点（雨雲ナウキャスト用）。5番割17-17のピンポイントは街区データが無い */
    geo: { lat: 35.048076, lon: 136.916019 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/shiohama_logo.jpg?v=20261111',
    logoAlt: '塩浜工業',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/shiohama_logo.jpg?v=20261111',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
