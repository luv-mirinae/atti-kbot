/**
 * Atti K-Bot
 * Author Mirinae (luv-mirinae)
 * License GPL-v3.0
 */

'use strict';

const bot = BotManager.getCurrentBot();
bot.setCommandPrefix('/');

// 프로젝트 모듈 로드
const _Util = require('modules/util');

// command에 반응할 채팅방
const ACTIVE_ROOM = ['DEBUG ROOM'];

// markAsRead()를 호출할 채팅방 (ACTIVE_ROOM ∈ count_rooms)
let count_rooms = {
  'DEBUG ROOM': 0,
};

// 채팅봇을 호출할 때 사용할 이름
const BOT_NAME = '아띠';

// 메시지 수신
const onMessage = (message) => {
  autoRead(message);
};
bot.addListener(Event.MESSAGE, onMessage);

// 명령어 수신
const onCommand = (message) => {};
bot.addListener(Event.COMMAND, onCommand);

// 자동 읽음
const autoRead = (message) => {
  const MARK_AS_READ_COUNT = 100;
  count_rooms[message.room]++;
  if (count_rooms[message.room] >= MARK_AS_READ_COUNT) {
    message.markAsRead();
    count_rooms[message.room] = 0;
    Log.debug(`${message.room}방의 모든 메시지를 읽음 처리했습니다.`);
  }
};
