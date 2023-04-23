/* eslint-disable import/no-default-export */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { ImageResponse } from '@vercel/og';

type OgProps = {
  title: string;
  cover: string | Promise<ArrayBuffer>;
  authoricon: string | Promise<ArrayBuffer>;
  authorname?: string;
  authorrole?: string;
  authorcount?: number;
};

// Local custom fonts: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
// const domain = new URL(process.env['VERCEL_URL'] ? `https://${process.env['VERCEL_URL']}` : `http://localhost:${process.env['PORT'] || 3000}`);
// const getFont = fetch(new URL('../../../core/font/NotoSansJP/NotoSansJP-Bold.woff', import.meta.url)).then((res) => res.arrayBuffer());

// For `edge` environments:
// Local static images: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
const ogTemplateImageArrayBufferPromise = fetch(new URL('../../../../public/og/og-template.png', import.meta.url)).then((res) => res.arrayBuffer());
// const coverPlaceholderImageArrayBufferPromise = fetch(new URL('../../../../public/og/cover-placeholder.png', import.meta.url)).then((res) =>
//   res.arrayBuffer(),
// );
// const authorIconPlaceholderImageArrayBufferPromise = fetch(new URL('../../../../public/og/authoricon-placeholder.png', import.meta.url)).then((res) =>
//   res.arrayBuffer(),
// );

// Static images: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
const ASSETS = {
  // TEMPLATE: 'https://ehmbxashiqmqhmqojbvs.supabase.co/storage/v1/object/public/og-image/og-template.png',
  COVER_PLACEHOLDER: 'https://ehmbxashiqmqhmqojbvs.supabase.co/storage/v1/object/public/og-image/cover-placeholder.jpg',
  COVER_ERROR: 'https://ehmbxashiqmqhmqojbvs.supabase.co/storage/v1/object/public/og-image/cover-error.jpg',
  TELESCOPE: 'https://ehmbxashiqmqhmqojbvs.supabase.co/storage/v1/object/public/og-image/telescope.png',
} as const satisfies Record<string, string>;

// Segment configs: https://beta.nextjs.org/docs/api-reference/segment-config
export const runtime = 'edge'; // TODO: Use `edge` once you have a pro plan (2MB Edge Functions)
export const dynamic = 'force-dynamic';
export const revalidate = 86400; // 1 day, since url parameters completely determine output.

// Example URL: http://localhost:3000/api/ogimage?title=%E3%81%93%E3%81%AEOG%E7%94%BB%E5%83%8F%E3%81%AFEdge%E3%81%A7%E5%8B%95%E7%9A%84%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%F0%9F%A4%AF&authorname=ReoHakase&authorrole=%E5%9C%B0%E4%B8%8A%E6%9C%80%E5%BC%B7%E3%81%AE%E6%89%8D%E8%89%B2%E5%85%BC%E5%82%99&authorcount=666&authoricon=https://avatars.githubusercontent.com/u/16751535?v=4&cover=https://images.unsplash.com/photo-1536893827774-411e1dc7c902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80

export async function GET(request: Request) {
  // Parse parameters
  const { searchParams } = new URL(request.url);
  const props: OgProps = {
    title: searchParams.get('title') || '茨城高専 天文部へようこそ',
    cover: searchParams.get('cover') || ASSETS.COVER_PLACEHOLDER,
    authoricon: searchParams.get('authoricon') || ASSETS.TELESCOPE,
    // authorname: searchParams.get('authorname') || undefined,
    // authorrole: searchParams.get('authorrole') || undefined,
    // authorcount: searchParams.get('authorcount') ? Number(searchParams.get('authorcount')) : undefined,
  };

  // Render an open graph image using Satori
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          background: '#F8F9FA', // keyplate-2
          color: '#11181C', // keyplate-12
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
          src={(await ogTemplateImageArrayBufferPromise) as unknown as string}
          style={{
            position: 'absolute',
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
            src={props.cover as unknown as string}
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
              boxShadow: 'inset 0 0 192px 64px #F8F9FA', // keyplate-2
            }}
          />
          {/* Actual cover image */}
          <img
            width={440}
            height={525}
            // `img.src` accepts ArrayBuffer as well as string
            // Refer: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
            src={props.cover as unknown as string}
            style={{
              boxShadow: '3.56672px 3.56672px 57.0675px rgba(77, 27, 117, 0.1), inset 3.56672px 3.56672px 28.5338px rgba(255, 255, 255, 0.25)',
            }}
          />
        </div>
        <p
          style={{
            margin: 0,
            padding: 0,
            position: 'absolute',
            top: 240,
            left: 76,
            width: 600,
            fontSize: 48,
            lineHeight: '120%',
            letterSpacing: '0.05em',
            textOverflow: 'ellipsis',
            lineClamp: 2,
          }}
        >
          {props.title}
        </p>
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
          <img
            width={96}
            height={96}
            // `img.src` accepts ArrayBuffer as well as string // Refer:
            // https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
            src={props.authoricon as unknown as string}
            style={{ borderRadius: '50%', border: '4px solid #F1F3F5' }}
          />
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
              }}
            >
              ReoHakase
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 24,
                color: '#687076',
              }}
            >
              テスト
            </p>
          </div>
          <p
            style={{
              margin: 0,
              padding: '24px 16px',
              background: '#ECEEF0',
              borderRadius: 999,
              fontSize: 24,
              color: '#687076',
            }}
          >
            +123名
          </p>
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
}
