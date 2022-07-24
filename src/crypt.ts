import * as crypto from 'crypto';
import config from '../config';

export class Crypt {
  static encrypt(plainText: string) {
    const key = crypto.pbkdf2Sync(config.PASS_CRYPT.secret, Buffer.from(config.PASS_CRYPT.salt), 65536, 32, 'sha256');
    const iv = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()]);

    return Array.from(Int8Array.from(Buffer.from(encrypted)));
  }
}