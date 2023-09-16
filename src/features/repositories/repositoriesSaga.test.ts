import { select } from "redux-saga/effects";
import { beforeAll, describe, expect, it } from "vitest";
import { getRepositoriesSaga } from "./repositoriesSaga";
import { selectRepositoriesState } from "./repositories";

describe("testing sagas", () => {
  let generator: Generator;
  beforeAll(() => {
    generator = getRepositoriesSaga();
  });

  it("should call the select searchQuery", () => {
    const expected = select(selectRepositoriesState);
    const actual = generator?.next();
    expect(actual?.value).toEqual(expected);
  });
});
