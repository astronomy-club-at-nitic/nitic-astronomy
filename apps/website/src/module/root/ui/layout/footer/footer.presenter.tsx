import type { ComponentPropsWithoutRef, FC } from 'react';
import { RxGithubLogo, RxInstagramLogo, RxNotionLogo, RxTwitterLogo } from 'react-icons/rx';
import { Image } from '@/core/component/image';
import { Link } from '@/core/component/link';
import NiticLogoImage from '@public/image/logo/nitic.png';
import SquareDarkLogoImage from '@public/image/logo/square-dark.png';
import SquareLightLogoImage from '@public/image/logo/square-light.png';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer: FC<FooterProps> = (props) => (
  <footer className="flex justify-center bg-dot-pattern-light p-6 dark:bg-dot-pattern-dark" {...props}>
    <div className="flex flex-col gap-2">
      <div className="sm:flex-row sm:gap-6 flex flex-col gap-2 border-b-2 border-slate-6 pb-2">
        <div className="sm:border-b-0 sm:border-r-2 sm:pr-6 flex flex-col gap-2 border-b-2 border-slate-6 pb-2">
          <div className="flex gap-4">
            <Image src={SquareDarkLogoImage} width={64} height={64} alt="天文部の暗いロゴ" placeholder="blur" className="h-16 w-16" />
            <Image src={SquareLightLogoImage} width={64} height={64} alt="天文部の明るいロゴ" placeholder="blur" className="h-16 w-16" />
          </div>
          <Link external href={new URL('https://www.ibaraki-ct.ac.jp/').href} target="_blank" rel="noopener noreferrer">
            <Image
              src={NiticLogoImage}
              // TODO: Tailwindで設定したブレイクポイントと同じものを使って指定するようにする
              sizes={'(max-width: 640px) 100vw, 40w'}
              placeholder="blur"
              alt="茨城工業高等専門学校のロゴ"
              className="sm:w-[273px] w-[342px] select-none"
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-3 py-3 font-bold text-slate-11">
          <li className="flex items-center gap-1">
            <RxTwitterLogo />
            Twitter
            <Link external href={new URL('https://twitter.com/nitic_astronomy/').href} target="_blank" rel="noopener noreferrer">
              @nitic_astronomy
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxInstagramLogo />
            Instagram
            <Link external href={new URL('https://www.instagram.com/nitic_astronomy/').href} target="_blank" rel="noopener noreferrer">
              @nitic_astronomy
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxNotionLogo />
            Notionで
            <Link
              external
              href={new URL('https://nitic-astronomy.notion.site/Astronomy-Club-at-NITIC-a2ada4c005d647dd866767a69570e1a2/').href}
              target="_blank"
              rel="noopener noreferrer"
            >
              天文部の概要を知る
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxGithubLogo />
            GitHubで
            <Link external href={new URL('https://github.com/astronomy-club-at-nitic/').href} target="_blank" rel="noopener noreferrer">
              天文部の取り組みを見る
            </Link>
          </li>
        </ul>
      </div>
      <address className="py-4 text-xs font-bold not-italic text-slate-11">
        <p>〒312-8508 茨城県ひたちなか市中根866</p>
        <p>Tel. 029-272-5201</p>
      </address>
      <small className="w-fit rounded-full bg-slate-3 px-2 py-1 text-xs text-slate-11">Copyright © 2023 Astronomy Club at NITIC</small>
    </div>
  </footer>
);
