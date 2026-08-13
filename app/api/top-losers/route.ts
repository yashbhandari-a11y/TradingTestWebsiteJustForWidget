import { NextResponse } from 'next/server';

export async function GET() {
  const params = new URLSearchParams({
    interval: 'month',
    website: 'html-widget-code.vercel.app',
    widget_id: '79d6ded6-7210-4685-a9af-fdd9521bfc79',
    path: '/',
    client_id: 'e268628d-068c-48ed-a83f-235c6fc75a8e',
  });

  try {
    const response = await fetch(
      `https://marketing.planify.in/widgets/getWidgets/top-losers?${params.toString()}`,
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