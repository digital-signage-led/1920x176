/**
 * 現場設定（佐賀県佐賀市中の小路2番5号 / 0014 佐賀玉屋）
 * 気象観測＋警報。横スクロール末尾に佐賀玉屋ロゴ1面。
 * 雨・気温・湿度・風・気圧は佐賀地方気象台（85142）。気圧の補完は不要。
 * 予報の天気は佐賀県南部（410010）。週間の最高気温は佐賀（85142）。
 * WBGT は環境省の佐賀（85142）。警報は佐賀市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '株式会社佐賀玉屋',
      rental: '',
      label: '佐賀市',
      address: '佐賀県佐賀市中の小路2番5号',
      locationLabel: '佐賀市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '85142',
      fallbackPoint: '',
      pointName: '佐賀',
      alertArea: '佐賀県',
      region: '09',
      prefecture: '85'
    },
    jma: {
      amedasPoint: '85142',
      amedasSupplementPoint: '',
      forecastArea: '410000',
      /* 佐賀市は南部 */
      forecastWeatherArea: '410010',
      forecastLabel: '佐賀市',
      warnArea: '410000',
      warnCity: '4120100',
      warnCityLabel: '佐賀市'
    },
    /* 佐賀玉屋 中の小路2番5号（雨雲ナウキャスト用）。アメダス佐賀は北緯33度15.9分・東経130度18.3分 */
    geo: { lat: 33.25349, lon: 130.29985 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/tamaya_logo.webp?v=20261026',
    logoAlt: '株式会社佐賀玉屋',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/tamaya_logo.webp?v=20261026',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
