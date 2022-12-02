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
            background: 'white'
          }}
        >
          
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
