/**
 * 1792×176 サイネージ列背景
 * 128×176 列ごと: 上バー 40px / 本体 / 下帯（ストリップ・予報は白40px、WBGT列は区切り線+白22px）
 */
(function (global) {
    'use strict';

    const UNKNOWN = { bgColor: '#2a2a2a', barColor: '#3a3a3a' };
    /** WBGT提供期間外（特別警報の黒・取得不可の灰色とは別のダークグレー） */
    const OFF_SEASON = { bgColor: '#484848', barColor: '#585858' };
    const LED_FOOT_BAR_BG = '#fff9f0';

    const LEVELS = [
        { min: 31, levelIdx: 4, bgColor: '#ED1A3D', barColor: '#F24A64' },  /* 危険 赤 */
        { min: 28, levelIdx: 3, bgColor: '#F39800', barColor: '#FFB133' },  /* 厳重警戒 橙 */
        { min: 25, levelIdx: 2, bgColor: '#FFEE00', barColor: '#FFF44D' },  /* 警戒 黄 */
        { min: 21, levelIdx: 1, bgColor: '#67C1EA', barColor: '#85D0F0' },  /* 注意 水色 */
        { min: -99, levelIdx: 0, bgColor: '#3181BD', barColor: '#4A96CC' } /* ほぼ安全 青 */
    ];

    const KIND = { STRIP: 'strip', WBGT: 'wbgt', FORECAST: 'forecast' };

    function colorsForLevel(levelIdx) {
        if (levelIdx == null || levelIdx < 0) return UNKNOWN;
        const idx = Math.max(0, Math.min(4, levelIdx | 0));
        const row = LEVELS.find(l => l.levelIdx === idx);
        return row ? { bgColor: row.bgColor, barColor: row.barColor } : UNKNOWN;
    }

    /** displayMode: 'normal' | 'unavailable' | 'offseason' — 濃い灰は unavailable / offseason のみ */
    /* 発表中の気象背景。特別警報=黒 / 危険警報=紫 / 警報=赤 / 注意報=黄 */
    const WARN_COLORS = {
        special: { bgColor: '#111111', barColor: '#333333', darkText: false },
        danger: { bgColor: '#AB00AA', barColor: '#7A0078', darkText: false },
        warning: { bgColor: '#FA2900', barColor: '#C82400', darkText: false },
        advisory: { bgColor: '#F2E700', barColor: '#CDB800', darkText: true }
    };
    let warnColorKey_ = '';
    function warnColors_() {
        return WARN_COLORS[warnColorKey_] || null;
    }
    function setWarnColorKey(key) {
        warnColorKey_ = WARN_COLORS[key] ? key : '';
    }

    function colorsForDisplay(levelIdx, displayMode) {
        if (displayMode === 'offseason') return OFF_SEASON;
        if (displayMode === 'unavailable') return UNKNOWN;
        const warn = warnColors_();
        if (warn) return { bgColor: warn.bgColor, barColor: warn.barColor };
        if (levelIdx == null || levelIdx < 0) return colorsForLevel(0);
        return colorsForLevel(levelIdx);
    }

    /** 注意(1)・警戒(2): 黄〜橙黄背景で文字を黒にする */
    function isDarkTextLevel(levelIdx) {
        return levelIdx === 1 || levelIdx === 2;
    }

    function isDarkTextForDisplay(levelIdx, displayMode) {
        if (displayMode === 'offseason' || displayMode === 'unavailable') return false;
        const warn = warnColors_();
        if (warn) return warn.darkText;
        return isDarkTextLevel(levelIdx);
    }

    function ensureBgLayer(el, kind) {
        if (!el || el.querySelector('.col-bg-layer')) return;
        el.classList.add('col-bg-host');
        const layer = document.createElement('div');
        layer.className = 'col-bg-layer col-bg-' + kind;
        layer.setAttribute('aria-hidden', 'true');
        layer.innerHTML =
            '<div class="col-bg-top"></div>' +
            '<div class="col-bg-body">' +
            (kind === KIND.WBGT ? '<div class="col-bg-wbgt-line"></div>' : '') +
            '</div>' +
            (kind === KIND.WBGT ? '<div class="col-bg-wbgt-foot"></div>' : '<div class="col-bg-foot"></div>');
        el.insertBefore(layer, el.firstChild);
    }

    function applyColorsToLayer(layer, colors, kind) {
        if (!layer) return;
        const top = layer.querySelector('.col-bg-top');
        const body = layer.querySelector('.col-bg-body');
        if (top) top.style.backgroundColor = colors.barColor;
        if (body) body.style.backgroundColor = colors.bgColor;
    }

    /** シーン4モジュール: 上バーは t3-scene-top-bar 側。列背景は本体72px+下帯24pxのみ */
    function applyColorsToT3UnitLayer(layer, colors) {
        if (!layer) return;
        const top = layer.querySelector('.col-bg-top');
        const body = layer.querySelector('.col-bg-body');
        const foot = layer.querySelector('.col-bg-foot');
        if (top) top.style.display = 'none';
        if (body) body.style.backgroundColor = colors.bgColor;
        if (foot) foot.style.backgroundColor = LED_FOOT_BAR_BG;
    }

    function applyT3TopBar(el, levelIdx, displayMode) {
        if (!el) return;
        const colors = colorsForDisplay(levelIdx, displayMode);
        el.style.backgroundColor = colors.barColor;
        el.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
    }

    function applyT3UnitStrip(el, levelIdx, displayMode) {
        ensureBgLayer(el, KIND.STRIP);
        applyColorsToT3UnitLayer(el.querySelector('.col-bg-layer'), colorsForDisplay(levelIdx, displayMode));
        el.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
        el.classList.toggle('wbgt-off-season', displayMode === 'offseason');
        el.classList.toggle('wbgt-unavailable', displayMode === 'unavailable');
    }

    function applyStrip(el, levelIdx, displayMode) {
        ensureBgLayer(el, KIND.STRIP);
        applyColorsToLayer(el.querySelector('.col-bg-layer'), colorsForDisplay(levelIdx, displayMode), KIND.STRIP);
        el.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
        el.classList.toggle('wbgt-off-season', displayMode === 'offseason');
        el.classList.toggle('wbgt-unavailable', displayMode === 'unavailable');
    }

    function applyWbgtColumn(el, levelIdx, displayMode) {
        ensureBgLayer(el, KIND.WBGT);
        applyColorsToLayer(el.querySelector('.col-bg-layer'), colorsForDisplay(levelIdx, displayMode), KIND.WBGT);
        el.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
    }

    function applyForecast(el, levelIdx, displayMode) {
        ensureBgLayer(el, KIND.FORECAST);
        const unknown = displayMode === 'unavailable' || levelIdx == null || levelIdx < 0;
        const colors = colorsForDisplay(levelIdx, displayMode);
        applyColorsToLayer(el.querySelector('.col-bg-layer'), colors, KIND.FORECAST);
        el.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
        el.classList.toggle('col-bg-unknown', unknown);
    }

    /** 1792×176 一体ストリップ背景（列分割なし・縦線なし） */
    function ensureSceneStripBg(container) {
        if (!container) return;
        const existing = container.querySelector('.scene-strip-bg');
        if (existing && existing.querySelector('.scene-strip-col')) existing.remove();
        if (container.querySelector('.scene-strip-bg')) return;
        const wrap = document.createElement('div');
        wrap.className = 'scene-strip-bg';
        wrap.setAttribute('aria-hidden', 'true');
        wrap.innerHTML =
            '<div class="col-bg-top"></div>' +
            '<div class="col-bg-body"></div>' +
            '<div class="col-bg-foot"></div>';
        container.insertBefore(wrap, container.firstChild);
    }

    function applySceneStripBg(container, levelIdx, displayMode) {
        if (!container) return;
        ensureSceneStripBg(container);
        const colors = colorsForDisplay(levelIdx, displayMode);
        const wrap = container.querySelector('.scene-strip-bg');
        container.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
        container.classList.toggle('wbgt-off-season', displayMode === 'offseason');
        container.classList.toggle('wbgt-unavailable', displayMode === 'unavailable');
        container.style.backgroundColor = colors.bgColor;
        if (!wrap) return;
        const top = wrap.querySelector('.col-bg-top');
        const body = wrap.querySelector('.col-bg-body');
        const foot = wrap.querySelector('.col-bg-foot');
        if (top) top.style.backgroundColor = colors.barColor;
        if (body) body.style.backgroundColor = colors.bgColor;
        if (foot) foot.style.backgroundColor = LED_FOOT_BAR_BG;
    }

    /** 既存レイヤーにも必ず色を上書き（キャッシュ・再描画ずれ対策） */
    function repaintStripHosts_(levelIdx, displayMode) {
        const colors = colorsForDisplay(levelIdx, displayMode);
        document.querySelectorAll('.content-area .col-bg-layer').forEach(function (layer) {
            const host = layer.parentElement;
            if (host && host.classList.contains('t3-unit')) {
                applyColorsToT3UnitLayer(layer, colors);
                return;
            }
            applyColorsToLayer(layer, colors, KIND.STRIP);
        });
        applyT3TopBar(document.querySelector('#scene3 .t3-scene-top-bar'), levelIdx, displayMode);
        refreshLogoPanel(levelIdx, displayMode);
    }

    function refreshScene2(levelIdx, displayMode) {
        document.querySelectorAll('#scene2 .s2-panel, #scene2 .s2-panel-data').forEach(panel => {
            if (panel.classList.contains('s2-logo-panel') || panel.getAttribute('data-s2') === 'logo') {
                panel.querySelectorAll('.col-bg-layer').forEach(function (el) { el.remove(); });
                panel.classList.remove('col-bg-host', 'col-bg-dark-text', 'wbgt-off-season', 'wbgt-unavailable');
                panel.style.backgroundColor = '#ffffff';
                return;
            }
            applyStrip(panel, levelIdx, displayMode);
        });
        paintScene2Ticker_();
    }
    function paintScene2Ticker_() {
        const scene = document.getElementById('scene2');
        if (!scene || !scene.classList.contains('s2-ticker')) return;
        const warn = warnColors_();
        const bg = warn ? warn.bgColor : '';
        scene.style.backgroundColor = bg;
        const wrap = scene.querySelector('.s2-scroll-wrap');
        if (wrap) wrap.style.backgroundColor = bg;
        scene.classList.toggle('s2-warn-on-dark', !!(warn && !warn.darkText));
    }

    function refreshScene1(levelIdx, displayMode) {
        document.querySelectorAll('#scene1 .panel').forEach(panel => applyStrip(panel, levelIdx, displayMode));
    }

    function refreshForecast(slots, displayMode) {
        const mode = displayMode || 'normal';
        let levelIdx = -1;
        if (mode === 'normal') {
            const row = slots && slots[0];
            levelIdx = row && row.wbgt != null
                ? (Number.isInteger(row.levelIdx) ? row.levelIdx : 0)
                : 0;
        }
        document.querySelectorAll('#scene4 .fc-track .fc-panel').forEach(function (panel) {
            if (panel.classList.contains('fc-logo-panel') || panel.getAttribute('data-fc') === 'logo') {
                panel.querySelectorAll('.col-bg-layer').forEach(function (el) { el.remove(); });
                panel.classList.remove('col-bg-host', 'col-bg-dark-text', 'wbgt-off-season', 'wbgt-unavailable');
                panel.style.backgroundColor = '#ffffff';
                return;
            }
            applyStrip(panel, levelIdx, mode);
        });
    }

    function refreshScene5(levelIdx, displayMode) {
        const dark = isDarkTextForDisplay(levelIdx, displayMode);
        const forecastLv = dark ? levelIdx : 0;
        const forecastMode = dark ? displayMode : 'normal';
        document.querySelectorAll('#scene5 .d5-panel').forEach(panel => {
            if (panel.classList.contains('d5-logo-panel') || panel.getAttribute('data-d5') === 'logo') {
                panel.querySelectorAll('.col-bg-layer').forEach(function (el) { el.remove(); });
                panel.classList.remove('col-bg-host', 'col-bg-dark-text', 'wbgt-off-season', 'wbgt-unavailable');
                panel.style.backgroundColor = '#ffffff';
                return;
            }
            if (panel.classList.contains('d5-today-focus')) {
                applyStrip(panel, levelIdx, displayMode);
                panel.classList.toggle('col-bg-dark-text', dark);
                return;
            }
            applyStrip(panel, forecastLv, forecastMode);
            panel.classList.toggle('col-bg-dark-text', dark);
        });
    }

    function refreshTicker(levelIdx, displayMode) {
        document.querySelectorAll('#scene3 .t3-unit').forEach(panel => {
            applyT3UnitStrip(panel, levelIdx, displayMode);
        });
        applyT3TopBar(document.querySelector('#scene3 .t3-scene-top-bar'), levelIdx, displayMode);
    }

    function refreshContentAreaBg(levelIdx, displayMode) {
        const content = document.querySelector('.content-area');
        if (!content) return;
        ensureSceneStripBg(content);
        content.classList.toggle('col-bg-dark-text', isDarkTextForDisplay(levelIdx, displayMode));
        applySceneStripBg(content, levelIdx, displayMode);
    }

    /** 右端 128×128（513以降）: WBGT色は使わず固定背景 */
    function initSignageLogo_() {
        const img = document.getElementById('signage-logo') || document.querySelector('.logo-img');
        const cfg = global.SIGNAGE_CONFIG;
        if (!img || !cfg) return;
        if (cfg.logoSrc && img.getAttribute('src') !== cfg.logoSrc) img.src = cfg.logoSrc;
        if (cfg.logoAlt) img.alt = cfg.logoAlt;
    }
    function refreshLogoPanel(levelIdx, displayMode) {
        const panel = document.querySelector('.logo-panel');
        if (!panel) return;
        panel.querySelectorAll('.col-bg-layer').forEach(function (el) { el.remove(); });
        panel.classList.remove('col-bg-host', 'col-bg-dark-text', 'wbgt-off-season', 'wbgt-unavailable');
        const cfg = global.SIGNAGE_CONFIG || {};
        panel.style.backgroundColor = cfg.logoPanelBg || '#ffffff';
    }

    function refreshAll(currentLevelIdx, displayMode) {
        refreshContentAreaBg(currentLevelIdx, displayMode);
        refreshLogoPanel(currentLevelIdx, displayMode);
    }

    function stripPanelBgLayers() {
        document.querySelectorAll('.col-bg-layer').forEach(el => el.remove());
        document.querySelectorAll('.col-bg-host').forEach(el => {
            el.classList.remove('col-bg-host', 'col-bg-dark-text', 'col-bg-unknown');
        });
        document.querySelectorAll('#scene3 .scene-strip-bg').forEach(el => el.remove());
        const inner = document.querySelector('#scene3 .ticker-scene-inner');
        if (inner) {
            while (inner.firstChild) document.querySelector('#scene3').appendChild(inner.firstChild);
            inner.remove();
        }
    }

    function initHosts() {
        initSignageLogo_();
        /* 背景レイヤーは strip しない（更新のたびに黒/灰が見えるのを防ぐ） */
    }

    global.SignageBg = {
        LEVELS,
        UNKNOWN,
        OFF_SEASON,
        KIND,
        colorsForLevel,
        colorsForDisplay,
        isDarkTextLevel,
        initHosts,
        initSignageLogo_,
        refreshAll,
        refreshLogoPanel,
        refreshScene1,
        refreshScene2,
        refreshForecast,
        refreshScene5,
        refreshTicker,
        applyStrip,
        applyT3UnitStrip,
        applyT3TopBar,
        applyWbgtColumn,
        applyForecast,
        applySceneStripBg,
        repaintStripHosts_,
        setWarnColorKey
    };
})(typeof window !== 'undefined' ? window : global);
