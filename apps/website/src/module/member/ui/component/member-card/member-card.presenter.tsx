import type { Member } from '@nitic-astronomy/model';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { twMerge } from '@/core/util/tw-merge.util';
import { MemberExternalLink } from '@/module/member/ui/component/member-external-link';
import { MemberIcon } from '@/module/member/ui/component/member-icon';
import SquareLightLogoImage from '@public/image/logo/square-light.png';

export type MemberCardProps = ComponentPropsWithoutRef<'div'> & Pick<Member, 'name' | 'icon' | 'role' | 'description' | 'externalLinks'>;

export const MemberCard: FC<MemberCardProps> = ({ name, icon, role, description, className, externalLinks, ...props }) => (
  <div className={twMerge('flex flex-col items-stretch gap-2 rounded-lg bg-keyplate-1 p-6 shadow-floating', className)} {...props}>
    <div className={'flex flex-row items-center gap-2.5'}>
      {icon ? (
        <MemberIcon src={icon.url} width={icon.width ?? 64} height={icon.height ?? 64} alt={`${name} のアイコン`} />
      ) : (
        <MemberIcon src={SquareLightLogoImage} placeholder="blur" alt={'デフォルトの部員アイコン'} />
      )}
      <hgroup className="flex flex-col items-start justify-center gap-0">
        <h3 className="font-bold">{name}</h3>
        {role && <p className="text-small text-keyplate-11">{role}</p>}
      </hgroup>
    </div>
    <p>{description}</p>
    <ul className="mt-2 flex w-full flex-row flex-wrap items-center justify-end gap-2">
      {externalLinks.map((link) => (
        <li key={link}>
          <MemberExternalLink href={link} />
        </li>
      ))}
    </ul>
  </div>
);
