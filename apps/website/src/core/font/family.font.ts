import { Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-Shippori-mincho-b1',
});

export const fontFamily = [notoSansJp, shipporiMinchoB1].map((font) => font.variable).join(' ');
