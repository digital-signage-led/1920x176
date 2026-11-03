/**
 * 現場設定（大阪府門真市 / 0016 大鉄工業）
 * 気象観測＋警報。横スクロール末尾に大鉄工業ロゴ1面。解像度は 1920×212。
 * 雨・気温・湿度・風・気圧は大阪（62078）。門真市内にアメダスはない。
 * 予報は大阪府（270000）。週間の最高気温は大阪（62078）。
 * WBGT は環境省の大阪（62078）。警報は門真市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '大鉄工業株式会社',
      rental: '',
      label: '門真市',
      address: '大阪府門真市',
      locationLabel: '門真市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '62078',
      fallbackPoint: '',
      pointName: '大阪',
      alertArea: '大阪府',
      region: '06',
      prefecture: '62'
    },
    jma: {
      amedasPoint: '62078',
      amedasSupplementPoint: '',
      forecastArea: '270000',
      forecastWeatherArea: '270000',
      forecastLabel: '門真市',
      warnArea: '270000',
      warnCity: '2722300',
      warnCityLabel: '門真市'
    },
    /* 門真市役所付近（雨雲ナウキャスト用）。アメダス大阪は北緯34度40.9分・東経135度31.1分 */
    geo: { lat: 34.739548, lon: 135.586884 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/daitetsu_logo.png?v=20261103',
    logoAlt: '大鉄工業株式会社',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/daitetsu_logo.png?v=20261103',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
