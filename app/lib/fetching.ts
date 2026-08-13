// app/lib/planify.ts

export async function getTopLosers() {
  const params = new URLSearchParams({
    interval: "month",
    website: "html-widget-code.vercel.app",
    widget_id: "79d6ded6-7210-4685-a9af-fdd9521bfc79",
    path: "/",
    client_id: "e268628d-068c-48ed-a83f-235c6fc75a8e",
  });

  const response = await fetch(
    `https://marketing.planify.in/widgets/getWidgets/top-losers?${params.toString()}`,
    {
      headers: {
        Accept: "application/json",
      },

      // Important if you want fresh data on every request
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch top losers: ${response.status}`
    );
  }

  return response.json();
}