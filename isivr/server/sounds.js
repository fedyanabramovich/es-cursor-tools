const fs = require('fs');
const path = require('path');
const { accessToken } = require('./auth');
const { baseUrl } = require('./client');

async function uploadSound(args) {
  const file = await uploadFile(args.filePath);
  return saveSoundGroup({
    ID: 0,
    Name: args.name,
    Description: args.description || '',
    Tags: args.tags || '',
    ApplicationDataID: args.applicationDataId,
    FileId: file.ID,
  });
}

async function uploadFile(filePath) {
  const form = new FormData();
  const data = fs.readFileSync(filePath);
  form.append('file', new Blob([data]), path.basename(filePath));
  return postAudio('UploadFile', form);
}

async function saveSoundGroup(group) {
  return postAudio('EditGroup', JSON.stringify(group), { 'Content-Type': 'application/json' });
}

async function postAudio(action, body, extraHeaders = {}) {
  const token = await accessToken();
  const response = await fetch(`${baseUrl()}/Audio/${action}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json', ...extraHeaders },
    body,
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`Audio/${action} вернул ${response.status}: ${text.slice(0, 800)}`);
  return JSON.parse(text);
}

module.exports = { uploadSound };
