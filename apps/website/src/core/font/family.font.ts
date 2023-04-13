import { Noto_Sans_JP } from 'next/font/google';
import localFont from 'next/font/local';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const shipporiMinchoB1 = localFont({
  src: [
    {
      path: './Shippori_Mincho_B1/ShipporiMinchoB1-Regular.ttf',
      weight: '400',
    },
    {
      path: './Shippori_Mincho_B1/ShipporiMinchoB1-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-shippori-mincho-b1',
});

export const fontFamily = [notoSansJp, shipporiMinchoB1].map((font) => font.variable).join(' ');
