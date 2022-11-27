import { ImageResponse } from '@vercel/og';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export default function handler(req: NextRequest, res: NextApiResponse) {
  try {
    const pageTitle = req.nextUrl.searchParams.get('pageTitle');
    const pageType = req.nextUrl.searchParams.get('pageType');

    return new ImageResponse(
      (
        // It important that this div is present.
        // It is used to calculate the width of the image.
        // This outer div needs inline styling, while the inner divs can be styled with Tailwind.
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            letterSpacing: '-.02em',
            fontWeight: 650,
            background: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)'
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 30,
                color: 'white'
              }}
            >
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 40,
              width: 'auto',
              maxWidth: 550,
              textAlign: 'center',
              backgroundColor: 'black',
              color: 'white',
              lineHeight: 1.4,
              fontWeight: 650
            }}
          >
            og/Image is hella bugged out.
          </div>
        </div>
      ),

      {
        width: 1200,
        height: 600
      }
    );
  } catch (e) {
    return new Response('Failed to generte image', { status: 500 });
  }
}

export const config = {
  runtime: 'experimental-edge'
};
