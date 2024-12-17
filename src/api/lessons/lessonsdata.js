export default async function onRequest(context) {
  const { HACKCODE } = context.env;

  try {
    // Fetch the object from the R2 bucket
    const object = await HACKCODE.get('lessons_data.json');

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    // Convert the object to JSON
    const data = await object.json();

    // Return the JSON response
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data from R2:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
