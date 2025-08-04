import { describe, it, expect } from 'vitest';
import { greet } from './index.js';

describe('greet', () => {
  it('personalizes the message', () => {
    expect(greet('Luna')).toBe('Hello, Luna!');
  });
});

