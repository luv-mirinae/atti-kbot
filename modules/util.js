/**
 * Atti K-Bot
 * Author Mirinae (luv-mirinae)
 * License GPL-v3.0
 */

'use strict';

// 현재 날짜를 yyyy-mm-dd 형식으로 출력
exports.getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 현재 시각을 HH:MM:SS 형식으로 출력
exports.getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};
