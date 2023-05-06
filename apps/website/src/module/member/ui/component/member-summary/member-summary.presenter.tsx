import type { Member } from '@nitic-astronomy/model';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { twMerge } from '@/core/util/tw-merge.util';
import { Tag } from '@/module/article/ui/component/tag/tag.presenter';
import { MemberIcon } from '@/module/member/ui/component/member-icon';
import SquareLightLogoImage from '@public/image/logo/square-light.png';

export type MemberSummaryProps = ComponentPropsWithoutRef<'li'> &
  Pick<Member, 'name' | 'icon' | 'role'> & {
    count?: number;
  };

export const MemberSummary: FC<MemberSummaryProps> = ({ name, icon, role, count, className, ...props }) => (
  <li className={twMerge('flex flex-row items-center gap-2.5', className)} {...props}>
    {icon ? (
      <MemberIcon src={icon.url} width={icon.width ?? 64} height={icon.height ?? 64} alt={`${name} のアイコン`} />
    ) : (
      <MemberIcon src={SquareLightLogoImage} placeholder="blur" alt={'デフォルトの部員アイコン'} />
    )}
    <div className="flex flex-col items-start justify-center gap-0">
      <p>{name}</p>
      {role && <p className="text-small text-keyplate-11">{role}</p>}
    </div>
    {count && (
      <Tag color="keyplate" aria-label={`著者は他にも${count}名います。`} className="text-small font-bold">
        +{count}名
      </Tag>
    )}
  </li>
);
