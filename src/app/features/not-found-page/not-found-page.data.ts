import { NotFoundPageContent } from './not-found-page.model';

export const NOT_FOUND_PAGE_CONTENT: NotFoundPageContent = {
  label: '// ERROR',
  title: 'Page not found',
  code: 404,
  message: "The page you're looking for doesn't exist.",
  action: 'Return to homepage',
  route: '/home',
};
