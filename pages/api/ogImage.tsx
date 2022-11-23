import { ImageResponse } from '@vercel/og';
import { NextRequest, NextResponse } from 'next/server';

export default function handler(req: NextRequest, res: NextResponse) {
  try {

    
    return new ImageResponse(
      (
        <div
          className="w-full h-full flex align-center justify-items-center"
        >
          <p>Hello world, this is on twitter</p>
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
