/**
 * 現場設定（岐阜県中津川市 / 0007 清水建設 大井川TN）
 * 気象観測＋警報。表示は 0010 と同じ横一列。ロゴ画像は未設定。
 * アメダス中津川（52557）に気温・降水・風・湿度・最高最低・瞬間風速がある。
 * 気圧は最寄りの名古屋（51106）で補完する。
 * WBGT は環境省の中津川（52557）。無いときは名古屋（51106）。
 * 予報は美濃地方（東濃を含む）。警報は中津川市。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '清水建設',
      rental: '大井川TN',
      label: '中津川市',
      address: '岐阜県中津川市',
      locationLabel: '中津川市'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '52557',
      fallbackPoint: '51106',
      pointName: '中津川',
      alertArea: '岐阜県',
      region: '05',
      prefecture: '52'
    },
    jma: {
      amedasPoint: '52557',
      amedasSupplementPoint: '51106',
      forecastArea: '210000',
      forecastLabel: '中津川市',
      warnArea: '210000',
      warnCity: '2120600',
      warnCityLabel: '中津川市'
    },
    /* アメダス中津川（北緯35度28.6分・東経137度29.2分） */
    geo: { lat: 35.4767, lon: 137.4867 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '清水建設',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
