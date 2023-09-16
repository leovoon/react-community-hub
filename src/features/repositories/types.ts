import { Repository } from "../repository/types";

export interface RepositoriesResult {
  total_count?: number;
  incomplete_results?: boolean;
  items: Repository[];
}

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: Repository[];
  page: number;
  pageSize: number;
  searchQuery: string;
}

export type RepositoriesSearchParams = {
  q: string;
  order: string;
  page: number;
};

export const REPOSITORIES = "repositories";
export type REPOSITORIES = typeof REPOSITORIES;

export const GET_REPOSITORIES = `${REPOSITORIES}/getRepositoriesAction`;
export type GET_REPOSITORIES = typeof GET_REPOSITORIES;
