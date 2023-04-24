import type { ComponentPropsWithoutRef, FC } from 'react';
import { RxGithubLogo, RxInstagramLogo, RxNotionLogo, RxTwitterLogo } from 'react-icons/rx';
import { Image } from '@/core/component/image';
import { Link } from '@/core/component/link';

type FooterProps = ComponentPropsWithoutRef<'footer'> & {
  isSm: boolean;
};

export const Footer: FC<FooterProps> = ({ isSm, ...props }) => (
  <footer className="flex justify-center bg-dot-pattern-light p-6 dark:bg-dot-pattern-dark" {...props}>
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 border-b-2 border-slate-light-6 pb-2 sm:flex-row sm:gap-6">
        <div className="flex flex-col gap-2 border-b-2 border-slate-light-6 pb-2 sm:border-b-0 sm:border-r-2 sm:pr-6">
          <div className="flex gap-4">
            <Image src="/image/logo/dark.svg" sizes={64} alt="天文部のロゴ" className="h-16 w-16" />
            <Image src="/image/logo/light.svg" sizes={64} alt="天文部のロゴ" className="h-16 w-16" />
          </div>
          <Link href={new URL('https://www.ibaraki-ct.ac.jp/')} target="_blank" rel="noopener noreferrer">
            <Image src="/image/logo/nitic.png" width={isSm ? 274 : 342} height={isSm ? 44 : 55} alt="茨城工業高等専門学校のロゴ" />
          </Link>
        </div>
        <ul className="flex flex-col gap-3 py-3 font-bold text-slate-light-11">
          <li className="flex items-center gap-1">
            <RxTwitterLogo />
            Twitter
            <Link href={new URL('https://twitter.com/nitic_astronomy/')} target="_blank" rel="noopener noreferrer">
              @nitic_astronomy
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxInstagramLogo />
            Instagram
            <Link href={new URL('https://www.instagram.com/nitic_astronomy/')} target="_blank" rel="noopener noreferrer">
              @nitic_astronomy
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxNotionLogo />
            Notionで
            <Link
              href={new URL('https://nitic-astronomy.notion.site/Astronomy-Club-at-NITIC-a2ada4c005d647dd866767a69570e1a2/')}
              target="_blank"
              rel="noopener noreferrer"
            >
              天文部の概要を知る
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxGithubLogo />
            GitHubで
            <Link href={new URL('https://github.com/astronomy-club-at-nitic/')} target="_blank" rel="noopener noreferrer">
              天文部の取り組みを見る
            </Link>
          </li>
        </ul>
      </div>
      <address className="py-4 text-xs font-bold text-slate-light-11">
        <p>〒312-8508 茨城県ひたちなか市中根866</p>
        <p>Tel. 029-272-5201</p>
      </address>
      <small className="w-fit rounded-full bg-slate-light-3 px-2 py-1 text-xs text-slate-light-11">Copyright © 2023 Astronomy Club at NITIC</small>
    </div>
  </footer>
);
