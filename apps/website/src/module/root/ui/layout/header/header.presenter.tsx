import type { ComponentPropsWithoutRef, FC } from 'react';
import { Image } from '@/core/component/image';
import { Link } from '@/core/component/link';
import { breakpointTokens } from '@/style/token';
import MonoDarkLogoImage from '@public/image/logo/mono-dark.png';
import MonoLightLogoImage from '@public/image/logo/mono-light.png';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({ children, ...props }) => (
  <header className="sticky top-0 z-30 flex w-full flex-col items-center justify-start bg-keyplate-1 font-bold text-keyplate-12" {...props}>
    <nav aria-label="グローバルナビゲーション" className="flex w-full max-w-md flex-row flex-nowrap items-stretch justify-center gap-6 px-6 py-3">
      <Link href="/" className="inline-flex shrink-0 items-center duration-100 hover:scale-110 hover:shadow-card">
        <Image
          src={MonoLightLogoImage}
          alt="茨城高専天文部のロゴ"
          sizes={`20vw, ${breakpointTokens.tablet.mediaQuery} 15vw, ${breakpointTokens.tablet} 10vw`}
          placeholder="blur"
          className="w-[50px] dark:hidden"
        />
        <Image
          src={MonoDarkLogoImage}
          alt="茨城高専天文部のロゴ"
          sizes={`20vw, ${breakpointTokens.tablet.mediaQuery} 15vw, ${breakpointTokens.tablet} 10vw`}
          placeholder="blur"
          className="hidden w-[50px] dark:block"
        />
      </Link>
      <ul className="flex shrink grow flex-row items-center justify-between truncate">
        <li className="inline-flex shrink truncate">
          <Link
            title="記事を見る"
            href="/article"
            className="truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11 tablet:px-4"
          >
            記事を見る
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="タグを見る"
            href="/tag"
            className="truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11 tablet:px-4"
          >
            タグを見る
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="部員紹介"
            href="/member"
            className="truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11 tablet:px-4"
          >
            部員紹介
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </header>
);
