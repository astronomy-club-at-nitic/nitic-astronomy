import type { ComponentPropsWithoutRef, FC } from 'react';
import { Link } from '@/core/component/link';

type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = () => (
  <header className="sticky top-0 flex w-full flex-col items-center justify-center bg-keyplate-2 p-3">
    <hgroup className="text-center">
      <h1 className="my-4 text-4xl font-bold">
        <span className="rounded-full bg-primary-3 px-8 py-2 text-primary-11">Astronomy Club</span> at&nbsp;NITIC
      </h1>
      <p>
        Next 13 with <code className="bg-keyplate-3 text-keyplate-11">/app</code>{' '}
        <span className="font-bold text-teal-11">styled using Tailwind CSS</span>
      </p>
    </hgroup>
    <nav className="flex flex-row flex-wrap items-center justify-center gap-4 rounded-full bg-info-3 px-4 py-2">
      <Link className="text-info-11 underline" href="/article">
        記事を見る
      </Link>
      <Link className="text-info-11 underline" href="/tag">
        タグ一覧
      </Link>
      <Link className="text-info-11 underline" href="/member">
        部員紹介
      </Link>
    </nav>
  </header>
);
