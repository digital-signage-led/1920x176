#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var root = path.join(__dirname, '..');
var ledger = JSON.parse(fs.readFileSync(path.join(root, 'shared/data/projects.json'), 'utf8'));
var ok = true;

function fail(msg) {
  console.error(msg);
  ok = false;
}

var folders = fs.readdirSync(path.join(root, 'projects')).filter(function (name) {
  return /^\d{4}$/.test(name);
}).sort();
var maxId = folders[folders.length - 1] || '0000';
if (String(ledger.nextId || '') <= maxId) {
  fail('nextId は既存番号より大きくしてください。 nextId=' + ledger.nextId + ' max=' + maxId);
}

(ledger.projects || []).forEach(function (p) {
  if (!p.locked) return;
  var file = path.join(root, 'projects', p.id, 'project.json');
  if (!fs.existsSync(file)) {
    fail('locked 案件のフォルダを消さないでください: ' + p.id);
    return;
  }
  var local = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (local.id !== p.id) fail('locked の id を変えないでください: ' + p.id);
  if (local.locked !== true) fail('locked を外さないでください: ' + p.id);
  if (local.name !== p.name) fail('locked の案件名を上書きしないでください: ' + p.id);
  if (p.path !== 'projects/' + p.id + '/') fail('locked の path を変えないでください: ' + p.id);
});

if (!ok) process.exit(1);
console.log('locked 案件は保持、次番号は ' + ledger.nextId);
