export async function onRequest(context) {
  const { R2_BUCKET } = context.env; // Access the R2 bucket binding
  const pathParts = context.request.url.split('/').filter(Boolean); // Split the URL path

  const lessontype = pathParts[pathParts.length - 2]; // Get the [lessontype]
  const lessonId = pathParts[pathParts.length - 1]; // Get the [lesson-id]
  console.log("Request URL:", context.request.url);
  console.log("Lessontype:", lessontype);
  console.log("Lesson ID:", lessonId);

  if (!lessontype || !lessonId) {
    return new Response("Missing lessontype or lesson-id", { status: 400 });
  }

  try {
    // Fetch the JSON file for the specified lessontype
    const object = await R2_BUCKET.get(`${lessontype}.json`);
    if (!object) {
      return new Response(`No data found for lessontype: ${lessontype}`, { status: 404 });
    }

    // Parse the JSON file and find the lesson by ID
    const lessons = await object.json();
    const lesson = lessons.find((lesson) => lesson.id === lessonId);

    if (!lesson) {
      return new Response(`Lesson with ID ${lessonId} not found`, { status: 404 });
    }

    // Return the lesson data
    return new Response(JSON.stringify(lesson), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
