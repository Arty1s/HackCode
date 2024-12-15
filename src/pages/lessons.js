import React, { useEffect, useState } from 'react';
import { useParams } from '@gatsbyjs/reach-router';

const LessonPage = () => {
  // Ensure useParams doesn't break during build
  const params = typeof window !== 'undefined' ? useParams() : {};
  const { lessontype, lessonId } = params;

  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent fetch during the build process
    if (typeof window === 'undefined') return;
    if (!lessontype || !lessonId) return;

    fetch(`/api/${lessontype}/${lessonId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch lesson");
        }
        return response.json();
      })
      .then((data) => setLesson(data))
      .catch((err) => setError(err.message));
  }, [lessontype, lessonId]);

  if (!lessontype || !lessonId) return <p>Invalid parameters provided.</p>;
  if (error) return <p>Error: {error}</p>;
  if (!lesson) return <p>Loading...</p>;

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <p><strong>Level:</strong> {lesson.level}</p>
      <p><strong>Duration:</strong> {lesson.duration} minutes</p>
      <p><strong>Tags:</strong> {lesson.tags.join(", ")}</p>
    </div>
  );
};

export default LessonPage;
