import { Link } from "react-router-dom";
import { Repository } from "./types";
import {
  AiOutlineFork,
  AiFillStar,
  AiOutlineEye,
  AiFillCode,
} from "react-icons/ai";
type Props = {
  repository: Repository;
};

export const RepositoryItem = ({ repository }: Props) => {
  return (
    <article>
      <header>
        <Link to={repository.html_url}>
          <strong>{repository.name}</strong>
        </Link>
      </header>
      {repository.description ? repository.description : "No description"}
      <footer>
        <div className="grid">
          <div>
            <AiFillStar /> {repository.stargazers_count}
          </div>
          <div>
            <AiOutlineFork />: {repository.forks_count}
          </div>
          <div>
            <AiOutlineEye /> {repository.watchers}
          </div>
          {repository.language && (
            <div>
              <AiFillCode /> {repository.language}
            </div>
          )}
        </div>
      </footer>
    </article>
  );
};
