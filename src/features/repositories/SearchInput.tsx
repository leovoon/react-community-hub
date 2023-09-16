import { useEffect, forwardRef, MutableRefObject } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getRepositoriesAction,
  searchRepositoriesAction,
} from "./repositories";
import { useDebounce } from "../../common/useDebounce";

type Props = {
  triggerFocus: boolean;
};

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ triggerFocus }, ref) => {
    const inputRef = ref as MutableRefObject<HTMLInputElement>;

    const searchQuery = useAppSelector(
      (state) => state.repositories.searchQuery
    );

    const dispatch = useAppDispatch();

    const handleSearch = (event: { target: { value: string } }) => {
      dispatch(searchRepositoriesAction(event.target.value));
    };

    const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

    useEffect(() => {
      dispatch(getRepositoriesAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchQuery]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [inputRef, triggerFocus]);

    return (
      <div>
        <label htmlFor="name">Search by repository name</label>
        <input
          ref={inputRef}
          id="name"
          name="name"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    );
  }
);
