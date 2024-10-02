#!/usr/bin/node

export default function guardrail(mathFunction) {
  const queue = [];
  let val;
  try {
    val = mathFunction();
    queue.push(val);
  } catch (msg) {
    queue.push(String(msg));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
