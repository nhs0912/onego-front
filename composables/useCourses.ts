// import coursesData from '@/composables/coursesData';
import type { CourseWithPath } from '@/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = async (): Promise<CoursesReturn> => {
  const { data, error } = await useFetch('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    courses: data.value as CourseWithPath[],
  };

  // const courses: CourseWithPath[] = coursesData.map((item) => ({
  //   ...item,
  //   rating: item.rating.toFixed(1), // 5 -> 5.0
  //   reviewsCount: item.reviewsCount.toLocaleString(), // 1000 -> 1,000
  //   studentCount: item.studentCount.toLocaleString(), // 12345 -> 12,345
  //   path: `/course/${item.courseSlug}`,
  // }));
};
