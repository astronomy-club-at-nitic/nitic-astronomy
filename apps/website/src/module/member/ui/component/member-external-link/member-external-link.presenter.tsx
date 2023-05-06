import type { UrlObject } from 'url';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { RxGithubLogo, RxInstagramLogo, RxNotionLogo, RxTwitterLogo, RxLink2 } from 'react-icons/rx';
import { Link } from '@/core/component/link';
import { twMerge } from '@/core/util/tw-merge.util';
import { Tag } from '@/module/article/ui/component/tag/tag.presenter';

type LinkVariant = 'twitter' | 'github' | 'instagram' | 'notion' | 'other';

const extractLinkVariant = (url?: string | UrlObject): LinkVariant => {
  if (!url) return 'other';
  const urlString = typeof url === 'string' ? url : url.href;
  if (!urlString) return 'other';

  // If the url is a twitter link
  if (urlString.match(/twitter\.com/)) {
    return 'twitter';
  }
  // If the url is a github link
  if (urlString.match(/github\.com/)) {
    return 'github';
  }
  // If the url is a notion link
  if (urlString.match(/notion\.so/)) {
    return 'notion';
  }
  // If the url is a instagram link
  if (urlString.match(/instagram\.com/)) {
    return 'instagram';
  }
  // If the url is a other link
  return 'other';
};

const cropLinkDomain = (url?: string | UrlObject): string | undefined => {
  const urlObject = typeof url === 'string' ? new URL(url) : url;
  if (!urlObject || !urlObject.hostname) return undefined;
  return urlObject.hostname.replace('www.', '');
};

type MemberExternalLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'children' | 'href'> & {
  href: string;
  variant?: LinkVariant;
};

export const MemberExternalLink: FC<MemberExternalLinkProps> = ({ href, variant, className, ...props }) => {
  const resolvedVariant: LinkVariant = variant ?? extractLinkVariant(href);
  return (
    <Link
      external
      href={href}
      aria-label={`${cropLinkDomain(href)} への外部リンク`}
      className={twMerge('text-small no-underline', className)}
      {...props}
    >
      <Tag color="keyplate" className="inline-flex items-center gap-1 duration-100 hover:scale-110 hover:shadow-card">
        {resolvedVariant === 'twitter' && <RxTwitterLogo size={'1.5em'} />}
        {resolvedVariant === 'github' && <RxGithubLogo size={'1.5em'} />}
        {resolvedVariant === 'instagram' && <RxInstagramLogo size={'1.5em'} />}
        {resolvedVariant === 'notion' && <RxNotionLogo size={'1.5em'} />}
        {resolvedVariant === 'other' && (
          <>
            <RxLink2 />
            {cropLinkDomain(href)}
          </>
        )}
      </Tag>
    </Link>
  );
};
