/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { ImageResponse } from '@vercel/og';
import { z } from 'zod';

const OgPropsSchema = z.object({
  title: z.string().min(1).default('茨城高専 天文部へようこそ'),
  cover: z.string().url().optional(),
  authoricon: z.string().url().optional(), // Only used when `authorname` is set
  authorname: z.string().min(1).optional(),
  authorrole: z.string().min(1).optional(), // Only used when `authorname` is set
  authorcount: z.preprocess((input) => Number(input), z.number().positive()).optional(), // Only used when `authorname` is set, and itself is greater than 1
});

// Local custom fonts: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
const getFont = fetch(new URL('../../../core/font/NotoSansJP/NotoSansJP-Bold.otf', import.meta.url)).then((res) => res.arrayBuffer());

// Local static images: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
// const getOgTemplateImage = fetch(new URL('../../../../public/og/og-template.png', import.meta.url)).then((res) => res.arrayBuffer());
// const getCoverPlaceholderImage = fetch(new URL('../../../../public/og/cover-placeholder.jpg', import.meta.url)).then((res) => res.arrayBuffer());
// const getAuthorIconPlaceholderImage = fetch(new URL('../../../../public/telescope.png', import.meta.url)).then((res) => res.arrayBuffer());
// Avoiding using cache for now since the size of edge functions is limited to 1MB
const getOgTemplateImage = Promise.resolve('/og/og-template.png');
const getCoverPlaceholderImage = Promise.resolve('/og/cover-placeholder.jpg');
const getAuthorIconPlaceholderImage = Promise.resolve('/telescope.png');

// Segment configs: https://beta.nextjs.org/docs/api-reference/segment-config
export const runtime = 'edge';
export const revalidate = 86400; // 1 day, since url parameters completely determine output.

// Example URL: http://localhost:3000/api/ogimage?title=%E3%81%93%E3%81%AEOG%E7%94%BB%E5%83%8F%E3%81%AFEdge%E3%81%A7%E5%8B%95%E7%9A%84%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%F0%9F%A4%AF&authorname=ReoHakase&authorrole=%E5%9C%B0%E4%B8%8A%E6%9C%80%E5%BC%B7%E3%81%AE%E6%89%8D%E8%89%B2%E5%85%BC%E5%82%99&authorcount=666&authoricon=https://avatars.githubusercontent.com/u/16751535?v=4&cover=https://images.unsplash.com/photo-1536893827774-411e1dc7c902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80

export async function GET(request: Request) {
  try {
    // Parse parameters
    const { searchParams } = new URL(request.url);
    const props = OgPropsSchema.parse(Object.fromEntries(searchParams.entries()));

    // Load assets (will be cached)
    const ogTemplateImage = await getOgTemplateImage;
    const coverPlaceholderImage = await getCoverPlaceholderImage;
    const authorIconPlaceholderImage = await getAuthorIconPlaceholderImage;
    const font = await getFont;

    // Define aliases
    const title = props.title.length > 32 ? `${props.title.slice(0, 31)}…` : props.title;
    const cover = props.cover || coverPlaceholderImage;
    const authoricon = props.authoricon || authorIconPlaceholderImage;
    const { authorname, authorrole, authorcount } = props;
    const shouldRenderAuthor = !!authorname;
    const shouldRenderAuthorCount = shouldRenderAuthor && !!authorcount && authorcount > 1;

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
            width={1200}
            height={640}
            // `img.src` accepts ArrayBuffer as well as string
            // Refer: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
            src={ogTemplateImage as unknown as string}
            style={{
              position: 'absolute',
              inset: 0,
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
              src={cover as unknown as string}
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
              src={cover as unknown as string}
              style={{
                boxShadow: '3.56672px 3.56672px 57.0675px rgba(77, 27, 117, 0.1), inset 3.56672px 3.56672px 28.5338px rgba(255, 255, 255, 0.25)',
              }}
            />
          </div>
          <h1
            style={{
              margin: 0,
              padding: 0,
              position: 'absolute',
              top: 240,
              left: 76,
              width: 600,
              fontSize: title.length > 18 ? 48 : 64,
              lineHeight: '120%',
              letterSpacing: '0.05em',
              textOverflow: 'ellipsis',
              lineClamp: 2,
            }}
          >
            {title}
          </h1>
          {shouldRenderAuthor && (
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
              <img width={96} height={96} src={authoricon as unknown as string} style={{ borderRadius: '50%', border: '4px solid #F1F3F5' }} />
              <hgroup
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: 32,
                  }}
                >
                  {authorname}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: 24,
                    color: '#687076',
                  }}
                >
                  {authorrole}
                </p>
              </hgroup>
              {shouldRenderAuthorCount && (
                <span
                  style={{
                    margin: 0,
                    padding: '24px 16px',
                    background: '#ECEEF0',
                    borderRadius: 999,
                    fontSize: 24,
                    color: '#687076',
                  }}
                >
                  +{authorcount}名
                </span>
              )}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 640,
        fonts: [
          {
            name: 'NotoSansJP',
            data: font,
            style: 'normal',
          },
        ],
      },
    );
  } catch (error) {
    console.error('Failed to generate an open graph image', error, request);
    return new Response(`Failed to generate an open graph image:\n ${error}`, {
      status: 500,
    });
  }
}
