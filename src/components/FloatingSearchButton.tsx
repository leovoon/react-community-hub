import { AiOutlineSearch } from "react-icons/ai";
type Props = {
  searchInputIsVisible: boolean;
  onButtonClick: () => void;
};

export const FloatingSearchButton = ({
  searchInputIsVisible,
  onButtonClick,
}: Props) => {
  if (!searchInputIsVisible) {
    return (
      <button
        style={{
          width: 50,
          height: 50,
          position: "fixed",
          right: 20,
          bottom: 20,
          display: "grid",
          placeItems: "center",
        }}
        onClick={onButtonClick}
      >
        <AiOutlineSearch />
      </button>
    );
  }
};
