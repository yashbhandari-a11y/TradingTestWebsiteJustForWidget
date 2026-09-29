import { NextResponse } from 'next/server';

export async function GET() {
  const params = new URLSearchParams({
    interval: 'month',
    website: 'html-widget-code.vercel.app',
    widget_id: 'd912abf9-45fc-41c3-9b47-3baa5c64ec48&path',
    path: '/',
    client_id: '4305151f-3905-4885-9f70-ea1e89b9651b',
  });
  try {
    const response = await fetch(
      `https://market-test.planify.in/widgets/getWidgets/top-gainers?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'Failed to fetch top losers',
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Top losers API error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}