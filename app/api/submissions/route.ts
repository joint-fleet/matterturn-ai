export const dynamic = "force-dynamic";
function unavailable() {
  return Response.json({ error: "Private intake is unavailable while authenticated storage is being migrated. No submission has been saved." }, { status: 503, headers: { "Cache-Control": "no-store" } });
}
export async function GET() { return unavailable(); }
export async function POST() { return unavailable(); }
