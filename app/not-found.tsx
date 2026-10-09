import { NotFoundTerminal } from '@/components/motion/not-found/terminal';
import { NotFoundStage, NotFoundActions, NOT_FOUND_DEFAULTS } from '@/components/motion/not-found/shared';

export const metadata = {
  title: '404 - Page Not Found',
  noIndex: true,
};

export default function CustomNotFound() {
  return (
    <main className="grid place-content-center min-h-screen w-full">
    <NotFoundTerminal
      code="404"
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      homeHref="/"
      homeLabel="Back to home"
      browseHref="/#projects"
      browseLabel="Explore projects"
    />
    </main>
  );
}