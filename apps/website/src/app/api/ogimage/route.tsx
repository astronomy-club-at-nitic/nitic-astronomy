import { ImageResponse } from '@vercel/og';
import { uniCount, uniToStrPos } from 'unicount';
import { colorTokens } from '@/style/token';

// type OgProps = {
//   title: string;
//   cover?: string;
//   authoricon?: string;
//   authorname?: string;
//   authorrole?: string;
//   authorcount?: number;
// };

// Local custom fonts: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
// const domain = new URL(process.env['VERCEL_URL'] ? `https://${process.env['VERCEL_URL']}` : `http://localhost:${process.env['PORT'] || 3000}`);
// const getFont = fetch(new URL('../../../core/font/NotoSansJP/NotoSansJP-Bold.woff', import.meta.url)).then((res) => res.arrayBuffer());

// Local static images: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
const getOgTemplateImage = fetch(new URL('../../../../public/og/og-template.png', import.meta.url)).then((res) => res.arrayBuffer());
const getCoverImage = fetch(new URL('../../../../public/og/cover-astro.png', import.meta.url)).then((res) => res.arrayBuffer());
// const getCoverPlaceholderImage = fetch(new URL('../../../public/og/cover-placeholder.jpg', import.meta.url)).then((res) => res.arrayBuffer());
// const getAuthorIconPlaceholderImage = fetch(new URL('../../../public/telescope.png', import.meta.url)).then((res) => res.arrayBuffer());
// Avoiding using cache for now since the size of edge functions is limited to 1MB
// const getOgTemplateImage = Promise.resolve(new URL('/og/og-template.png', domain).href);
// const getCoverPlaceholderImage = Promise.resolve(new URL('/og/cover-placeholder.jpg', domain).href);
// const getAuthorIconPlaceholderImage = Promise.resolve(new URL('/telescope.png', domain).href);

// Segment configs:
export const runtime = 'edge';
export const revalidate = 60 * 60 * 24; // 24 hours
export const dynamic = 'force-dynamic'; // Next app router fails to recognize its dynamic `request` references for now Refer: https://github.com/vercel/next.js/issues/48701

// Example URL: http://localhost:3000/api/ogimage?title=%E3%81%93%E3%81%AEOG%E7%94%BB%E5%83%8F%E3%81%AFEdge%E3%81%A7%E5%8B%95%E7%9A%84%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%F0%9F%A4%AF&authorname=ReoHakase&authorrole=%E5%9C%B0%E4%B8%8A%E6%9C%80%E5%BC%B7%E3%81%AE%E6%89%8D%E8%89%B2%E5%85%BC%E5%82%99&authorcount=666&authoricon=https://avatars.githubusercontent.com/u/16751535?v=4&cover=https://images.unsplash.com/photo-1536893827774-411e1dc7c902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80
// http://localhost:3000/api/ogimage?title=%E2%9B%85%E6%98%8E%E6%97%A5%E3%81%AE%E7%A7%81%E3%81%AF%E4%BB%8A%E6%97%A5%E3%81%AE%E7%A7%81%E3%82%88%E3%82%8A%E3%82%82%E3%80%81%E3%81%8D%E3%81%A3%E3%81%A8%E5%84%AA%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AF%E3%81%9A%E3%81%AA%E3%81%AE%E3%81%AB%E3%80%82%E3%81%AA%E3%81%9C%E4%B8%8D%E5%AE%89%E3%81%AF%E6%8B%AD%E3%81%84%E3%81%8D%E3%82%8C%E3%81%AA%E3%81%84%E3%81%AE%EF%BC%9F

export async function GET(request: Request) {
  try {
    // Parse parameters

    // NOTE: Temporal solution for now
    // Refer: https://github.com/astronomy-club-at-nitic/nitic-astronomy/issues/112
    const { searchParams } = new URL(request.url);
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = (hasTitle && searchParams.get('title')) || '茨城高専 天文部へようこそ！';
    const displayedTitle = uniCount(title) > 32 ? `${title.slice(0, uniToStrPos(title, 31))}…` : title;

    // const { searchParams } = new URL(request.url);
    // const paramObject = Object.fromEntries(searchParams.entries());
    // const props: OgProps = {
    //   title: paramObject['title'] || '茨城高専 天文部へようこそ',
    //   cover: paramObject['cover'],
    //   authoricon: paramObject['authoricon'],
    //   authorname: paramObject['authorname'],
    //   authorrole: paramObject['authorrole'],
    //   authorcount: paramObject['authorcount'] ? Number(paramObject['authorcount']) : undefined,
    // };

    // Load assets (will be cached)
    const ogTemplateImage = await getOgTemplateImage;
    const coverImage = await getCoverImage;
    // const coverPlaceholderImage = await getCoverPlaceholderImage;
    // const authorIconPlaceholderImage = await getAuthorIconPlaceholderImage;
    // const font = await getFont;

    // Define aliases
    // const title = props.title.length > 32 ? `${props.title.slice(0, 31)}…` : props.title;
    // const cover = props.cover || coverPlaceholderImage;
    // const authoricon = props.authoricon || authorIconPlaceholderImage;
    // const { authorname, authorrole, authorcount } = props;
    // const shouldRenderAuthor = !!authorname;
    // const shouldRenderAuthorCount = shouldRenderAuthor && !!authorcount && authorcount > 1;

    // Render an open graph image using Satori
    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            background: colorTokens.keyplate.light['2'],
            color: colorTokens.keyplate.light['12'],
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"NotoSansJP"',
            fontWeight: 700,
          }}
        >
          <img
            width={480}
            height={640}
            // `img.src` accepts ArrayBuffer as well as string
            // Refer: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
            src={ogTemplateImage as unknown as string}
            style={{
              position: 'absolute',
              inset: 0,
              top: 0,
              bottom: 0,
              left: 0,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              overflow: 'visible',
              right: 64,
            }}
          >
            {/* Backdrop blur image */}
            <img
              width={440}
              height={525}
              // `img.src` accepts ArrayBuffer as well as string
              // Refer: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
              src={coverImage as unknown as string}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.4,
                filter: 'blur(192px) brightness(175%) saturate(175%) contrast(100%);',
                transform: 'scale(2)',
              }}
            />
            {/* Backdrop blur transition edge */}
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                width: 440,
                height: 525,
                inset: 0,
                background: 'transparent',
                transform: 'scale(2)',
                boxShadow: `inset 0 0 192px 64px ${colorTokens.keyplate.light['2']}`,
              }}
            />
            {/* Actual cover image */}
            <img
              width={440}
              height={525}
              // `img.src` accepts ArrayBuffer as well as string
              // Refer: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
              src={coverImage as unknown as string}
              style={{
                boxShadow: '3.56672px 3.56672px 57.0675px rgba(77, 27, 117, 0.1), inset 3.56672px 3.56672px 28.5338px rgba(255, 255, 255, 0.25)',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 241,
              left: 76,
              width: 600,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: uniCount(title) > 16 ? 48 : 64,
                lineHeight: '120%',
                letterSpacing: '0.05em',
              }}
            >
              {displayedTitle}
            </p>
          </div>

          <div
            style={{
              position: 'absolute',
              display: 'flex',
              gap: 24,
              top: 472,
              left: 76,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {/* <img
              width={96}
              height={96}
              src={'https://avatars.githubusercontent.com/u/16751535?v=4'}
              style={{ borderRadius: '50%', border: '4px solid #F1F3F5' }}
            /> */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 32,
                  color: colorTokens.primary.light['12'],
                }}
              >
                新入部員募集中！🌕🔭🌠
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 24,
                  color: colorTokens.primary.light['11'],
                }}
              >
                毎週水曜日に活動しています！
              </p>
            </div>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'normal',
                justifyContent: 'center',
                margin: 0,
                padding: '24px 16px',
                background: colorTokens.primary.light['1'],
                borderRadius: 999,
                fontSize: 24,
                color: colorTokens.primary.light['11'],
              }}
            >
              +25名
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 640,
        // fonts: [
        // {
        // name: 'NotoSansJP',
        // data: font,
        // style: 'normal',
        // },
        // ],
      },
    );
  } catch (error) {
    console.error('Failed to generate an open graph image', error, request);
    return new Response(`Failed to generate an open graph image:\n ${error}`, {
      status: 500,
    });
  }
}
