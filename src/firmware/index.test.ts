import { describe, it, expect } from 'vitest';
import { MockBinding } from '@serialport/binding-mock';
import { FirmwareConnection } from './index.js';

describe('FirmwareConnection', () => {
  it('sends data over serial', async () => {
    const path = '/dev/mock';
    MockBinding.createPort(path, { echo: true });

    const conn = new FirmwareConnection({ path, binding: MockBinding });
    const message = new Promise<string>((resolve) => conn.onMessage(resolve));
    conn.send('PING');
    expect(await message).toBe('PING');
    await conn.close();
  });
});

