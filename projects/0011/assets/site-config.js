/**
 * 現場設定（大阪府枚方市 / 0011 大林組）
 * 気象観測＋警報。横スクロール末尾に大林組ロゴ1面。
 * 雨・気温・湿度・風は枚方（62046）。気圧は枚方に無いため大阪（62078）で補完する。
 * WBGT は環境省の枚方（62046）。無いときは大阪（62078）。
 * 予報は大阪府。警報は枚方市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '大林組',
      rental: '',
      label: '枚方市',
      address: '大阪府枚方市',
      locationLabel: '枚方市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '62046',
      fallbackPoint: '62078',
      pointName: '枚方',
      alertArea: '大阪府',
      region: '06',
      prefecture: '62'
    },
    jma: {
      amedasPoint: '62046',
      amedasSupplementPoint: '62078',
      forecastArea: '270000',
      forecastLabel: '枚方市',
      warnArea: '270000',
      warnCity: '2721000',
      warnCityLabel: '枚方市'
    },
    /* アメダス枚方（北緯34度48.5分・東経135度40.3分） */
    geo: { lat: 34.8083, lon: 135.6717 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/obayashi_logo.png?v=20261016',
    logoAlt: '大林組',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/obayashi_logo.png?v=20261016',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
