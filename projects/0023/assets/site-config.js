/**
 * 現場設定（大阪府大阪市 / 0023）
 * 気象観測＋警報。ロゴなし。
 * 雨・気温・湿度・風・気圧・最高最低・瞬間風速は大阪（62078）。
 * 予報は大阪府（270000）。週間の最高気温も大阪（62078）。
 * WBGT は環境省の大阪（62078）。
 * 警報は大阪市（2710000）。区別の指定は無い。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '大阪市',
      address: '大阪府大阪市',
      locationLabel: '大阪市'
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
      forecastTempPoint: '62078',
      forecastLabel: '大阪市',
      warnArea: '270000',
      warnCity: '2710000',
      warnCityLabel: '大阪市'
    },
    /* 大阪管区気象台（大阪市中央区大手前）。北緯34度40.9分・東経135度31.1分 */
    geo: { lat: 34.6817, lon: 135.5183 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
