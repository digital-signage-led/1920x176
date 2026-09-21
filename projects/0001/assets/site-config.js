/**
 * 現場設定（横浜市磯子区鳳町1番1号 / エネオス株式会社）
 * 気象観測の横スクロール末尾にロゴ1面を流す。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: 'エネオス株式会社',
      rental: '',
      /* 時刻下白帯＝地名 */
      label: '磯子区',
      address: '横浜市磯子区鳳町1番1号',
      locationLabel: '磯子区'
    },
    moe: {
      /* 環境省 WBGT（横浜 46106）※WBGTシーン非表示でも地点は合わせておく */
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '46106',
      fallbackPoint: '',
      pointName: '横浜',
      alertArea: '神奈川県',
      region: '03',
      prefecture: '46'
    },
    jma: {
      /* 気象庁 AMeDAS 46106（横浜地方気象台・中区山手町） */
      amedasPoint: '46106',
      amedasSupplementPoint: '',
      forecastArea: '140000',
      forecastLabel: '磯子区',
      warnArea: '140000',
      warnCity: '1410012',
      /* 気象庁コード 1410012＝横浜市南部（磯子区を含む）。画面表示は磯子区 */
      warnCityLabel: '磯子区'
    },
    /* 鳳町代表座標（雨雲ナウキャスト用） */
    geo: { lat: 35.412494, lon: 139.636281 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: './assets/eneos_logo.gif?v=20260918',
    logoAlt: 'エネオス株式会社',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: './assets/eneos_logo.gif?v=20260918',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
