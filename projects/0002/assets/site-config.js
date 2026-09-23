/**
 * 現場設定（大阪府摂津市西一津屋1-1 / ダイキン工業淀川製作所）
 * 気象観測の横スクロール末尾にロゴ1面を流す。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: 'ダイキン工業株式会社',
      rental: '',
      /* 時刻下白帯＝地名 */
      label: '摂津市',
      address: '大阪府摂津市西一津屋1-1',
      locationLabel: '摂津市'
    },
    moe: {
      /* 環境省 WBGT（大阪 62078）※WBGTシーン非表示でも地点は合わせておく */
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
      /* 気象庁 AMeDAS 62078（大阪管区気象台） */
      amedasPoint: '62078',
      amedasSupplementPoint: '',
      forecastArea: '270000',
      forecastLabel: '摂津市',
      warnArea: '270000',
      warnCity: '2722400',
      /* 気象庁コード 2722400＝摂津市（北大阪）。画面表示は摂津市 */
      warnCityLabel: '摂津市'
    },
    /* 淀川製作所・西一津屋代表座標（雨雲ナウキャスト用） */
    geo: { lat: 34.7786, lon: 135.5619 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/raiznext_logo.png?v=20260923b',
    logoAlt: '株式会社レイズネクスト',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/raiznext_logo.png?v=20260923b',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
