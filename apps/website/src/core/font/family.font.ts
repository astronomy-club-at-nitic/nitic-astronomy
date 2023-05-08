import { Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google';

// Currently, Next.js has a bug that it cannot fetch fonts from Google Fonts in development environment.
// The error message is like this:
// > AbortError: The user aborted a request.
// > ...
// > error - Failed to download `Noto Sans JP` from Google Fonts. Using fallback font instead.
// As a workaround, you can increase the timeout in node_modules/**/next/dist/compiled/@next/font/dist/google/fetch-font-file.js.
// For more details, see https://github.com/vercel/next.js/issues/45080#issuecomment-1535150448

// > After I directly modified the timeout from original 3000 to sufficient 30000 in the file noted in the error stack, it could fetch from Google Fonts successfully.
// > However of course, this is only a temporal solution since you need to edit a file inside node_modules directly.
// > IMHO, the original timeout setting (3000) is too short for especially CJK fonts, which have relatively larger file sizes.
// Refer: https://github.com/vercel/next.js/issues/45080#issuecomment-1535150448

// Related issue: https://github.com/vercel/next.js/issues/45080
// Related discussion: https://github.com/vercel/next.js/discussions/47009

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-shippori-mincho-b1',
});

export const fontFamily = [notoSansJp, shipporiMinchoB1].map((font) => font.variable).join(' ');
