/**
 * 現場設定（奈良県磯城郡田原本町）
 * 気象観測＋警報。ロゴなし。
 * 田原本（64056）は雨量のみ。気温などは奈良（64036）で補完。
 * 風向と風速も最寄りの奈良（64036）から取る。
 * WBGT は環境省の最寄り地点・奈良（64036）。
 */
(function (global) {
  'use strict';

  var cfg = {
    site: {
      customer: '',
      rental: '',
      label: '田原本町',
      address: '奈良県磯城郡田原本町',
      locationLabel: '田原本町'
    },
    moe: {
      gasUrl:
        'https://script.google.com/macros/s/AKfycbzSTsappgfJTaJruOBJsbnCXSTPkeTBp39CXpvoSZsPQ0mWGs4KjSonC8_eZ2b1EeUXTQ/exec',
      point: '64036',
      fallbackPoint: '',
      pointName: '奈良',
      alertArea: '奈良県',
      region: '07',
      prefecture: '64'
    },
    jma: {
      amedasPoint: '64056',
      amedasSupplementPoint: '64036',
      forecastArea: '290000',
      forecastLabel: '田原本町',
      warnArea: '290000',
      warnCity: '2936300',
      warnCityLabel: '田原本町'
    },
    /* アメダス田原本（北緯34度33.3分・東経135度47.1分） */
    geo: { lat: 34.555, lon: 135.785 },
    timeZone: 'Asia/Tokyo',
    refreshMs: 60000,
    footSource: '出典：気象庁・環境省データ'
  };

  global.SignageConfig = cfg;

  global.SIGNAGE_CONFIG = {
    logoSrc: '',
    logoAlt: '田原本町',
    logoPanelBg: '#ffffff',
    logoCorpSrc: '',
    footLogoSrc: '',
    footBannerSrc: ''
  };
})(typeof window !== 'undefined' ? window : global);
