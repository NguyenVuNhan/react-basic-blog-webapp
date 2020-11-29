import { merge, Observable, ObservableInput, from } from "rxjs";
import { map } from "rxjs/operators";

export const actionMerge = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  O extends { [P in keyof any]: ObservableInput<any> },
  OT extends {
    [K in keyof O]: O[K] extends ObservableInput<infer V>
      ? { type: K; payload: V }
      : unknown;
  }
>(
  input: O
): Observable<OT[keyof O]> =>
  merge(
    ...Object.entries(input).map(
      ([type, stream]) =>
        from(stream).pipe(
          map((payload) => ({ type, payload } as Action))
        ) as Observable<OT[keyof O]>
    )
  );
