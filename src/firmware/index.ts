import { SerialPort } from 'serialport';

/** Options for creating a microcontroller connection */
export interface FirmwareOptions {
  /** Path to the serial device (e.g., `/dev/ttyUSB0`) */
  path: string;
  /** Baud rate for the microcontroller */
  baudRate?: number;
  /** Custom serial binding for testing (e.g., MockBinding) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  binding?: any;
}

/**
 * Lightweight microcontroller communication handler.
 * Wraps a SerialPort and exposes send/listen helpers.
 */
export class FirmwareConnection {
  private port: SerialPort;

  constructor(options: FirmwareOptions) {
    this.port = new SerialPort({
      path: options.path,
      baudRate: options.baudRate ?? 9600,
      binding: options.binding,
    } as any);
  }

  /** Transmit a newline-terminated message to the microcontroller */
  send(message: string): void {
    this.port.write(`${message}\n`);
  }

  /** Register a handler for incoming messages */
  onMessage(handler: (msg: string) => void): void {
    this.port.on('data', (data) => handler(data.toString().trim()));
  }

  /** Close the serial connection */
  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.port.close((err) => (err ? reject(err) : resolve()));
    });
  }

  /**
   * Access underlying mock recording. Useful in tests to verify payloads.
   */
  getRecording(): string | undefined {
    return (this.port as unknown as { binding?: { recording?: string } }).binding?.recording;
  }
}

/**
 * Establish a default firmware connection using environment configuration.
 * The connection logs any received data for observability.
 */
export const connectFirmware = (): FirmwareConnection => {
  const path = process.env.MCU_PORT || '/dev/ttyUSB0';
  const baudRate = Number(process.env.MCU_BAUD) || 9600;
  const conn = new FirmwareConnection({ path, baudRate });
  conn.onMessage((msg) => console.log('mcu:', msg));
  return conn;
};

