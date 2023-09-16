import { useRef, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { RepositoryItem } from "../repository/RepositoryItem";
import { SearchInput } from "./SearchInput";
import { useIntersectionObserver } from "../../common/useIntersectionObserver";
import { FloatingSearchButton } from "../../components/FloatingSearchButton";

export const RepositoryList = () => {
  const {
    data: repositories,
    loading,
    error,
  } = useAppSelector((state) => state.repositories);

  const [triggerFocus, setTriggerFocus] = useState(false);

  const ref = useRef<HTMLInputElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const searchInputIsVisible = !!entry?.isIntersecting;
  const handleSearchButtonClick = () => {
    setTriggerFocus((prev) => !prev);
  };

  return (
    <div>
      <SearchInput ref={ref} triggerFocus={triggerFocus} />
      <div>
        {loading ? (
          <div>
            <div aria-busy="true"></div>
          </div>
        ) : error ? (
          <section className="warning">Error: {error}</section>
        ) : repositories && repositories.length > 0 ? (
          repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))
        ) : (
          <section>No repositories found.</section>
        )}
      </div>
      <FloatingSearchButton
        searchInputIsVisible={searchInputIsVisible}
        onButtonClick={handleSearchButtonClick}
      />
    </div>
  );
};
