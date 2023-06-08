import { tv as tvBase } from 'tailwind-variants';
import type { TV } from 'tailwind-variants';
import { tailwindMergeConfig } from './tw-merge.util';

export const tv: TV = (options, config) => {
  return tvBase(options, {
    ...config,
    twMerge: true,
    // Tailwind Variantsの型定義が依存パッケージの`tailwind-merge`にそぐわないものなので、型を強制的に上書きする
    // このIssueが解決されたら、型の上書きを削除する
    // Refer: https://github.com/nextui-org/tailwind-variants/issues/58
    twMergeConfig: tailwindMergeConfig as Required<typeof tailwindMergeConfig>,
  });
};
