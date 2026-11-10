/**
 * 現場設定（大阪府堺市美原区木材通3-1-8 / 0022）
 * 気象観測＋警報。ロゴなし。
 * 雨・気温・湿度・風・最高最低・瞬間風速は堺（62091）。気圧は堺に無いため大阪（62078）で補完する。
 * 八尾（62096）の方が約0.4km近いが、湿度が無い。現場は堺市内なので堺を主地点にする。
 * 予報は大阪府（270000）。週間の最高気温は大阪（62078）。
 * WBGT は環境省の堺（62091）。無いときは大阪（62078）。
 * 警報は堺市。美原区単独の二次細分区域は無い。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '美原区',
      address: '〒587-0042 大阪府堺市美原区木材通3-1-8',
      locationLabel: '美原区'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '62091',
      fallbackPoint: '62078',
      pointName: '堺',
      alertArea: '大阪府',
      region: '06',
      prefecture: '62'
    },
    jma: {
      amedasPoint: '62091',
      amedasSupplementPoint: '62078',
      forecastArea: '270000',
      forecastWeatherArea: '270000',
      forecastTempPoint: '62078',
      forecastLabel: '美原区',
      warnArea: '270000',
      warnCity: '2714000',
      warnCityLabel: '堺市'
    },
    /* 木材通3-1-8（雨雲ナウキャスト用）。アメダス堺は北緯34度33.3分・東経135度29.1分 */
    geo: { lat: 34.516922, lon: 135.57814 },
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
