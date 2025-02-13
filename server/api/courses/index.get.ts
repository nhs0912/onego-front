import { getCourses } from '~/server/api/models/course';

export default defineEventHandler(() => {
  const courses = getCourses();
  return courses;
});
