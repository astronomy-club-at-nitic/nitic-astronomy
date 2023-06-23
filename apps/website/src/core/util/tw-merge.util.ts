import { extendTailwindMerge } from 'tailwind-merge';
import type { Config as TailwindMergeConfig } from 'tailwind-merge';

export const tailwindMergeConfig: Partial<TailwindMergeConfig> = {};

export const twMerge = extendTailwindMerge(tailwindMergeConfig);
