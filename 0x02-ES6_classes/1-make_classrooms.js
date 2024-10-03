#!/usr/bin/node

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const f1 = new ClassRoom(19);
  const f2 = new ClassRoom(20);
  const f3 = new ClassRoom(34);

  return [f1, f2, f3];
}
