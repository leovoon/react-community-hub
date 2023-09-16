import { BaseLayout } from "../components/BaseLayout";
import { RepositoryList } from "../features/repositories/RepositoryList";

export const HomePage = () => {
  return (
    <BaseLayout title="React Community Hub">
      <RepositoryList />
    </BaseLayout>
  );
};
