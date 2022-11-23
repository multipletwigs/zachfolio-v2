import { ImageResponse } from '@vercel/og';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req: NextRequest, res: NextResponse) {
  try {

    
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Hello world!
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
